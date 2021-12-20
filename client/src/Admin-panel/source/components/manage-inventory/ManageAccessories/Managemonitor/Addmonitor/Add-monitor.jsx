import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";
const AddCasing = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		cabinetcolor: "",
		model: "",

		glarescreen: "",
		displaytype: "",
		adaptivesychronisetech: "",
		pixelpitch: "",
		refreshRatio: "",

		connector: "",
		inputvideocapability: "",
		powersupply: "",

		powerconsumption: "",
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
		} else if (data.cabinetcolor === "") {
			alert("Please enter data in all the given fields (sercabinetcolories)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.glarescreen === "") {
			alert("Please enter data in all the given fields(glarescreen)");
		} else if (data.displaytype === "") {
			alert("Please enter data in all the given fields(displaytype)");
		} else if (data.adaptivesychronisetech === "") {
			alert(
				"Please enter data in all the given fields (adaptivesychronisetech)"
			);
		} else if (data.pixelpitch === "") {
			alert("Please enter data in all the given fields (pixelpitch)");
		} else if (data.refreshRatio === "") {
			alert("Please enter data in all the given fields (refreshRatio)");
		} else if (data.connector === "") {
			alert("Please enter data in all the given fields (connector)");
		} else if (data.inputvideocapability === "") {
			alert(
				"Please enter data in all the given fields  (inputvideocapability)"
			);
		} else if (data.powersupply === "") {
			alert("Please enter data in all the given fields  (powersupply)");
		} else if (data.powerconsumption === "") {
			alert("Please enter data in all the given fields (powerconsumption)");
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
			formData.append("cabinetcolor", data.cabinetcolor);
			formData.append("model", data.model);
			formData.append("glarescreen", data.glarescreen);
			formData.append("displaytype", data.displaytype);
			formData.append("adaptivesychronisetech", data.adaptivesychronisetech);
			formData.append("pixelpitch", data.pixelpitch);
			formData.append("refreshRatio", data.refreshRatio);
			formData.append("connector", data.connector);
			formData.append("inputvideocapability", data.inputvideocapability);
			formData.append("powersupply", data.powersupply);
			formData.append("powerconsumption", data.powerconsumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("accessories/monitor", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managemonitor");
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
						<h1 className={classes.h11}>Add Monitor</h1>
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
									<label className={classes.label1} htmlFor="cabinetcolor">
										cabinetcolor:
									</label>
									<br />
									<label className={classes.label1} htmlFor="glarescreen">
										glarescreen:
									</label>
									<br />
									<label className={classes.label1} htmlFor="displaytype">
										displaytype:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="adaptivesychronisetech"
									>
										adaptive sychronisetech:
									</label>
									<br />

									<label className={classes.label1} htmlFor="powersupply">
										powersupply:
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
										id="cabinetcolor"
										name="cabinetcolor"
										placeholder="Enter cabinetcolor"
										required
										onChange={(e) => {
											setData({ ...data, cabinetcolor: e.target.value });
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
										id="glarescreen"
										name="glarescreen"
										placeholder="Enter glarescreen"
										required
										onChange={(e) => {
											setData({ ...data, glarescreen: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="displaytype"
										name="displaytype"
										placeholder="Enter displaytype"
										required
										onChange={(e) => {
											setData({ ...data, displaytype: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="adaptivesychronisetech"
										name="adaptivesychronisetech"
										placeholder="Enteradaptive sychronisetechg "
										required
										onChange={(e) => {
											setData({
												...data,
												adaptivesychronisetech: e.target.value,
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
									<label className={classes.label1} htmlFor="powersupply">
										power supply:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />
									<label className={classes.label1} htmlFor="pixelpitch">
										pixel pitch:
									</label>
									<br />
									<label className={classes.label1} htmlFor="refreshRatio">
										refresh Ratio:
									</label>
									<br />
									<label className={classes.label1} htmlFor="connector">
										connector:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="inputvideocapability"
									>
										input video capability:
									</label>
									<br />

									<label className={classes.label1} htmlFor="powerconsumption">
										power consumption:
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
										id="powersupply"
										name="powersupply"
										placeholder="Enter power supply"
										required
										onChange={(e) => {
											setData({ ...data, powersupply: e.target.value });
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
										id="pixelpitch"
										name="pixelpitch"
										placeholder="Enter pixelpitch"
										required
										onChange={(e) => {
											setData({ ...data, pixelpitch: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="refreshRatio"
										name="refreshRatio"
										placeholder="Enter refresh Ratio."
										required
										onChange={(e) => {
											setData({
												...data,
												refreshRatio: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="connector"
										name="connector"
										placeholder="Enter connector"
										required
										onChange={(e) => {
											setData({
												...data,
												MotherBoard_Compatibility: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="inputvideocapability"
										name="inputvideocapability"
										placeholder="Enter inputvideocapability"
										required
										onChange={(e) => {
											setData({ ...data, Dust_Filters: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="powerconsumption"
										name="powerconsumption"
										placeholder="Enter power consumption."
										required
										onChange={(e) => {
											setData({ ...data, powerconsumption: e.target.value });
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

export default AddCasing;
