import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";
const AddHardDrive = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		series: "",
		model: "",
		packing: "",

		Interface: "",
		Capacity: "",
		RPM: "",
		Cache: "",
		Average_Latency: "",

		Feature: "",
		Usage: "",

		FormFactor: "",
		Height: "",
		Width: "",
		Length: "",
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
		} else if (data.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.packing === "") {
			alert("Please enter data in all the given fields(packing)");
		} else if (data.Interface === "") {
			alert("Please enter data in all the given fields(Interface)");
		} else if (data.Capacity === "") {
			alert("Please enter data in all the given fields (Capacity)");
		} else if (data.RPM === "") {
			alert("Please enter data in all the given fields (RPM)");
		} else if (data.Cache === "") {
			alert("Please enter data in all the given fields (Cache)");
		} else if (data.Average_Latency === "") {
			alert("Please enter data in all the given fields (Average_Latency)");
		} else if (data.Feature === "") {
			alert("Please enter data in all the given fields  (Feature)");
		} else if (data.Usage === "") {
			alert("Please enter data in all the given fields  (Usage)");
		} else if (data.FormFactor === "") {
			alert("Please enter data in all the given fields (FormFactor)");
		} else if (data.Height === "") {
			alert("Please enter data in all the given fields (Height)");
		} else if (data.Width === "") {
			alert("Please enter data in all the given fields(Width)");
		} else if (data.Length === "") {
			alert("Please enter data in all the given fields(Length)");
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
			formData.append("packing", data.packing);
			formData.append("Interface", data.Interface);
			formData.append("Capacity", data.Capacity);
			formData.append("RPM", data.RPM);
			formData.append("Cache", data.Cache);
			formData.append("Average_Latency", data.Average_Latency);
			formData.append("Feature", data.Feature);
			formData.append("Usage", data.Usage);
			formData.append("FormFactor", data.FormFactor);
			formData.append("Height", data.Height);
			formData.append("Width", data.Width);
			formData.append("Length", data.Length);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/harddrive", formData)
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

	if (!loading) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Add HardDrive</h1>
						<form
							className={classes.form1}
							method="post"
							encpacking="multipart/form-data"
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
										placeholder="Enter Title"
										required
										onChange={(e) => {
											setData({ ...data, title: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="number"
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
										packing="text"
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
										packing="text"
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
										className={classes.input1}
										packing="text"
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
										packing="text"
										id="packing"
										name="packing"
										placeholder="Enter packing"
										required
										onChange={(e) => {
											setData({ ...data, packing: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Interface"
										name="Interface"
										placeholder="Enter Interface"
										required
										onChange={(e) => {
											setData({ ...data, Interface: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Capacity"
										name="Capacity"
										placeholder="Enter Capacity"
										required
										onChange={(e) => {
											setData({ ...data, Capacity: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="RPM"
										name="RPM"
										placeholder="Enter RPM"
										required
										onChange={(e) => {
											setData({ ...data, RPM: e.target.value });
										}}
									/>
									<br />

									<label className={classes.customfile1}>
										<input
											className={classes.inputfile1}
											type="file"
											packing="file"
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
										placeholder="Enter Usage"
										required
										onChange={(e) => {
											setData({ ...data, Usage: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="number"
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
										packing="text"
										id="FormFactor"
										name="FormFactor"
										placeholder="Enter FormFactor."
										required
										onChange={(e) => {
											setData({ ...data, FormFactor: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Height"
										name="Height"
										placeholder="Enter Height."
										required
										onChange={(e) => {
											setData({ ...data, Height: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Width"
										name="Width"
										placeholder="Enter Width."
										required
										onChange={(e) => {
											setData({ ...data, Width: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Length"
										name="Length"
										placeholder="Enter Length."
										required
										onChange={(e) => {
											setData({ ...data, Length: e.target.value });
										}}
									/>
									<br />

									<input
										className={classes.input1}
										packing="text"
										id="Average_Latency"
										name="Average_Latency"
										placeholder="Enter Average_Latency"
										required
										onChange={(e) => {
											setData({ ...data, Average_Latency: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Feature"
										name="Feature"
										placeholder="Enter Feature"
										required
										onChange={(e) => {
											setData({ ...data, Feature: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										packing="text"
										id="Cache"
										name="Cache"
										placeholder="Enter Cache."
										required
										onChange={(e) => {
											setData({ ...data, Cache: e.target.value });
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

export default AddHardDrive;
