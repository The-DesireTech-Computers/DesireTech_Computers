import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateMonitor = (props) => {
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
				.get("accessories/monitor/" + id)
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
		} else if (data.Model.cabinetcolor === "") {
			alert("Please enter data in all the given fields (sercabinetcolories)");
		} else if (data.Model.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.Details.glarescreen === "") {
			alert("Please enter data in all the given fields(glarescreen)");
		} else if (data.Details.displaytype === "") {
			alert("Please enter data in all the given fields(displaytype)");
		} else if (data.Details.adaptivesychronisetech === "") {
			alert(
				"Please enter data in all the given fields (adaptivesychronisetech)"
			);
		} else if (data.Details.pixelpitch === "") {
			alert("Please enter data in all the given fields (pixelpitch)");
		} else if (data.Details.refreshRatio === "") {
			alert("Please enter data in all the given fields (refreshRatio)");
		} else if (data.connectivity.connector === "") {
			alert("Please enter data in all the given fields (connector)");
		} else if (data.connectivity.inputvideocapability === "") {
			alert(
				"Please enter data in all the given fields  (inputvideocapability)"
			);
		} else if (data.power.powersupply === "") {
			alert("Please enter data in all the given fields  (powersupply)");
		} else if (data.power.powerconsumption === "") {
			alert("Please enter data in all the given fields (powerconsumption)");
		}  else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("cabinetcolor", data.Model.cabinetcolor);
			formData.append("model", data.Model.model);
			formData.append("glarescreen", data.Details.glarescreen);
			formData.append("displaytype", data.Details.displaytype);
			formData.append("adaptivesychronisetech", data.Details.adaptivesychronisetech);
			formData.append("pixelpitch", data.Details.pixelpitch);
			formData.append("refreshRatio", data.Details.refreshRatio);
			formData.append("connector", data.connectivity.connector);
			formData.append("inputvideocapability", data.connectivity.inputvideocapability);
			formData.append("powersupply", data.power.powersupply);
			formData.append("powerconsumption", data.power.powerconsumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("accessories/monitor/"+id, formData)
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Update Casing</h1>
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
									<label className={classes.label1} htmlFor="cabinetcolor">
										cabinetcolor:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Model">
										Model:
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
										id="cabinetcolor"
										name="cabinetcolor"
										value={data.Model.cabinetcolor}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,cabinetcolor: e.target.value}  });
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
										id="glarescreen"
										name="glarescreen"
									    value={data.Details.glarescreen}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,glarescreen: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="displaytype"
										name="displaytype"
										value={data.Details.displaytype}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,displaytype: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="adaptivesychronisetech"
										name="adaptivesychronisetech"
										value={data.Details.adaptivesychronisetech}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,adaptivesychronisetech: e.target.value}  });
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

									<label className={classes.label1} htmlFor="powerconsumption">
										power consumption:
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
										value={data.power.powersupply}
										required
										onChange={(e) => {
											setData({ ...data,power:{...data.power,powersupply: e.target.value}  });
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
										id="powerconsumption"
										name="powerconsumption"
										value={data.power.powerconsumption}
										required
										onChange={(e) => {
											setData({ ...data,power:{...data.power,powerconsumption: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="pixelpitch"
										name="pixelpitch"
										value={data.Details.pixelpitch}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,pixelpitch: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="refreshRatio"
										name="refreshRatio"
										value={data.Details.refreshRatio}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,refreshRatio: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="connector"
										name="connector"
										value={data.connectivity.connector}
										required
										onChange={(e) => {
											setData({ ...data,connectivity:{...data.connectivity,connector: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="inputvideocapability"
										name="inputvideocapability"
										value={data.connectivity.inputvideocapability}
										required
										onChange={(e) => {
											setData({ ...data,connectivity:{...data.connectivity,inputvideocapability: e.target.value}  });
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

export default UpdateMonitor;
