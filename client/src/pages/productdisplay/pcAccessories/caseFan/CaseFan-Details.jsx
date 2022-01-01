import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const CaseFanDetails = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("casing_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(data._id);

			localStorage.setItem("casing_cart", cart);
		} else {
			localStorage.setItem("casing_cart", data._id);
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
				.get("pcParts/casing/" + id)
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
							<th>Quick Info</th>
							<th></th>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.Details.Type : ""}</td>
						</tr>
						<tr>
							<td>Color:</td>
							<td>{data ? data.Details.Color : ""}</td>
						</tr>
						<tr>
							<td>Casing Material:</td>
							<td>{data ? data.Details.Casing_Material : ""}</td>
						</tr>
						<tr>
							<td>With Power Supply:</td>
							<td>{data ? data.Details.With_Power_Supply : ""}</td>
						</tr>
						<tr>
							<td>Power Supply Mounted:</td>
							<td>{data ? data.Details.Power_Supply_Mounted : ""}</td>
						</tr>
						<tr>
							<td>MotherBoard Compatibility:</td>
							<td>{data ? data.Details.MotherBoard_Compatibility : ""}</td>
						</tr>
						<tr>
							<td>Side Panel Window:</td>
							<td>{data ? data.Details.Side_Panel_Window : ""}</td>
						</tr>
						<tr>
							<td>Dust Filters:</td>
							<td>{data ? data.Details.Dust_Filters : ""}</td>
						</tr>
						<tr>
							<th>Expansions</th>
							<th></th>
						</tr>
						<tr>
							<td>Internal Drive Bays 2.5:</td>
							<td>{data ? data.Expansions.Internal_Drive_bays25 : ""}</td>
						</tr>
						<tr>
							<td>Internal Drive Bays 3.5:</td>
							<td>{data ? data.Expansions.Internal_Drive_bays35 : ""}</td>
						</tr>
						<tr>
							<td>Expansion Slots:</td>
							<td>{data ? data.Expansions.Expansion_Slots : ""}</td>
						</tr>
						<tr>
							<th>Front Panel Ports</th>
							<th></th>
						</tr>
						<tr>
							<td>Front Panel Ports:</td>
							<td>{data ? data.Front_Panel_Ports : ""}</td>
						</tr>
						<tr>
							<th>Cooling System</th>
							<th></th>
						</tr>
						<tr>
							<td>Fan Options:</td>
							<td>{data ? data.Cooling_System.Fan_Options : ""}</td>
						</tr>
						<tr>
							<td>Radiator Options:</td>
							<td>{data ? data.Cooling_System.Rdiator_Options : ""}</td>
						</tr>
						<tr>
							<th>Dimentions</th>
							<th></th>
						</tr>
						<tr>
							<td>Max GPU Length:</td>
							<td>{data ? data.Dimentions.Max_GPU_Length : ""}</td>
						</tr>
						<tr>
							<td>Max CPU Cooler Length:</td>
							<td>{data ? data.Dimentions.Max_CPU_Cooler_Length : ""}</td>
						</tr>
						<tr>
							<td>Max PSU Length:</td>
							<td>{data ? data.Dimentions.Max_PSU_Length : ""}</td>
						</tr>
						<tr>
							<td>Case Dimentions:</td>
							<td>{data ? data.Dimentions.Case_Dimentions : ""}</td>
						</tr>
						<tr>
							<td>Supported Motherboard:</td>
							<td>{data ? data.Dimentions.Supported_Motherboard : ""}</td>
						</tr>
						<tr>
							<td>Weight:</td>
							<td>{data ? data.Dimentions.Weight : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default CaseFanDetails;
