import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const MonitorDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("monitor_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(data._id)) {
				cart.push(data._id);
			}

			localStorage.setItem("monitor_cart", cart);
		} else {
			localStorage.setItem("monitor_cart", data._id);
		}
		console.log(cart);
	};

	//receiving query params
	useEffect(() => {
		let params = new URLSearchParams(props.location.search);
		let id = null;

		for (let [key, value] of params) {
			id = value;
		}
		setId(id);
	}, []);

	//fetching singel element from back-end
	useEffect(() => {
		if (id) {
			axios
				.get("accessories/monitor/" + id)
				.then((res) => {
					console.log(res.data);
					setData(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);
	let footer = null;
	if (data) {
		footer = <DetailFooter id={data ? data._id : null} />;
	}

	return (
		<div className="container mt-5 detailcolor">
			<DetailHeader
				data={data}
				addToCartBtnHandler={addToCartBtnHandler}
				imgpath="accessories"
			/>
			<h3 className="cbheading">Specification:</h3>
			<div className="row mt-4 table-responsive">
				<table
					className="table table-light table-hover table-striped table-bordered"
					id="cbtable"
				>
					<thead>
						<tr>
							<th className="detailvar">Model</th>
							<th className="detaildes"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Brand:</td>
							<td>{data ? data.Model.brand : ""}</td>
						</tr>
						<tr>
							<td>Cabinet Color:</td>
							<td>{data ? data.Model.cabinetcolor : ""}</td>
						</tr>
						<tr>
							<td>Model:</td>
							<td>{data ? data.Model.model : ""}</td>
						</tr>
						<tr>
							<th>Quick Info</th>
							<th></th>
						</tr>
						<tr>
							<td>Glare Screen:</td>
							<td>{data ? data.Details.glarescreen : ""}</td>
						</tr>
						<tr>
							<td>Display Type:</td>
							<td>{data ? data.Details.displaytype : ""}</td>
						</tr>
						<tr>
							<td>Adaptive Sychronise Tech:</td>
							<td>{data ? data.Details.adaptivesychronisetech : ""}</td>
						</tr>
						<tr>
							<td>Pixel Pitch:</td>
							<td>{data ? data.Details.pixelpitch : ""}</td>
						</tr>
						<tr>
							<td>Refresh Ratio:</td>
							<td>{data ? data.Details.refreshRatio : ""}</td>
						</tr>

						<tr>
							<th>Conectivity</th>
							<th></th>
						</tr>
						<tr>
							<td>Input Video Capability:</td>
							<td>{data ? data.connectivity.inputvideocapability : ""}</td>
						</tr>
						<tr>
							<td>Connector:</td>
							<td>{data ? data.connectivity.connector : ""}</td>
						</tr>

						<tr>
							<th>Power</th>
							<th></th>
						</tr>
						<tr>
							<td>Power Supply:</td>
							<td>{data ? data.power.powersupply : ""}</td>
						</tr>
						<tr>
							<td>Power Consumption:</td>
							<td>{data ? data.power.powerconsumption : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default MonitorDisplay;
