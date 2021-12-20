import { React, useEffect, useState } from "react";
import Navbar from "../../../header/Navbar";
import axios from "../../../../axiosInstance";
import { withRouter } from "react-router";
import Spinner from "../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";

const UpdateLaptops = (props) => {
	let [data, setData] = useState();
	let [id, setId] = useState(null);
	let [thumbnail, setThumbnail] = useState(null);
	let [gallery, setGallery] = useState(null);
	let [loading, setLoading] = useState(false);

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
					setData(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);

	let handelSubmitBtn = async () => {
		console.log("Submit Buton");

		if (data.title === "") {
			alert("Please enter data in all the given fields");
		} else if (data.price === 0 || data.price === "") {
			alert("Please enter data in all the given fields");
		} else if (data.quantity === 0 || data.quantity === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Model.model === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Model.series === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Model.brand === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Model.partNumber === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.color === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.CPU === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.screen === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.storage === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.dimentions === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.weight === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Info.otherFeatures === "") {
			alert("Please enter data in all the given fields");
		} else if (data.CPU.CPU_Type === "") {
			alert("Please enter data in all the given fields");
		} else if (data.CPU.CPU_Speed === "") {
			alert("Please enter data in all the given fields");
		} else if (data.CPU.NumberOfCores === "") {
			alert("Please enter data in all the given fields");
		} else if (data.CPU.CPU_L3_Cache === "") {
			alert("Please enter data in all the given fields");
		} else if (data.OperatingSystem.OS === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Graphics.GPU === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Graphics.videoMemory === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Graphics.GraphicsType === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Storage.SSD === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Storage.HDD === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Storage.spec === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Memory.memory === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Memory.spec === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Memory.Slot_Total === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Memory.Slot_Available === "") {
			alert("Please enter data in all the given fields");
		} else if (data.OpticalDrive.Type === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Communication.WLAN === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Communication.WiFi_Generation === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Communication.bluetooth === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Ports.USB === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Ports.HDMI === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Ports.AudioPorts === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Audio.audio === "") {
			alert("Please enter data in all the given fields");
		} else if (data.InputDevice.keyboard === "") {
			alert("Please enter data in all the given fields");
		} else if (data.InputDevice.BacklitKeyboard === "") {
			alert("Please enter data in all the given fields");
		} else if (data.InputDevice.webcam === "") {
			alert("Please enter data in all the given fields");
		} else if (data.General.style === "") {
			alert("Please enter data in all the given fields");
		} else if (data.General.Type === "") {
			alert("Please enter data in all the given fields");
		} else if (data.General.usage === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Power.AC_Adapter === "") {
			alert("Please enter data in all the given fields");
		} else if (data.Power.battery === "") {
			alert("Please enter data in all the given fields");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("partNumber", data.Model.partNumber);
			formData.append("color", data.Info.color);
			formData.append("CPU", data.Info.CPU);
			formData.append("screen", data.Info.screen);
			formData.append("storage", data.Info.storage);
			formData.append("dimentions", data.Info.dimentions);
			formData.append("weight", data.Info.weight);
			formData.append("otherFeatures", data.Info.otherFeatures);
			formData.append("CPU_Type", data.CPU.CPU_Type);
			formData.append("CPU_Speed", data.CPU.CPU_Speed);
			formData.append("NumberOfCores", data.CPU.NumberOfCores);
			formData.append("CPU_L3_Cache", data.CPU.CPU_L3_Cache);
			formData.append("ScreenSize", data.Display.ScreenSize);
			formData.append("TouchScreen", data.Display.TouchScreen);
			formData.append("WideScreenSupport", data.Display.WideScreenSupport);
			formData.append("DisplayType", data.Display.DisplayType);
			formData.append("resolution", data.Display.resolution);
			formData.append("panel", data.Display.panel);
			formData.append("colorGamut", data.Display.colorGamut);
			formData.append("LCD_Features", data.Display.LCD_Features);
			formData.append("OS", data.OperatingSystem.OS);
			formData.append("GPU", data.Graphics.GPU);
			formData.append("videoMemory", data.Graphics.videoMemory);
			formData.append("GraphicsType", data.Graphics.GraphicsType);
			formData.append("SSD", data.Storage.SSD);
			formData.append("HDD", data.Storage.HDD);
			formData.append("Storage_Spec", data.Storage.spec);
			formData.append("memory", data.Memory.memory);
			formData.append("Memory_Spec", data.Memory.spec);
			formData.append("Memory_Slot_Total", data.Memory.Slot_Total);
			formData.append("Memory_Slot_Available", data.Memory.Slot_Available);
			formData.append("OpticalDrive_Type", data.OpticalDrive.Type);
			formData.append("WLAN", data.Communication.WLAN);
			formData.append("WiFi_Generation", data.Communication.WiFi_Generation);
			formData.append("bluetooth", data.Communication.bluetooth);
			formData.append("Ports_USB", data.Ports.USB);
			formData.append("Ports_HDMI", data.Ports.HDMI);
			formData.append("Ports_AudioPorts", data.Ports.AudioPorts);
			formData.append("audio", data.Audio.audio);
			formData.append("keyboard", data.InputDevice.keyboard);
			formData.append("BacklitKeyboard", data.InputDevice.BacklitKeyboard);
			formData.append("webcam", data.InputDevice.webcam);
			formData.append("style", data.General.style);
			formData.append("type", data.General.type);
			formData.append("usage", data.General.usage);
			formData.append("AC_Adapter", data.Power.AC_Adapter);
			formData.append("battery", data.Power.battery);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("laptops/" + data._id, formData)
				.then((res) => {
					console.log("product updated successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managelaptops");
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	};

	let form = <Spinner />;

	if (!loading) {
		form = <Spinner />;

		if (data) {
			form = (
				<div>
					<Navbar />
					<div className={classes.main1}>
						<div className={classes.inputform1}>
							<h1 className={classes.h11}>Update Laptops</h1>
							<form
								className={classes.form1}
								method="put"
								encType="multipart/form-data"
							>
								<div className={classes.form21}>
									<div className={classes.row1}>
										<label className={classes.label1} htmlFor="title">
											Title:
										</label>
										<br />
										<label className={classes.label1} htmlFor="price">
											Price:
										</label>
										<br />
										<label className={classes.label1} htmlFor="brand">
											Brand:
										</label>
										<br />
										<label className={classes.label1} htmlFor="series">
											series:
										</label>
										<br />
										<label className={classes.label1} htmlFor="model">
											Model:
										</label>
										<br />
										<label className={classes.label1} htmlFor="partnumber">
											Part No:
										</label>
										<br />
										<label className={classes.label1} htmlFor="color">
											Color:
										</label>
										<br />

										<label className={classes.label1} htmlFor="cpu">
											CPU:
										</label>
										<br />
										<label className={classes.label1} htmlFor="screen">
											Screen:
										</label>
										<br />

										<label className={classes.label1} htmlFor="storage">
											Storage:
										</label>
										<br />
										<label className={classes.label1} htmlFor="dimentions">
											Dimentions:
										</label>
										<br />
										<label className={classes.label1} htmlFor="weight">
											Weight:
										</label>
										<br />
										<label className={classes.label1} htmlFor="otherfeatures">
											Other Features:
										</label>
										<br />
										<label className={classes.label1} htmlFor="cputype">
											CPU Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="cpuspeed">
											CPU Speed:
										</label>
										<br />
										<label className={classes.label1} htmlFor="numberofcores">
											Number of Cores:
										</label>
										<br />
										<label className={classes.label1} htmlFor="cpul3cache">
											CPU_L3_Cache:
										</label>
										<br />
										<label className={classes.label1} htmlFor="screensize">
											Screen Size:
										</label>
										<br />
										<label className={classes.label1} htmlFor="touchscreen">
											Touch Screen:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="widescreensupport"
										>
											WideScreen:
										</label>
										<br />
										<label className={classes.label1} htmlFor="displaytype">
											Display Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="resolution">
											Resolution:
										</label>
										<br />
										<label className={classes.label1} htmlFor="panel">
											Panel:
										</label>
										<br />
										<label className={classes.label1} htmlFor="colorgamut">
											Color Gamut:
										</label>
										<br />
										<label className={classes.label1} htmlFor="lcdfeatures">
											LCD Features:
										</label>
										<br />
										<label className={classes.label1} htmlFor="os">
											OS:
										</label>
										<br />
										<label className={classes.label1} htmlFor="thumbnail">
											Thumbnail:
										</label>
									</div>
									<div className={classes.row1}>
										<input
											className={classes.input1}
											type="text"
											id="title"
											name="title"
											value={data.title}
											required
											onChange={(e) => {
												setData({ ...data, title: e.target.value });
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="price"
											name="price"
											value={data.price}
											required
											onChange={(e) => {
												let price = e.target.value;
												if (price < 0) {
													alert("Price Cannot be a Negative number");
												} else if (price >= 0) {
													setData({ ...data, price: e.target.value });
												}
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="brand"
											name="brand"
											value={data.Model.brand}
											required
											onChange={(e) => {
												setData({
													...data,
													Model: { ...data.Model, brand: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="series"
											name="series"
											value={data.Model.series}
											required
											onChange={(e) => {
												setData({
													...data,
													Model: { ...data.Model, series: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="model"
											name="model"
											value={data.Model.model}
											required
											onChange={(e) => {
												setData({
													...data,
													Model: { ...data.Model, model: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="partnumber"
											name="partnumber"
											value={data.Model.partNumber}
											required
											onChange={(e) => {
												setData({
													...data,
													Model: { ...data.Model, partNumber: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="color"
											name="color"
											value={data.Info.color}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, color: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="cpu"
											name="cpu"
											value={data.Info.CPU}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, CPU: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="screen"
											name="screen"
											value={data.Info.screen}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, screen: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="storage"
											name="storage"
											value={data.Info.storage}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, storage: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="dimentions"
											name="dimentions"
											value={data.Info.dimentions}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, dimentions: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="weight"
											name="weight"
											value={data.Info.weight}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, weight: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="otherfeatures"
											name="otherfeatures"
											value={data.Info.otherFeatures}
											required
											onChange={(e) => {
												setData({
													...data,
													Info: { ...data.Info, otherFeatures: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="cputype"
											name="cputype"
											value={data.CPU.CPU_Type}
											required
											onChange={(e) => {
												setData({
													...data,
													CPU: { ...data.CPU, CPU_Type: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="cpuspeed"
											name="cpuspeed"
											value={data.CPU.CPU_Speed}
											required
											onChange={(e) => {
												setData({
													...data,
													CPU: { ...data.CPU, CPU_Speed: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="numberofcores"
											name="numberofcores"
											value={data.CPU.NumberOfCores}
											required
											onChange={(e) => {
												setData({
													...data,
													CPU: { ...data.CPU, NumberOfCores: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="cpul3cache"
											name="cpul3cache"
											value={data.CPU.CPU_L3_Cache}
											required
											onChange={(e) => {
												setData({
													...data,
													CPU: { ...data.CPU, CPU_L3_Cache: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="screensize"
											name="screensize"
											value={data.Display.ScreenSize}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														ScreenSize: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="touchscreen"
											name="touchscreen"
											value={data.Display.TouchScreen}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														TouchScreen: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="widescreensupport"
											name="widescreensupport"
											value={data.Display.WideScreenSupport}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														WideScreenSupport: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="displaytype"
											name="displaytype"
											value={data.Display.DisplayType}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														DisplayType: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="resolution"
											name="resolution"
											value={data.Display.resolution}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														resolution: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="panel"
											name="panel"
											value={data.Display.panel}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: { ...data.Display, panel: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="colorgamut"
											name="colorgamut"
											value={data.Display.colorGamut}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														colorGamut: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="lcdfeatures"
											name="lcdfeatures"
											value={data.Display.LCD_Features}
											required
											onChange={(e) => {
												setData({
													...data,
													Display: {
														...data.Display,
														LCD_Features: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="os"
											name="os"
											value={data.OperatingSystem.OS}
											required
											onChange={(e) => {
												setData({
													...data,
													OperatingSystem: {
														...data.OperatingSystem,
														OS: e.target.value,
													},
												});
											}}
										/>
										<br />
										<label className={classes.customfile1}>
											<input
												className={classes.inputfile1}
												type="file"
												id="thumbnail"
												name="thumbnail"
												required
												onChange={(e) => {
													setThumbnail(e.target.files[0]);
												}}
											/>
											<i className="fa fa-cloud-upload"></i> Select File
										</label>
									</div>
									<div className={classes.row1}>
										<label className={classes.label1} htmlFor="Quantity">
											Quantity:
										</label>
										<br />
										<label className={classes.label1} htmlFor="GPU">
											GPU:
										</label>
										<br />
										<label className={classes.label1} htmlFor="videomemory">
											Video Memory:
										</label>
										<br />
										<label className={classes.label1} htmlFor="graphicstype">
											Graphics Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="ssd">
											SSD:
										</label>
										<br />
										<label className={classes.label1} htmlFor="hdd">
											HDD:
										</label>
										<br />
										<label className={classes.label1} htmlFor="storagespec">
											Storage Spec:
										</label>
										<br />
										<label className={classes.label1} htmlFor="memory">
											Memory:
										</label>
										<br />
										<label className={classes.label1} htmlFor="memoryspec">
											Memory Spec:
										</label>
										<br />
										<label className={classes.label1} htmlFor="memoryslottotal">
											Memory Slot Total:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="memoryslotavailable"
										>
											Memory Slot Available:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="opticaldrivetype"
										>
											Optical Drive Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="wlan">
											WLAN:
										</label>
										<br />
										<label className={classes.label1} htmlFor="wifigeneration">
											Wifi Generation:
										</label>
										<br />
										<label className={classes.label1} htmlFor="bluetooth">
											Bluetooth:
										</label>
										<br />
										<label className={classes.label1} htmlFor="portsusb">
											USB Ports:
										</label>
										<br />
										<label className={classes.label1} htmlFor="portshdmi">
											HDMI Ports:
										</label>
										<br />
										<label className={classes.label1} htmlFor="audioports">
											Audio Ports:
										</label>
										<br />
										<label className={classes.label1} htmlFor="audio">
											Audio:
										</label>
										<br />
										<label className={classes.label1} htmlFor="keyboard">
											Keyboard:
										</label>
										<br />
										<label className={classes.label1} htmlFor="backlitkeyboard">
											BackLit Keyboard:
										</label>
										<br />
										<label className={classes.label1} htmlFor="webcam">
											Webcam:
										</label>
										<br />
										<label className={classes.label1} htmlFor="style">
											Style:
										</label>
										<br />
										<label className={classes.label1} htmlFor="type">
											Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="usage">
											Usage:
										</label>
										<br />
										<label className={classes.label1} htmlFor="acadapter">
											AC Adapter:
										</label>
										<br />
										<label className={classes.label1} htmlFor="battery">
											Battery:
										</label>
										<br />
										<label className={classes.label1} htmlFor="gallery">
											Gallery:
										</label>
									</div>
									<div className={classes.row1}>
										<input
											className={classes.input1}
											type="number"
											id="quantity"
											name="quantity"
											value={data.quantity}
											required
											onChange={(e) => {
												let quantity = e.target.value;
												if (quantity < 0) {
													alert("Quantity Cannot be a Negative number");
												} else if (quantity >= 0) {
													setData({ ...data, quantity: e.target.value });
												}
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="gpu"
											name="gpu"
											value={data.Graphics.GPU}
											required
											onChange={(e) => {
												setData({
													...data,
													Graphics: { ...data.Graphics, GPU: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="videomemory"
											name="videomemory"
											value={data.Graphics.videoMemory}
											required
											onChange={(e) => {
												setData({
													...data,
													Graphics: {
														...data.Graphics,
														videoMemory: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="graphicstype"
											name="graphicstype"
											value={data.Graphics.GraphicsType}
											required
											onChange={(e) => {
												setData({
													...data,
													Graphics: {
														...data.Graphics,
														GraphicsType: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="ssd"
											name="ssd"
											value={data.Storage.SSD}
											required
											onChange={(e) => {
												setData({
													...data,
													Storage: { ...data.Storage, SSD: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="hdd"
											name="hdd"
											value={data.Storage.HDD}
											required
											onChange={(e) => {
												setData({
													...data,
													Storage: { ...data.Storage, HDD: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="storagespec"
											name="storagespec"
											value={data.Storage.spec}
											required
											onChange={(e) => {
												setData({
													...data,
													Storage: { ...data.Storage, spec: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="memory"
											name="memory"
											value={data.Memory.memory}
											required
											onChange={(e) => {
												setData({
													...data,
													Memory: { ...data.Memory, memory: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="memoryspec"
											name="memoryspec"
											value={data.Memory.spec}
											required
											onChange={(e) => {
												setData({
													...data,
													Memory: { ...data.Memory, spec: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="memoryslottotal"
											name="memoryslottotal"
											value={data.Memory.Slot_Total}
											required
											onChange={(e) => {
												setData({
													...data,
													Memory: {
														...data.Memory,
														Slot_Total: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="memoryslotavailable"
											name="memoryslotavailable"
											value={data.Memory.Slot_Available}
											required
											onChange={(e) => {
												setData({
													...data,
													Memory: {
														...data.Memory,
														Slot_Available: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="opticaldrivetype"
											name="opticaldrivetype"
											value={data.OpticalDrive.Type}
											required
											onChange={(e) => {
												setData({
													...data,
													OpticalDrive: {
														...data.OpticalDrive,
														Type: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="wlan"
											name="wlan"
											value={data.Communication.WLAN}
											required
											onChange={(e) => {
												setData({
													...data,
													Communication: {
														...data.Communication,
														WLAN: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="wifigeneration"
											name="wifigeneration"
											value={data.Communication.WiFi_Generation}
											required
											onChange={(e) => {
												setData({
													...data,
													Communication: {
														...data.Communication,
														WiFi_Generation: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="bluetooth"
											name="bluetooth"
											value={data.Communication.bluetooth}
											required
											onChange={(e) => {
												setData({
													...data,
													Communication: {
														...data.Communication,
														bluetooth: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="portsusb"
											name="portsusb"
											value={data.Ports.USB}
											required
											onChange={(e) => {
												setData({
													...data,
													Ports: { ...data.Ports, USB: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="portshdmi"
											name="portshdmi"
											value={data.Ports.HDMI}
											required
											onChange={(e) => {
												setData({
													...data,
													Ports: { ...data.Ports, HDMI: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="audioports"
											name="audioports"
											value={data.Ports.AudioPorts}
											required
											onChange={(e) => {
												setData({
													...data,
													Ports: { ...data.Ports, AudioPorts: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="audio"
											name="audio"
											value={data.Audio.audio}
											required
											onChange={(e) => {
												setData({
													...data,
													Audio: { ...data.Audio, audio: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="keyboard"
											name="keyboard"
											value={data.InputDevice.keyboard}
											required
											onChange={(e) => {
												setData({
													...data,
													InputDevice: {
														...data.InputDevice,
														keyboard: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="backlitkeyboard"
											name="backlitkeyboard"
											value={data.InputDevice.BacklitKeyboard}
											required
											onChange={(e) => {
												setData({
													...data,
													InputDevice: {
														...data.InputDevice,
														BacklitKeyboard: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="webcam"
											name="webcam"
											value={data.InputDevice.webcam}
											required
											onChange={(e) => {
												setData({
													...data,
													InputDevice: {
														...data.InputDevice,
														webcam: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="style"
											name="style"
											value={data.General.style}
											required
											onChange={(e) => {
												setData({
													...data,
													General: { ...data.General, style: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="type"
											name="type"
											value={data.General.Type}
											required
											onChange={(e) => {
												setData({
													...data,
													General: { ...data.General, Type: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="usage"
											name="usage"
											value={data.General.usage}
											required
											onChange={(e) => {
												setData({
													...data,
													General: { ...data.General, usage: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="acadapter"
											name="acadapter"
											value={data.Power.AC_Adapter}
											required
											onChange={(e) => {
												setData({
													...data,
													Power: { ...data.Power, AC_Adapter: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="battery"
											name="battery"
											value={data.Power.battery}
											required
											onChange={(e) => {
												setData({
													...data,
													Power: { ...data.Power, battery: e.target.value },
												});
											}}
										/>
										<br />
										<label className={classes.customfile1}>
											<input
												className={classes.inputfile1}
												type="file"
												id="gallery"
												name="gallery"
												required
												multiple
												onChange={(e) => {
													let gal = e.target.files;
													if (gal.length > 6) {
														alert(
															"You can only upload maximum of 6 files in gallery"
														);
													} else {
														setGallery(gal);
													}
												}}
											/>
											<i className="fa fa-cloud-upload"></i> Select Files
										</label>
									</div>
								</div>
							</form>
							<div className={classes.btnDiv1}>
								<button className={classes.btn1} onClick={handelSubmitBtn}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

	return <div>{form}</div>;
};

export default UpdateLaptops;
