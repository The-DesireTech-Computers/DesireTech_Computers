import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";

import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateProcessor = (props) => {
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
				.get("pcParts/processor/" + id)
				.then((res) => {
					setData(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);

	let handelSubmitBtn = async () => {
		console.log(data);

		if (data.title === "") {
			alert("Please enter data in all the given fields  (title)");
		} else if (data.price === 0 || data.price === "") {
			alert("Please enter data in all the given fields  (price)");
		} else if (data.quantity === 0 || data.quantity === "") {
			alert("Please enter data in all the given fields (quantity)");
		} else if (data.Model.brand === "") {
			alert("Please enter data in all the given fields(brand)");
		} else if (data.Model.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.Model.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.Model.name === "") {
			alert("Please enter data in all the given fields (name)");
		} else if (data.Details.processorType === "") {
			alert("Please enter data in all the given fields(processorType)");
		} else if (data.Details.CPU_Socket_Type === "") {
			alert("Please enter data in all the given fields(CPU_Socket_Type)");
		} else if (data.Details.CoreName === "") {
			alert("Please enter data in all the given fields (CoreName)");
		} else if (data.Details.NumberOfCores === "") {
			alert("Please enter data in all the given fields (NumberOfCores)");
		} else if (data.Details.NumberOfThreads === "") {
			alert("Please enter data in all the given fields (NumberOfThreads)");
		} else if (data.Details.OperatingFrequency === "") {
			alert("Please enter data in all the given fields (OperatingFrequency)");
		} else if (data.Details.MaxFrequency === "") {
			alert("Please enter data in all the given fields  (MaxFrequency)");
		} else if (data.Details.BusSpeed === "") {
			alert("Please enter data in all the given fields  (BusSpeed)");
		} else if (data.Details.L3_Cache === "") {
			alert("Please enter data in all the given fields (L3_Cache)");
		} else if (data.Details.ManufacturingTech === "") {
			alert("Please enter data in all the given fields (ManufacturingTech)");
		} else if (data.Details.bit_Support === "") {
			alert("Please enter data in all the given fields(bit_Support)");
		} else if (data.Details.Hyper_Threading_Support === "") {
			alert(
				"Please enter data in all the given fields(Hyper_Threading_Support)"
			);
		} else if (data.Details.MemoryType === "") {
			alert("Please enter data in all the given fields (MemoryType)");
		} else if (data.Details.MemoryChannel === "") {
			alert("Please enter data in all the given fields (MemoryChannel)");
		} else if (data.Details.Virtualization_Tech_Support === "") {
			alert(
				"Please enter data in all the given fields (Virtualization_Tech_Support)"
			);
		} else if (data.Details.IntegratedGraphics === "") {
			alert("Please enter data in all the given fields (IntegratedGraphics)");
		} else if (data.Details.Graphics_Base_Frequency === "") {
			alert(
				"Please enter data in all the given fields (Graphics_Base_Frequency)"
			);
		} else if (data.Details.Graphics_Max_Dynamic_Frequency === "") {
			alert(
				"Please enter data in all the given fields (Graphics_Max_Dynamic_Frequency)"
			);
		} else if (data.Details.PCI_Express_Revision === "") {
			alert("Please enter data in all the given fields(PCI_Express_Revision)");
		} else if (data.Details.Max_Number_PCI_Express_Lane === "") {
			alert(
				"Please enter data in all the given fields(Max_Number_PCI_Express_Lane)"
			);
		} else if (data.Details.Thermal_Design_Power === "") {
			alert("Please enter data in all the given fields(Thermal_Design_Power)");
		} else if (data.Details.CoolingDevice === "") {
			alert("Please enter data in all the given fields(CoolingDevice)");
		}  else if (data.Details.Power_Consumption === "") {
			alert("Please enter data in all the given fields(Power_Consumption)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("name", data.Model.name);
			formData.append("processorType", data.Details.processorType);
			formData.append("CPU_Socket_Type", data.Details.CPU_Socket_Type);
			formData.append("CoreName", data.Details.CoreName);
			formData.append("NumberOfCores", data.Details.NumberOfCores);
			formData.append("NumberOfThreads", data.Details.NumberOfThreads);
			formData.append("OperatingFrequency", data.Details.OperatingFrequency);
			formData.append("MaxFrequency", data.Details.MaxFrequency);
			formData.append("BusSpeed", data.Details.BusSpeed);
			formData.append("L3_Cache", data.Details.L3_Cache);
			formData.append("ManufacturingTech", data.Details.ManufacturingTech);
			formData.append("bit_Support", data.Details.bit_Support);
			formData.append(
				"Hyper_Threading_Support",
				data.Details.Hyper_Threading_Support
			);
			formData.append("MemoryType", data.Details.MemoryType);
			formData.append("MemoryChannel", data.Details.MemoryChannel);
			formData.append(
				"Virtualization_Tech_Support",
				data.Details.Virtualization_Tech_Support
			);
			formData.append("IntegratedGraphics", data.Details.IntegratedGraphics);
			formData.append(
				"Graphics_Base_Frequency",
				data.Details.Graphics_Base_Frequency
			);

			formData.append(
				"Graphics_Max_Dynamic_Frequency",
				data.Details.Graphics_Max_Dynamic_Frequency
			);
			formData.append(
				"PCI_Express_Revision",
				data.Details.PCI_Express_Revision
			);
			formData.append(
				"Max_Number_PCI_Express_Lane",
				data.Details.Max_Number_PCI_Express_Lane
			);
			formData.append(
				"Thermal_Design_Power",
				data.Details.Thermal_Design_Power
			);
			formData.append("CoolingDevice", data.Details.CoolingDevice);
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/processor/" + id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/manageprocessor");
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	};

	let form = <Spinner />;

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Update Processor</h1>
						<form
							className={classes.form1}
							method="post"
							enctype="multipart/form-data"
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
										Series:
									</label>
									<br />
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label1} htmlFor="name">
										Name:
									</label>
									<br />
									<label className={classes.label1} htmlFor="processorType">
										ProcessorType:
									</label>
									<br />
									<label className={classes.label1} htmlFor="CPU_Socket_Type">
										CPU_Socket_Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="CoreName">
										Core Name:
									</label>
									<br />
									<label className={classes.label1} htmlFor="NumberOfCores">
										Number Of Cores:
									</label>
									<br />
									<label className={classes.label1} htmlFor="NumberOfThreads">
										Number Of Threads:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="OperatingFrequency"
									>
										OperatingFrequency:
									</label>
									<br />
									<label className={classes.label1} htmlFor="MaxFrequency">
										Max Frequency:
									</label>
									<br />
									<label className={classes.label1} htmlFor="BusSpeed">
										Bus Speed:
									</label>
									<br />
									<label className={classes.label1} htmlFor="L3_Cache">
										L3 Cache:
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
										id="name"
										name="name"
										value={data.Model.name}
										required
										onChange={(e) => {
											setData({
												...data,
												Model: { ...data.Model, name: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="processorType"
										name="processorType"
										value={data.Model.processorType}
										required
										onChange={(e) => {
											setData({
												...data,
												Model: { ...data.Model, name: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CPU_Socket_Type"
										name="CPU_Socket_Type"
										value={data.Details.CPU_Socket_Type}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													CPU_Socket_Type: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CoreName"
										name="CoreName"
										value={data.Details.CoreName}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: { ...data.Details, CoreName: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="NumberOfCores"
										name="NumberOfCores"
										value={data.Details.NumberOfCores}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													NumberOfCores: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="NumberOfThreads"
										name="NumberOfThreads"
										value={data.Details.NumberOfThreads}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													NumberOfThreads: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="OperatingFrequency"
										name="OperatingFrequency"
										value={data.Details.OperatingFrequency}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													OperatingFrequency: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="MaxFrequency"
										name="MaxFrequency"
										value={data.Details.MaxFrequency}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													MaxFrequency: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="BusSpeed"
										name="BusSpeed"
										value={data.Details.BusSpeed}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: { ...data.Details, BusSpeed: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="L3_Cache"
										name="L3_Cache"
										value={data.Details.L3_Cache}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: { ...data.Details, L3_Cache: e.target.value },
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
									<label className={classes.label1} htmlFor="ManufacturingTech">
										Manufacturing Tech:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="bit_Support">
										Bit Support:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Hyper_Threading_Support"
									>
										Hyper Threading Support:
									</label>
									<br />
									<label className={classes.label1} htmlFor="MemoryType">
										Memory Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="MemoryChannel">
										Memory Channel:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Virtualization_Tech_Support"
									>
										Virtualization Tech Support:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="IntegratedGraphics"
									>
										Integrated Graphics:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Graphics_Base_Frequency"
									>
										Graphics Base Frequency:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Graphics_Max_Dynamic_Frequency"
									>
										Graphics Max Dynamic Frequency:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="PCI_Express_Revision"
									>
										PCI Express Revision:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Max_Number_PCI_Express_Lane"
									>
										Max Number PCI Express Lane:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Thermal_Design_Power"
									>
										Thermal Design Power:
									</label>
									<br />
									<label className={classes.label1} htmlFor="CoolingDevice">
										Cooling Device:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Power_Consumption">
										Power Consumption:
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
										id="ManufacturingTech"
										name="ManufacturingTech"
										value={data.Details.ManufacturingTech}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													ManufacturingTech: e.target.value,
												},
											});
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
										id="bit_Support"
										name="bit_Support"
										value={data.Details.bit_Support}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													bit_Support: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Hyper_Threading_Support"
										name="Hyper_Threading_Support"
										value={data.Details.Hyper_Threading_Support}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Hyper_Threading_Support: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="MemoryType"
										name="MemoryType"
										value={data.Details.MemoryType}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													MemoryType: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="MemoryChannel"
										name="MemoryChannel"
										value={data.Details.MemoryChannel}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													MemoryChannel: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Virtualization_Tech_Support"
										name="Virtualization_Tech_Support"
										value={data.Details.Virtualization_Tech_Support}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Virtualization_Tech_Support: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="IntegratedGraphics"
										name="IntegratedGraphics"
										value={data.Details.IntegratedGraphics}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													IntegratedGraphics: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Graphics_Base_Frequency"
										name="Graphics_Base_Frequency"
										value={data.Details.Graphics_Base_Frequency}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Graphics_Base_Frequency: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Graphics_Max_Dynamic_Frequency"
										name="Graphics_Max_Dynamic_Frequency"
										value={data.Details.Graphics_Max_Dynamic_Frequency}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Graphics_Max_Dynamic_Frequency: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="PCI_Express_Revision"
										name="PCI_Express_Revision"
										value={data.Details.PCI_Express_Revision}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													PCI_Express_Revision: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Max_Number_PCI_Express_Lane"
										name="Max_Number_PCI_Express_Lane"
										value={data.Details.Max_Number_PCI_Express_Lane}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Max_Number_PCI_Express_Lane: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Thermal_Design_Power"
										name="Thermal_Design_Power"
										placeholder="Enter Thermal_Design_Power."
										value={data.Details.Thermal_Design_Power}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Thermal_Design_Power: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CoolingDevice"
										name="CoolingDevice"
										value={data.Details.CoolingDevice}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													CoolingDevice: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Power_Consumption"
										name="Power_Consumption"
										value={data.Power_Consumption}
										required
										onChange={(e) => {
											setData({
												...data,
												Power_Consumption: e.target.value,
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
							<input
								className={classes.btn1}
								type="submit"
								value="Submit"
								onClick={handelSubmitBtn}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <div>{form}</div>;
};

export default UpdateProcessor;
