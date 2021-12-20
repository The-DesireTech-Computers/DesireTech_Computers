import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const CPUDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("cpu_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(data._id);

			localStorage.setItem("cpu_cart", cart);
		} else {
			localStorage.setItem("cpu_cart", data._id);
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
				.get("pcParts/processor/" + id)
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
							<td>Processor:</td>
							<td>{data ? data.Model.processor : ""}</td>
						</tr>
						<tr>
							<td>name:</td>
							<td>{data ? data.Model.name : ""}</td>
						</tr>
						<tr>
							<th>Details</th>
							<th></th>
						</tr>
						<tr>
							<td>CPU Socket Type:</td>
							<td>{data ? data.Details.CPU_Socket_Type : ""}</td>
						</tr>
						<tr>
							<td>Core Name:</td>
							<td>{data ? data.Details.CoreName : ""}</td>
						</tr>
						<tr>
							<td>Number Of Cores:</td>
							<td>{data ? data.Details.NumberOfCores : ""}</td>
						</tr>
						<tr>
							<td>Number Of Threads:</td>
							<td>{data ? data.Details.NumberOfThreads : ""}</td>
						</tr>
						<tr>
							<td>Operating Frequency:</td>
							<td>{data ? data.Details.OperatingFrequency : ""}</td>
						</tr>
						<tr>
							<td>Max Frequency:</td>
							<td>{data ? data.Details.MaxFrequency : ""}</td>
						</tr>
						<tr>
							<td>Bus Speed:</td>
							<td>{data ? data.Details.BusSpeed : ""}</td>
						</tr>
						<tr>
							<td>L3 Cache:</td>
							<td>{data ? data.Details.L3_Cache : ""}</td>
						</tr>
						<tr>
							<td>Manufacturing Tech:</td>
							<td>{data ? data.Details.ManufacturingTech : ""}</td>
						</tr>
						<tr>
							<td>Bit Support:</td>
							<td>{data ? data.Details.bit_Support : ""}</td>
						</tr>
						<tr>
							<td>Hyper Threading Support:</td>
							<td>{data ? data.Details.Hyper_Threading_Support : ""}</td>
						</tr>
						<tr>
							<td>Memory Type:</td>
							<td>{data ? data.Details.MemoryType : ""}</td>
						</tr>
						<tr>
							<td>Memory Channel:</td>
							<td>{data ? data.Details.MemoryChannel : ""}</td>
						</tr>
						<tr>
							<td>Virtualization Tech Support:</td>
							<td>{data ? data.Details.Virtualization_Tech_Support : ""}</td>
						</tr>
						<tr>
							<td>Integrated Graphics:</td>
							<td>{data ? data.Details.IntegratedGraphics : ""}</td>
						</tr>
						<tr>
							<td>Graphics Base Frequency:</td>
							<td>{data ? data.Details.Graphics_Base_Frequency : ""}</td>
						</tr>
						<tr>
							<td>Graphics Max Dynamic Frequency:</td>
							<td>{data ? data.Details.Graphics_Max_Dynamic_Frequency : ""}</td>
						</tr>
						<tr>
							<td>PCI Express Revision:</td>
							<td>{data ? data.Details.PCI_Express_Revision : ""}</td>
						</tr>
						<tr>
							<td>Max Number PCI Express Lane:</td>
							<td>{data ? data.Details.Max_Number_PCI_Express_Lane : ""}</td>
						</tr>
						<tr>
							<td>Thermal Design Power:</td>
							<td>{data ? data.Details.Thermal_Design_Power : ""}</td>
						</tr>
						<tr>
							<td>Cooling Device:</td>
							<td>{data ? data.Details.CoolingDevice : ""}</td>
						</tr>
						<tr>
							<td>Power Consumption:</td>
							<td>{data ? data.Power_Consumption : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default CPUDisplay;
