import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const AddCasing = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		series: "",
		model: "",

		type: "",
		specification: "",
		dimension: "",
		weight: "",
	
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
		} else if (data.specification === "") {
			alert("Please enter data in all the given fields(specification)");
		} else if (data.dimension === "") {
			alert("Please enter data in all the given fields (dimension)");
		} else if (data.weight === "") {
			alert("Please enter data in all the given fields (weight)");
		}  else if (thumbnail === null) {
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
			formData.append("specification", data.specification);
			formData.append("dimension", data.dimension);
			formData.append("weight", data.weight);
			
			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("accessories/microphone", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managemicrophone");
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
						<h1 className={classes.h1}>Add Microphone</h1>
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
									
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />
									<label className={classes.label} htmlFor="type">
										Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="specification">
									specification:
									</label>
									<br />
									<label className={classes.label} htmlFor="dimension">
									dimension:
									</label>
									<br />
									<label className={classes.label} htmlFor="weight">
									weight:
									</label>
									<br />

									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
									
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
										id="specification"
										name="specification"
										placeholder="Enter specification"
										required
										onChange={(e) => {
											setData({ ...data, specification: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
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
									<input
										className={classes.input}
										type="text"
										id="weight"
										name="weight"
										placeholder="Enter weight"
										required
										onChange={(e) => {
											setData({ ...data, weight: e.target.value });
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

export default AddCasing;
