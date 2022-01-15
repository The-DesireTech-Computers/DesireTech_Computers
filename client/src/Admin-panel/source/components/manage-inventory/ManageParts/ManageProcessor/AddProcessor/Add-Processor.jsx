import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const AddProcessor = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		processorType: "",
		series: "",
		name: "",
		model: "",

		CPU_Socket_Type: "",
		CoreName: "",
		NumberOfCores: "",
		NumberOfThreads: "",
		OperatingFrequency: "",
		MaxFrequency: "",
		BusSpeed: "",
		L3_Cache: "",
		ManufacturingTech: "",
		bit_Support: "",
		Hyper_Threading_Support: "",
		MemoryType: "",
		MemoryChannel: "",
		Virtualization_Tech_Support: "",
		IntegratedGraphics: "",
		Graphics_Base_Frequency: "",
		Graphics_Max_Dynamic_Frequency: "",
		PCI_Express_Revision: "",
		Max_Number_PCI_Express_Lane: "",
		Thermal_Design_Power: "",
		CoolingDevice: "",
		Power_Consumption: "",
	});
	let [thumbnail, setThumbnail] = useState(null);
	let [gallery, setGallery] = useState(null);
	let [loading, setLoading] = useState(false);

	let handelSubmitBtn = async () => {
		console.log(data);

		if (data.title === "") {
			alert("Please enter data in all the given fields  (title)");
		} else if (data.price === 0 || data.price === "") {
			alert("Please enter data in all the given fields  (price)");
		} else if (data.quantity === 0 || data.quantity === "") {
			alert("Please enter data in all the given fields (quantity)");
		} else if (data.brand === "") {
			alert("Please enter data in all the given fields(brand)");
		} else if (data.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.name === "") {
			alert("Please enter data in all the given fields (name)");
		} else if (data.processorType === "") {
			alert("Please enter data in all the given fields(processorType)");
		} else if (data.CPU_Socket_Type === "") {
			alert("Please enter data in all the given fields(CPU_Socket_Type)");
		} else if (data.CoreName === "") {
			alert("Please enter data in all the given fields (CoreName)");
		} else if (data.NumberOfCores === "") {
			alert("Please enter data in all the given fields (NumberOfCores)");
		} else if (data.NumberOfThreads === "") {
			alert("Please enter data in all the given fields (NumberOfThreads)");
		} else if (data.OperatingFrequency === "") {
			alert("Please enter data in all the given fields (OperatingFrequency)");
		} else if (data.MaxFrequency === "") {
			alert("Please enter data in all the given fields  (MaxFrequency)");
		} else if (data.BusSpeed === "") {
			alert("Please enter data in all the given fields  (BusSpeed)");
		} else if (data.L3_Cache === "") {
			alert("Please enter data in all the given fields (L3_Cache)");
		} else if (data.ManufacturingTech === "") {
			alert("Please enter data in all the given fields (ManufacturingTech)");
		} else if (data.bit_Support === "") {
			alert("Please enter data in all the given fields(bit_Support)");
		} else if (data.Hyper_Threading_Support === "") {
			alert(
				"Please enter data in all the given fields(Hyper_Threading_Support)"
			);
		} else if (data.MemoryType === "") {
			alert("Please enter data in all the given fields (MemoryType)");
		} else if (data.MemoryChannel === "") {
			alert("Please enter data in all the given fields (MemoryChannel)");
		} else if (data.Virtualization_Tech_Support === "") {
			alert(
				"Please enter data in all the given fields (Virtualization_Tech_Support)"
			);
		} else if (data.IntegratedGraphics === "") {
			alert("Please enter data in all the given fields (IntegratedGraphics)");
		} else if (data.Graphics_Base_Frequency === "") {
			alert(
				"Please enter data in all the given fields (Graphics_Base_Frequency)"
			);
		} else if (data.Graphics_Max_Dynamic_Frequency === "") {
			alert(
				"Please enter data in all the given fields (Graphics_Max_Dynamic_Frequency)"
			);
		} else if (data.PCI_Express_Revision === "") {
			alert("Please enter data in all the given fields(PCI_Express_Revision)");
		} else if (data.Max_Number_PCI_Express_Lane === "") {
			alert(
				"Please enter data in all the given fields(Max_Number_PCI_Express_Lane)"
			);
		} else if (data.Thermal_Design_Power === "") {
			alert("Please enter data in all the given fields(Thermal_Design_Power)");
		} else if (data.CoolingDevice === "") {
			alert("Please enter data in all the given fields(CoolingDevice)");
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields(Power_Consumption)");
		}else if (thumbnail === null) {
			alert("Please provide a picture as a thumbnail picture(thumbnail)");
		} else if (gallery === null) {
			alert("Please provide atleaste 1 picture as gallery(gallery)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.brand);
			formData.append("series", data.series);
			formData.append("model", data.model);
			formData.append("name", data.name);
			formData.append("processorType", data.processorType);
			formData.append("CPU_Socket_Type", data.CPU_Socket_Type);
			formData.append("CoreName", data.CoreName);
			formData.append("NumberOfCores", data.NumberOfCores);
			formData.append("NumberOfThreads", data.NumberOfThreads);
			formData.append("OperatingFrequency", data.OperatingFrequency);
			formData.append("MaxFrequency", data.MaxFrequency);
			formData.append("BusSpeed", data.BusSpeed);
			formData.append("L3_Cache", data.L3_Cache);
			formData.append("ManufacturingTech", data.ManufacturingTech);
			formData.append("bit_Support", data.bit_Support);
			formData.append("Hyper_Threading_Support", data.Hyper_Threading_Support);
			formData.append("MemoryType", data.MemoryType);
			formData.append("MemoryChannel", data.MemoryChannel);
			formData.append(
				"Virtualization_Tech_Support",
				data.Virtualization_Tech_Support
			);
			formData.append("IntegratedGraphics", data.IntegratedGraphics);
			formData.append("Graphics_Base_Frequency", data.Graphics_Base_Frequency);

			formData.append(
				"Graphics_Max_Dynamic_Frequency",
				data.Graphics_Max_Dynamic_Frequency
			);
			formData.append("PCI_Express_Revision", data.PCI_Express_Revision);
			formData.append(
				"Max_Number_PCI_Express_Lane",
				data.Max_Number_PCI_Express_Lane
			);
			formData.append("Thermal_Design_Power", data.Thermal_Design_Power);
			formData.append("CoolingDevice", data.CoolingDevice);
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/processor", formData)
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

	if (!loading) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Add Processor</h1>
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
										placeholder="Enter Title"
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
										placeholder="Enter Price"
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
										placeholder="Enter Brand"
										required
										onChange={(e) => {
											setData({ ...data, brand: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="series"
										name="series"
										placeholder="Enter Series"
										required
										onChange={(e) => {
											setData({ ...data, series: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="model"
										name="model"
										placeholder="Enter Model"
										required
										onChange={(e) => {
											setData({ ...data, model: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="name"
										name="name"
										placeholder="Enter Name"
										required
										onChange={(e) => {
											setData({ ...data, name: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="processorType"
										name="processorType"
										placeholder="Enter processorType"
										required
										onChange={(e) => {
											setData({ ...data, processorType: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CPU_Socket_Type"
										name="CPU_Socket_Type"
										placeholder="Enter CPU_Socket_Type"
										required
										onChange={(e) => {
											setData({ ...data, CPU_Socket_Type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CoreName"
										name="CoreName"
										placeholder="Enter Core Name"
										required
										onChange={(e) => {
											setData({ ...data, CoreName: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="NumberOfCores"
										name="NumberOfCores"
										placeholder="Enter Number Of Cores"
										required
										onChange={(e) => {
											setData({ ...data, NumberOfCores: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="NumberOfThreads"
										name="NumberOfThreads"
										placeholder="Enter Number Of Threads."
										required
										onChange={(e) => {
											setData({ ...data, NumberOfThreads: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="OperatingFrequency"
										name="OperatingFrequency"
										placeholder="Enter Operating Frequency"
										required
										onChange={(e) => {
											setData({ ...data, OperatingFrequency: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="MaxFrequency"
										name="MaxFrequency"
										placeholder="Enter Max Frequency"
										required
										onChange={(e) => {
											setData({ ...data, MaxFrequency: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="BusSpeed"
										name="BusSpeed"
										placeholder="Enter Bus Speed"
										required
										onChange={(e) => {
											setData({ ...data, BusSpeed: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="L3_Cache"
										name="L3_Cache"
										placeholder="Enter L3 Cache"
										required
										onChange={(e) => {
											setData({ ...data, L3_Cache: e.target.value });
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
										placeholder="Enter Manufacturing Tech"
										required
										onChange={(e) => {
											setData({ ...data, ManufacturingTech: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="quantity"
										name="quantity"
										placeholder="Enter Quantity"
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
										placeholder="Enter Bit Support."
										required
										onChange={(e) => {
											setData({ ...data, bit_Support: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Hyper_Threading_Support"
										name="Hyper_Threading_Support"
										placeholder="Enter Hyper Threading Support."
										required
										onChange={(e) => {
											setData({
												...data,
												Hyper_Threading_Support: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="MemoryType"
										name="MemoryType"
										placeholder="Enter Memory Type."
										required
										onChange={(e) => {
											setData({ ...data, MemoryType: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="MemoryChannel"
										name="MemoryChannel"
										placeholder="Enter Memory Channel."
										required
										onChange={(e) => {
											setData({
												...data,
												MemoryChannel: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Virtualization_Tech_Support"
										name="Virtualization_Tech_Support"
										placeholder="Enter Virtualization Tech Support."
										required
										onChange={(e) => {
											setData({
												...data,
												Virtualization_Tech_Support: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="IntegratedGraphics"
										name="IntegratedGraphics"
										placeholder="Enter Integrated Graphics."
										required
										onChange={(e) => {
											setData({ ...data, IntegratedGraphics: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Graphics_Base_Frequency"
										name="Graphics_Base_Frequency"
										placeholder="Enter Graphics Base Frequency."
										required
										onChange={(e) => {
											setData({
												...data,
												Graphics_Base_Frequency: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Graphics_Max_Dynamic_Frequency"
										name="Graphics_Max_Dynamic_Frequency"
										placeholder="Enter Graphics_Max_Dynamic_Frequency."
										required
										onChange={(e) => {
											setData({
												...data,
												Graphics_Max_Dynamic_Frequency: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="PCI_Express_Revision"
										name="PCI_Express_Revision"
										placeholder="Enter PCI_Express_Revision."
										required
										onChange={(e) => {
											setData({
												...data,
												PCI_Express_Revision: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Max_Number_PCI_Express_Lane"
										name="Max_Number_PCI_Express_Lane"
										placeholder="Enter Max_Number_PCI_Express_Lane."
										required
										onChange={(e) => {
											setData({
												...data,
												Max_Number_PCI_Express_Lane: e.target.value,
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
										required
										onChange={(e) => {
											setData({
												...data,
												Thermal_Design_Power: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CoolingDevice"
										name="CoolingDevice"
										placeholder="Enter CoolingDevice."
										required
										onChange={(e) => {
											setData({
												...data,
												CoolingDevice: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Power_Consumption"
										name="Power_Consumption"
										placeholder="Enter Power_Consumption."
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

export default AddProcessor;
