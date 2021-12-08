import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";

import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";

const UpdateSoundCard = (props) => {
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
		} else if (data.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.part === "") {
			alert("Please enter data in all the given fields(part)");
		} else if (data.Audio_Chipset === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Sample_Rate === "") {
			alert("Please enter data in all the given fields (Sample_Rate)");
		} else if (data.Digital_Audio === "") {
			alert("Please enter data in all the given fields (Digital_Audio)");
		} else if (data.SNR === "") {
			alert("Please enter data in all the given fields (SNR)");
		} else if (data.Encode === "") {
			alert("Please enter data in all the given fields (Encode)");
		} else if (data.Line_In === "") {
			alert("Please enter data in all the given fields  (Line_In)");
		} else if (data.Line_Out === "") {
			alert("Please enter data in all the given fields  (Line_Out)");
		} else if (data.SPDIF_Out === "") {
			alert("Please enter data in all the given fields (SPDIF_Out)");
		} else if (data.Other_Ports === "") {
			alert("Please enter data in all the given fields (Other_Ports)");
		} else if (data.Interface === "") {
			alert("Please enter data in all the given fields(Interface)");
		} else if (data.Operating_System_Supported === "") {
			alert(
				"Please enter data in all the given fields(Operating_System_Supported)"
			);
		} else if (data.Package_Contents === "") {
			alert("Please enter data in all the given fields (Package_Contents)");
		} else if (data.Dimentions === "") {
			alert("Please enter data in all the given fields (Dimentions)");
		}else if (thumbnail === null) {
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
			formData.append("part", data.part);
			formData.append("Audio_Chipset", data.Audio_Chipset);
			formData.append("Sample_Rate", data.Sample_Rate);
			formData.append("Digital_Audio", data.Digital_Audio);
			formData.append("SNR", data.SNR);
			formData.append("Encode", data.Encode);
			formData.append("Line_In", data.Line_In);
			formData.append("Line_Out", data.Line_Out);
			formData.append("SPDIF_Out", data.SPDIF_Out);
			formData.append("Other_Ports", data.Other_Ports);
			formData.append("Interface", data.Interface);
			formData.append(
				"Operating_System_Supported",
				data.Operating_System_Supported
			);
			formData.append("Package_Contents", data.Package_Contents);
			formData.append("Dimentions", data.Dimentions);
			

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/Soundcard", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managesoundcard");
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
						<h1 className={classes.h1}>Add Soundcard</h1>
						<form
							className={classes.form}
							method="post"
							encpart="multipart/form-data"
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
									<label className={classes.label} htmlFor="part">
										part:
									</label>
									<br />
									<label className={classes.label} htmlFor="Audio_Chipset">
										Audio_Chipset:
									</label>
									<br />
									<label className={classes.label} htmlFor="Sample_Rate">
										Sample Rate:
									</label>
									<br />
									<label className={classes.label} htmlFor="Digital_Audio">
									Digital Audio:
									</label>
									<br />
									<label className={classes.label} htmlFor="SNR">
									SNR:
									</label>
									<br />
									
									<label className={classes.label} htmlFor="thumbnail">
										Thumbnail:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										part="text"
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
										part="number"
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
										part="text"
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
										part="text"
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
										part="text"
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
										part="text"
										id="part"
										name="part"
										placeholder="Enter part"
										required
										onChange={(e) => {
											setData({ ...data, part: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Audio_Chipset"
										name="Audio_Chipset"
										placeholder="Enter Audio_Chipset"
										required
										onChange={(e) => {
											setData({ ...data, Audio_Chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Sample_Rate"
										name="Sample_Rate"
										placeholder="Enter Sample_Ratel"
										required
										onChange={(e) => {
											setData({ ...data, Sample_Rate: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Digital_Audio"
										name="Digital_Audio"
										placeholder="Enter Digital_Audio"
										required
										onChange={(e) => {
											setData({ ...data, Digital_Audio: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="SNR"
										name="SNR"
										placeholder="Enter SNR."
										required
										onChange={(e) => {
											setData({ ...data, SNR: e.target.value });
										}}
									/>
									<br />

									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											part="file"
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
									<label className={classes.label} htmlFor="Line_Out">
									Line Out:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="SPDIF_Out">
									SPDIF Out:
									</label>
									<br />
									<label className={classes.label} htmlFor="Other_Ports">
									Other Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="Interface">
									Interface:
									</label>
									<br />
									<label className={classes.label} htmlFor="Operating_System_Supported">
									Operating System Supported:
									</label>
									<br />
									<label className={classes.label} htmlFor="System_Requirments">
									System Requirments:
									</label>
									<br />
									<label className={classes.label} htmlFor="Package_Contents">
									Package Contents:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="Encode"
									>
										Encode:
									</label>
									<br />
									<label className={classes.label} htmlFor="Line_In">
									Line In :
									</label>
									<br />
									<label className={classes.label} htmlFor="Dimentions">
									Dimentions:
									</label>
									
									<br />
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										part="text"
										id="Line_Out"
										name="Line_Out"
										placeholder="Enter Line Out"
										required
										onChange={(e) => {
											setData({ ...data, Line_Out: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="number"
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
										part="text"
										id="SPDIF_Out"
										name="SPDIF_Out"
										placeholder="Enter SPDIF Out."
										required
										onChange={(e) => {
											setData({ ...data, SPDIF_Out: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Other_Ports"
										name="Other_Ports"
										placeholder="Enter Other Ports."
										required
										onChange={(e) => {
											setData({ ...data, Other_Ports: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Interface"
										name="Interface"
										placeholder="Enter Interface."
										required
										onChange={(e) => {
											setData({ ...data, Interface: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Operating_System_Supported"
										name="Operating_System_Supported"
										placeholder="Enter Operating System Supported."
										required
										onChange={(e) => {
											setData({
												...data,
												Operating_System_Supported: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="System_Requirments"
										name="System_Requirments"
										placeholder="Enter System Requirments."
										required
										onChange={(e) => {
											setData({ ...data, System_Requirments: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Package_Contents"
										name="Package_Contents"
										placeholder="Enter Package Contents."
										required
										onChange={(e) => {
											setData({ ...data, Package_Contents: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Encode"
										name="Encode"
										placeholder="Enter Encode"
										required
										onChange={(e) => {
											setData({ ...data, Encode: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Line_In"
										name="Line_In"
										placeholder="Enter Line_In"
										required
										onChange={(e) => {
											setData({ ...data, Line_Out: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										part="text"
										id="Dimentions"
										name="Dimentions"
										placeholder="Enter Dimentions."
										required
										onChange={(e) => {
											setData({
												...data,
												Dimentions: e.target.value,
											});
										}}
									/>
								
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											part="file"
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
								part="submit"
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
export default UpdateSoundCard;
