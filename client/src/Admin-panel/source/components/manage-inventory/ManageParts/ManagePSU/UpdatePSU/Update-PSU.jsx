import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";

const UpdatePSU = (props) => {
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
				.get("pcParts/casing/" + id)
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
		} else if (data.brand === "") {
			alert("Please enter data in all the given fields(brand)");
		} else if (data.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Maximum_Power === "") {
			alert("Please enter data in all the given fields (Maximum_Power)");
		} else if (data.Fans === "") {
			alert("Please enter data in all the given fields (Fans)");
		} else if (data.PFC === "") {
			alert("Please enter data in all the given fields (PFC)");
		} else if (data.Main_Connectors === "") {
			alert("Please enter data in all the given fields (Main_Connectors)");
		} else if (data.Rails === "") {
			alert("Please enter data in all the given fields (Rails)");
		} else if (data.PCI_Express_Connector === "") {
			alert(
				"Please enter data in all the given fields  (PCI_Express_Connector)"
			);
		} else if (data.SATA_Power_Connector === "") {
			alert(
				"Please enter data in all the given fields  (SATA_Power_Connector)"
			);
		} else if (data.SLI === "") {
			alert("Please enter data in all the given fields (SLI)");
		} else if (data.Haswell_Support === "") {
			alert("Please enter data in all the given fields (Haswell_Support)");
		} else if (data.CrossFire === "") {
			alert("Please enter data in all the given fields(CrossFire)");
		} else if (data.Modular === "") {
			alert("Please enter data in all the given fields(Modular)");
		} else if (data.Energy_Efficent === "") {
			alert("Please enter data in all the given fields (Energy_Efficent)");
		} else if (data.Input_Voltage === "") {
			alert("Please enter data in all the given fields (Input_Voltage)");
		} else if (data.Input_Frequency_Range === "") {
			alert(
				"Please enter data in all the given fields (Input_Frequency_Range)"
			);
		} else if (data.Input_Current === "") {
			alert("Please enter data in all the given fields (Input_Current)");
		} else if (data.Output === "") {
			alert("Please enter data in all the given fields (Output)");
		} else if (data.Dimentions === "") {
			alert("Please enter data in all the given fields(Dimentions)");
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
			formData.append("series", data.series);
			formData.append("model", data.model);
			formData.append("type", data.type);
			formData.append("Maximum_Power", data.Maximum_Power);
			formData.append("Fans", data.Fans);
			formData.append("PFC", data.PFC);
			formData.append("Main_Connectors", data.Main_Connectors);
			formData.append("Rails", data.Rails);
			formData.append("PCI_Express_Connector", data.PCI_Express_Connector);
			formData.append("SATA_Power_Connector", data.SATA_Power_Connector);
			formData.append("SLI", data.SLI);
			formData.append("Haswell_Support", data.Haswell_Support);
			formData.append("CrossFire", data.CrossFire);
			formData.append("Modular", data.Modular);
			formData.append("Energy_Efficent", data.Energy_Efficent);
			formData.append("Input_Voltage", data.Input_Voltage);
			formData.append("Input_Frequency_Range", data.Input_Frequency_Range);
			formData.append("Input_Current", data.Input_Current);
			formData.append("Output", data.Output);
			formData.append("Dimentions", data.Dimentions);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/PSU", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managepsu");
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
						<h1 className={classes.h1}>Add PSU</h1>
						<form
							className={classes.form}
							method="post"
							encType="multipart/form-data"
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
									<label className={classes.label} htmlFor="type">
										Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="Maximum_Power">
									Maximum Power:
									</label>
									<br />
									<label className={classes.label} htmlFor="Fans">
									Fans:
									</label>
									<br />
									<label className={classes.label} htmlFor="PFC">
									PFC:
									</label>
									<br />
									<label className={classes.label} htmlFor="Main_Connectors">
									Main Connectors:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="Rails"
									>
										Rails:
									</label>
									<br />
									<label className={classes.label} htmlFor="PCI_Express_Connector">
									PCI Express Connector:
									</label>
									<br />
									<label className={classes.label} htmlFor="Connectors">
									Connectors:
									</label>
									<br />
									<label className={classes.label} htmlFor="Features">
									Features:
									</label>
									<br />
									<label className={classes.label} htmlFor="thumbnail">
										Thumbnail:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
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
										className={classes.input}
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
										className={classes.input}
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
										className={classes.input}
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
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="type"
										name="type"
										placeholder="Enter Type"
										required
										onChange={(e) => {
											setData({ ...data, type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Maximum_Power"
										name="Maximum_Power"
										placeholder="Enter Maximum_Power"
										required
										onChange={(e) => {
											setData({ ...data, Maximum_Power: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Fans"
										name="Fans"
										placeholder="Enter Fans"
										required
										onChange={(e) => {
											setData({ ...data, Fans: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="PFC"
										name="PFC"
										placeholder="Enter PFC"
										required
										onChange={(e) => {
											setData({ ...data, PFC: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Main_Connectors"
										name="Main_Connectors"
										placeholder="Enter Main_Connectors."
										required
										onChange={(e) => {
											setData({ ...data, Main_Connectors: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Rails"
										name="Rails"
										placeholder="Enter Rails"
										required
										onChange={(e) => {
											setData({ ...data, Rails: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="PCI_Express_Connector"
										name="PCI_Express_Connector"
										placeholder="Enter PCI_Express_Connector"
										required
										onChange={(e) => {
											setData({
												...data,
												PCI_Express_Connector: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Connectors"
										name="Connectors"
										placeholder="Enter Connectors."
										required
										onChange={(e) => {
											setData({ ...data, Connectors: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Features"
										name="Features"
										placeholder="Enter Features."
										required
										onChange={(e) => {
											setData({ ...data, Connectors: e.target.value });
										}}
									/>
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
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
								<div className={classes.row}>
									<label className={classes.label} htmlFor="SATA_Power_Connector">
										SATA_Power_Connector:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="SLI">
									SLI:
									</label>
									<br />
									<label className={classes.label} htmlFor="Haswell_Support">
									Haswell Support:
									</label>
									<br />
									<label className={classes.label} htmlFor="CrossFire">
									Cross Fire:
									</label>
									<br />
									<label className={classes.label} htmlFor="Modular">
									Modular:
									</label>
									<br />
									<label className={classes.label} htmlFor="Energy_Efficent">
									Energy Efficent:
									</label>
									<br />
									<label className={classes.label} htmlFor="Input_Voltage">
									Input Voltage:
									</label>
									<br />
									<label className={classes.label} htmlFor="Input_Frequency_Range">
									Input Frequency Range:
									</label>
									<br />
									<label className={classes.label} htmlFor="Input_Current">
									Input Current:
									</label>
									<br />
									<label className={classes.label} htmlFor="Output">
									Output:
									</label>
									<br />
									<label className={classes.label} htmlFor="Dimentions">
										Dimentions:
									</label>
									<br />
									<label className={classes.label} htmlFor="Max_PSU_Length">
									Max PSU Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="Weight">
									Weight:
									</label>
									<br />
									
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										type="text"
										id="SATA_Power_Connector"
										name="SATA_Power_Connector"
										placeholder="Enter SATA Power Connector"
										required
										onChange={(e) => {
											setData({
												...data,
												SATA_Power_Connector: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="SLI"
										name="SLI"
										placeholder="Enter SLI."
										required
										onChange={(e) => {
											setData({ ...data, SLI: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Haswell_Support"
										name="Haswell_Support"
										placeholder="Enter Haswell Support."
										required
										onChange={(e) => {
											setData({ ...data, Haswell_Support: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="CrossFire"
										name="CrossFire"
										placeholder="Enter Cross Fire."
										required
										onChange={(e) => {
											setData({ ...data, CrossFire: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Modular"
										name="Modular"
										placeholder="Enter Modular."
										required
										onChange={(e) => {
											setData({ ...data, Modular: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Energy_Efficent"
										name="Energy_Efficent"
										placeholder="Enter Energy Efficent."
										required
										onChange={(e) => {
											setData({ ...data, Energy_Efficent: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Input_Voltage"
										name="Input_Voltage"
										placeholder="Enter Input Voltage."
										required
										onChange={(e) => {
											setData({ ...data, Input_Voltage: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Input_Frequency_Range"
										name="Input_Frequency_Range"
										placeholder="Enter Input Frequency Range."
										required
										onChange={(e) => {
											setData({
												...data,
												Input_Frequency_Range: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Input_Current"
										name="Input_Current"
										placeholder="Enter Input Current"
										required
										onChange={(e) => {
											setData({ ...data, Input_Current: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Output"
										name="Output"
										placeholder="Enter Output."
										required
										onChange={(e) => {
											setData({ ...data, Output: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="Max_PSU_Length"
										name="Max_PSU_Length"
										placeholder="Enter Max PSU Length."
										required
										onChange={(e) => {
											setData({ ...data, Max_PSU_Length: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Weight"
										name="Weight"
										placeholder="Enter Weight."
										required
										onChange={(e) => {
											setData({ ...data, Weight: e.target.value });
										}}
									/>
									<br />

									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
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
						<div className={classes.btnDiv}>
							<input
								className={classes.btn}
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

export default UpdatePSU;
