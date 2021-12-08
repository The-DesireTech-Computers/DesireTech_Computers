import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const AddWebcam = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		name: "",
		model: "",

		interface: "",
		Color: "",
		videoResolution: "",
		maximumResolution: "",
		focusSetting: "",
		lens: "",
		operatingSystem: "",
		feature: "",
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
		} else if (data.name === "") {
			alert("Please enter data in all the given fields (name)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.interface === "") {
			alert("Please enter data in all the given fields(interface)");
		} else if (data.Color === "") {
			alert("Please enter data in all the given fields(Color)");
		} else if (data.videoResolution === "") {
			alert("Please enter data in all the given fields (videoResolution)");
		} else if (data.maximumResolution === "") {
			alert("Please enter data in all the given fields (maximumResolution)");
		} else if (data.focusSetting === "") {
			alert("Please enter data in all the given fields (focusSetting)");
		} else if (data.lens === "") {
			alert("Please enter data in all the given fields (lens)");
		} else if (data.operatingSystem === "") {
			alert("Please enter data in all the given fields  (operatingSystem)");
		} else if (data.feature === "") {
			alert("Please enter data in all the given fields  (feature)");
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
			formData.append("name", data.name);
			formData.append("model", data.model);
			formData.append("interface", data.interface);
			formData.append("Color", data.Color);
			formData.append("videoResolution", data.videoResolution);
			formData.append("maximumResolution", data.maximumResolution);
			formData.append("focusSetting", data.focusSetting);
			formData.append("lens", data.lens);
			formData.append("operatingSystem", data.operatingSystem);
			formData.append("feature", data.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("accessories/webcam", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managewebcam");
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
						<h1 className={classes.h1}>Add Webcam</h1>
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
									<label className={classes.label} htmlFor="name">
										name:
									</label>

									<br />
									<label className={classes.label} htmlFor="focusSetting">
										focusSetting:
									</label>
									<br />
									<label className={classes.label} htmlFor="lens">
										lens:
									</label>
									<br />
									<label className={classes.label} htmlFor="operatingSystem">
										operatingSystem:
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
										id="name"
										name="name"
										placeholder="Enter name"
										required
										onChange={(e) => {
											setData({ ...data, name: e.target.value });
										}}
									/>
									<br />

									<input
										className={classes.input}
										type="text"
										id="focusSetting"
										name="focusSetting"
										placeholder="Enter focusSetting"
										required
										onChange={(e) => {
											setData({
												...data,
												focusSetting: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="lens"
										name="lens"
										placeholder="Enter lens"
										required
										onChange={(e) => {
											setData({
												...data,
												lens: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="operatingSystem"
										name="operatingSystem"
										placeholder="Enter operatingSystem"
										required
										onChange={(e) => {
											setData({ ...data, operatingSystem: e.target.value });
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
									<label className={classes.label} htmlFor="feature">
										feature:
									</label>

									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />
									<label className={classes.label} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label} htmlFor="interface">
										interface:
									</label>
									<br />
									<label className={classes.label} htmlFor="color">
										Color:
									</label>
									<br />
									<label className={classes.label} htmlFor="videoResolution">
										videoResolution:
									</label>
									<br />
									<label className={classes.label} htmlFor="maximumResolution">
										maximumResolution:
									</label>
									<br />
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
									<br />
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										type="text"
										id="feature"
										name="feature"
										placeholder="Enter feature"
										required
										onChange={(e) => {
											setData({ ...data, feature: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Quantity"
										name="Quantity"
										placeholder="Enter Quantity"
										required
										onChange={(e) => {
											setData({ ...data, Quantity: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Model"
										name="Model"
										placeholder="Enter Model"
										required
										onChange={(e) => {
											setData({ ...data, Model: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="interface"
										name="interface"
										placeholder="Enter interface"
										required
										onChange={(e) => {
											setData({ ...data, interface: e.target.value });
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
										id="videoResolution"
										name="videoResolution"
										placeholder="Enter videoResolution"
										required
										onChange={(e) => {
											setData({ ...data, videoResolution: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="maximumResolution"
										name="maximumResolution"
										placeholder="Enter maximumResolution"
										required
										onChange={(e) => {
											setData({ ...data, maximumResolution: e.target.value });
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

export default AddWebcam;
