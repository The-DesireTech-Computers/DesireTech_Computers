import { React, useEffect, useState } from "react";
import classes from "../../Form.module.css";
import Navbar from "../../../header/Navbar";
import axios from "../../../../axiosInstance";
import { withRouter } from "react-router";
import Spinner from "../../../LoadingSpinner/LoadingSpinner";

const UpdatePreBuilt = (props) => {
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

	let handelSubmitBtn = async () => {
		console.log("Submit Buton");

		setLoading(true);

		let formData = new FormData();

		// if(thumbnail && gallery){
		// 	formData.append('thumbnail', thumbnail);
		// 	formData.append('gallery', gallery);
		// 	console.log(thumbnail);
		// 	console.log(gallery);

		// }
		// else if(thumbnail || gallery ){

		// 	if(thumbnail){
		// 		formData.append('thumbnail', thumbnail);
		// 		console.log(thumbnail);
		// 		console.log(gallery);
		// 	}
		// 	else if(gallery){
		// 		console.log(thumbnail);
		// 		console.log(gallery);

		// 		// let gal=[];

		// 		// for(let i=0; i<gallery.length; i++){
		// 		// 	gal.push(gallery[i]);
		// 		// }
		// 		// console.log("this is   ");
		// 		// console.log(gal);

		// 		formData.append('gallery', gallery);
		// 	}

		// }

		console.log(thumbnail);
		console.log(gallery);

		formData.append("title", data.title);
		formData.append("price", data.price);
		formData.append("quantity", data.quantity);
		formData.append("brand", data.Model.brand);
		formData.append("series", data.Model.series);
		formData.append("model", data.Model.model);
		formData.append("type", data.information.Type);
		formData.append("formFactor", data.information.formFactor);
		formData.append("usage", data.information.usage);
		formData.append("processor", data.information.processor);
		formData.append(
			"processorMainFeatures",
			data.information.processorMainFeatures
		);
		formData.append("cachePerProcessor", data.information.cachePerProcessor);
		formData.append("memory", data.information.memory);
		formData.append("storage", data.information.storage);
		formData.append("graphics", data.information.graphics);
		formData.append("powerSupply", data.information.powerSupply);
		formData.append("case", data.information.case);
		formData.append("coolingsystem", data.information.coolingSystem);
		formData.append("operatingSystem", data.information.operatingSystem);
		formData.append("windows", data.information.windows);
		formData.append("MotherBoard_Chipset", data.MotherBoard.chipset);
		formData.append("MotherBoard_Name", data.MotherBoard.motherBoardName);

		formData.append("CPU_Type", data.CPU.CPU_Type);
		formData.append("CPU_Speed", data.CPU.CPU_Speed);
		formData.append("L3_Cache_Per_CPU", data.CPU.L3_Cache_Per_CPU);
		formData.append("CPU_MainFeatures", data.CPU.CPU_MainFeatures);
		formData.append("GPU_Type", data.Graphics.GPU_Type);
		formData.append("VideoMemory", data.Graphics.VideoMemory);
		formData.append("VR_Ready", data.Graphics.VR_Ready);
		formData.append("Memory_Capacity", data.Memory.capacity);
		formData.append("Memory_Speed", data.Memory.speed);
		formData.append("Memory_Spec", data.Memory.spec);
		formData.append("SSD", data.Storage.SSD);
		formData.append("HDD", data.Storage.HDD);
		formData.append("OpticalDrive_Type", data.Optical_Drive.Type);
		formData.append("LAN_Speed", data.Communication.LAN_Speed);
		formData.append("WLAN", data.Communication.WLAN);
		formData.append("WIFI_Generation", data.Audio.WIFI_Generation);
		formData.append("FrontPanel_Front_USB", data.FrontPanelPorts.Front_USB);
		formData.append(
			"FrontPanel_FrontAudioPorts",
			data.FrontPanelPorts.FrontAudioPorts
		);
		formData.append("BackPanel_PS_2", data.BackPanelPorts.PS_2);
		formData.append("BackPanel_Rear_USB", data.BackPanelPorts.Rear_USB);
		formData.append(
			"BackPanel_RearAudioPorts",
			data.BackPanelPorts.RearAudioPorts
		);
		formData.append("BackPanel_Rj45", data.BackPanelPorts.Rj45);
		formData.append("BackPanel_SP_DIF", data.BackPanelPorts.SP_DIF);
		formData.append("BackPanel_VideoPort", data.BackPanelPorts.videoPort);

		formData.append("thumbnail", thumbnail);

		if (gallery) {
			for (let i = 0; i < gallery.length; i++) {
				formData.append("gallery", gallery[i]);
			}
		}

		await axios
			.put("preBuiltDesktop/" + data._id, formData)
			.then((res) => {
				console.log("product updated successfully");
				setLoading(false);
				props.history.replace("/admin-panel/manageprebuilt");
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	let form = <Spinner />;

	if (!loading) {
		form = <Spinner />;

		if (data) {
			//geting values from FormData object
			// for(var pair of formData.entries()) {
			// 	console.log(pair[0]+ ', '+ pair[1]);
			//  }

			form = (
				<div>
					<Navbar />
					<div className={classes.main1}>
						<div className={classes.inputform1}>
							<h1 className={classes.h11}>Update PreBuilt</h1>
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
										<label className={classes.label1} htmlFor="quantity">
											Quantity:
										</label>
										<br />
										<label className={classes.label1} htmlFor="brand">
											Brand:
										</label>
										<br />
										<label className={classes.label1} htmlFor="series">
											Series:
										</label>
										<br />
										<label className={classes.label1} htmlFor="model">
											Model:
										</label>
										<br />
										<label className={classes.label1} htmlFor="type">
											Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="formFactor">
											FormFactor:
										</label>
										<br />
										<label className={classes.label1} htmlFor="usage">
											Usage:
										</label>
										<br />
										<label className={classes.label1} htmlFor="processor">
											Processor:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="processorMainFeatures"
										>
											Processor Main Features:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="cachePerProcessor"
										>
											Cache Per Processor:
										</label>
										<br />
										<label className={classes.label1} htmlFor="memory">
											Memory:
										</label>
										<br />
										<label className={classes.label1} htmlFor="storage">
											Storage:
										</label>
										<br />
										<label className={classes.label1} htmlFor="graphics">
											Graphics:
										</label>
										<br />
										<label className={classes.label1} htmlFor="powerSupply">
											Power Supply:
										</label>
										<br />
										<label className={classes.label1} htmlFor="case">
											Case:
										</label>
										<br />
										<label className={classes.label1} htmlFor="coolingSystem">
											Cooling System:
										</label>
										<br />
										<label className={classes.label1} htmlFor="operatingSystem">
											Operating System:
										</label>
										<br />
										<label className={classes.label1} htmlFor="windows">
											Windows:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="MotherBoard_Chipset"
										>
											MotherBoard Chipset:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="MotherBoard_Name"
										>
											MotherBoard Name:
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
											id="type"
											name="type"
											value={data.information.Type}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														Type: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="formfactor"
											name="formfactor"
											value={data.information.formFactor}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														formFactor: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="usage"
											name="usage"
											value={data.information.usage}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														usage: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="processor"
											name="processor"
											value={data.information.processor}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														processor: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="processor_main_features"
											name="processor_main_features"
											value={data.information.processorMainFeatures}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														processorMainFeatures: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="cache_per_processor"
											name="cache_per_processor"
											value={data.information.cachePerProcessor}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														cachePerProcessor: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="memory"
											name="memory"
											value={data.information.memory}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														memory: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="storage"
											name="storage"
											value={data.information.storage}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														storage: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="graphics"
											name="graphics"
											value={data.information.graphics}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														graphics: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="power_supply"
											name="power_supply"
											value={data.information.powerSupply}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														powerSupply: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="case"
											name="case"
											value={data.information.case}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														case: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="coolingSystem"
											name="coolingSystem"
											value={data.information.coolingSystem}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														coolingSystem: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="operatingSystem"
											name="operatingSystem"
											value={data.information.operatingSystem}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														operatingSystem: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="windows"
											name="windows"
											value={data.information.windows}
											required
											onChange={(e) => {
												setData({
													...data,
													information: {
														...data.information,
														windows: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="motherboard_chipset"
											name="motherboard_chipset"
											value={data.MotherBoard.chipset}
											required
											onChange={(e) => {
												setData({
													...data,
													MotherBoard: {
														...data.MotherBoard,
														chipset: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="motherboard_name"
											name="motherboard_name"
											value={data.MotherBoard.motherBoardName}
											required
											onChange={(e) => {
												setData({
													...data,
													MotherBoard: {
														...data.MotherBoard,
														motherBoardName: e.target.value,
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
										<label className={classes.label1} htmlFor="CPU_Type">
											CPU Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="CPU_Speed">
											CPU_Speed:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="L3_Cache_Per_CPU"
										>
											L3 Cache Per CPU:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="CPU_MainFeatures"
										>
											CPU Main Features:
										</label>
										<br />
										<label className={classes.label1} htmlFor="GPU_Type">
											GPU Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="video_memory">
											Video Memory:
										</label>
										<br />
										<label className={classes.label1} htmlFor="VR_ready">
											VR Ready:
										</label>
										<br />
										<label className={classes.label1} htmlFor="Memory_Capacity">
											Memory Capacity:
										</label>
										<br />
										<label className={classes.label1} htmlFor="Memory_Speed">
											Memory Speed:
										</label>
										<br />
										<label className={classes.label1} htmlFor="Memory_Spec">
											Memory Spec:
										</label>
										<br />
										<label className={classes.label1} htmlFor="SSD">
											SSD:
										</label>
										<br />
										<label className={classes.label1} htmlFor="HDD">
											HDD:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="OpticalDrive_Type"
										>
											OpticalDrive Type:
										</label>
										<br />
										<label className={classes.label1} htmlFor="LAN_Speed">
											LAN Speed:
										</label>
										<br />
										<label className={classes.label1} htmlFor="WLAN">
											WLAN:
										</label>
										<br />
										<label className={classes.label1} htmlFor="WIFI_Generation">
											WIFI Generation:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="FrontPanel_Front_USB"
										>
											Front USB:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="FrontPanel_FrontAudioPorts"
										>
											Front Audio Ports:
										</label>
										<br />
										<label className={classes.label1} htmlFor="BackPanel_PS_2">
											BackPanel PS2:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="BackPanel_Rear_USB"
										>
											Rear USB:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="BackPanel_RearAudioPorts"
										>
											Rear Audio Ports:
										</label>
										<br />
										<label className={classes.label1} htmlFor="BackPanel_Rj45">
											Rj45:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="BackPanel_SP_DIF"
										>
											BackPanel SP DIF:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="BackPanel_VideoPort"
										>
											BackPanel VideoPort:
										</label>
										<br />
										<label className={classes.label1} htmlFor="gallery">
											Gallery:
										</label>
									</div>
									<div className={classes.row1}>
										<input
											className={classes.input1}
											type="text"
											id="CPU_Type"
											name="CPU_Type"
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
											id="CPU_Speed"
											name="CPU_Speed"
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
											id="L3_Cache_Per_CPU"
											name="L3_Cache_Per_CPU"
											value={data.CPU.L3_Cache_Per_CPU}
											required
											onChange={(e) => {
												setData({
													...data,
													CPU: {
														...data.CPU,
														L3_Cache_Per_CPU: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="CPU_MainFeatures"
											name="CPU_MainFeatures"
											value={data.CPU.CPU_MainFeatures}
											required
											onChange={(e) => {
												setData({
													...data,
													CPU: {
														...data.CPU,
														CPU_MainFeatures: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="GPU_Type"
											name="GPU_Type"
											value={data.Graphics.GPU_Type}
											required
											onChange={(e) => {
												setData({
													...data,
													Graphics: {
														...data.Graphics,
														GPU_Type: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="VideoMemory"
											name="VideoMemory"
											value={data.Graphics.VideoMemory}
											required
											onChange={(e) => {
												setData({
													...data,
													Graphics: {
														...data.Graphics,
														VideoMemory: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="VR_Ready"
											name="VR_Ready"
											value={data.Graphics.VR_Ready}
											required
											onChange={(e) => {
												setData({
													...data,
													Graphics: {
														...data.Graphics,
														VR_Ready: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="Memory_Capacity"
											name="Memory_Capacity"
											value={data.Memory.capacity}
											required
											onChange={(e) => {
												setData({
													...data,
													Memory: { ...data.Memory, capacity: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="Memory_Speed"
											name="Memory_Speed"
											value={data.Memory.speed}
											required
											onChange={(e) => {
												setData({
													...data,
													Memory: { ...data.Memory, speed: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="Memory_Spec"
											name="Memory_Spec"
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
											id="SSD"
											name="SSD"
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
											id="HDD"
											name="HDD"
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
											id="OpticalDrive_Type"
											name="OpticalDrive_Type"
											value={data.Optical_Drive.Type}
											required
											onChange={(e) => {
												setData({
													...data,
													Optical_Drive: {
														...data.Optical_Drive,
														Type: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="LAN_Speed"
											name="LAN_Speed"
											value={data.Communication.LAN_Speed}
											required
											onChange={(e) => {
												setData({
													...data,
													Communication: {
														...data.Communication,
														LAN_Speed: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="WLAN"
											name="WLAN"
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
											id="WIFI_Generation"
											name="WIFI_Generation"
											value={data.Audio.WIFI_Generation}
											required
											onChange={(e) => {
												setData({
													...data,
													Audio: {
														...data.Audio,
														WIFI_Generation: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="Front_USB"
											name="Front_USB"
											value={data.FrontPanelPorts.Front_USB}
											required
											onChange={(e) => {
												setData({
													...data,
													FrontPanelPorts: {
														...data.FrontPanelPorts,
														Front_USB: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="FrontAudioPorts"
											name="FrontAudioPorts"
											value={data.FrontPanelPorts.FrontAudioPorts}
											required
											onChange={(e) => {
												setData({
													...data,
													FrontPanelPorts: {
														...data.FrontPanelPorts,
														FrontAudioPorts: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="BackPanel_PS_2"
											name="BackPanel_PS_2"
											value={data.BackPanelPorts.PS_2}
											required
											onChange={(e) => {
												setData({
													...data,
													BackPanelPorts: {
														...data.BackPanelPorts,
														PS_2: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="Rear_USB"
											name="Rear_USB"
											value={data.BackPanelPorts.Rear_USB}
											required
											onChange={(e) => {
												setData({
													...data,
													BackPanelPorts: {
														...data.BackPanelPorts,
														Rear_USB: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="RearAudioPorts"
											name="RearAudioPorts"
											value={data.BackPanelPorts.RearAudioPorts}
											required
											onChange={(e) => {
												let RearAudioPorts = e.target.value;
												if (RearAudioPorts < 0) {
													alert("RearAudioPorts Cannot be a Negative number");
												} else if (RearAudioPorts >= 0) {
													setData({
														...data,
														BackPanelPorts: {
															...data.BackPanelPorts,
															RearAudioPorts: e.target.value,
														},
													});
												}
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="Rj45"
											name="Rj45"
											value={data.BackPanelPorts.Rj45}
											required
											onChange={(e) => {
												let Rj45 = e.target.value;
												if (Rj45 < 0) {
													alert("Rj45 Cannot be a Negative number");
												} else if (Rj45 >= 0) {
													setData({
														...data,
														BackPanelPorts: {
															...data.BackPanelPorts,
															Rj45: e.target.value,
														},
													});
												}
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="SP_DIF"
											name="SP_DIF"
											value={data.BackPanelPorts.SP_DIF}
											required
											onChange={(e) => {
												let SP_DIF = e.target.value;
												if (SP_DIF < 0) {
													alert("SP_DIF Cannot be a Negative number");
												} else if (SP_DIF >= 0) {
													setData({
														...data,
														BackPanelPorts: {
															...data.BackPanelPorts,
															SP_DIF: e.target.value,
														},
													});
												}
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="VideoPort"
											name="VideoPort"
											value={data.BackPanelPorts.videoPort}
											required
											onChange={(e) => {
												setData({
													...data,
													BackPanelPorts: {
														...data.BackPanelPorts,
														videoPort: e.target.value,
													},
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

export default withRouter(UpdatePreBuilt);
