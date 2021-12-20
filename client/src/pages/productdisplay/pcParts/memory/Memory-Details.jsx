import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const MemoryDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("preBuilt_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(data._id);

			localStorage.setItem("preBuilt_cart", cart);
		} else {
			localStorage.setItem("preBuilt_cart", data._id);
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
				.get("pcParts/memory/" + id)
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
			<DetailHeader data={data} addToCartBtnHandler={addToCartBtnHandler} />
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
							<td>Series:</td>
							<td>{data ? data.Model.series : ""}</td>
						</tr>
						<tr>
							<td>Model:</td>
							<td>{data ? data.Model.model : ""}</td>
						</tr>
						<tr>
							<th>Details</th>
							<th></th>
						</tr>
						<tr>
							<td>Capacity:</td>
							<td>{data ? data.Details.Capacity : ""}</td>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.Details.Type : ""}</td>
						</tr>
						<tr>
							<td>Memory Pins:</td>
							<td>{data ? data.Details.Memory_Pins : ""}</td>
						</tr>
						<tr>
							<td>Speed:</td>
							<td>{data ? data.Details.speed : ""}</td>
						</tr>
						<tr>
							<td>CAS Latency:</td>
							<td>{data ? data.Details.CAS_Latency : ""}</td>
						</tr>
						<tr>
							<td>Timing:</td>
							<td>{data ? data.Details.timing : ""}</td>
						</tr>
						<tr>
							<td>Voltage:</td>
							<td>{data ? data.Details.voltage : ""}</td>
						</tr>
						<tr>
							<td>ECC:</td>
							<td>{data ? data.Details.ECC : ""}</td>
						</tr>
						<tr>
							<td>Buffered:</td>
							<td>{data ? data.Details.Buffered : ""}</td>
						</tr>
						<tr>
							<td>Multi Channel Kit:</td>
							<td>{data ? data.Details.Multi_Channel_kit : ""}</td>
						</tr>
						<tr>
							<td>Chipset:</td>
							<td>{data ? data.Details.chipset : ""}</td>
						</tr>
						<tr>
							<td>Color:</td>
							<td>{data ? data.Details.color : ""}</td>
						</tr>
						<tr>
							<td>Heat Spreader:</td>
							<td>{data ? data.Details.HeatSpreader : ""}</td>
						</tr>
						<tr>
							<td>Features:</td>
							<td>{data ? data.Details.features : ""}</td>
						</tr>
						<tr>
							<td>Recommend Use:</td>
							<td>{data ? data.Details.recommendUse : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default MemoryDisplay;
