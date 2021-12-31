import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateHeadset = (props) => {
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
				.get("accessories/headset/" + id)
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
		} else if (data.Model.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.Details.compatability === "") {
			alert("Please enter data in all the given fields(compatability)");
		} else if (data.Details.LED === "") {
			alert("Please enter data in all the given fields(LED)");
		} else if (data.Details.weight === "") {
			alert("Please enter data in all the given fields (weight)");
		} else if (data.connectivity.connectiontype === "") {
			alert("Please enter data in all the given fields (connectiontype)");
		} else if (data.connectivity.connector === "") {
			alert("Please enter data in all the given fields (connector)");
		} else if (data.connectivity.cordLength === "") {
			alert("Please enter data in all the given fields (cordLength)");
		} else if (data.features.feature === "") {
			alert("Please enter data in all the given fields  (feature)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("model", data.Model.model);
			formData.append("compatability", data.Details.compatability);
			formData.append("LED", data.Details.LED);
			formData.append("weight", data.Details.weight);
			formData.append("connectiontype", data.connectivity.connectiontype);
			formData.append("connector", data.connectivity.connector);
			formData.append("cordLength", data.connectivity.cordLength);
			formData.append("feature", data.features.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("accessories/headset/"+id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/manageheadset");
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
						<h1 className={classes.h11}>Update Headset</h1>
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
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label1} htmlFor="compatability">
										compatability:
									</label>

									<br />
									<label className={classes.label1} htmlFor="feature">
										feature:
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
											setData({ ...data,Model:{...data.Model ,brand: e.target.value} });
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
											setData({ ...data,Model:{...data.Model ,model: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="compatability"
										name="compatability"
										value={data.Details.compatability}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details ,compatability: e.target.value} });
										}}
									/>

									<br />
									<input
										className={classes.input1}
										type="text"
										id="feature"
										name="feature"
										value={data.features.feature}
										required
										onChange={(e) => {
											setData({ ...data,features:{...data.features ,feature: e.target.value} });
										
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
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />
									<label className={classes.label1} htmlFor="LED">
										LED:
									</label>
									<br />
									<label className={classes.label1} htmlFor="weight">
										weight:
									</label>
									<br />
									<label className={classes.label1} htmlFor="connectiontype">
										connection type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="connector">
										connector:
									</label>
									<br />
									<label className={classes.label1} htmlFor="cordLength">
										cord Length:
									</label>
									<br />

									<label className={classes.label1} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row1}>
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
										id="LED"
										name="LED"
										value={data.Details.LED}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details ,LED: e.target.value} });
										
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="weight"
										name="weight"
										value={data.Details.weight}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details ,weight: e.target.value} });
										
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="connectiontype"
										name="connectiontype"
										value={data.connectivity.connectiontype}
										required
										onChange={(e) => {
											setData({ ...data,connectivity:{...data.connectivity ,connectiontype: e.target.value} });
										
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="connector"
										name="connector"
										value={data.connectivity.connector}
										required
										onChange={(e) => {
											setData({ ...data,connectivity:{...data.connectivity ,connector: e.target.value} });
										
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="cordLength"
										name="cordLength"
										value={data.connectivity.cordLength}
										required
										onChange={(e) => {
											setData({ ...data,connectivity:{...data.connectivity ,cordLength: e.target.value} });
										
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

export default UpdateHeadset;
