import { React, useState ,useEffect} from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const UpdateMemory = (props) => {
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
					.get("pcParts/memory/" + id)
					.then((res) => {
					
						setData(res.data);
						
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}, [id]);

	let handelSubmitBtn = async () => {
		

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
			alert("Please enter data in all the given fields(model)");
		} else if (data.Details.Capacity === "") {
			alert("Please enter data in all the given fields (Capacity)");
		} else if (data.Details.type === "") {
			alert("Please enter data in all the given fields (type)");
		} else if (data.Details.Memory_Pins === "") {
			alert("Please enter data in all the given fields (Memory_Pins)");
		} else if (data.Details.speed === "") {
			alert("Please enter data in all the given fields (speed)");
		} else if (data.Details.CAS_Latency === "") {
			alert("Please enter data in all the given fields (CAS_Latency)");
		} else if (data.Details.timing === "") {
			alert("Please enter data in all the given fields  (timing)");
		} else if (data.Details.voltage === "") {
			alert("Please enter data in all the given fields  (voltage)");
		} else if (data.Details.ECC === "") {
			alert("Please enter data in all the given fields (ECC)");
		} else if (data.Details.Buffered === "") {
			alert("Please enter data in all the given fields (Buffered)");
		} else if (data.Details.Multi_Channel_Kit === "") {
			alert("Please enter data in all the given fields(Multi_Channel_Kit)");
		} else if (data.Details.chipset === "") {
			alert(
				"Please enter data in all the given fields(chipset)"
			);
		} else if (data.Details.color === "") {
			alert("Please enter data in all the given fields (color)");
		} else if (data.Details.HeatSpreader === "") {
			alert("Please enter data in all the given fields (HeatSpreader)");
		} else if (data.Details.features === "") {
			alert(
				"Please enter data in all the given fields (features)"
			);
		} else if (data.Details.recommendUse === "") {
			alert("Please enter data in all the given fields (recommendUse)");
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields (Power_Consumption)");
		}else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);

			formData.append("Capacity", data.Details.Capacity);
			formData.append("type", data.Details.Type);
			formData.append("Memory_Pins", data.Details.Memory_Pins);
			formData.append("speed", data.Details.speed);
			formData.append("CAS_Latency", data.Details.CAS_Latency);
			formData.append("timing", data.Details.timing);
			formData.append("voltage", data.Details.voltage);
			formData.append("ECC", data.Details.ECC);
			formData.append("Buffered", data.Details.Buffered);
			formData.append("Multi_Channel_Kit", data.Details.Multi_Channel_Kit);
			formData.append("chipset", data.Details.chipset);
			formData.append("color", data.Details.color);
			formData.append(
				"HeatSpreader",
				data.Details.HeatSpreader
			);
			formData.append("features", data.Details.features);
			formData.append("recommendUse", data.Details.recommendUse);
			
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/memory/"+id, formData)
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main}>
					<div className={classes.inputform}>
						<h1 className={classes.h1}>Update Memory</h1>
						<form
							className={classes.form}
							method="put"
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
										value={data.title}
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
										className={classes.input}
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
										className={classes.input}
										type="text"
										id="brand"
										name="brand"
										value={data.Model.brand}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,brand: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="series"
										name="series"
										value={data.Model.series}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,series: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="model"
										name="model"
										value={data.Model.model}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,model: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Capacity"
										name="Capacity"
										value={data.Details.Capacity}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Capacity: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Type"
										name="Type"
										value={data.Details.Type}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Type: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Memory_Pins"
										name="Memory_Pins"
										value={data.Details.Memory_Pins}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Memory_Pins: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="speed"
										name="speed"
										value={data.Details.speed}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,speed: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="CAS_Latency"
										name="CAS_Latency"
										value={data.Details.CAS_Latency}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,CAS_Latency: e.target.value} });
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
										value={data.Details.ECC}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,ECC: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Buffered"
										name="Buffered"
										value={data.Details.Buffered}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Buffered: e.target.value} });
										}}
									/>
									<br />

									<input
										className={classes.input}
										Capacity="text"
										id="Multi_Channel_Kit"
										name="Multi_Channel_Kit"
										value={data.Details.Multi_Channel_Kit}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Multi_Channel_Kit: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="chipset"
										name="chipset"
										value={data.Details.chipset}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,chipset: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="color"
										name="color"
										value={data.Details.color}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,color: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="HeatSpreader"
										name="HeatSpreader"
										value={data.Details.HeatSpreader}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,HeatSpreader: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="features"
										name="features"
										value={data.Details.features}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,features: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="recommendUse"
										name="recommendUse"
										value={data.Details.recommendUse}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,recommendUse: e.target.value} });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="Power_Consumption"
										name="Power_Consumption"
										value={data.Power_Consumption}
										required
										onChange={(e) => {
											setData({ ...data ,Power_Consumption: e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="voltage"
										name="voltage"
										value={data.Details.voltage}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,voltage: e.target.value} });
										}}
									/>

									<br />
									<input
										className={classes.input}
										type="text"
										id="timing"
										name="timing"
										value={data.Details.timing}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,timing: e.target.value} });
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

export default UpdateMemory;
