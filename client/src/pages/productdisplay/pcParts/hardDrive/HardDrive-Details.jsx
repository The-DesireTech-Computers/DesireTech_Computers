import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const HardDriveDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("hardDrive_cart");

		if (cart) {
			cart = cart.split(",");
			if(!cart.includes(data._id)){
				cart.push(data._id);
			}


			localStorage.setItem("hardDrive_cart", cart);
		} else {
			localStorage.setItem("hardDrive_cart", data._id);
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
				.get("pcParts/harddrive/" + id)
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
							<td>Packing:</td>
							<td>{data ? data.Model.packing : ""}</td>
						</tr>
						<tr>
							<th>Performance</th>
							<th></th>
						</tr>
						<tr>
							<td>Interface:</td>
							<td>{data ? data.Performance.InterFace : ""}</td>
						</tr>
						<tr>
							<td>Capacity:</td>
							<td>{data ? data.Performance.Capacity : ""}</td>
						</tr>
						<tr>
							<td>RPM:</td>
							<td>{data ? data.Performance.RPM : ""}</td>
						</tr>
						<tr>
							<td>Cache:</td>
							<td>{data ? data.Performance.Cache : ""}</td>
						</tr>
						<tr>
							<td>Average_Latency:</td>
							<td>{data ? data.Performance.Average_Latency : ""}</td>
						</tr>
						<tr>
							<th>Feature</th>
							<th></th>
						</tr>
						<tr>
							<td>Feature:</td>
							<td>{data ? data.Feature.Feature : ""}</td>
						</tr>
						<tr>
							<td>Usage:</td>
							<td>{data ? data.Feature.Usage : ""}</td>
						</tr>
						<tr>
							<th>Dimentions</th>
							<th></th>
						</tr>
						<tr>
							<td>Form Factor:</td>
							<td>{data ? data.Dimentions.FormFactor : ""}</td>
						</tr>
						<tr>
							<td>Height:</td>
							<td>{data ? data.Dimentions.Height : ""}</td>
						</tr>
						<tr>
							<td>Width:</td>
							<td>{data ? data.Dimentions.Width : ""}</td>
						</tr>
						<tr>
							<td>Length:</td>
							<td>{data ? data.Dimentions.Length : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default HardDriveDisplay;
