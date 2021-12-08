import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const AddSSD = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		series: "",
		model: "",
		Device_Type: "",
		UsedFor: "",

		Interface: "",
		Capacity: "",
		Memory_Components: "",
		FormFactor: "",

		Max_Sequential_Read: "",
		Max_Sequential_Write: "",
		MTTF: "",
		Cache: "",

		Feature: "",

		Operating_Temperature: "",
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
		} else if (data.Device_Type === "") {
			alert("Please enter data in all the given fields(Device_Type)");
		} else if (data.UsedFor === "") {
			alert("Please enter data in all the given fields(UsedFor)");
		} else if (data.Interface === "") {
			alert("Please enter data in all the given fields (Interface)");
		} else if (data.Capacity === "") {
			alert("Please enter data in all the given fields (Capacity)");
		} else if (data.Memory_Components === "") {
			alert("Please enter data in all the given fields (Memory_Components)");
		} else if (data.FormFactor === "") {
			alert("Please enter data in all the given fields (FormFactor)");
		} else if (data.Max_Sequential_Read === "") {
			alert("Please enter data in all the given fields  (Max_Sequential_Read)");
		} else if (data.Max_Sequential_Write === "") {
			alert(
				"Please enter data in all the given fields  (Max_Sequential_Write)"
			);
		} else if (data.MTTF === "") {
			alert("Please enter data in all the given fields (MTTF)");
		} else if (data.Cache === "") {
			alert("Please enter data in all the given fields (MTTF)");
		}else if (data.Feature === "") {
			alert("Please enter data in all the given fields (Feature)");
		} else if (data.Operating_Temperature === "") {
			alert("Please enter data in all the given fields(Operating_Temperature)");
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
			formData.append("Device_Type", data.Device_Type);
			formData.append("UsedFor", data.UsedFor);
			formData.append("Interface", data.Interface);
			formData.append("Capacity", data.Capacity);
			formData.append("Memory_Components", data.Memory_Components);
			formData.append("FormFactor", data.FormFactor);
			formData.append("Max_Sequential_Read", data.Max_Sequential_Read);
			formData.append("Max_Sequential_Write", data.Max_Sequential_Write);
			formData.append("MTTF", data.MTTF);
			formData.append("Cache", data.Cache);
			formData.append("Feature", data.Feature);
			formData.append("Operating_Temperature", data.Operating_Temperature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/ssd", formData)
				.then((res) => {
					console.log("product Added successfully");
					console.log(data)
					setLoading(false);
					props.history.replace("/admin-panel/managessd");
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
						<h1 className={classes.h1}>Add SSD</h1>
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
									<label className={classes.label} htmlFor="Device_Type">
										Device_Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="UsedFor">
										UsedFor:
									</label>
									<br />
									<label className={classes.label} htmlFor="Interface">
									Interface:
									</label>
									<br />
									<label className={classes.label} htmlFor="Cache">
									Cache:
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
										id="Device_Type"
										name="Device_Type"
										placeholder="Enter Device Type"
										required
										onChange={(e) => {
											setData({ ...data, Device_Type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="UsedFor"
										name="UsedFor"
										placeholder="Enter UsedFor"
										required
										onChange={(e) => {
											setData({ ...data, UsedFor: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Interface"
										name="Interface"
										placeholder="Enter Interface"
										required
										onChange={(e) => {
											setData({ ...data, Interface: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Cache"
										name="Cache"
										placeholder="Enter Cache"
										required
										onChange={(e) => {
											setData({ ...data, Cache: e.target.value });
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
									<label className={classes.label} htmlFor="Max_Sequential_Write">
									Max Sequential Write:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="MTTF">
									MTTF:
									</label>
									<br />
									<label className={classes.label} htmlFor="Feature">
									Feature:
									</label>
									<br />
									<label className={classes.label} htmlFor="Operating_Temperature">
									Operating Temperature:
									</label>
									<br />
									<label className={classes.label} htmlFor="Capacity">
									Capacity:
									</label>
									<br />
									<label className={classes.label} htmlFor="Memory_Components">
									Memory_Components:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="FormFactor"
									>
										Form Factor:
									</label>
									<br />
									<label className={classes.label} htmlFor="Max_Sequential_Read">
									Max Sequential Reads:
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
										id="Max_Sequential_Write"
										name="Max_Sequential_Write"
										placeholder="Enter Max Sequential Write"
										required
										onChange={(e) => {
											setData({ ...data, Max_Sequential_Write: e.target.value });
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
										id="MTTF"
										name="MTTF"
										placeholder="Enter MTTF."
										required
										onChange={(e) => {
											setData({ ...data, MTTF: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Feature"
										name="Feature"
										placeholder="Enter Feature."
										required
										onChange={(e) => {
											setData({ ...data, Feature: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Operating_Temperature"
										name="Operating_Temperature"
										placeholder="Enter Operating Temperature."
										required
										onChange={(e) => {
											setData({ ...data, Operating_Temperature: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Capacity"
										name="Capacity"
										placeholder="Enter Capacity"
										required
										onChange={(e) => {
											setData({ ...data, Capacity: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Memory_Components"
										name="Memory_Components"
										placeholder="Enter Memory Components."
										required
										onChange={(e) => {
											setData({ ...data, Memory_Components: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="FormFactor"
										name="FormFactor"
										placeholder="Enter Form Factor"
										required
										onChange={(e) => {
											setData({ ...data, FormFactor: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Max_Sequential_Read"
										name="Max_Sequential_Read"
										placeholder="Enter Max Sequential Read"
										required
										onChange={(e) => {
											setData({
												...data,
												Max_Sequential_Read: e.target.value,
											});
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

export default AddSSD;
