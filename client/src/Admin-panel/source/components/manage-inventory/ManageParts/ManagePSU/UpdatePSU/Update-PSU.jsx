import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

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
				.get("pcParts/psu/" + id)
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
		} else if (data.Details.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Details.Maximum_Power === 0 || data.Details.Maximum_Power === "") {
			alert("Please enter data in all the given fields (Maximum_Power)");
		} else if (data.Details.Fans === "") {
			alert("Please enter data in all the given fields (Fans)");
		} else if (data.Details.PFC === "") {
			alert("Please enter data in all the given fields (PFC)");
		} else if (data.Details.Main_Connectors === "") {
			alert("Please enter data in all the given fields (Main_Connectors)");
		} else if (data.Details.Rails === "") {
			alert("Please enter data in all the given fields (Rails)");
		} else if (data.Details.PCI_Express_Connector === "") {
			alert(
				"Please enter data in all the given fields  (PCI_Express_Connector)"
			);
		} else if (data.Details.SATA_Power_Connector === "") {
			alert(
				"Please enter data in all the given fields  (SATA_Power_Connector)"
			);
		} else if (data.Details.SLI === "") {
			alert("Please enter data in all the given fields (SLI)");
		} else if (data.Details.Haswell_Support === "") {
			alert("Please enter data in all the given fields (Haswell_Support)");
		} else if (data.Details.CrossFire === "") {
			alert("Please enter data in all the given fields(CrossFire)");
		} else if (data.Details.Modular === "") {
			alert("Please enter data in all the given fields(Modular)");
		} else if (data.Details.Energy_Efficent === "") {
			alert("Please enter data in all the given fields (Energy_Efficent)");
		} else if (data.Details.Input_Voltage === "") {
			alert("Please enter data in all the given fields (Input_Voltage)");
		} else if (data.Details.Input_Frequency_Range === "") {
			alert(
				"Please enter data in all the given fields (Input_Frequency_Range)"
			);
		} else if (data.Details.Input_Current === "") {
			alert("Please enter data in all the given fields (Input_Current)");
		} else if (data.Details.Output === "") {
			alert("Please enter data in all the given fields (Output)");
		} else if (data.Details.Dimentions === "") {
			alert("Please enter data in all the given fields(Dimentions)");
		}  else if (data.Details.Max_PSU_Length === "") {
			alert("Please enter data in all the given fields(Max_PSU_Length)");
		}  else if (data.Details.Weight === "") {
			alert("Please enter data in all the given fields(Weight)");
		}  else if (data.Features.Connectors === "") {
			alert("Please enter data in all the given fields(Connectors)");
		}  else if (data.Features.Features === "") {
			alert("Please enter data in all the given fields(Features)");
		}  else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("type", data.Details.Type);
			formData.append("Maximum_Power", data.Details.Maximum_Power);
			formData.append("Fans", data.Details.Fans);
			formData.append("PFC", data.Details.PFC);
			formData.append("Main_Connectors", data.Details.Main_Connectors);
			formData.append("Rails", data.Details.Rails);
			formData.append("PCI_Express_Connector", data.Details.PCI_Express_Connector);
			formData.append("SATA_Power_Connector", data.Details.SATA_Power_Connector);
			formData.append("SLI", data.Details.SLI);
			formData.append("Haswell_Support", data.Details.Haswell_Support);
			formData.append("CrossFire", data.Details.CrossFire);
			formData.append("Modular", data.Details.Modular);
			formData.append("Energy_Efficent", data.Details.Energy_Efficent);
			formData.append("Input_Voltage", data.Details.Input_Voltage);
			formData.append("Input_Frequency_Range", data.Details.Input_Frequency_Range);
			formData.append("Input_Current", data.Details.Input_Current);
			formData.append("Output", data.Details.Output);
			formData.append("Dimentions", data.Details.Dimentions);
			formData.append("Max_PSU_Length", data.Details.Max_PSU_Length);
			formData.append("Weight", data.Details.Weight);
			formData.append("Connectors", data.Features.Connectors);
			formData.append("Features", data.Features.Features);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/psu/"+id, formData)
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Update PSU</h1>
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
									<label className={classes.label1} htmlFor="Maximum_Power">
										Maximum Power:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fans">
										Fans:
									</label>
									<br />
									<label className={classes.label1} htmlFor="PFC">
										PFC:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Main_Connectors">
										Main Connectors:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Rails">
										Rails:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="PCI_Express_Connector"
									>
										PCI Express Connector:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Connectors">
										Connectors:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Features">
										Features:
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
											setData({ ...data, Model:{...data.Model, brand: e.target.value} });
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
											setData({ ...data, Model:{...data.Model, series: e.target.value} });
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
											setData({ ...data, Model:{...data.Model, model: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="type"
										name="type"
										value={data.Details.Type}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Type: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Maximum_Power"
										name="Maximum_Power"
										value={data.Details.Maximum_Power}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Maximum_Power: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fans"
										name="Fans"
										value={data.Details.Fans}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Fans: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="PFC"
										name="PFC"
										value={data.Details.PFC}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, PFC: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Main_Connectors"
										name="Main_Connectors"
										value={data.Details.Main_Connectors}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Main_Connectors: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Rails"
										name="Rails"
										value={data.Details.Rails}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Rails: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="PCI_Express_Connector"
										name="PCI_Express_Connector"
										value={data.Details.PCI_Express_Connector}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, PCI_Express_Connector: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Connectors"
										name="Connectors"
										value={data.Features.Connectors}
										required
										onChange={(e) => {
											setData({ ...data, Features:{...data.Features, Connectors: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Features"
										name="Features"
										value={data.Features.Features}
										required
										onChange={(e) => {
											setData({ ...data, Features:{...data.Features, Features: e.target.value} });
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
									<label
										className={classes.label1}
										htmlFor="SATA_Power_Connector"
									>
										SATA_Power_Connector:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="SLI">
										SLI:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Haswell_Support">
										Haswell Support:
									</label>
									<br />
									<label className={classes.label1} htmlFor="CrossFire">
										Cross Fire:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Modular">
										Modular:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Energy_Efficent">
										Energy Efficent:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Input_Voltage">
										Input Voltage:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Input_Frequency_Range"
									>
										Input Frequency Range:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Input_Current">
										Input Current:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Output">
										Output:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Dimentions">
										Dimentions:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Max_PSU_Length">
										Max PSU Length:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Weight">
										Weight:
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
										id="SATA_Power_Connector"
										name="SATA_Power_Connector"
										value={data.Details.SATA_Power_Connector}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, SATA_Power_Connector: e.target.value} });
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
										id="SLI"
										name="SLI"
										value={data.Details.SLI}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, SLI: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Haswell_Support"
										name="Haswell_Support"
										value={data.Details.Haswell_Support}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Haswell_Support: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="CrossFire"
										name="CrossFire"
										value={data.Details.CrossFire}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, CrossFire: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Modular"
										name="Modular"
										value={data.Details.Modular}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Modular: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Energy_Efficent"
										name="Energy_Efficent"
										value={data.Details.Energy_Efficent}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Energy_Efficent: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Input_Voltage"
										name="Input_Voltage"
										value={data.Details.Input_Voltage}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Input_Voltage: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Input_Frequency_Range"
										name="Input_Frequency_Range"
										value={data.Details.Input_Frequency_Range}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Input_Frequency_Range: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Input_Current"
										name="Input_Current"
										value={data.Details.Input_Current}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Input_Current: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Output"
										name="Output"
										value={data.Details.Output}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Output: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Dimentions"
										name="Dimentions"
										value={data.Details.Dimentions}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Dimentions: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Max_PSU_Length"
										name="Max_PSU_Length"
										value={data.Details.Max_PSU_Length}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Max_PSU_Length: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Weight"
										name="Weight"
									value={data.Details.Weight}
										required
										onChange={(e) => {
											setData({ ...data, Details:{...data.Details, Weight: e.target.value} });
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

export default UpdatePSU;
