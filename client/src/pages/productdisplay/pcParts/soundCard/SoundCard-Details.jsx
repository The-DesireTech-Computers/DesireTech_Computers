import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const SoundCardDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("soundCard_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(data._id);

			localStorage.setItem("soundCard_cart", cart);
		} else {
			localStorage.setItem("soundCard_cart", data._id);
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
				.get("pcParts/soundcard/" + id)
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
							<td>Part:</td>
							<td>{data ? data.Model.part : ""}</td>
						</tr>
						<tr>
							<th>Audio Core</th>
							<th></th>
						</tr>
						<tr>
							<td>Audio Chipset:</td>
							<td>{data ? data.Audio_Core.Audio_Chipset : ""}</td>
						</tr>
						<tr>
							<td>Sample Rate:</td>
							<td>{data ? data.Audio_Core.Sample_Rate : ""}</td>
						</tr>
						<tr>
							<td>Digital Audio:</td>
							<td>{data ? data.Audio_Core.Digital_Audio : ""}</td>
						</tr>
						<tr>
							<td>SNR:</td>
							<td>{data ? data.Audio_Core.SNR : ""}</td>
						</tr>
						<tr>
							<td>Encode:</td>
							<td>{data ? data.Audio_Core.Encode : ""}</td>
						</tr>
						<tr>
							<th>Ports</th>
							<th></th>
						</tr>
						<tr>
							<td>Line In:</td>
							<td>{data ? data.Ports.Line_In : ""}</td>
						</tr>
						<tr>
							<td>Line Out:</td>
							<td>{data ? data.Ports.Line_Out : ""}</td>
						</tr>
						<tr>
							<td>SPDIF Out:</td>
							<td>{data ? data.Ports.SPDIF_Out : ""}</td>
						</tr>
						<tr>
							<td>Other Ports:</td>
							<td>{data ? data.Ports.Other_Ports : ""}</td>
						</tr>
						<tr>
							<th>Details</th>
							<th></th>
						</tr>
						<tr>
							<td>Interface:</td>
							<td>{data ? data.Details.Interface : ""}</td>
						</tr>
						<tr>
							<td>Operating System Supported:</td>
							<td>{data ? data.Details.Operating_System_Supported : ""}</td>
						</tr>
						<tr>
							<td>System Requirments:</td>
							<td>{data ? data.Details.System_Requirments : ""}</td>
						</tr>
						<tr>
							<td>Package Contents:</td>
							<td>{data ? data.Package_Contents : ""}</td>
						</tr>
						<tr>
							<td>Dimentions:</td>
							<td>{data ? data.Dimentions : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default SoundCardDisplay;
