import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";

import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

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
				.get("pcParts/soundcard/" + id)
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
		} else if (data.Model.series === "") {
			alert("Please enter data in all the given fields (series)");
		} else if (data.Model.model === "") {
			alert("Please enter data in all the given fields (model)");
		} else if (data.Model.part === "") {
			alert("Please enter data in all the given fields(part)");
		} else if (data.Audio_Core.Audio_Chipset === "") {
			alert("Please enter data in all the given fields(Audio_Chipset)");
		} else if (data.Audio_Core.Sample_Rate === "") {
			alert("Please enter data in all the given fields (Sample_Rate)");
		} else if (data.Audio_Core.Digital_Audio === "") {
			alert("Please enter data in all the given fields (Digital_Audio)");
		} else if (data.Audio_Core.SNR === "") {
			alert("Please enter data in all the given fields (SNR)");
		} else if (data.Audio_Core.Encode === "") {
			alert("Please enter data in all the given fields (Encode)");
		} else if (data.Ports.Line_In === "") {
			alert("Please enter data in all the given fields  (Line_In)");
		} else if (data.Ports.Line_Out === "") {
			alert("Please enter data in all the given fields  (Line_Out)");
		} else if (data.Ports.SPDIF_Out === "") {
			alert("Please enter data in all the given fields (SPDIF_Out)");
		} else if (data.Ports.Other_Ports === "") {
			alert("Please enter data in all the given fields (Other_Ports)");
		} else if (data.Details.Interface === "") {
			alert("Please enter data in all the given fields(Interface)");
		} else if (data.Details.Operating_System_Supported === "") {
			alert(
				"Please enter data in all the given fields(Operating_System_Supported)"
			);
		} else if (data.Details.System_Requirments === "") {
			alert(
				"Please enter data in all the given fields(System_Requirments)"
			);
		} else if (data.Package_Contents === "") {
			alert("Please enter data in all the given fields (Package_Contents)");
		} else if (data.Dimentions === "") {
			alert("Please enter data in all the given fields (Dimentions)");
		}  else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("part", data.Model.part);
			formData.append("Audio_Chipset", data.Audio_Core.Audio_Chipset);
			formData.append("Sample_Rate", data.Audio_Core.Sample_Rate);
			formData.append("Digital_Audio", data.Audio_Core.Digital_Audio);
			formData.append("SNR", data.Audio_Core.SNR);
			formData.append("Encode", data.Audio_Core.Encode);
			formData.append("Line_In", data.Ports.Line_In);
			formData.append("Line_Out", data.Ports.Line_Out);
			formData.append("SPDIF_Out", data.Ports.SPDIF_Out);
			formData.append("Other_Ports", data.Ports.Other_Ports);
			formData.append("Interface", data.Details.Interface);
			formData.append(
				"Operating_System_Supported",
				data.Details.Operating_System_Supported
			);
			formData.append(
				"System_Requirments",
				data.Details.System_Requirments
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
				.put("pcParts/soundcard/"+id, formData)
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Update Soundcard</h1>
						<form
							className={classes.form1}
							method="post"
							enctype="multipart/form-data"
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
									<label className={classes.label1} htmlFor="part">
										part:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Audio_Chipset">
										Audio_Chipset:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Sample_Rate">
										Sample Rate:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Digital_Audio">
										Digital Audio:
									</label>
									<br />
									<label className={classes.label1} htmlFor="SNR">
										SNR:
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
											setData({ ...data,Model:{...data.Model,  brand: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="series"
										name="series"
										value={data.Model.series}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,  series: e.target.value }});
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
											setData({ ...data,Model:{...data.Model,  model: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="part"
										name="part"
										value={data.Model.part}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,  part: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Audio_Chipset"
										name="Audio_Chipset"
										value={data.Audio_Core.Audio_Chipset}
										required
										onChange={(e) => {
											setData({ ...data,Audio_Core:{...data.Audio_Core,  Audio_Chipset: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Sample_Rate"
										name="Sample_Rate"
										value={data.Audio_Core.Sample_Rate}
										required
										onChange={(e) => {
											setData({ ...data,Audio_Core:{...data.Audio_Core,  Sample_Rate: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Digital_Audio"
										name="Digital_Audio"
										value={data.Audio_Core.Digital_Audio}
										required
										onChange={(e) => {
											setData({ ...data,Audio_Core:{...data.Audio_Core,  Digital_Audio: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="SNR"
										name="SNR"
										value={data.Audio_Core.SNR}
										required
										onChange={(e) => {
											setData({ ...data,Audio_Core:{...data.Audio_Core,  SNR: e.target.value }});
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
									<label className={classes.label1} htmlFor="Line_Out">
										Line Out:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="SPDIF_Out">
										SPDIF Out:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Other_Ports">
										Other Ports:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Interface">
										Interface:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Operating_System_Supported"
									>
										Operating System Supported:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="System_Requirments"
									>
										System Requirments:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Package_Contents">
										Package Contents:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Encode">
										Encode:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Line_In">
										Line In :
									</label>
									<br />
									<label className={classes.label1} htmlFor="Dimentions">
										Dimentions:
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
										id="Line_Out"
										name="Line_Out"
										value={data.Ports.Line_Out}
										required
										onChange={(e) => {
											setData({ ...data,Ports:{...data.Ports,  Line_Out: e.target.value }});
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
										id="SPDIF_Out"
										name="SPDIF_Out"
										value={data.Ports.SPDIF_Out}
										required
										onChange={(e) => {
											setData({ ...data,Ports:{...data.Ports,  SPDIF_Out: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Other_Ports"
										name="Other_Ports"
										value={data.Ports.Other_Ports}
										required
										onChange={(e) => {
											setData({ ...data,Ports:{...data.Ports,  Other_Ports: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Interface"
										name="Interface"
										value={data.Details.Interface}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,  Interface: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Operating_System_Supported"
										name="Operating_System_Supported"
										value={data.Details.Operating_System_Supported}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,  Operating_System_Supported: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="System_Requirments"
										name="System_Requirments"
										value={data.Details.System_Requirments}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,  System_Requirments: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Package_Contents"
										name="Package_Contents"
										value={data.Package_Contents}
										required
										onChange={(e) => {
											setData({ ...data, Package_Contents: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Encode"
										name="Encode"
										value={data.Audio_Core.Encode}
										required
										onChange={(e) => {
											setData({ ...data,Audio_Core:{...data.Audio_Core,  Encode: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Line_In"
										name="Line_In"
										value={data.Ports.Line_In}
										required
										onChange={(e) => {
											setData({ ...data,Ports:{...data.Ports,  Line_In: e.target.value }});
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Dimentions"
										name="Dimentions"
									value={data.Dimentions}
										required
										onChange={(e) => {
											setData({
												...data,
												Dimentions: e.target.value,
											});
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
export default UpdateSoundCard;
