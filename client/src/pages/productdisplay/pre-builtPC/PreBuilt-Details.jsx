import React, { useEffect, useState } from "react";
import axios from "../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../components/productDetails/DetailHeader";
import "../ProductDisplay.css";

const PreBuiltDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("preBuilt_cart");

		if (cart) {
			cart = cart.split(",");
			if(!cart.includes(data._id)){
				cart.push(data._id);
			}


			localStorage.setItem("preBuilt_cart", cart);
		} else {
			localStorage.setItem("preBuilt_cart", data._id);
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
				.get("preBuiltDesktop/" + id)
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
				imgpath="preBuiltpc"
				addToCartBtnHandler={addToCartBtnHandler}
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
							<th>Quick Info</th>
							<th></th>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.information.Type : ""}</td>
						</tr>
						<tr>
							<td>Form Factor:</td>
							<td>{data ? data.information.formFactor : ""}</td>
						</tr>
						<tr>
							<td>Usage:</td>
							<td>{data ? data.information.usage : ""}</td>
						</tr>
						<tr>
							<td>Processor:</td>
							<td>{data ? data.information.processor : ""}</td>
						</tr>
						<tr>
							<td>Processor Main Feature:</td>
							<td>{data ? data.information.processorMainFeatures : ""}</td>
						</tr>
						<tr>
							<td>Cache Per Processor:</td>
							<td>{data ? data.information.cachePerProcessor : ""}</td>
						</tr>
						<tr>
							<td>Memory:</td>
							<td>{data ? data.information.memory : ""}</td>
						</tr>
						<tr>
							<td>Storage:</td>
							<td>{data ? data.information.storage : ""}</td>
						</tr>
						<tr>
							<td>Graphics:</td>
							<td>{data ? data.information.graphics : ""}</td>
						</tr>
						<tr>
							<td>Power Supply:</td>
							<td>{data ? data.information.powerSupply : ""}</td>
						</tr>
						<tr>
							<td>Case:</td>
							<td>{data ? data.information.case : ""}</td>
						</tr>
						<tr>
							<td>Cooling System:</td>
							<td>{data ? data.information.coolingSystem : ""}</td>
						</tr>
						<tr>
							<td>Operating System:</td>
							<td>{data ? data.information.operatingSystem : ""}</td>
						</tr>
						<tr>
							<td>Windows:</td>
							<td>{data ? data.information.windows : ""}</td>
						</tr>
						<tr>
							<th>MotherBoard</th>
							<th></th>
						</tr>
						<tr>
							<td>Chipset:</td>
							<td>{data ? data.MotherBoard.chipset : ""}</td>
						</tr>
						<tr>
							<td>MotherBoard Name:</td>
							<td>{data ? data.MotherBoard.motherBoardName : ""}</td>
						</tr>
						<tr>
							<th>CPU</th>
							<th></th>
						</tr>
						<tr>
							<td>CPU Type:</td>
							<td>{data ? data.CPU.CPU_Type : ""}</td>
						</tr>
						<tr>
							<td>CPU Speed:</td>
							<td>{data ? data.CPU.CPU_Speed : ""}</td>
						</tr>
						<tr>
							<td>L3 Cache Per CPU:</td>
							<td>{data ? data.CPU.L3_Cache_Per_CPU : ""}</td>
						</tr>
						<tr>
							<td>CPU Main Features:</td>
							<td>{data ? data.CPU.CPU_MainFeatures : ""}</td>
						</tr>
						<tr>
							<th>Graphics</th>
							<th></th>
						</tr>
						<tr>
							<td>GPU Type:</td>
							<td>{data ? data.Graphics.GPU_Type : ""}</td>
						</tr>
						<tr>
							<td>Video Memory:</td>
							<td>{data ? data.Graphics.VideoMemory : ""}</td>
						</tr>
						<tr>
							<td>VR Ready:</td>
							<td>{data ? data.Graphics.VR_Ready : ""}</td>
						</tr>
						<tr>
							<th>Memory</th>
							<th></th>
						</tr>
						<tr>
							<td>Capacity:</td>
							<td>{data ? data.Memory.capacity : ""}</td>
						</tr>
						<tr>
							<td>Speed:</td>
							<td>{data ? data.Memory.speed : ""}</td>
						</tr>
						<tr>
							<td>Spec:</td>
							<td>{data ? data.Memory.spec : ""}</td>
						</tr>
						<tr>
							<th>Storage</th>
							<th></th>
						</tr>
						<tr>
							<td>SSD:</td>
							<td>{data ? data.Storage.SSD : ""}</td>
						</tr>
						<tr>
							<td>HDD:</td>
							<td>{data ? data.Storage.HDD : ""}</td>
						</tr>
						<tr>
							<th>Optical Drive</th>
							<th></th>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.Optical_Drive.Type : ""}</td>
						</tr>
						<tr>
							<th>Communication</th>
							<th></th>
						</tr>
						<tr>
							<td>LAN Speed:</td>
							<td>{data ? data.Communication.LAN_Speed : ""}</td>
						</tr>
						<tr>
							<td>WLAN:</td>
							<td>{data ? data.Communication.WLAN : ""}</td>
						</tr>
						<tr>
							<th>Audio</th>
							<th></th>
						</tr>
						<tr>
							<td>WIFI Generation:</td>
							<td>{data ? data.Audio.WIFI_Generation : ""}</td>
						</tr>
						<tr>
							<th>Front Panel Ports</th>
							<th></th>
						</tr>
						<tr>
							<td>Front USB:</td>
							<td>{data ? data.FrontPanelPorts.Front_USB : ""}</td>
						</tr>
						<tr>
							<td>Front Audio Ports:</td>
							<td>{data ? data.FrontPanelPorts.FrontAudioPorts : ""}</td>
						</tr>
						<tr>
							<th>Back Panel Ports:</th>
							<th></th>
						</tr>
						<tr>
							<td>PS 2:</td>
							<td>{data ? data.BackPanelPorts.PS_2 : ""}</td>
						</tr>
						<tr>
							<td>Video Port:</td>
							<td>{data ? data.BackPanelPorts.videoPort : ""}</td>
						</tr>
						<tr>
							<td>Rear USB:</td>
							<td>{data ? data.BackPanelPorts.Rear_USB : ""}</td>
						</tr>
						<tr>
							<td>Rj45:</td>
							<td>{data ? data.BackPanelPorts.Rj45 : ""}</td>
						</tr>
						<tr>
							<td>Rear Audio Ports:</td>
							<td>{data ? data.BackPanelPorts.RearAudioPorts : ""}</td>
						</tr>
						<tr>
							<td>SP DIF:</td>
							<td>{data ? data.BackPanelPorts.SP_DIF : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default PreBuiltDisplay;
