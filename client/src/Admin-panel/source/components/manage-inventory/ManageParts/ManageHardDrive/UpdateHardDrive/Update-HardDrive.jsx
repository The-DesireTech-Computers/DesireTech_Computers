import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateHardDrive = (props) => {
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
				.get("pcParts/harddrive/" + id)
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
		} else if (data.Model.packing === "") {
			alert("Please enter data in all the given fields(packing)");
		} else if (data.Performance.Interface === "") {
			alert("Please enter data in all the given fields(Interface)");
		} else if (data.Performance.Capacity === "") {
			alert("Please enter data in all the given fields (Capacity)");
		} else if (data.Performance.RPM === "") {
			alert("Please enter data in all the given fields (RPM)");
		} else if (data.Performance.Cache === "") {
			alert("Please enter data in all the given fields (Cache)");
		} else if (data.Performance.Average_Latency === "") {
			alert("Please enter data in all the given fields (Average_Latency)");
		} else if (data.Feature.Feature === "") {
			alert("Please enter data in all the given fields  (Feature)");
		} else if (data.Feature.Usage === "") {
			alert("Please enter data in all the given fields  (Usage)");
		} else if (data.Dimentions.FormFactor === "") {
			alert("Please enter data in all the given fields (FormFactor)");
		} else if (data.Dimentions.Height === "") {
			alert("Please enter data in all the given fields (Height)");
		} else if (data.Dimentions.Width === "") {
			alert("Please enter data in all the given fields(Width)");
		} else if (data.Dimentions.Length === "") {
			alert("Please enter data in all the given fields(Length)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("packing", data.Model.packing);
			formData.append("Interface", data.Performance.Interface);
			formData.append("Capacity", data.Performance.Capacity);
			formData.append("RPM", data.Performance.RPM);
			formData.append("Cache", data.Performance.Cache);
			formData.append("Average_Latency", data.Performance.Average_Latency);
			formData.append("Feature", data.Feature.Feature);
			formData.append("Usage", data.Feature.Usage);
			formData.append("FormFactor", data.Dimentions.FormFactor);
			formData.append("Height", data.Dimentions.Height);
			formData.append("Width", data.Dimentions.Width);
			formData.append("Length", data.Dimentions.Length);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/harddrive/" + id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/manageharddrive");
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
						<h1 className={classes.h11}>Update HardDrive</h1>
						<form
							className={classes.form1}
							method="post"
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
									<label className={classes.label1} htmlFor="packing">
										packing:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Interface">
										Interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Capacity">
										Capacity :
									</label>
									<br />
									<label className={classes.label1} htmlFor="RPM">
										RPM:
									</label>
									<br />

									<label className={classes.label1} htmlFor="thumbnail">
										Thumbnail:
									</label>
								</div>
								<div className={classes.row1}>
									<input
										className={classes.input1}
										packing="text"
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
										packing="text"
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
										packing="text"
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
										packing="text"
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
										packing="text"
										id="packing"
										name="packing"
										value={data.Model.packing}
										required
										onChange={(e) => {
											setData({
												...data,
												Model: { ...data.Model, packing: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Interface"
										name="Interface"
										value={data.Performance.Interface}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													Interface: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Capacity"
										name="Capacity"
										value={data.Performance.Capacity}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													Capacity: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="RPM"
										name="RPM"
										value={data.Performance.RPM}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													RPM: e.target.value,
												},
											});
										}}
									/>
									<br />

									<label className={classes.customfile1}>
										<input
											className={classes.inputfile1}
											packing="file"
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
									<label className={classes.label1} htmlFor="Usage">
										Usage:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="FormFactor">
										FormFactor:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Height">
										Height:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Width">
										Width:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Length">
										Length:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Average_Latency">
										Average Latency:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Feature">
										Feature:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Cache">
										Cache:
									</label>
									<br />

									<label className={classes.label1} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row1}>
									<input
										className={classes.input1}
										packing="text"
										id="Usage"
										name="Usage"
										value={data.Feature.Usage}
										required
										onChange={(e) => {
											setData({
												...data,
												Feature: { ...data.Feature, Usage: e.target.value },
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
										packing="text"
										id="FormFactor"
										name="FormFactor"
										value={data.Dimentions.FormFactor}
										required
										onChange={(e) => {
											setData({
												...data,
												Dimentions: {
													...data.Dimentions,
													FormFactor: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Height"
										name="Height"
										value={data.Dimentions.Height}
										required
										onChange={(e) => {
											setData({
												...data,
												Dimentions: {
													...data.Dimentions,
													Height: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Width"
										name="Width"
										value={data.Dimentions.Width}
										required
										onChange={(e) => {
											setData({
												...data,
												Dimentions: {
													...data.Dimentions,
													Width: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Length"
										name="Length"
										value={data.Dimentions.Length}
										required
										onChange={(e) => {
											setData({
												...data,
												Dimentions: {
													...data.Dimentions,
													Length: e.target.value,
												},
											});
										}}
									/>
									<br />

									<input
										className={classes.input1}
										packing="text"
										id="Average_Latency"
										name="Average_Latency"
										value={data.Performance.Average_Latency}
										required
										onChange={(e) => {
											setData({
												...data,
												Performance: {
													...data.Performance,
													Average_Latency: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Feature"
										name="Feature"
										value={data.Feature.Feature}
										required
										onChange={(e) => {
											setData({
												...data,
												Feature: { ...data.Feature, Feature: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
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
											packing="file"
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
								packing="submit"
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

export default UpdateHardDrive;
