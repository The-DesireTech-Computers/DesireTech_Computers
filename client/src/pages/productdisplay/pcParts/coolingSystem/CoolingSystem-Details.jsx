import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const CoolingSystemDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("coolingSystem_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(data._id)) {
				cart.push(data._id);
			}

			localStorage.setItem("coolingSystem_cart", cart);
		} else {
			localStorage.setItem("coolingSystem_cart", data._id);
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
				.get("pcParts/fans/" + id)
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
				imgpath="pcParts"
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
							<td>Type:</td>
							<td>{data ? data.Model.Type : ""}</td>
						</tr>
						<tr>
							<th>Block</th>
							<th></th>
						</tr>
						<tr>
							<td>Block Compatability:</td>
							<td>{data ? data.Block.Block_Compatability : ""}</td>
						</tr>
						<tr>
							<td>Block Dim:</td>
							<td>{data ? data.Block.Block_Dim : ""}</td>
						</tr>
						<tr>
							<td>Block Material:</td>
							<td>{data ? data.Block.Block_Material : ""}</td>
						</tr>
						<tr>
							<th>Radiator</th>
							<th></th>
						</tr>
						<tr>
							<td>Radiator Dim:</td>
							<td>{data ? data.Radiator.Radiator_Dim : ""}</td>
						</tr>
						<tr>
							<td>Radiator Material:</td>
							<td>{data ? data.Radiator.Radiator_Material : ""}</td>
						</tr>
						<tr>
							<th>Fan</th>
							<th></th>
						</tr>
						<tr>
							<td>Fan Size:</td>
							<td>{data ? data.Fan.Fan_Size : ""}</td>
						</tr>
						<tr>
							<td>Fan Dim:</td>
							<td>{data ? data.Fan.Fan_Dim : ""}</td>
						</tr>
						<tr>
							<td>Bearing Type:</td>
							<td>{data ? data.Fan.Bearing_Type : ""}</td>
						</tr>
						<tr>
							<td>Fan RPM:</td>
							<td>{data ? data.Fan.Fan_RPM : ""}</td>
						</tr>
						<tr>
							<td>Fan Air Flow:</td>
							<td>{data ? data.Fan.Fan_Air_Flow : ""}</td>
						</tr>
						<tr>
							<td>Fan Noise:</td>
							<td>{data ? data.Fan.Fan_Noise : ""}</td>
						</tr>
						<tr>
							<td>Fan Connector:</td>
							<td>{data ? data.Fan.Fan_Connector : ""}</td>
						</tr>
						<tr>
							<td>Color:</td>
							<td>{data ? data.Fan.color : ""}</td>
						</tr>
						<tr>
							<th>Tube</th>
							<th></th>
						</tr>
						<tr>
							<td>Tube Dim:</td>
							<td>{data ? data.Tube.Tube_Dim : ""}</td>
						</tr>
						<tr>
							<td>Tube Material:</td>
							<td>{data ? data.Tube.Tube_Material : ""}</td>
						</tr>
						<tr>
							<th>Features</th>
							<th></th>
						</tr>
						<tr>
							<td>Features:</td>
							<td>{data ? data.Features : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default CoolingSystemDisplay;
