import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";
const AddFan = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		series: "",
		model: "",
		type: "",

		Block_Compatability: "",
		Block_Dim: "",
		Block_Material: "",

		Radiator_Dim: "",
		Radiator_Material: "",

		Fan_Size: "",
		Fan_Dim: "",
		Bearing_Type: "",
		Fan_RPM: "",
		Fan_Air_Flow: "",
		Fan_Noise: "",
		Fan_Connector: "",
		color: "",

		Tube_Dim: "",
		Tube_Material: "",

		Features: "",
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
		} else if (data.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Block_Compatability === "") {
			alert("Please enter data in all the given fields(Block_Compatability)");
		} else if (data.Block_Dim === "") {
			alert("Please enter data in all the given fields (Block_Dim)");
		} else if (data.Block_Material === "") {
			alert("Please enter data in all the given fields (Block_Material)");
		} else if (data.Radiator_Dim === "") {
			alert("Please enter data in all the given fields (Radiator_Dim)");
		} else if (data.Radiator_Material === "") {
			alert("Please enter data in all the given fields (Radiator_Material)");
		} else if (data.Fan_Size === "") {
			alert("Please enter data in all the given fields (Fan_Size)");
		} else if (data.Fan_Dim === "") {
			alert("Please enter data in all the given fields (Fan_Dim)");
		} else if (data.Bearing_Type === "") {
			alert("Please enter data in all the given fields  (Bearing_Type)");
		} else if (data.Fan_RPM === "") {
			alert("Please enter data in all the given fields  (Fan_RPM)");
		} else if (data.Fan_Noise === "") {
			alert("Please enter data in all the given fields (Fan_Noise)");
		} else if (data.Fan_Connector === "") {
			alert("Please enter data in all the given fields (Fan_Connector)");
		} else if (data.color === "") {
			alert("Please enter data in all the given fields(color)");
		} else if (data.Tube_Dim === "") {
			alert("Please enter data in all the given fields(Tube_Dim)");
		} else if (data.Tube_Material === "") {
			alert("Please enter data in all the given fields (Tube_Material)");
		} else if (data.Features === "") {
			alert("Please enter data in all the given fields (Features)");
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

			formData.append("Block_Compatability", data.Block_Compatability);
			formData.append("Block_Dim", data.Block_Dim);
			formData.append("Block_Material", data.Block_Material);

			formData.append("Radiator_Dim", data.Radiator_Dim);
			formData.append("Radiator_Material", data.Radiator_Material);

			formData.append("Fan_Size", data.Fan_Size);
			formData.append("Fan_Dim", data.Fan_Dim);
			formData.append("Bearing_Type", data.Bearing_Type);
			formData.append("Fan_RPM", data.Fan_RPM);
			formData.append("Fan_Air_Flow", data.Fan_Air_Flow);
			formData.append("Fan_Noise", data.Fan_Noise);
			formData.append("Fan_Connector", data.Fan_Connector);
			formData.append("color", data.color);

			formData.append("Tube_Dim", data.Tube_Dim);
			formData.append("Tube_Material", data.Tube_Material);

			formData.append("Features", data.Features);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/fans", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managefans");
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
						<h1 className={classes.h11}>Add Fan</h1>
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
									<label className={classes.label1} htmlFor="series">
										Series:
									</label>
									<br />
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label1} htmlFor="type">
										Type:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Block_Compatability"
									>
										Block_Compatability:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Block_Dim">
										Block_Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Block_Material">
										Block Material:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Radiator_Dim">
										Radiator Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Radiator_Material">
										Radiator Material:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Size">
										Fan Size:
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
										id="Block_Compatability"
										name="Block_Compatability"
										placeholder="Enter Block_Compatability"
										required
										onChange={(e) => {
											setData({ ...data, Block_Compatability: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Block_Dim"
										name="Block_Dim"
										placeholder="Enter Block_Dim"
										required
										onChange={(e) => {
											setData({ ...data, Block_Dim: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Block_Material"
										name="Block_Material"
										placeholder="Enter Block_Material"
										required
										onChange={(e) => {
											setData({ ...data, Block_Material: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Radiator_Dim"
										name="Radiator_Dim"
										placeholder="Enter Radiator_Dim ."
										required
										onChange={(e) => {
											setData({
												...data,
												Radiator_Dim: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Radiator_Material"
										name="Radiator_Material"
										placeholder="Enter Radiator_Material"
										required
										onChange={(e) => {
											setData({
												...data,
												Radiator_Material: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Fan_Size"
										name="Fan_Size"
										placeholder="Enter Fan_Size"
										required
										onChange={(e) => {
											setData({ ...data, Fan_Size: e.target.value });
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
									<label className={classes.label1} htmlFor="Fan_Dim">
										Fan Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="Bearing_Type">
										Bearing Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_RPM">
										Fan RPM:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Air_Flow">
										Fan Air Flow:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Noise">
										Fan Noise:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Fan_Connector">
										Fan Connector:
									</label>
									<br />
									<label className={classes.label1} htmlFor="color">
										color:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Tube_Dim">
										Tube Dim:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Tube_Material">
										Tube Material:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Features">
										Features:
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
										id="Fan_Dim"
										name="Fan_Dim"
										placeholder="Enter Fan_Dim"
										required
										onChange={(e) => {
											setData({ ...data, Fan_Dim: e.target.value });
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
										id="Bearing_Type"
										name="Bearing_Type"
										placeholder="Enter Bearing_Type."
										required
										onChange={(e) => {
											setData({ ...data, Bearing_Type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_RPM"
										name="Fan_RPM"
										placeholder="Enter Fan_RPM."
										required
										onChange={(e) => {
											setData({ ...data, Fan_RPM: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_Air_Flow"
										name="Fan_Air_Flow"
										placeholder="Enter Fan_Air_Flow."
										required
										onChange={(e) => {
											setData({ ...data, Fan_Air_Flow: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_Noise"
										name="Fan_Noise"
										placeholder="Enter Fan_Noise."
										required
										onChange={(e) => {
											setData({ ...data, Fan_Noise: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Fan_Connector"
										name="Fan_Connector"
										placeholder="Enter Fan_Connector."
										required
										onChange={(e) => {
											setData({ ...data, Fan_Connector: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="color"
										name="color"
										placeholder="Enter color."
										required
										onChange={(e) => {
											setData({ ...data, color: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Tube_Dim"
										name="Tube_Dim"
										placeholder="Enter Tube_Dim."
										required
										onChange={(e) => {
											setData({
												...data,
												Tube_Dim: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Tube_Material"
										name="Tube_Material"
										placeholder="Enter Tube_Material."
										required
										onChange={(e) => {
											setData({ ...data, Tube_Material: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Features"
										name="Features"
										placeholder="Enter Features."
										required
										onChange={(e) => {
											setData({ ...data, Features: e.target.value });
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

export default AddFan;
