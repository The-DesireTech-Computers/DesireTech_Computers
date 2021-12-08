import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const AddCasing = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		series: "",
		model: "",

		type: "",
		Color: "",
		Casing_Material: "",
		With_Power_Supply: "",
		Power_Supply_Mounted: "",
		Side_Panel_Window: "",
		Dust_Filters: "",

		Internal_Drive_Bays25: "",
		Internal_Drive_Bays35: "",
		Expansion_Slots: "",

		Front_Panel_Ports: "",

		Fan_Options: "",
		Rdiator_Options: "",

		Max_GPU_Length: "",
		Max_CPU_Cooler_Length: "",
		Max_PSU_Length: "",
		Case_Dimentions: "",
		Weight: "",
		Supported_Motherboard: "",
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
		} else if (data.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Color === "") {
			alert("Please enter data in all the given fields(Color)");
		} else if (data.Casing_Material === "") {
			alert("Please enter data in all the given fields (Casing_Material)");
		} else if (data.With_Power_Supply === "") {
			alert("Please enter data in all the given fields (With_Power_Supply)");
		} else if (data.Power_Supply_Mounted === "") {
			alert("Please enter data in all the given fields (Power_Supply_Mounted)");
		} else if (data.Supported_Motherboard === "") {
			alert(
				"Please enter data in all the given fields (Supported_Motherboard)"
			);
		} else if (data.Side_Panel_Window === "") {
			alert("Please enter data in all the given fields  (Side_Panel_Window)");
		} else if (data.Dust_Filters === "") {
			alert("Please enter data in all the given fields  (Dust_Filters)");
		} else if (data.Internal_Drive_Bays25 === "") {
			alert("Please enter data in all the given fields (Internal_Drive_Bays25)");
		} else if (data.Expansion_Slots === "") {
		} else if (data.Internal_Drive_Bays35 === "") {
			alert("Please enter data in all the given fields (Internal_Drive_Bays35)");
		} else if (data.Expansion_Slots === "") {
			alert("Please enter data in all the given fields (Expansion_Slots)");
		} else if (data.Front_Panel_Ports === "") {
			alert("Please enter data in all the given fields(Front_Panel_Ports)");
		} else if (data.Fan_Options === "") {
			alert("Please enter data in all the given fields(Fan_Options)");
		} else if (data.Rdiator_Options === "") {
			alert("Please enter data in all the given fields (Rdiator_Options)");
		} else if (data.Max_GPU_Length === "") {
			alert("Please enter data in all the given fields (Max_GPU_Length)");
		} else if (data.Max_CPU_Cooler_Length === "") {
			alert(
				"Please enter data in all the given fields (Max_CPU_Cooler_Length)"
			);
		} else if (data.Max_PSU_Length === "") {
			alert("Please enter data in all the given fields (Max_PSU_Length)");
		} else if (data.Case_Dimentions === "") {
			alert("Please enter data in all the given fields (Case_Dimentions)");
		} else if (data.Weight === "") {
			alert("Please enter data in all the given fields(Weight)");
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
			formData.append("Color", data.Color);
			formData.append("Casing_Material", data.Casing_Material);
			formData.append("With_Power_Supply", data.With_Power_Supply);
			formData.append("Power_Supply_Mounted", data.Power_Supply_Mounted);
			formData.append(
				"Supported_Motherboard",
				data.Supported_Motherboard
			);
			formData.append("Side_Panel_Window", data.Side_Panel_Window);
			formData.append("Dust_Filters", data.Dust_Filters);
			formData.append("Internal_Drive_Bays25", data.Internal_Drive_Bays25);
			formData.append("Internal_Drive_Bays35", data.Internal_Drive_Bays35);
			formData.append("Expansion_Slots", data.Expansion_Slots);
			formData.append("Front_Panel_Ports", data.Front_Panel_Ports);
			formData.append("Fan_Options", data.Fan_Options);
			formData.append("Rdiator_Options", data.Rdiator_Options);
			formData.append("Max_GPU_Length", data.Max_GPU_Length);
			formData.append("Max_CPU_Cooler_Length", data.Max_CPU_Cooler_Length);
			formData.append("Max_PSU_Length", data.Max_PSU_Length);
			formData.append("Case_Dimentions", data.Case_Dimentions);
			formData.append("Weight", data.Weight);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/casing", formData)
				.then((res) => {
					console.log("product Added successfully");
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
		form = (
			<div>
				<Navbar />
				<div className={classes.main}>
					<div className={classes.inputform}>
						<h1 className={classes.h1}>Add Casing</h1>
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
									<label className={classes.label} htmlFor="color">
										Color:
									</label>
									<br />
									<label className={classes.label} htmlFor="casingmaterial">
										Casing Material:
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
										htmlFor="Supported Motherboard"
									>
										Supported Motherboard:
									</label>
									<br />
									<label className={classes.label} htmlFor="dustfilters">
										Dust Filters:
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
										id="color"
										name="color"
										placeholder="Enter Color"
										required
										onChange={(e) => {
											setData({ ...data, Color: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="casingmaterial"
										name="casingmaterial"
										placeholder="Enter Casing Material"
										required
										onChange={(e) => {
											setData({ ...data, Casing_Material: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="withpowersupply"
										name="withpowersupply"
										placeholder="Enter With Power Supply"
										required
										onChange={(e) => {
											setData({ ...data, With_Power_Supply: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="powersupplymounted"
										name="powersupplymounted"
										placeholder="Enter Power Supply Mounted."
										required
										onChange={(e) => {
											setData({
												...data,
												Power_Supply_Mounted: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Supported_Motherboard"
										name="Supported_Motherboard"
										placeholder="Enter Supported Motherboard"
										required
										onChange={(e) => {
											setData({
												...data,
												Supported_Motherboard: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="dustfilters"
										name="dustfilters"
										placeholder="Enter Dust Filters"
										required
										onChange={(e) => {
											setData({ ...data, Dust_Filters: e.target.value });
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
									<label className={classes.label} htmlFor="sidepanelwindow">
										Side Panel Window:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="internaldrivebays">
									Internal Drive Bays 25:
									</label>
									<br/>
									<label className={classes.label} htmlFor="internaldrivebays">
									Internal Drive Bays 35:
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
									<label className={classes.label} htmlFor="weight">
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
										id="sidepanelwindow"
										name="sidepanelwindow"
										placeholder="Enter Side Panel Window"
										required
										onChange={(e) => {
											setData({ ...data, Side_Panel_Window: e.target.value });
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
										id="internaldrivebay25"
										name="internaldrivebay25"
										placeholder="Enter Internal Drive Bays 25."
										required
										onChange={(e) => {
											setData({ ...data, Internal_Drive_Bays25: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="internaldrivebay35"
										name="internaldrivebay35"
										placeholder="Enter Internal Drive Bays 35."
										required
										onChange={(e) => {
											setData({ ...data, Internal_Drive_Bays35: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="expansionslots"
										name="expansionslots"
										placeholder="Enter Expansion Slots."
										required
										onChange={(e) => {
											setData({ ...data, Expansion_Slots: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="frontpanelports"
										name="frontpanelports"
										placeholder="Enter Front Panel Ports."
										required
										onChange={(e) => {
											setData({ ...data, Front_Panel_Ports: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="fanoptions"
										name="fanoptions"
										placeholder="Enter Fan Options."
										required
										onChange={(e) => {
											setData({ ...data, Fan_Options: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
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
										type="text"
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
										type="text"
										id="maxcpucoolerlength"
										name="maxcpucoolerlength"
										placeholder="Enter Max CPU Cooler Length."
										required
										onChange={(e) => {
											setData({
												...data,
												Max_CPU_Cooler_Length: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
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
										type="text"
										id="casedimentions"
										name="casedimentions"
										placeholder="Enter Case Dimentions."
										required
										onChange={(e) => {
											setData({ ...data, Case_Dimentions: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="weight"
										name="weight"
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

export default AddCasing;
