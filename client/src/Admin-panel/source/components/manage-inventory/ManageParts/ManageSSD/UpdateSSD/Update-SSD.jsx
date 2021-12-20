import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";

import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateSSD = (props) => {
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
				.get("pcParts/ssd/" + id)
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
		} else if (data.Model.Device_Type === "") {
			alert("Please enter data in all the given fields(Device_Type)");
		} else if (data.Model.UsedFor === "") {
			alert("Please enter data in all the given fields(UsedFor)");
		} else if (data.Details.Interface === "") {
			alert("Please enter data in all the given fields (Interface)");
		} else if (data.Details.Capacity === "") {
			alert("Please enter data in all the given fields (Capacity)");
		} else if (data.Details.Memory_Components === "") {
			alert("Please enter data in all the given fields (Memory_Components)");
		} else if (data.Details.FormFactor === "") {
			alert("Please enter data in all the given fields (FormFactor)");
		} else if (data.Performance.Max_Sequential_Read === "") {
			alert("Please enter data in all the given fields  (Max_Sequential_Read)");
		} else if (data.Performance.Max_Sequential_Write === "") {
			alert(
				"Please enter data in all the given fields  (Max_Sequential_Write)"
			);
		} else if (data.Performance.MTTF === "") {
			alert("Please enter data in all the given fields (MTTF)");
		} else if (data.Performance.Cache === "") {
			alert("Please enter data in all the given fields (Cache)");
		} else if (data.Feature === "") {
			alert("Please enter data in all the given fields (Feature)");
		} else if (data.Environmental.Operating_Temperature === "") {
			alert("Please enter data in all the given fields(Operating_Temperature)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("Device_Type", data.Model.Device_Type);
			formData.append("UsedFor", data.Model.UsedFor);
			formData.append("Interface", data.Details.Interface);
			formData.append("Capacity", data.Details.Capacity);
			formData.append("Memory_Components", data.Details.Memory_Components);
			formData.append("FormFactor", data.Details.FormFactor);
			formData.append(
				"Max_Sequential_Read",
				data.Performance.Max_Sequential_Read
			);
			formData.append(
				"Max_Sequential_Write",
				data.Performance.Max_Sequential_Write
			);
			formData.append("MTTF", data.Performance.MTTF);
			formData.append("Cache", data.Performance.Cache);
			formData.append("Feature", data.Feature);
			formData.append(
				"Operating_Temperature",
				data.Environmental.Operating_Temperature
			);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/ssd/" + id, formData)
				.then((res) => {
					console.log("product Added successfully");
					console.log(formData);
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Add SSD</h1>
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
									<label className={classes.label1} htmlFor="Device_Type">
										Device_Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="UsedFor">
										UsedFor:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Interface">
										Interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Interface">
										Cache:
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
										id="Device_Type"
										name="Device_Type"
										value={data.Model.Device_Type}
										required
										onChange={(e) => {
											setData({
												...data,
												Model: { ...data.Model, Device_Type: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="UsedFor"
										name="UsedFor"
										value={data.Model.UsedFor}
										required
										onChange={(e) => {
											setData({
												...data,
												Model: { ...data.Model, UsedFor: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Interface"
										name="Interface"
										value={data.Details.Interface}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: { ...data.Details, Interface: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Cache"
										name="Cache"
										value={data.Performance.Cache}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													Cache: e.target.value,
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
									<label
										className={classes.label1}
										htmlFor="Max_Sequential_Write"
									>
										Max Sequential Write:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="MTTF">
										MTTF:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Feature">
										Feature:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Operating_Temperature"
									>
										Operating Temperature:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Capacity">
										Capacity:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Memory_Components">
										Memory_Components:
									</label>
									<br />
									<label className={classes.label1} htmlFor="FormFactor">
										Form Factor:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Max_Sequential_Read"
									>
										Max Sequential Reads:
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
										id="Max_Sequential_Write"
										name="Max_Sequential_Write"
										value={data.Performance.Max_Sequential_Write}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													Max_Sequential_Write: e.target.value,
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
										id="MTTF"
										name="MTTF"
										value={data.Performance.MTTF}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													MTTF: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Feature"
										name="Feature"
										value={data.Feature}
										required
										onChange={(e) => {
											setData({ ...data, Feature: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Operating_Temperature"
										name="Operating_Temperature"
										value={data.Environmental.Operating_Temperature}
										required
										onChange={(e) => {
											setData({
												...data,
												Environmental: {
													...data.Environmental,
													Operating_Temperature: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Capacity"
										name="Capacity"
										value={data.Details.Capacity}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: { ...data.Details, Capacity: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Memory_Components"
										name="Memory_Components"
										value={data.Details.Memory_Components}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													Memory_Components: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="FormFactor"
										name="FormFactor"
										value={data.Details.FormFactor}
										required
										onChange={(e) => {
											setData({
												...data,
												Details: {
													...data.Details,
													FormFactor: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Max_Sequential_Read"
										name="Max_Sequential_Read"
										value={data.Performance.Max_Sequential_Read}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Details,
													Max_Sequential_Read: e.target.value,
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

	return <div>{form}</div>;
};

export default UpdateSSD;
