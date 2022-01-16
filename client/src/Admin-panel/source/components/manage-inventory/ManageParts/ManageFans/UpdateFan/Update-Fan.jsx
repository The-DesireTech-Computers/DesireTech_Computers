import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateFan = (props) => {
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
				.get("pcParts/fans/" + id)
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
		} else if (data.Model.Type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Block.Block_Compatability === "") {
			alert("Please enter data in all the given fields(Block_Compatability)");
		} else if (data.Block.Block_Dim === "") {
			alert("Please enter data in all the given fields (Block_Dim)");
		} else if (data.Block.Block_Material === "") {
			alert("Please enter data in all the given fields (Block_Material)");
		} else if (data.Radiator.Radiator_Dim === "") {
			alert("Please enter data in all the given fields (Radiator_Dim)");
		} else if (data.Radiator.Radiator_Material === "") {
			alert("Please enter data in all the given fields (Radiator_Material)");
		} else if (data.Fan.Fan_Size === "") {
			alert("Please enter data in all the given fields (Fan_Size)");
		} else if (data.Fan.Fan_Dim === "") {
			alert("Please enter data in all the given fields (Fan_Dim)");
		} else if (data.Fan.Bearing_Type === "") {
			alert("Please enter data in all the given fields  (Bearing_Type)");
		} else if (data.Fan.Fan_RPM === "") {
			alert("Please enter data in all the given fields  (Fan_RPM)");
		} else if (data.Fan.Fan_Noise === "") {
			alert("Please enter data in all the given fields (Fan_Noise)");
		} else if (data.Fan.Fan_Connector === "") {
			alert("Please enter data in all the given fields (Fan_Connector)");
		} else if (data.Fan.color === "") {
			alert("Please enter data in all the given fields(color)");
		} else if (data.Tube.Tube_Dim === "") {
			alert("Please enter data in all the given fields(Tube_Dim)");
		} else if (data.Tube.Tube_Material === "") {
			alert("Please enter data in all the given fields (Tube_Material)");
		} else if (data.Features === "") {
			alert("Please enter data in all the given fields (Features)");
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields (Power_Consumption)");
		}
		{
			let formData = new FormData();
			console.log(data);
			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("type", data.Model.Type);

			formData.append("Block_Compatability", data.Block.Block_Compatability);
			formData.append("Block_Dim", data.Block.Block_Dim);
			formData.append("Block_Material", data.Block.Block_Material);

			formData.append("Radiator_Dim", data.Radiator.Radiator_Dim);
			formData.append("Radiator_Material", data.Radiator.Radiator_Material);

			formData.append("Fan_Size", data.Fan.Fan_Size);
			formData.append("Fan_Dim", data.Fan.Fan_Dim);
			formData.append("Bearing_Type", data.Fan.Bearing_Type);
			formData.append("Fan_RPM", data.Fan.Fan_RPM);
			formData.append("Fan_Air_Flow", data.Fan.Fan_Air_Flow);
			formData.append("Fan_Noise", data.Fan.Fan_Noise);
			formData.append("Fan_Connector", data.Fan.Fan_Connector);
			formData.append("color", data.Fan.color);

			formData.append("Tube_Dim", data.Tube.Tube_Dim);
			formData.append("Tube_Material", data.Tube.Tube_Material);

			formData.append("Features", data.Features);
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}
			await axios
				.put("pcParts/fans/" + data._id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managefans");
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
						<h1 className={classes.h11}>Add Fan</h1>
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
									<label className={classes.label1} htmlFor="type">
										Type:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Block_Compatability"
									>
										Block_Compatability:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Block_Dim">
										Block_Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Block_Material">
										Block Material:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Radiator_Dim">
										Radiator Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Radiator_Material">
										Radiator Material:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Size">
										Fan Size:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Power_Consumption">
										Power_Consumption:
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
										required
										value={data.title}
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
										required
										value={data.price}
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
										required
										value={data.Model.brand}
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
										required
										value={data.Model.series}
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
										required
										value={data.Model.model}
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
										required
										value={data.Model.Type}
										onChange={(e) => {
											setData({
												...data,
												Model: { ...data.Model, Type: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Block_Compatability"
										name="Block_Compatability"
										required
										value={data.Block.Block_Compatability}
										onChange={(e) => {
											setData({
												...data,
												Block: {
													...data.Block,
													Block_Compatability: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Block_Dim"
										name="Block_Dim"
										required
										value={data.Block.Block_Dim}
										onChange={(e) => {
											setData({
												...data,
												Block: { ...data.Block, Block_Dim: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Block_Material"
										name="Block_Material"
										required
										value={data.Block.Block_Material}
										onChange={(e) => {
											setData({
												...data,
												Block: {
													...data.Block,
													Block_Material: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Radiator_Dim"
										name="Radiator_Dim"
										required
										value={data.Radiator.Radiator_Dim}
										onChange={(e) => {
											setData({
												...data,
												Radiator: {
													...data.Radiator,
													Radiator_Dim: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Radiator_Material"
										name="Radiator_Material"
										required
										value={data.Radiator.Radiator_Material}
										onChange={(e) => {
											setData({
												...data,
												Radiator: {
													...data.Radiator,
													Radiator_Material: e.target.value,
												},
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Fan_Size"
										name="Fan_Size"
										required
										value={data.Fan.Fan_Size}
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Fan_Size: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Power_Consumption"
										name="Power_Consumption"
										required
										value={data.Power_Consumption}
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
									<label className={classes.label1} htmlFor="Fan_Dim">
										Fan Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="Bearing_Type">
										Bearing Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_RPM">
										Fan RPM:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Air_Flow">
										Fan Air Flow:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Noise">
										Fan Noise:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Connector">
										Fan Connector:
									</label>
									<br />
									<label className={classes.label1} htmlFor="color">
										color:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Tube_Dim">
										Tube Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Tube_Material">
										Tube Material:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Features">
										Features:
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
										id="Fan_Dim"
										name="Fan_Dim"
										required
										value={data.Fan.Fan_Dim}
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Fan_Dim: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="quantity"
										name="quantity"
										required
										value={data.quantity}
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
										id="Bearing_Type"
										name="Bearing_Type"
										value={data.Fan.Bearing_Type}
										required
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Bearing_Type: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_RPM"
										name="Fan_RPM"
										value={data.Fan.Fan_RPM}
										required
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Fan_RPM: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_Air_Flow"
										name="Fan_Air_Flow"
										value={data.Fan.Fan_Air_Flow}
										required
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Fan_Air_Flow: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_Noise"
										name="Fan_Noise"
										value={data.Fan.Fan_Noise}
										required
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Fan_Noise: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_Connector"
										name="Fan_Connector"
										value={data.Fan.Fan_Connector}
										required
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, Fan_Connector: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="color"
										name="color"
										value={data.Fan.color}
										required
										onChange={(e) => {
											setData({
												...data,
												Fan: { ...data.Fan, color: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Tube_Dim"
										name="Tube_Dim"
										value={data.Tube.Tube_Dim}
										required
										onChange={(e) => {
											setData({
												...data,
												Tube: { ...data.Tube, Tube_Dim: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Tube_Material"
										name="Tube_Material"
										value={data.Tube.Tube_Material}
										required
										onChange={(e) => {
											setData({
												...data,
												Tube: { ...data.Tube, Tube_Material: e.target.value },
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Features"
										name="Features"
										value={data.Features}
										required
										onChange={(e) => {
											setData({ ...data, Features: e.target.value });
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

export default UpdateFan;
