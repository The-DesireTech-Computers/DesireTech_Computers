import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";
const AddMotherBoard = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		model: "",

		CPU_Socket_Type: "",
		CPU_Type: "",

		Chipset: "",
		Onboard_Video_Chipset: "",

		Memory_Pins: 0,
		Number_Of_Memory_Slots: "",
		Memory_Standard: "",
		Maximum_Memory_Supported: "",
		Channel_Supported: "",

		PCI_Express: "",

		SATA_6GBs: "",
		M2: "",

		Audio_Chipset: "",
		Audio_Channels: "",

		LAN_Chipset: "",
		Max_LAN_Speed: "",
		Wireless_LAN: "",
		Bluetooth: "",

		Rear_Panel_Ports: "",

		Onboard_USB: "",
		Other_Connectors: "",

		Form_Factor: "",
		LED_Lighting: "",
		Dimentions: "",
		Power_Pin: "",

		Windows: "",
		Features: "",
		Power_Consumption: "",
		company: "",
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
			alert("Please enter data in all the given fields (brand)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.CPU_Socket_Type === "") {
			alert("Please enter data in all the given fields(CPU_Socket_Type)");
		} else if (data.CPU_Type === "") {
			alert("Please enter data in all the given fields(CPU_Type)");
		} else if (data.Chipset === "") {
			alert("Please enter data in all the given fields (Chipset)");
		} else if (data.Onboard_Video_Chipset === "") {
			alert(
				"Please enter data in all the given fields (Onboard_Video_Chipset)"
			);
		} else if (data.Memory_Pins === 0) {
			alert("Please enter data in all the given fields (Memory_Pins)");
		} else if (data.Number_Of_Memory_Slots === "") {
			alert(
				"Please enter data in all the given fields  (Number_Of_Memory_Slots)"
			);
		} else if (data.Memory_Standard === "") {
			alert("Please enter data in all the given fields  (Memory_Standard)");
		} else if (data.Maximum_Memory_Supported === "") {
			alert(
				"Please enter data in all the given fields (Maximum_Memory_Supported)"
			);
		} else if (data.Channel_Supported === "") {
			alert("Please enter data in all the given fields (Channel_Supported)");
		} else if (data.PCI_Express === "") {
			alert("Please enter data in all the given fields (PCI_Express)");
		} else if (data.SATA_6GBs === "") {
			alert("Please enter data in all the given fields (SATA_6GBs)");
		} else if (data.M2 === "") {
			alert("Please enter data in all the given fields(M2)");
		} else if (data.Audio_Chipset === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Audio_Channels === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.LAN_Chipset === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Max_LAN_Speed === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Wireless_LAN === "") {
			alert("Please enter data in all the given fields (Wireless_LAN)");
		} else if (data.Bluetooth === "") {
			alert("Please enter data in all the given fields (Bluetooth)");
		} else if (data.Rear_Panel_Ports === "") {
			alert("Please enter data in all the given fields (Rear_Panel_Ports)");
		} else if (data.Onboard_USB === "") {
			alert("Please enter data in all the given fields(Onboard_USB)");
		} else if (data.Other_Connectors === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Form_Factor === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.LED_Lighting === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Dimentions === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Power_Pin === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Windows === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Features === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.company === "") {
			alert("Please enter data in all the given fields(company)");
		} else if (thumbnail === null) {
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
			formData.append("model", data.model);
			formData.append("CPU_Socket_Type", data.CPU_Socket_Type);
			formData.append("CPU_Type", data.CPU_Type);
			formData.append("Chipset", data.Chipset);
			formData.append("Onboard_Video_Chipset", data.Onboard_Video_Chipset);
			formData.append("Memory_Pins", data.Memory_Pins);
			formData.append("Number_Of_Memory_Slots", data.Number_Of_Memory_Slots);
			formData.append("Memory_Standard", data.Memory_Standard);
			formData.append(
				"Maximum_Memory_Supported",
				data.Maximum_Memory_Supported
			);
			formData.append("Channel_Supported", data.Channel_Supported);
			formData.append("PCI_Express", data.PCI_Express);
			formData.append("SATA_6GBs", data.SATA_6GBs);
			formData.append("M2", data.M2);
			formData.append("Audio_Chipset", data.Audio_Chipset);
			formData.append("Audio_Channels", data.Audio_Channels);
			formData.append("LAN_Chipset", data.LAN_Chipset);
			formData.append("Max_LAN_Speed", data.Max_LAN_Speed);
			formData.append("Wireless_LAN", data.Wireless_LAN);
			formData.append("Bluetooth", data.Bluetooth);
			formData.append("Rear_Panel_Ports", data.Rear_Panel_Ports);
			formData.append("Onboard_USB", data.Onboard_USB);
			formData.append("Other_Connectors", data.Other_Connectors);
			formData.append("Form_Factor", data.Form_Factor);
			formData.append("LED_Lighting", data.LED_Lighting);
			formData.append("Dimentions", data.Dimentions);
			formData.append("Power_Pin", data.Power_Pin);
			formData.append("Windows", data.Windows);
			formData.append("Features", data.Features);
			formData.append("Power_Consumption", data.Power_Consumption);
			formData.append("company", data.company);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}
			console.log(formData);
			await axios
				.post("pcParts/motherboard", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managemotherboard");
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	};
	//console.log(data)

	let form = <Spinner />;

	if (!loading) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Add MotherBoard</h1>
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

									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label1} htmlFor="CPU_Socket_Type">
										CPU_Socket_Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="CPU_Type">
										CPU_Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Chipset">
										Chipset :
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Onboard_Video_Chipset"
									>
										Onboard_Video_Chipset:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Memory_Pins">
										Memory_Pins:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Number_Of_Memory_Slots"
									>
										Number_Of_Memory_Slots:
									</label>

									<br />
									<label className={classes.label1} htmlFor="Memory_Standard">
										Memory_Standard:
									</label>

									<br />
									<label
										className={classes.label1}
										htmlFor="Maximum_Memory_Supported"
									>
										Maximum_Memory_Supported:
									</label>

									<br />
									<label className={classes.label1} htmlFor="Channel_Supported">
										Channel_Supported:
									</label>

									<br />
									<label className={classes.label1} htmlFor="Windows">
										Windows:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Features">
										Features:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Power_Consumption">
										Power_Consumption:
									</label>
									<br />
									<label className={classes.label1} htmlFor="company">
										Company:
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
										id="CPU_Type"
										name="CPU_Type"
										placeholder="Enter CPU_Type"
										required
										onChange={(e) => {
											setData({ ...data, CPU_Type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Chipset"
										name="Chipset"
										placeholder="Enter Chipset"
										required
										onChange={(e) => {
											setData({ ...data, Chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Onboard_Video_Chipset"
										name="Onboard_Video_Chipset"
										placeholder="Enter Onboard_Video_Chipset"
										required
										onChange={(e) => {
											setData({
												...data,
												Onboard_Video_Chipset: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Memory_Pins"
										name="Memory_Pins"
										placeholder="Enter Memory_Pins"
										required
										onChange={(e) => {
											setData({
												...data,
												Memory_Pins: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Number_Of_Memory_Slots"
										name="Number_Of_Memory_Slots"
										placeholder="Enter Number_Of_Memory_Slots"
										required
										onChange={(e) => {
											setData({
												...data,
												Number_Of_Memory_Slots: e.target.value,
											});
										}}
									/>

									<br />
									<input
										className={classes.input1}
										type="text"
										id="Memory_Standard"
										name="Memory_Standard"
										placeholder="Enter Memory_Standard"
										required
										onChange={(e) => {
											setData({ ...data, Memory_Standard: e.target.value });
										}}
									/>

									<br />
									<input
										className={classes.input1}
										type="text"
										id="Maximum_Memory_Supported"
										name="Maximum_Memory_Supported"
										placeholder="Enter Maximum_Memory_Supported"
										required
										onChange={(e) => {
											setData({
												...data,
												Maximum_Memory_Supported: e.target.value,
											});
										}}
									/>

									<br />
									<input
										className={classes.input1}
										type="text"
										id="Channel_Supported"
										name="Channel_Supported"
										placeholder="Enter Channel_Supported"
										required
										onChange={(e) => {
											setData({ ...data, Channel_Supported: e.target.value });
										}}
									/>

									<br />
									<input
										className={classes.input1}
										type="text"
										id="Windows"
										name="Windows"
										placeholder="Enter Windows."
										required
										onChange={(e) => {
											setData({ ...data, Windows: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Features"
										name="Features"
										placeholder="Enter Features."
										required
										onChange={(e) => {
											setData({ ...data, Features: e.target.value });
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
											setData({ ...data, Power_Consumption: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="company"
										name="company"
										placeholder="Enter Company."
										required
										onChange={(e) => {
											setData({ ...data, company: e.target.value });
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
									<label className={classes.label1} htmlFor="PCI_Express">
										PCI_Express:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="SATA_6GBs">
										SATA_6GBs:
									</label>
									<br />
									<label className={classes.label1} htmlFor="M2">
										M2:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Audio_Chipset">
										Audio_Chipset:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Audio_Channels">
										Audio_Channels:
									</label>
									<br />
									<label className={classes.label1} htmlFor="LAN_Chipset">
										LAN_Chipset:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Max_LAN_Speed">
										Max_LAN_Speed:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Wireless_LAN">
										Wireless_LAN:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Bluetooth">
										Bluetooth:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Rear_Panel_Ports">
										Rear_Panel_Ports:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Onboard_USB">
										Onboard_USB:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Other_Connectors">
										Other_Connectors:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Form_Factor">
										Form_Factor:
									</label>
									<br />
									<label className={classes.label1} htmlFor="LED_Lighting">
										LED_Lighting:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Dimentions">
										Dimentions:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Power_Pin">
										Power_Pin:
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
										id="PCI_Express"
										name="PCI_Express"
										placeholder="Enter PCI_Express"
										required
										onChange={(e) => {
											setData({
												...data,
												PCI_Express: e.target.value,
											});
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
										type="number"
										id="SATA_6GBs"
										name="SATA_6GBs"
										placeholder="Enter SATA_6GBs."
										required
										onChange={(e) => {
											setData({ ...data, SATA_6GBs: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="M2"
										name="M2"
										placeholder="Enter M2."
										required
										onChange={(e) => {
											setData({ ...data, M2: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Audio_Chipset"
										name="Audio_Chipset"
										placeholder="Enter Audio_Chipset."
										required
										onChange={(e) => {
											setData({ ...data, Audio_Chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Audio_Channels"
										name="Audio_Channels"
										placeholder="Enter Audio_Channels."
										required
										onChange={(e) => {
											setData({ ...data, Audio_Channels: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="LAN_Chipset"
										name="LAN_Chipset"
										placeholder="Enter LAN_Chipset."
										required
										onChange={(e) => {
											setData({ ...data, LAN_Chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Max_LAN_Speed"
										name="Max_LAN_Speed"
										placeholder="Enter Max_LAN_Speed."
										required
										onChange={(e) => {
											setData({ ...data, Max_LAN_Speed: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Wireless_LAN"
										name="Wireless_LAN"
										placeholder="Enter Wireless_LAN."
										required
										onChange={(e) => {
											setData({ ...data, Wireless_LAN: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Bluetooth"
										name="Bluetooth"
										placeholder="Enter Bluetooth."
										required
										onChange={(e) => {
											setData({ ...data, Bluetooth: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Rear_Panel_Ports"
										name="Rear_Panel_Ports"
										placeholder="Enter Rear_Panel_Ports."
										required
										onChange={(e) => {
											setData({ ...data, Rear_Panel_Ports: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Onboard_USB"
										name="Onboard_USB"
										placeholder="Enter Onboard_USB."
										required
										onChange={(e) => {
											setData({ ...data, Onboard_USB: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Other_Connectors"
										name="Other_Connectors"
										placeholder="Enter Other_Connectors."
										required
										onChange={(e) => {
											setData({ ...data, Other_Connectors: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Form_Factor"
										name="Form_Factor"
										placeholder="Enter Form_Factor."
										required
										onChange={(e) => {
											setData({ ...data, Form_Factor: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="LED_Lighting"
										name="LED_Lighting"
										placeholder="Enter LED_Lighting."
										required
										onChange={(e) => {
											setData({ ...data, LED_Lighting: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Dimentions"
										name="Dimentions"
										placeholder="Enter Dimentions."
										required
										onChange={(e) => {
											setData({ ...data, Dimentions: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Power_Pin"
										name="Power_Pin"
										placeholder="Enter Power_Pin."
										required
										onChange={(e) => {
											setData({ ...data, Power_Pin: e.target.value });
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

export default AddMotherBoard;
