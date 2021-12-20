import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const Updatemouse = (props) => {
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
		} else if (data.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.interface === "") {
			alert("Please enter data in all the given fields(interface)");
		} else if (data.trackingmethod === "") {
			alert("Please enter data in all the given fields (trackingmethod)");
		} else if (data.maximumdpi === "") {
			alert("Please enter data in all the given fields (maximumdpi)");
		} else if (data.button === "") {
			alert("Please enter data in all the given fields (button)");
		} else if (data.weightadjustment === "") {
			alert("Please enter data in all the given fields (weightadjustment)");
		} else if (data.scrollingcapablity === "") {
			alert("Please enter data in all the given fields  (scrollingcapablity)");
		} else if (data.color === "") {
			alert("Please enter data in all the given fields  (color)");
		} else if (data.feature === "") {
			alert("Please enter data in all the given fields (feature)");
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
			formData.append("name", data.series);
			formData.append("model", data.model);
			formData.append("type", data.type);
			formData.append("interface", data.interface);
			formData.append("trackingmethod", data.trackingmethod);
			formData.append("maximumdpi", data.maximumdpi);
			formData.append("button", data.button);
			formData.append("weightadjustment", data.weightadjustment);
			formData.append("scrollingcapablity", data.scrollingcapablity);
			formData.append("color", data.color);
			formData.append("feature", data.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("accessories/mouse", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managemouse");
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
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Add Mouse</h1>
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
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />

									<label className={classes.label1} htmlFor="button">
										button:
									</label>
									<br />
									<label className={classes.label1} htmlFor="weightadjustment">
										weight adjustment:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="scrollingcapablity"
									>
										scrolling capablity:
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
										placeholder="Enter Title"
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
										className={classes.input1}
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
										className={classes.input1}
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
										className={classes.input1}
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
										className={classes.input1}
										type="text"
										id="button"
										name="button"
										placeholder="Enter button."
										required
										onChange={(e) => {
											setData({
												...data,
												button: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="weightadjustment"
										name="weightadjustment"
										placeholder="Enter weight adjustment"
										required
										onChange={(e) => {
											setData({
												...data,
												weightadjustment: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="scrollingcapablity"
										name="scrollingcapablity"
										placeholder="Enter scrolling capablity"
										required
										onChange={(e) => {
											setData({ ...data, scrollingcapablity: e.target.value });
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
									<label className={classes.label1} htmlFor="color">
										color:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />
									<label className={classes.label1} htmlFor="type">
										Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="interface">
										interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="trackingmethod">
										tracking method:
									</label>
									<br />
									<label className={classes.label1} htmlFor="maximumdpi">
										maximumdpi:
									</label>
									<br />

									<label className={classes.label1} htmlFor="feature">
										feature:
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
										id="color"
										name="color"
										placeholder="Enter color"
										required
										onChange={(e) => {
											setData({ ...data, color: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
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
										className={classes.input1}
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
										className={classes.input1}
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
										className={classes.input1}
										type="text"
										id="trackingmethod"
										name="trackingmethod"
										placeholder="Enter tracking method"
										required
										onChange={(e) => {
											setData({ ...data, trackingmethod: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="maximumdpi"
										name="maximumdpi"
										placeholder="Enter Wmaximumdpi"
										required
										onChange={(e) => {
											setData({ ...data, maximumdpi: e.target.value });
										}}
									/>
									<br />

									<input
										className={classes.input1}
										type="text"
										id="feature"
										name="feature"
										placeholder="Enter feature."
										required
										onChange={(e) => {
											setData({ ...data, feature: e.target.value });
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

export default Updatemouse;
