import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const PSUDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("psu_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(data._id)) {
				cart.push(data._id);
			}

			localStorage.setItem("psu_cart", cart);
		} else {
			localStorage.setItem("psu_cart", data._id);
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
				.get("pcParts/psu/" + id)
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
							<th>Details</th>
							<th></th>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.Details.Type : ""}</td>
						</tr>
						<tr>
							<td>Maximum Power:</td>
							<td>{data ? data.Details.Maximum_Power : ""}</td>
						</tr>
						<tr>
							<td>Fans:</td>
							<td>{data ? data.Details.Fans : ""}</td>
						</tr>
						<tr>
							<td>PFC:</td>
							<td>{data ? data.Details.PFC : ""}</td>
						</tr>
						<tr>
							<td>Main Connectors:</td>
							<td>{data ? data.Details.Main_Connectors : ""}</td>
						</tr>
						<tr>
							<td>Rails:</td>
							<td>{data ? data.Details.Rails : ""}</td>
						</tr>
						<tr>
							<td>PCI Express Connector:</td>
							<td>{data ? data.Details.PCI_Express_Connector : ""}</td>
						</tr>
						<tr>
							<td>SATA Power Connector:</td>
							<td>{data ? data.Details.SATA_Power_Connector : ""}</td>
						</tr>
						<tr>
							<td>SLI:</td>
							<td>{data ? data.Details.SLI : ""}</td>
						</tr>
						<tr>
							<td>Haswell Support:</td>
							<td>{data ? data.Details.Haswell_Support : ""}</td>
						</tr>
						<tr>
							<td>Crossfire:</td>
							<td>{data ? data.Details.CrossFire : ""}</td>
						</tr>
						<tr>
							<td>Modular:</td>
							<td>{data ? data.Details.Modular : ""}</td>
						</tr>
						<tr>
							<td>Energy Efficient:</td>
							<td>{data ? data.Details.Energy_Efficent : ""}</td>
						</tr>
						<tr>
							<td>Input Voltage:</td>
							<td>{data ? data.Details.Input_Voltage : ""}</td>
						</tr>
						<tr>
							<td>Input Frequency Range:</td>
							<td>{data ? data.Details.Input_Frequency_Range : ""}</td>
						</tr>
						<tr>
							<td>Input Current:</td>
							<td>{data ? data.Details.Input_Current : ""}</td>
						</tr>
						<tr>
							<td>Output:</td>
							<td>{data ? data.Details.Output : ""}</td>
						</tr>
						<tr>
							<td>Dimentions:</td>
							<td>{data ? data.Details.Dimentions : ""}</td>
						</tr>
						<tr>
							<td>Max PSU Length:</td>
							<td>{data ? data.Details.Max_PSU_Length : ""}</td>
						</tr>
						<tr>
							<td>Weight:</td>
							<td>{data ? data.Details.Weight : ""}</td>
						</tr>
						<tr>
							<th>Features</th>
							<th></th>
						</tr>
						<tr>
							<td>Connectors:</td>
							<td>{data ? data.Features.Connectors : ""}</td>
						</tr>
						<tr>
							<td>Features:</td>
							<td>{data ? data.Features.Features : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default PSUDisplay;
