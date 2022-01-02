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
				.get("accessories/webcam/" + id)
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
		} else if (data.Model.name === "") {
			alert("Please enter data in all the given fields (name)");
		} else if (data.Model.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.Details.interface === "") {
			alert("Please enter data in all the given fields(interface)");
		} else if (data.Details.color === "") {
			alert("Please enter data in all the given fields(Color)");
		} else if (data.Details.videoResolution === "") {
			alert("Please enter data in all the given fields (videoResolution)");
		} else if (data.Details.maximumResolution === "") {
			alert("Please enter data in all the given fields (maximumResolution)");
		} else if (data.Details.focusSetting === "") {
			alert("Please enter data in all the given fields (focusSetting)");
		} else if (data.Details.lens === "") {
			alert("Please enter data in all the given fields (lens)");
		} else if (data.Details.operatingSystem === "") {
			alert("Please enter data in all the given fields  (operatingSystem)");
		} else if (data.features.feature === "") {
			alert("Please enter data in all the given fields  (feature)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("name", data.Model.name);
			formData.append("model", data.Model.model);
			formData.append("interface", data.Details.interface);
			formData.append("color", data.Details.color);
			formData.append("videoResolution", data.Details.videoResolution);
			formData.append("maximumResolution", data.Details.maximumResolution);
			formData.append("focusSetting", data.Details.focusSetting);
			formData.append("lens", data.Details.lens);
			formData.append("operatingSystem", data.Details.operatingSystem);
			formData.append("feature", data.features.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("accessories/webcam/"+id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managewebacam");
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
						<h1 className={classes.h11}>Update Casing</h1>
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
									<label className={classes.label1} htmlFor="name">
										name:
									</label>
									<br />
								
									<label className={classes.label1} htmlFor="focusSetting">
										focusSetting:
									</label>
									<br />
									<label className={classes.label1} htmlFor="lens">
										lens:
									</label>
									<br />
									<label className={classes.label1} htmlFor="operatingSystem">
										operatingSystem:
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
											setData({ ...data,Model:{...data.Model,brand: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="name"
										name="name"
										value={data.Model.name}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,name: e.target.value} });
										}}
									/>
									<br />
								
									<input
										className={classes.input1}
										type="text"
										id="focusSetting"
										name="focusSetting"
										value={data.Details.focusSetting}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,focusSetting: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="lens"
										name="lens"
										value={data.Details.lens}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,lens: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="operatingSystem"
										name="operatingSystem"
										value={data.Details.operatingSystem}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,operatingSystem: e.target.value} });
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
									<label className={classes.label1} htmlFor="feature">
										feature:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label1} htmlFor="interface">
										interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="color">
										Color:
									</label>
									<br />
									<label className={classes.label1} htmlFor="videoResolution">
										videoResolution:
									</label>
									<br />
									<label className={classes.label1} htmlFor="maximumResolution">
										maximumResolution:
									</label>
									<br />
									<label className={classes.label1} htmlFor="gallery">
										Gallery:
									</label>
									<br />
								
								</div>
								<div className={classes.row1}>
								<input
										className={classes.input1}
										type="text"
										id="feature"
										name="feature"
										value={data.features.feature}
										required
										onChange={(e) => {
											setData({ ...data,features:{...data.features,feature: e.target.value} });
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
										id="model"
										name="model"
										value={data.Model.model}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,model: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="interface"
										name="interface"
										value={data.Details.interface}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,interface: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="color"
										name="color"
										value={data.Details.color}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,color: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="videoResolution"
										name="videoResolution"
										value={data.Details.videoResolution}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,videoResolution: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="maximumResolution"
										name="maximumResolution"
										value={data.Details.maximumResolution}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,maximumResolution: e.target.value} });
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

export default UpdateParts;
