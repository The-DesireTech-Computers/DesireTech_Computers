import React, { useEffect, useState } from "react";
import axios from "../../../axiosInstance/axiosInstance";
import DetailFooter from "../../../components/productDetails/DetailFooter";
import DetailHeader from "../../../components/productDetails/DetailHeader";
import "../ProductDisplay.css";

const LaptopDisplay = (props) => {
	let [id, setId] = useState();
	let [data, setData] = useState();

	let addToCartBtnHandler = () => {
		let cart = localStorage.getItem("laptops_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(data._id);

			localStorage.setItem("laptops_cart", cart);
		} else {
			localStorage.setItem("laptops_cart", data._id);
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
				.get("laptops/" + id)
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
				imgpath="laptops"
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
							<td>Part Number:</td>
							<td>{data ? data.Model.partNumber : ""}</td>
						</tr>
						<tr>
							<th>Quick Info</th>
							<th></th>
						</tr>
						<tr>
							<td>Color:</td>
							<td>{data ? data.Info.color : ""}</td>
						</tr>
						<tr>
							<td>CPU:</td>
							<td>{data ? data.Info.CPU : ""}</td>
						</tr>
						<tr>
							<td>Screen:</td>
							<td>{data ? data.Info.screen : ""}</td>
						</tr>
						<tr>
							<td>Storage:</td>
							<td>{data ? data.Info.storage : ""}</td>
						</tr>
						<tr>
							<td>Dimentions:</td>
							<td>{data ? data.Info.dimentions : ""}</td>
						</tr>
						<tr>
							<td>Weight:</td>
							<td>{data ? data.Info.weight : ""}</td>
						</tr>
						<tr>
							<td>Other Features:</td>
							<td>{data ? data.Info.otherFeatures : ""}</td>
						</tr>
						<tr>
							<th>CPU</th>
							<th></th>
						</tr>
						<tr>
							<td>Screen Size:</td>
							<td>{data ? data.Display.ScreenSize : ""}</td>
						</tr>
						<tr>
							<td>Touch Screen:</td>
							<td>{data ? data.Display.TouchScreen : ""}</td>
						</tr>
						<tr>
							<td>WideScreen Support:</td>
							<td>{data ? data.Display.WideScreenSupport : ""}</td>
						</tr>
						<tr>
							<td>Display Type:</td>
							<td>{data ? data.Display.DisplayType : ""}</td>
						</tr>
						<tr>
							<td>Resolution:</td>
							<td>{data ? data.Display.resolution : ""}</td>
						</tr>
						<tr>
							<td>Panel:</td>
							<td>{data ? data.Display.panel : ""}</td>
						</tr>
						<tr>
							<td>Color Gamut:</td>
							<td>{data ? data.Display.colorGamut : ""}</td>
						</tr>
						<tr>
							<td>LCD Features:</td>
							<td>{data ? data.Display.LCD_Features : ""}</td>
						</tr>
						<tr>
							<th>Operating System</th>
							<th></th>
						</tr>
						<tr>
							<td>OS:</td>
							<td>{data ? data.OperatingSystem.OS : ""}</td>
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
							<td>Number of Cores:</td>
							<td>{data ? data.CPU.NumberOfCores : ""}</td>
						</tr>
						<tr>
							<td>CPU L3 Cache:</td>
							<td>{data ? data.CPU.CPU_L3_Cache : ""}</td>
						</tr>
						<tr>
							<th>Graphics</th>
							<th></th>
						</tr>
						<tr>
							<td>GPU:</td>
							<td>{data ? data.Graphics.GPU : ""}</td>
						</tr>
						<tr>
							<td>Video Memory:</td>
							<td>{data ? data.Graphics.VideoMemory : ""}</td>
						</tr>
						<tr>
							<td>Graphics Type:</td>
							<td>{data ? data.Graphics.GraphicsType : ""}</td>
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
							<td>Spec:</td>
							<td>{data ? data.Storage.spec : ""}</td>
						</tr>
						<tr>
							<th>Memory</th>
							<th></th>
						</tr>
						<tr>
							<td>Memory:</td>
							<td>{data ? data.Memory.memory : ""}</td>
						</tr>
						<tr>
							<td>Slot Total:</td>
							<td>{data ? data.Memory.Slot_Total : ""}</td>
						</tr>
						<tr>
							<td>Slot Available:</td>
							<td>{data ? data.Memory.Slot_Available : ""}</td>
						</tr>
						<tr>
							<td>Spec:</td>
							<td>{data ? data.Memory.spec : ""}</td>
						</tr>
						<tr>
							<th>Optical Drive</th>
							<th></th>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.OpticalDrive.Type : ""}</td>
						</tr>
						<tr>
							<th>Communication</th>
							<th></th>
						</tr>
						<tr>
							<td>WLAN:</td>
							<td>{data ? data.Communication.WLAN : ""}</td>
						</tr>
						<tr>
							<td>Wifi Generation:</td>
							<td>{data ? data.Communication.Wifi_Generation : ""}</td>
						</tr>
						<tr>
							<td>Bluetooth:</td>
							<td>{data ? data.Communication.bluetooth : ""}</td>
						</tr>
						<tr>
							<th>Ports</th>
							<th></th>
						</tr>
						<tr>
							<td>USB:</td>
							<td>{data ? data.Ports.USB : ""}</td>
						</tr>
						<tr>
							<td>HDMI:</td>
							<td>{data ? data.Ports.HDMI : ""}</td>
						</tr>
						<tr>
							<td>Audio Ports:</td>
							<td>{data ? data.Ports.AudioPorts : ""}</td>
						</tr>
						<tr>
							<th>Audio</th>
							<th></th>
						</tr>
						<tr>
							<td>Audio:</td>
							<td>{data ? data.Audio.audio : ""}</td>
						</tr>
						<tr>
							<th>Input Device</th>
							<th></th>
						</tr>
						<tr>
							<td>Keyboard:</td>
							<td>{data ? data.InputDevice.keyboard : ""}</td>
						</tr>
						<tr>
							<td>Backlit Keyboard:</td>
							<td>{data ? data.InputDevice.BacklitKeyboard : ""}</td>
						</tr>
						<tr>
							<td>Webcam:</td>
							<td>{data ? data.InputDevice.webcam : ""}</td>
						</tr>
						<tr>
							<th>General</th>
							<th></th>
						</tr>
						<tr>
							<td>Style:</td>
							<td>{data ? data.General.style : ""}</td>
						</tr>
						<tr>
							<td>Type:</td>
							<td>{data ? data.General.Type : ""}</td>
						</tr>
						<tr>
							<td>Usage:</td>
							<td>{data ? data.General.usage : ""}</td>
						</tr>
						<tr>
							<th>Power</th>
							<th></th>
						</tr>
						<tr>
							<td>AC Adapter:</td>
							<td>{data ? data.Power.AC_Adapter : ""}</td>
						</tr>
						<tr>
							<td>Battery:</td>
							<td>{data ? data.Power.battery : ""}</td>
						</tr>
					</tbody>
				</table>
			</div>
			{footer}
		</div>
	);
};

export default LaptopDisplay;
