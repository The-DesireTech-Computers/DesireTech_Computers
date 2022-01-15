import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const CaseFanDetails = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("caseFan_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(data._id)) {
				cart.push(data._id);
			}

			localStorage.setItem("caseFan_cart", cart);
		} else {
			localStorage.setItem("caseFan_cart", data._id);
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
				.get("accessories/casefan/" + id)
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
							<td>Type:</td>
							<td>{data ? data.Details.Type : ""}</td>
						</tr>
						<tr>
							<td>Compatability:</td>
							<td>{data ? data.Details.Compatability : ""}</td>
						</tr>
						<tr>
							<td>Size:</td>
							<td>{data ? data.Details.Size : ""}</td>
						</tr>
						<tr>
							<td>Bearing Type:</td>
							<td>{data ? data.Details.BearingType : ""}</td>
						</tr>
						<tr>
							<td>RPM:</td>
							<td>{data ? data.Details.RPM : ""}</td>
						</tr>
						<tr>
							<td>AirFlow:</td>
							<td>{data ? data.Details.AirFlow : ""}</td>
						</tr>
						<tr>
							<td>Noise Level:</td>
							<td>{data ? data.Details.NoiseLvel : ""}</td>
						</tr>
						<tr>
							<td>Power Connector:</td>
							<td>{data ? data.Details.PowerConnector : ""}</td>
						</tr>
						<tr>
							<td>Color:</td>
							<td>{data ? data.Details.Color : ""}</td>
						</tr>
						<tr>
							<td>LED:</td>
							<td>{data ? data.Details.LED : ""}</td>
						</tr>
						<tr>
							<th>Features</th>
							<th></th>
						</tr>
						<tr>
							<td>Feature:</td>
							<td>{data ? data.features.feature : ""}</td>
						</tr>

						<tr>
							<th>Dimentions</th>
							<th></th>
						</tr>
						<tr>
							<td>Dimentions:</td>
							<td>{data ? data.Dimentions.Dimention : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default CaseFanDetails;
