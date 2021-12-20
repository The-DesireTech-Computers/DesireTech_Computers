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
		} else if (data.brand === "") {
			alert("Please enter data in all the given fields(brand)");
		} else if (data.name === "") {
			alert("Please enter data in all the given fields (name)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.keyboardInterface === "") {
			alert("Please enter data in all the given fields(keyboardInterface)");
		} else if (data.designStyle === "") {
			alert("Please enter data in all the given fields(designStyle)");
		} else if (data.palmRest === "") {
			alert("Please enter data in all the given fields (palmRest)");
		} else if (data.mechanicalKeyboard === "") {
			alert("Please enter data in all the given fields (mechanicalKeyboard)");
		} else if (data.keyswitchtype === "") {
			alert("Please enter data in all the given fields (keyswitchtype)");
		} else if (data.keyboardcolor === "") {
			alert("Please enter data in all the given fields (keyboardcolor)");
		} else if (data.dimension === "") {
			alert("Please enter data in all the given fields  (dimension)");
		} else if (data.backlit === "") {
			alert("Please enter data in all the given fields  (backlit)");
		} else if (data.Type === "") {
			alert("Please enter data in all the given fields (Type)");
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
			formData.append("name", data.name);
			formData.append("model", data.model);
			formData.append("keyboardInterface", data.keyboardInterface);
			formData.append("designStyle", data.designStyle);
			formData.append("palmRest", data.palmRest);
			formData.append("mechanicalKeyboard", data.mechanicalKeyboard);
			formData.append("keyswitchtype", data.keyswitchtype);
			formData.append("keyboardcolor", data.keyboardcolor);
			formData.append("dimension", data.dimension);
			formData.append("backlit", data.backlit);
			formData.append("Type", data.Type);
			formData.append("feature", data.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("accessories/keyboard", formData)
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

	if (!loading) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Add Keyboard</h1>
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
										id="keyswitchtype"
										name="keyswitchtype"
										placeholder="Enter key switch type."
										required
										onChange={(e) => {
											setData({
												...data,
												keyswitchtype: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="keyboardcolor"
										name="keyboardcolor"
										placeholder="Enter keyboard color"
										required
										onChange={(e) => {
											setData({
												...data,
												keyboardcolor: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="dimension"
										name="dimension"
										placeholder="Enter dimension"
										required
										onChange={(e) => {
											setData({ ...data, dimension: e.target.value });
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
										placeholder="Enter backlit"
										required
										onChange={(e) => {
											setData({ ...data, backlit: e.target.value });
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
										id="Type"
										name="Type"
										placeholder="Enter Type."
										required
										onChange={(e) => {
											setData({ ...data, Type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="keyboardInterface"
										name="keyboardInterface"
										placeholder="Enter keyboardInterface"
										required
										onChange={(e) => {
											setData({ ...data, keyboardInterface: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="designStyle"
										name="designStyle"
										placeholder="Enter design Style"
										required
										onChange={(e) => {
											setData({ ...data, designStyle: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="palmRest"
										name="palmRest"
										placeholder="Enter palm Rest"
										required
										onChange={(e) => {
											setData({ ...data, palmRest: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="mechanicalKeyboard"
										name="mechanicalKeyboard"
										placeholder="Enter mechanical Keyboard"
										required
										onChange={(e) => {
											setData({ ...data, mechanicalKeyboard: e.target.value });
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
export default Updatekeyboard;
