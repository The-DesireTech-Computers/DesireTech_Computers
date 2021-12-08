import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const AddMemory = (props) => {
	let [data, setData] = useState({
		title: "",
		price: 0,
		quantity: 0,

		brand: "",
		series: "",
		model: "",

		Capacity:0,
        type:"",
        Memory_Pins:0,
        speed:"",
        CAS_Latency:"",
        timing:"",
        voltage:"",
        ECC:"",
        Buffered:"",
        Multi_Channel_Kit:"",
        chipset:"",
        color:"",
        HeatSpreader:"",
        features:"",
        recommendUse:"",
        
		
		Power_Consumption:0,

		
       
	});
	let [thumbnail, setThumbnail] = useState(null);
	let [gallery, setGallery] = useState(null);
	let [loading, setLoading] = useState(false);

	let handelSubmitBtn = async () => {
		console.log(data);

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
			alert("Please enter data in all the given fields(model)");
		} else if (data.Capacity === "") {
			alert("Please enter data in all the given fields (Capacity)");
		} else if (data.type === "") {
			alert("Please enter data in all the given fields (type)");
		} else if (data.Memory_Pins === "") {
			alert("Please enter data in all the given fields (Memory_Pins)");
		} else if (data.speed === "") {
			alert("Please enter data in all the given fields (speed)");
		} else if (data.CAS_Latency === "") {
			alert("Please enter data in all the given fields (CAS_Latency)");
		} else if (data.timing === "") {
			alert("Please enter data in all the given fields  (timing)");
		} else if (data.voltage === "") {
			alert("Please enter data in all the given fields  (voltage)");
		} else if (data.ECC === "") {
			alert("Please enter data in all the given fields (ECC)");
		} else if (data.Buffered === "") {
			alert("Please enter data in all the given fields (Buffered)");
		} else if (data.Multi_Channel_Kit === "") {
			alert("Please enter data in all the given fields(Multi_Channel_Kit)");
		} else if (data.chipset === "") {
			alert(
				"Please enter data in all the given fields(chipset)"
			);
		} else if (data.color === "") {
			alert("Please enter data in all the given fields (color)");
		} else if (data.HeatSpreader === "") {
			alert("Please enter data in all the given fields (HeatSpreader)");
		} else if (data.features === "") {
			alert(
				"Please enter data in all the given fields (features)"
			);
		} else if (data.recommendUse === "") {
			alert("Please enter data in all the given fields (recommendUse)");
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields (Power_Consumption)");
		}else if (thumbnail === null) {
			alert("Please provide a picture as a thumbnail picture(thumbnail)");
		} else if (gallery === null) {
			alert("Please provide atleaste 1 picture as gallery(gallery)");
		}else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.brand);
			formData.append("series", data.series);
			formData.append("model", data.model);

			formData.append("Capacity", data.Capacity);
			formData.append("type", data.type);
			formData.append("Memory_Pins", data.Memory_Pins);
			formData.append("speed", data.speed);
			formData.append("CAS_Latency", data.CAS_Latency);
			formData.append("timing", data.timing);
			formData.append("voltage", data.voltage);
			formData.append("ECC", data.ECC);
			formData.append("Buffered", data.Buffered);
			formData.append("Multi_Channel_Kit", data.Multi_Channel_Kit);
			formData.append("chipset", data.chipset);
			formData.append("color", data.color);
			formData.append(
				"HeatSpreader",
				data.HeatSpreader
			);
			formData.append("features", data.features);
			formData.append("recommendUse", data.recommendUse);
			
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/memory", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managememory");
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
						<h1 className={classes.h1}>Add Memory</h1>
						<form
							className={classes.form}
							method="post"
							encprocessorType="multipart/form-data"
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
									<label className={classes.label} htmlFor="quantity">
										quantity:
									</label>
									<br />
									<label className={classes.label} htmlFor="brand">
										brand:
									</label>
									<br />
									<label className={classes.label} htmlFor="series">
										series:
									</label>
									<br />
									<label className={classes.label} htmlFor="model">
										model:
									</label>
									<br />
									<label className={classes.label} htmlFor="Capacity">
									Capacity:
									</label>
									<br />
									<label className={classes.label} htmlFor="Type">
									Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="Memory_Pins">
									Memory_Pins:
									</label>
									<br />
									<label className={classes.label} htmlFor="speed">
									speed:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="CAS_Latency"
									>
										CAS Latency:
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
										id="brand"
										name="brand"
										placeholder="Enter brand"
										required
										onChange={(e) => {
											setData({ ...data,brand: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="series"
										name="series"
										placeholder="Enter series"
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
										placeholder="Enter model"
										required
										onChange={(e) => {
											setData({ ...data, model: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
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
										className={classes.input}
										type="text"
										id="Type"
										name="Type"
										placeholder="Enter  Type."
										required
										onChange={(e) => {
											setData({ ...data, type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Memory_Pins"
										name="Memory_Pins"
										placeholder="Enter Memory Pins"
										required
										onChange={(e) => {
											setData({ ...data, Memory_Pins: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="speed"
										name="speed"
										placeholder="Enter speed"
										required
										onChange={(e) => {
											setData({ ...data, speed: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="CAS_Latency"
										name="CAS_Latency"
										placeholder="Enter CAS_Latency."
										required
										onChange={(e) => {
											setData({
												...data,
												CAS_Latency: e.target.value,
											});
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
									<label className={classes.label} htmlFor="ECC">
									ECC:
									</label>
									<br />
									<label className={classes.label} htmlFor="Buffered">
									Buffered:
									</label>
									<br />

									<label className={classes.label} htmlFor="Multi_Channel_Kit">
									Multi Channel Kit:
									</label>
									<br />
									<label className={classes.label} htmlFor="chipset">
									Chipset:
									</label>
									<br />
									<label className={classes.label} htmlFor="color">
									Color:
									</label>
									<br />
									<label className={classes.label} htmlFor="HeatSpreader">
									Heat Spreader:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="features"
									>
										Features:
									</label>
									<br />
									<label className={classes.label} htmlFor="recommendUse">
									Recommend Use:
									</label>
									<br />
									<label className={classes.label} htmlFor="Power_Consumption">
									Power Consumption:
									</label>
									<br />
									<label className={classes.label} htmlFor="voltage">
									Voltage:
									</label>
									<br />
									<label className={classes.label} htmlFor="timing">
									Timing:
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
										id="ECC"
										name="ECC"
										placeholder="Enter ECC"
										required
										onChange={(e) => {
											setData({ ...data, ECC: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Buffered"
										name="Buffered"
										placeholder="Enter Buffered"
										required
										onChange={(e) => {
											setData({ ...data, Buffered: e.target.value });
										}}
									/>
									<br />

									<input
										className={classes.input}
										Capacity="text"
										id="Multi_Channel_Kit"
										name="Multi_Channel_Kit"
										placeholder="Enter Multi_Channel_Kit."
										required
										onChange={(e) => {
											setData({ ...data, Multi_Channel_Kit: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="chipset"
										name="chipset"
										placeholder="Enter chipset."
										required
										onChange={(e) => {
											setData({ ...data, chipset: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="HeatSpreader"
										name="HeatSpreader"
										placeholder="Enter HeatSpreader."
										required
										onChange={(e) => {
											setData({ ...data, HeatSpreader: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="features"
										name="features"
										placeholder="Enter features."
										required
										onChange={(e) => {
											setData({
												...data,
												features: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="recommendUse"
										name="recommendUse"
										placeholder="Enter RecommendUse."
										required
										onChange={(e) => {
											setData({ ...data, recommendUse: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Power_Consumption"
										name="Power_Consumption"
										placeholder="Enter Power Consumption."
										required
										onChange={(e) => {
											setData({ ...data, Power_Consumption: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="voltage"
										name="voltage"
										placeholder="Enter voltage."
										required
										onChange={(e) => {
											setData({ ...data, voltage: e.target.value });
										}}
									/>

									<br />
									<input
										className={classes.input}
										type="text"
										id="timing"
										name="timing"
										placeholder="Enter timing."
										required
										onChange={(e) => {
											setData({ ...data, timing: e.target.value });
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
								Capacity="submit"
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

export default AddMemory;
