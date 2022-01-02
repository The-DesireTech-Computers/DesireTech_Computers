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
				.get("accessories/mouse/" + id)
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
		} else if (data.Details.Type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Details.interface === "") {
			alert("Please enter data in all the given fields(interface)");
		} else if (data.Details.trackingmethod === "") {
			alert("Please enter data in all the given fields (trackingmethod)");
		} else if (data.Details.maximumdpi === "") {
			alert("Please enter data in all the given fields (maximumdpi)");
		} else if (data.Details.button === "") {
			alert("Please enter data in all the given fields (button)");
		} else if (data.Details.weightadjustment === "") {
			alert("Please enter data in all the given fields (weightadjustment)");
		} else if (data.Details.scrollingcapablity === "") {
			alert("Please enter data in all the given fields  (scrollingcapablity)");
		} else if (data.Details.color === "") {
			alert("Please enter data in all the given fields  (color)");
		} else if (data.features.feature === "") {
			alert("Please enter data in all the given fields (feature)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("name", data.Model.name);
			formData.append("model", data.Model.model);
			formData.append("type", data.Details.Type);
			formData.append("interface", data.Details.interface);
			formData.append("trackingmethod", data.Details.trackingmethod);
			formData.append("maximumdpi", data.Details.maximumdpi);
			formData.append("button", data.Details.button);
			formData.append("weightadjustment", data.Details.weightadjustment);
			formData.append("scrollingcapablity", data.Details.scrollingcapablity);
			formData.append("color", data.Details.color);
			formData.append("feature", data.features.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("accessories/mouse/"+id, formData)
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Update Mouse</h1>
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
											setData({ ...data,Model:{...data.Model,brand: e.target.value}  });
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
											setData({ ...data,Model:{...data.Model,name: e.target.value}  });
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
											setData({ ...data,Model:{...data.Model,model: e.target.value}  });
										}}
									/>
									<br />

									<input
										className={classes.input1}
										type="text"
										id="button"
										name="button"
										value={data.Details.button}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,button: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="weightadjustment"
										name="weightadjustment"
										value={data.Details.weightadjustment}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,weightadjustment: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="scrollingcapablity"
										name="scrollingcapablity"
										value={data.Details.scrollingcapablity}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,scrollingcapablity: e.target.value}  });
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
										value={data.Details.color}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,color: e.target.value}  });
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
										id="type"
										name="type"
										value={data.Details.Type}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Type: e.target.value}  });
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
											setData({ ...data,Details:{...data.Details,interface: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="trackingmethod"
										name="trackingmethod"
										value={data.Details.trackingmethod}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,trackingmethod: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="maximumdpi"
										name="maximumdpi"
										value={data.Details.maximumdpi}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,maximumdpi: e.target.value}  });
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
											setData({ ...data,features:{...data.features,feature: e.target.value}  });
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
