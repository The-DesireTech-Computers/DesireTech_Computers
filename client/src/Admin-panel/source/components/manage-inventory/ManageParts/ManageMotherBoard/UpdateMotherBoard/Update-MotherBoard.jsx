import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";

import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";

const UpdateMotherBoard = (props) => {
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
				.get("pcParts/motherboard/" + id)
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
		} else if (data.company === "") {
			alert("Please enter data in all the given fields(company)");
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
		} else if (data.Memory_Pins === "") {
			alert(
				"Please enter data in all the given fields (Memory_Pins)"
			);
		} else if (data.Memory_Standard === "") {
			alert("Please enter data in all the given fields (Memory_Standard)");
		} else if (data.Number_Of_Memory_Slots === "") {
			alert(
				"Please enter data in all the given fields  (Number_Of_Memory_Slots)"
			);
		} else if (data.Memory_Standard === "") {
			alert("Please enter data in all the given fields  (Memory_Standard)");
		} else if (data.Maximum_Memory_Supported === "") {
			alert("Please enter data in all the given fields (Maximum_Memory_Supported)");
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
		} else if (data.Max_GPU_Length === "") {
			alert("Please enter data in all the given fields (Max_GPU_Length)");
		} else if (data.Wireless_LAN === "") {
			alert("Please enter data in all the given fields (Wireless_LAN)");
		} else if (data.Bluetooth === "") {
			alert("Please enter data in all the given fields (Bluetooth)");
		} else if (data.Rear_Panel_Ports === "") {
			alert("Please enter data in all the given fields (Rear_Panel_Ports)");
		} else if (data.Onboard_USB === "") {
			alert("Please enter data in all the given fields(Onboard_USB)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("company", data.company);
			formData.append("brand", data.brand);
			formData.append("model", data.model);
			formData.append("CPU_Socket_Type", data.CPU_Socket_Type);
			formData.append("CPU_Type", data.CPU_Type);
			formData.append("Chipset", data.Chipset);
			formData.append("Onboard_Video_Chipset", data.Onboard_Video_Chipset);
			formData.append(" Memory_Pins ", data.Memory_Pins);
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

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

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

	let form = <Spinner />;

	if (!loading) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main}>
					<div className={classes.inputform}>
						<h1 className={classes.h1}>Add MotherBoard</h1>
						<form
							className={classes.form}
							method="post"
							encCPU_Socket_Type="multipart/form-data"
						>
							<div className={classes.form2}>
								<div className={classes.row}>
									<label className={classes.label} htmlFor="title">
										Title:
									</label>
									<br />
									<label className={classes.label} htmlFor="price">
										Price:
									</label>
									<br />
									<label className={classes.label} htmlFor="brand">
										Brand:
									</label>
									<br />
									<label className={classes.label} htmlFor="series">
										Series:
									</label>
									<br />
									<label className={classes.label} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label} htmlFor="CPU_Socket_Type">
										CPU_Socket_Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="CPU_Type">
										CPU_Type:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="MotherBoardmaterial"
									>
										MotherBoard Material:
									</label>
									<br />
									<label className={classes.label} htmlFor="withpowersupply">
										With Power Supply:
									</label>
									<br />
									<label className={classes.label} htmlFor="powersupplymounted">
										Power Supply Mounted:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="motherboardcompatability"
									>
										MotherBoard Compatability:
									</label>

									<br />
									<label className={classes.label} htmlFor="thumbnail">
										Thumbnail:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										CPU_Socket_Type="text"
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
										className={classes.input}
										CPU_Socket_Type="number"
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
										className={classes.input}
										CPU_Socket_Type="text"
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
										className={classes.input}
										CPU_Socket_Type="text"
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
										className={classes.input}
										CPU_Socket_Type="text"
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
										className={classes.input}
										CPU_Socket_Type="text"
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
										className={classes.input}
										CPU_Socket_Type="text"
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
										className={classes.input}
										CPU_Socket_Type="text"
										id="MotherBoardmaterial"
										name="MotherBoardmaterial"
										placeholder="Enter MotherBoard Material"
										required
										onChange={(e) => {
											setData({ ...data, Chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="withpowersupply"
										name="withpowersupply"
										placeholder="Enter With Power Supply"
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
										className={classes.input}
										CPU_Socket_Type="text"
										id="powersupplymounted"
										name="powersupplymounted"
										placeholder="Enter Power Supply Mounted."
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
										className={classes.input}
										CPU_Socket_Type="text"
										id="motherboardcompatabililty"
										name="motherboardcompatability"
										placeholder="Enter MotherBoard Compatability"
										required
										onChange={(e) => {
											setData({ ...data, Memory_Standard: e.target.value });
										}}
									/>

									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											CPU_Socket_Type="file"
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
								<div className={classes.row}>
									<label className={classes.label} htmlFor="sidepanelwindow">
										Side Panel Window:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="internaldrivebays">
										Internal Drive Bays:
									</label>
									<br />
									<label className={classes.label} htmlFor="expansionslots">
										Expansion Slots:
									</label>
									<br />
									<label className={classes.label} htmlFor="frontpanelports">
										Front Panel Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="fanoptions">
										Fan Options:
									</label>
									<br />
									<label className={classes.label} htmlFor="radiatoroptions">
										Radiator Options:
									</label>
									<br />
									<label className={classes.label} htmlFor="maxgpulength">
										Max GPU Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="maxcpucoolerlength">
										Max CPU Cooler Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="maxpsulength">
										Max PSU Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="casedimentions">
										Case Dimentions:
									</label>
									<br />
									<label className={classes.label} htmlFor="Rear_Panel_Ports">
										Rear_Panel_Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="sidepanelwindow"
										name="sidepanelwindow"
										placeholder="Enter Side Panel Window"
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
										className={classes.input}
										CPU_Socket_Type="number"
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
										className={classes.input}
										CPU_Socket_Type="text"
										id="internaldrivebay"
										name="internaldrivebay"
										placeholder="Enter Internal Drive Bays."
										required
										onChange={(e) => {
											setData({ ...data, PCI_Express: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="expansionslots"
										name="expansionslots"
										placeholder="Enter Expansion Slots."
										required
										onChange={(e) => {
											setData({ ...data, SATA_6GBs: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="frontpanelports"
										name="frontpanelports"
										placeholder="Enter Front Panel Ports."
										required
										onChange={(e) => {
											setData({ ...data, M2: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="fanoptions"
										name="fanoptions"
										placeholder="Enter Fan Options."
										required
										onChange={(e) => {
											setData({ ...data, Audio_Chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="radiatoroptions"
										name="radiatoroptions"
										placeholder="Enter Radiator Options."
										required
										onChange={(e) => {
											setData({ ...data, Rdiator_Options: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="maxgpulength"
										name="maxgpulength"
										placeholder="Enter Max GPU Length."
										required
										onChange={(e) => {
											setData({ ...data, Max_GPU_Length: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="maxcpucoolerlength"
										name="maxcpucoolerlength"
										placeholder="Enter Max CPU Cooler Length."
										required
										onChange={(e) => {
											setData({ ...data, Max_LAN_Speed: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="maxpsulength"
										name="maxpsulength"
										placeholder="Enter Max PSU Length."
										required
										onChange={(e) => {
											setData({ ...data, Max_PSU_Length: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="casedimentions"
										name="casedimentions"
										placeholder="Enter Case Dimentions."
										required
										onChange={(e) => {
											setData({ ...data, Bluetooth: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										CPU_Socket_Type="text"
										id="Rear_Panel_Ports"
										name="Rear_Panel_Ports"
										placeholder="Enter Rear_Panel_Ports."
										required
										onChange={(e) => {
											setData({ ...data, Rear_Panel_Ports: e.target.value });
										}}
									/>
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											CPU_Socket_Type="file"
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
						<div className={classes.btnDiv}>
							<input
								className={classes.btn}
								CPU_Socket_Type="submit"
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


export default UpdateMotherBoard;
