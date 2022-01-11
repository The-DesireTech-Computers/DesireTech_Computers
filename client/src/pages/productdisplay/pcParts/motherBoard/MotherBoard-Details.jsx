import React, { useEffect, useState } from "react";
import axios from "../../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../../components/productDetails/DetailHeader";
import "../../ProductDisplay.css";

const MotherBoardDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("motherBoard_cart");

		if (cart) {
			cart = cart.split(",");
			if(!cart.includes(data._id)){
				cart.push(data._id);
			}


			localStorage.setItem("motherBoard_cart", cart);
		} else {
			localStorage.setItem("motherBoard_cart", data._id);
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
				.get("pcParts/motherboard/" + id)
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
							<td>Model:</td>
							<td>{data ? data.Model.model : ""}</td>
						</tr>
						<tr>
							<th>Supported CPU</th>
							<th></th>
						</tr>
						<tr>
							<td>CPU Socket Type:</td>
							<td>{data ? data.Supported_CPU.CPU_Socket_Type : ""}</td>
						</tr>
						<tr>
							<td>CPU Type:</td>
							<td>{data ? data.Supported_CPU.CPU_Type : ""}</td>
						</tr>
						<tr>
							<th>Chipset</th>
							<th></th>
						</tr>
						<tr>
							<td>Chipset:</td>
							<td>{data ? data.Chipset : ""}</td>
						</tr>
						<tr>
							<td>Onboard Video Chipset:</td>
							<td>{data ? data.Onboard_Video_Chipset : ""}</td>
						</tr>
						<tr>
							<th>Memory</th>
							<th></th>
						</tr>
						<tr>
							<td>Memory Pins:</td>
							<td>{data ? data.Memory.Memory_Pins : ""}</td>
						</tr>
						<tr>
							<td>Number of Memory Slots:</td>
							<td>{data ? data.Memory.Number_Of_Memory_Slots : ""}</td>
						</tr>
						<tr>
							<td>Memory Standard:</td>
							<td>{data ? data.Memory.Memory_Standard : ""}</td>
						</tr>
						<tr>
							<td>Maximum Memory Supported:</td>
							<td>{data ? data.Memory.Maximum_Memory_Supported : ""}</td>
						</tr>
						<tr>
							<td>Channel Supported:</td>
							<td>{data ? data.Memory.Channel_Supported : ""}</td>
						</tr>
						<tr>
							<th>Expansion Slots</th>
							<th></th>
						</tr>
						<tr>
							<td>PCI Express:</td>
							<td>{data ? data.Expansion_Slots.PCI_Express : ""}</td>
						</tr>
						<tr>
							<th>Storage Device</th>
							<th></th>
						</tr>
						<tr>
							<td>SATA 6GBs:</td>
							<td>{data ? data.Storage_Device.SATA_6GBs : ""}</td>
						</tr>
						<tr>
							<td>M2:</td>
							<td>{data ? data.Storage_Device.M2 : ""}</td>
						</tr>
						<tr>
							<th>Onboard Audio</th>
							<th></th>
						</tr>
						<tr>
							<td>Audio Chipset:</td>
							<td>{data ? data.Onboard_Audio.Audio_Chipset : ""}</td>
						</tr>
						<tr>
							<td>Audio Channels:</td>
							<td>{data ? data.Onboard_Audio.Audio_Channels : ""}</td>
						</tr>
						<tr>
							<th>Onboard LAN</th>
							<th></th>
						</tr>
						<tr>
							<td>LAN Chipset:</td>
							<td>{data ? data.Onboard_LAN.LAN_Chipset : ""}</td>
						</tr>
						<tr>
							<td>Max LAN Speed:</td>
							<td>{data ? data.Onboard_LAN.Max_LAN_Speed : ""}</td>
						</tr>
						<tr>
							<td>Wireless LAN:</td>
							<td>{data ? data.Onboard_LAN.Wireless_LAN : ""}</td>
						</tr>
						<tr>
							<td>Bluetooth:</td>
							<td>{data ? data.Onboard_LAN.Bluetooth : ""}</td>
						</tr>
						<tr>
							<th>Internal IO Connectors</th>
							<th></th>
						</tr>
						<tr>
							<td>Onboard USB:</td>
							<td>{data ? data.Internal_IO_Connectors.Onboard_USB : ""}</td>
						</tr>
						<tr>
							<td>Other Connectors:</td>
							<td>
								{data ? data.Internal_IO_Connectors.Other_Connectors : ""}
							</td>
						</tr>
						<tr>
							<th>Physical Spec</th>
							<th></th>
						</tr>
						<tr>
							<td>Form Factor:</td>
							<td>{data ? data.Physical_Spec.Form_Factor : ""}</td>
						</tr>
						<tr>
							<td>LED Lighting:</td>
							<td>{data ? data.Physical_Spec.LED_Lighting : ""}</td>
						</tr>
						<tr>
							<td>Dimentions:</td>
							<td>{data ? data.Physical_Spec.Dimentions : ""}</td>
						</tr>
						<tr>
							<td>Power Pin:</td>
							<td>{data ? data.Physical_Spec.Power_Pin : ""}</td>
						</tr>
						<tr>
							<th>Other Features</th>
							<th></th>
						</tr>
						<tr>
							<td>Rear Panel Ports:</td>
							<td>{data ? data.Rear_Panel_Ports : ""}</td>
						</tr>
						<tr>
							<td>Windows:</td>
							<td>{data ? data.Windows : ""}</td>
						</tr>
						<tr>
							<td>Features:</td>
							<td>{data ? data.Features : ""}</td>
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

export default MotherBoardDisplay;
