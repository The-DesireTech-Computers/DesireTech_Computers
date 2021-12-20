import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const VideoCardDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("videoCard_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(data._id);

			localStorage.setItem("videoCard_cart", cart);
		} else {
			localStorage.setItem("videoCard_cart", data._id);
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
				.get("pcParts/videocard/" + id)
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
							<th>Chipset</th>
							<th></th>
						</tr>
						<tr>
							<td>Manufacturer:</td>
							<td>{data ? data.Chipset.Manufacturer : ""}</td>
						</tr>
						<tr>
							<td>GPU Series:</td>
							<td>{data ? data.Chipset.GPU_Series : ""}</td>
						</tr>
						<tr>
							<td>GPU:</td>
							<td>{data ? data.Chipset.GPU : ""}</td>
						</tr>
						<tr>
							<th>Memory</th>
							<th></th>
						</tr>
						<tr>
							<td>Effective Memory Clock:</td>
							<td>{data ? data.Memory.Effective_Memory_Clock : ""}</td>
						</tr>
						<tr>
							<td>Memory Size:</td>
							<td>{data ? data.Memory.Memory_Size : ""}</td>
						</tr>
						<tr>
							<td>Memory Interface:</td>
							<td>{data ? data.Memory.Memory_Interface : ""}</td>
						</tr>
						<tr>
							<td>Memory Type:</td>
							<td>{data ? data.Memory.Memory_Type : ""}</td>
						</tr>
						<tr>
							<th>API</th>
							<th></th>
						</tr>
						<tr>
							<td>DirectX:</td>
							<td>{data ? data.API.DirectX : ""}</td>
						</tr>
						<tr>
							<td>OpenGL:</td>
							<td>{data ? data.API.OpenGL : ""}</td>
						</tr>
						<tr>
							<th>Ports</th>
							<th></th>
						</tr>
						<tr>
							<td>HDMI:</td>
							<td>{data ? data.Ports.HDMI : ""}</td>
						</tr>
						<tr>
							<td>Display Port:</td>
							<td>{data ? data.Ports.DisplayPort : ""}</td>
						</tr>
						<tr>
							<th>Details</th>
							<th></th>
						</tr>
						<tr>
							<td>Interface:</td>
							<td>{data ? data.Interface : ""}</td>
						</tr>
						<tr>
							<td>Virtual Reality Ready:</td>
							<td>{data ? data.Details.Virtual_Reality_Ready : ""}</td>
						</tr>
						<tr>
							<td>Cooler:</td>
							<td>{data ? data.Details.Cooler : ""}</td>
						</tr>
						<tr>
							<td>System Requirments:</td>
							<td>{data ? data.Details.System_Requirments : ""}</td>
						</tr>
						<tr>
							<td>Power Connectors:</td>
							<td>{data ? data.Details.Power_Connectors : ""}</td>
						</tr>
						<tr>
							<td>Power Consumption:</td>
							<td>{data ? data.Power_Consumption : ""}</td>
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
							<td>Max GPU Length:</td>
							<td>{data ? data.Dimentions.Max_GPU_Length : ""}</td>
						</tr>
						<tr>
							<td>Card Dimentions:</td>
							<td>{data ? data.Dimentions.Card_Dimentions : ""}</td>
						</tr>
						<tr>
							<td>Slot Width:</td>
							<td>{data ? data.Dimentions.SlotWidth : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default VideoCardDisplay;
