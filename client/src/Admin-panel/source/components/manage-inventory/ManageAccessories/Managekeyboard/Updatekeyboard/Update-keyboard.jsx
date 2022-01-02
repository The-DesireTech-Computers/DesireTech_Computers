import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const Updatekeyboard = (props) => {
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
				.get("accessories/keyboard/" + id)
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
		} else if (data.Details.keyboardInterface === "") {
			alert("Please enter data in all the given fields(keyboardInterface)");
		} else if (data.Details.designStyle === "") {
			alert("Please enter data in all the given fields(designStyle)");
		} else if (data.Details.palmRest === "") {
			alert("Please enter data in all the given fields (palmRest)");
		} else if (data.Details.mechanicalKeyboard === "") {
			alert("Please enter data in all the given fields (mechanicalKeyboard)");
		} else if (data.Details.keyswitchtype === "") {
			alert("Please enter data in all the given fields (keyswitchtype)");
		} else if (data.Details.keyboardcolor === "") {
			alert("Please enter data in all the given fields (keyboardcolor)");
		} else if (data.Details.dimension === "") {
			alert("Please enter data in all the given fields  (dimension)");
		} else if (data.Details.backlit === "") {
			alert("Please enter data in all the given fields  (backlit)");
		} else if (data.Details.Type === "") {
			alert("Please enter data in all the given fields (Type)");
		} else if (data.features.feature === "") {
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
			formData.append("brand", data.Model.brand);
			formData.append("name", data.Model.name);
			formData.append("model", data.Model.model);
			formData.append("keyboardInterface", data.Details.keyboardInterface);
			formData.append("designStyle", data.Details.designStyle);
			formData.append("palmRest", data.Details.palmRest);
			formData.append("mechanicalKeyboard", data.Details.mechanicalKeyboard);
			formData.append("keyswitchtype", data.Details.keyswitchtype);
			formData.append("keyboardcolor", data.Details.keyboardcolor);
			formData.append("dimension", data.Details.dimension);
			formData.append("backlit", data.Details.backlit);
			formData.append("type", data.Details.Type);
			formData.append("feature", data.features.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("accessories/keyboard/"+id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managekeyboard");
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
						<h1 className={classes.h11}>Update Keyboard</h1>
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
									<label className={classes.label1} htmlFor="name">
										name:
									</label>
									<br />
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>

									<br />
									<label className={classes.label1} htmlFor="keyswitchtype">
										key switch type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="keyboardcolor">
										keyboard color:
									</label>
									<br />
									<label className={classes.label1} htmlFor="dimension">
										dimension:
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
											setData({ ...data,Model:{...data.Model, brand: e.target.value} });
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
											setData({ ...data,Model:{...data.Model, name: e.target.value} });
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
											setData({ ...data,Model:{...data.Model, model: e.target.value} });
										}}
									/>
									<br />

									<input
										className={classes.input1}
										type="text"
										id="keyswitchtype"
										name="keyswitchtype"
										value={data.Details.keyswitchtype}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, keyswitchtype: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="keyboardcolor"
										name="keyboardcolor"
										value={data.Details.keyboardcolor}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, keyboardcolor: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="dimension"
										name="dimension"
										value={data.Details.dimension}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, dimension: e.target.value} });
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
									<label className={classes.label1} htmlFor="backlit">
										backlit:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="Type">
										Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="keyboardInterface">
										keyboard Interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="designStyle">
										design Style:
									</label>
									<br />
									<label className={classes.label1} htmlFor="palmRest">
										palm Rest:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="mechanicalKeyboard"
									>
										mechanical Keyboard:
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
										id="backlit"
										name="backlit"
										value={data.Details.backlit}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, backlit: e.target.value} });
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
										id="Type"
										name="Type"
										value={data.Details.Type}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, Type: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="keyboardInterface"
										name="keyboardInterface"
										value={data.Details.keyboardInterface}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, keyboardInterface: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="designStyle"
										name="designStyle"
										value={data.Details.designStyle}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, designStyle: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="palmRest"
										name="palmRest"
										value={data.Details.palmRest}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details, palmRest: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="mechanicalKeyboard"
										name="mechanicalKeyboard"
										value={data.Details.mechanicalKeyboard}
										required
										onChange={(e) => {
										setData({ ...data,Details:{...data.Details, mechanicalKeyboard: e.target.value} });
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
											setData({ ...data,features:{...data.features, feature: e.target.value} });
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
export default Updatekeyboard;
