import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const KeyboardDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("keyboard_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(data._id)) {
				cart.push(data._id);
			}

			localStorage.setItem("keyboard_cart", cart);
		} else {
			localStorage.setItem("keyboard_cart", data._id);
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
				.get("accessories/keyboard/" + id)
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
							<td>Name:</td>
							<td>{data ? data.Model.name : ""}</td>
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
							<td>Type:</td>
							<td>{data ? data.Details.Type : ""}</td>
						</tr>
						<tr>
							<td>Keyboard Interface:</td>
							<td>{data ? data.Details.keyboardInterface : ""}</td>
						</tr>
						<tr>
							<td>Design Style:</td>
							<td>{data ? data.Details.designStyle : ""}</td>
						</tr>
						<tr>
							<td>Palm Rest:</td>
							<td>{data ? data.Details.palmRest : ""}</td>
						</tr>
						<tr>
							<td>Mechanical Keyboard:</td>
							<td>{data ? data.Details.mechanicalKeyboard : ""}</td>
						</tr>
						<tr>
							<td>MotherBoard Compatibility:</td>
							<td>{data ? data.Details.MotherBoard_Compatibility : ""}</td>
						</tr>
						<tr>
							<td>Key Switch Type:</td>
							<td>{data ? data.Details.keyswitchtype : ""}</td>
						</tr>
						<tr>
							<td>Keyboard Color:</td>
							<td>{data ? data.Details.keyboardcolor : ""}</td>
						</tr>
						<tr>
							<td>Dimension:</td>
							<td>{data ? data.Details.dimension : ""}</td>
						</tr>
						<tr>
							<td>Backlit:</td>
							<td>{data ? data.Details.backlit : ""}</td>
						</tr>
						<tr>
							<th>Features</th>
							<th></th>
						</tr>
						<tr>
							<td>Feature:</td>
							<td>{data ? data.features.feature : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default KeyboardDisplay;
