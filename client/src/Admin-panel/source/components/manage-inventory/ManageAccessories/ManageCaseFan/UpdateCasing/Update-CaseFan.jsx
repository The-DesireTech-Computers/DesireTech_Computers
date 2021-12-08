import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";

const UpdateCaseFan = (props) => {
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
				.get("accessories/CaseFan" + id)
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
		} else if (data.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Compatability === "") {
			alert("Please enter data in all the given fields(Compatability)");
		} else if (data.Size === "") {
			alert("Please enter data in all the given fields (Size)");
		} else if (data.BearingType === "") {
			alert("Please enter data in all the given fields (BearingType)");
		} else if (data.RPM === "") {
			alert("Please enter data in all the given fields (RPM)");
		} else if (data.AirFlow === "") {
			alert(
				"Please enter data in all the given fields (AirFlow)"
			);
		} else if (data.NoiseLvel === "") {
			alert("Please enter data in all the given fields  (NoiseLvel)");
		} else if (data.PowerConnector === "") {
			alert("Please enter data in all the given fields  (PowerConnector)");
		} else if (data.Color === "") {
			alert("Please enter data in all the given fields (Color)");
		} else if (data.LED === "") {
			alert("Please enter data in all the given fields (LED)");
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
			formData.append("series", data.series);
			formData.append("model", data.model);
			formData.append("type", data.type);
			formData.append("Compatability", data.Compatability);
			formData.append("Size", data.Size);
			formData.append("BearingType", data.BearingType);
			formData.append("RPM", data.RPM);
			formData.append(
				"AirFlow",
				data.AirFlow
			);
			formData.append("NoiseLvel", data.NoiseLvel);
			formData.append("PowerConnector", data.PowerConnector);
			formData.append("Color", data.Color);
			formData.append("LED", data.LED);
			formData.append("feature", data.feature);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("accessories/CaseFan", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managecasefan");
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
						<h1 className={classes.h1}>Add Case Fan</h1>
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
									<label className={classes.label} htmlFor="series">
										Series:
									</label>
									<br />
									<label className={classes.label} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label} htmlFor="type">
										Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="Compatability">
									Compatability:
									</label>
									
									<br />
									<label
										className={classes.label}
										htmlFor="AirFlow"
									>
										Air Flow:
									</label>
									<br />
									<label className={classes.label} htmlFor="NoiseLvel">
									Noise Lvel:
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
										id="series"
										name="series"
										placeholder="Enter Series"
										required
										onChange={(e) => {
											setData({ ...data, series: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
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
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="Compatability"
										name="Compatability"
										placeholder="Enter Compatability"
										required
										onChange={(e) => {
											setData({ ...data, Compatability: e.target.value });
										}}
									/>
									<br />
									    <input
										className={classes.input}
										type="text"
										id="AirFlow"
										name="AirFlow"
										placeholder="Enter Air Flow"
										required
										onChange={(e) => {
											setData({
												...data,
												AirFlow: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="NoiseLvel"
										name="NoiseLvel"
										placeholder="Enter Noise Lvel"
										required
										onChange={(e) => {
											setData({ ...data, NoiseLvel: e.target.value });
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
									<label className={classes.label} htmlFor="PowerConnector">
									PowerConnector:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="Color">
									Color:
									</label>
									<br />
									<label className={classes.label} htmlFor="LED">
									LED:
									</label>
									<br />
									<label className={classes.label} htmlFor="Size">
									Size:
									</label>
									<br />
									<label className={classes.label} htmlFor="BearingType">
									BearingType:
									</label>
									<br />
									<label className={classes.label} htmlFor="RPM">
									RPM:
									</label>
									<br />
									<label className={classes.label} htmlFor="feature">
									feature:
									</label>
									<br />
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										type="text"
										id="PowerConnector"
										name="PowerConnector"
										placeholder="Enter PowerConnector"
										required
										onChange={(e) => {
											setData({ ...data, PowerConnector: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="Color"
										name="Color"
										placeholder="Enter Color."
										required
										onChange={(e) => {
											setData({ ...data, Color: e.target.value });
										}}
									/>
									<br /> 
									<input
										className={classes.input}
										type="text"
										id="LED"
										name="LED"
										placeholder="Enter LED."
										required
										onChange={(e) => {
											setData({ ...data, LED: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Size"
										name="Size"
										placeholder="Enter Size"
										required
										onChange={(e) => {
											setData({ ...data, Size: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="BearingType"
										name="BearingType"
										placeholder="Enter With Bearing Type"
										required
										onChange={(e) => {
											setData({ ...data, BearingType: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="RPM"
										name="RPM"
										placeholder="Enter RPM."
										required
										onChange={(e) => {
											setData({
												...data,
												RPM: e.target.value,
											});
										}}
									/>
									<br />

									
									<input
										className={classes.input}
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

export default UpdateCaseFan;
