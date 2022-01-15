import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateParts = (props) => {
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
		console.log("Submit Buton");

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
		} else if (data.Details.Color === "") {
			alert("Please enter data in all the given fields(Color)");
		} else if (data.Details.Casing_Material === "") {
			alert("Please enter data in all the given fields (Casing_Material)");
		} else if (data.Details.With_Power_Supply === "") {
			alert("Please enter data in all the given fields (With_Power_Supply)");
		} else if (data.Details.Power_Supply_Mounted === "") {
			alert("Please enter data in all the given fields (Power_Supply_Mounted)");
		} else if (data.Dimentions.Supported_Motherboard === "") {
			alert(
				"Please enter data in all the given fields (Supported_Motherboard)"
			);
		} else if (data.Details.Side_Panel_Window === "") {
			alert("Please enter data in all the given fields  (Side_Panel_Window)");
		} else if (data.Details.Dust_Filters === "") {
			alert("Please enter data in all the given fields  (Dust_Filters)");
		} else if (data.Expansions.Internal_Drive_Bays25 === "") {
			alert(
				"Please enter data in all the given fields (Internal_Drive_Bays25)"
			);
		} else if (data.Expansions.Internal_Drive_Bays35 === "") {
			alert(
				"Please enter data in all the given fields (Internal_Drive_Bays35)"
			);
		} else if (data.Expansions.Expansion_Slots === "") {
			alert("Please enter data in all the given fields (Expansion_Slots)");
		} else if (data.Front_Panel_Ports === "") {
			alert("Please enter data in all the given fields(Front_Panel_Ports)");
		} else if (data.Cooling_System.Fan_Options === "") {
			alert("Please enter data in all the given fields(Fan_Options)");
		} else if (data.Cooling_System.Rdiator_Options === "") {
			alert("Please enter data in all the given fields (Rdiator_Options)");
		} else if (data.Dimentions.Max_GPU_Length === "") {
			alert("Please enter data in all the given fields (Max_GPU_Length)");
		} else if (data.Dimentions.Max_CPU_Cooler_Length === "") {
			alert(
				"Please enter data in all the given fields (Max_CPU_Cooler_Length)"
			);
		} else if (data.Dimentions.Max_PSU_Length === "") {
			alert("Please enter data in all the given fields (Max_PSU_Length)");
		} else if (data.Dimentions.Case_Dimentions === "") {
			alert("Please enter data in all the given fields (Case_Dimentions)");
		} else if (data.Dimentions.Weight === "") {
			alert("Please enter data in all the given fields(Weight)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("type", data.Details.type);
			formData.append("Color", data.Details.Color);
			formData.append("Casing_Material", data.Details.Casing_Material);
			formData.append("With_Power_Supply", data.Details.With_Power_Supply);
			formData.append(
				"Power_Supply_Mounted",
				data.Details.Power_Supply_Mounted
			);
			formData.append(
				"Supported_Motherboard",
				data.Dimentions.Supported_Motherboard
			);
			formData.append("Side_Panel_Window", data.Details.Side_Panel_Window);
			formData.append("Dust_Filters", data.Details.Dust_Filters);
			formData.append(
				"Internal_Drive_Bays25",
				data.Expansions.Internal_Drive_Bays25
			);
			formData.append(
				"Internal_Drive_Bays35",
				data.Expansions.Internal_Drive_Bays35
			);
			formData.append("Expansion_Slots", data.Expansions.Expansion_Slots);
			formData.append("Front_Panel_Ports", data.Front_Panel_Ports);
			formData.append("Fan_Options", data.Cooling_System.Fan_Options);
			formData.append("Rdiator_Options", data.Cooling_System.Rdiator_Options);
			formData.append("Max_GPU_Length", data.Dimentions.Max_GPU_Length);
			formData.append(
				"Max_CPU_Cooler_Length",
				data.Dimentions.Max_CPU_Cooler_Length
			);
			formData.append("Max_PSU_Length", data.Dimentions.Max_PSU_Length);
			formData.append("Case_Dimentions", data.Dimentions.Case_Dimentions);
			formData.append("Weight", data.Dimentions.Weight);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/casing/" + data._id, formData)
				.then((res) => {
					console.log("product updated successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managecasing");
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
							<h1 className={classes.h11}>Update Casing</h1>
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
										<label className={classes.label1} htmlFor="color">
											Color:
										</label>
										<br />
										<label className={classes.label1} htmlFor="casingmaterial">
											Casing Material:
										</label>
										<br />
										<label className={classes.label1} htmlFor="withpowersupply">
											With Power Supply:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="powersupplymounted"
										>
											Power Supply Mounted:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="Supported_Motherboard"
										>
											Supported Motherboard:
										</label>
										<br />
										<label className={classes.label1} htmlFor="dustfilters">
											Dust Filters:
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
											id="type"
											name="type"
											value={data.Details.Type}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: { ...data.Details, Type: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="color"
											name="color"
											value={data.Details.Color}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: { ...data.Details, Color: e.target.value },
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="casingmaterial"
											name="casingmaterial"
											value={data.Details.Casing_Material}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: {
														...data.Details,
														Casing_Material: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="withpowersupply"
											name="withpowersupply"
											value={data.Details.With_Power_Supply}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: {
														...data.Details,
														With_Power_Supply: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="powersupplymounted"
											name="powersupplymounted"
											value={data.Details.Power_Supply_Mounted}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: {
														...data.Details,
														Power_Supply_Mounted: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="Supported_Motherboard"
											name="Supported_Motherboard"
											value={data.Dimentions.Supported_Motherboard}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: {
														...data.Details,
														MotherBoard_Compatibility: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="dustfilters"
											name="dustfilters"
											value={data.Details.Dust_Filters}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: {
														...data.Details,
														Dust_Filters: e.target.value,
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
										<label className={classes.label1} htmlFor="sidepanelwindow">
											Side Panel Window:
										</label>
										<br />
										<label className={classes.label1} htmlFor="quantity">
											Quantity:
										</label>
										<br />

										<label
											className={classes.label1}
											htmlFor="Internal_Drive_Bays25"
										>
											Internal Drive Bays 25:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="Internal_Drive_Bays35"
										>
											Internal Drive Bays 35:
										</label>
										<br />
										<label className={classes.label1} htmlFor="expansionslots">
											Expansion Slots:
										</label>
										<br />
										<label className={classes.label1} htmlFor="frontpanelports">
											Front Panel Ports:
										</label>
										<br />
										<label className={classes.label1} htmlFor="fanoptions">
											Fan Options:
										</label>
										<br />
										<label className={classes.label1} htmlFor="radiatoroptions">
											Radiator Options:
										</label>
										<br />
										<label className={classes.label1} htmlFor="maxgpulength">
											Max GPU Length:
										</label>
										<br />
										<label
											className={classes.label1}
											htmlFor="maxcpucoolerlength"
										>
											Max CPU Cooler Length:
										</label>
										<br />
										<label className={classes.label1} htmlFor="maxpsulength">
											Max PSU Length:
										</label>
										<br />
										<label className={classes.label1} htmlFor="casedimentions">
											Case Dimentions:
										</label>
										<br />
										<label className={classes.label1} htmlFor="weight">
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
											id="sidepanelwindow"
											name="sidepanelwindow"
											value={data.Details.Side_Panel_Window}
											required
											onChange={(e) => {
												setData({
													...data,
													Details: {
														...data.Details,
														Side_Panel_Window: e.target.value,
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
											type="number"
											id="Internal_Drive_Bays25"
											name="Internal_Drive_Bays25"
											value={data.Expansions.Internal_Drive_Bays25}
											required
											onChange={(e) => {
												setData({
													...data,
													Expansions: {
														...data.Expansions,
														Internal_Drive_Bays25: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="Internal_Drive_Bays35"
											name="Internal_Drive_Bays35"
											value={data.Expansions.Internal_Drive_Bays35}
											required
											onChange={(e) => {
												setData({
													...data,
													Expansions: {
														...data.Expansions,
														Internal_Drive_Bays35: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="expansionslots"
											name="expansionslots"
											value={data.Expansions.Expansion_Slots}
											required
											onChange={(e) => {
												setData({
													...data,
													Expansions: {
														...data.Expansions,
														Expansion_Slots: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="frontpanelports"
											name="frontpanelports"
											value={data.Front_Panel_Ports}
											required
											onChange={(e) => {
												setData({ ...data, Front_Panel_Ports: e.target.value });
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="fanoptions"
											name="fanoptions"
											value={data.Cooling_System.Fan_Options}
											required
											onChange={(e) => {
												setData({
													...data,
													Cooling_System: {
														...data.Cooling_System,
														Fan_Options: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="radiatoroptions"
											name="radiatoroptions"
											value={data.Cooling_System.Rdiator_Options}
											required
											onChange={(e) => {
												setData({
													...data,
													Cooling_System: {
														...data.Cooling_System,
														Rdiator_Options: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="maxgpulength"
											name="maxgpulength"
											value={data.Dimentions.Max_GPU_Length}
											required
											onChange={(e) => {
												setData({
													...data,
													Dimentions: {
														...data.Dimentions,
														Max_GPU_Length: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="maxcpucoolerlength"
											name="maxcpucoolerlength"
											value={data.Dimentions.Max_CPU_Cooler_Length}
											required
											onChange={(e) => {
												setData({
													...data,
													Dimentions: {
														...data.Dimentions,
														Max_CPU_Cooler_Length: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="number"
											id="maxpsulength"
											name="maxpsulength"
											value={data.Dimentions.Max_PSU_Length}
											required
											onChange={(e) => {
												setData({
													...data,
													Dimentions: {
														...data.Dimentions,
														Max_PSU_Length: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="casedimentions"
											name="casedimentions"
											value={data.Dimentions.Case_Dimentions}
											required
											onChange={(e) => {
												setData({
													...data,
													Dimentions: {
														...data.Dimentions,
														Case_Dimentions: e.target.value,
													},
												});
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="text"
											id="weight"
											name="weight"
											value={data.Dimentions.Weight}
											required
											onChange={(e) => {
												setData({
													...data,
													Dimentions: {
														...data.Dimentions,
														Weight: e.target.value,
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
	}

	return <div>{form}</div>;
};

export default UpdateParts;
