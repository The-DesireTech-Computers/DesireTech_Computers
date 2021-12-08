import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";
const AddVideoCard = (props) => {
	let [data, setData] = useState({
		title: "",
		price: "",
		quantity: "",

		brand: "",
		series: "",
		model: "",

		Interface: "",

		Manufacturer: "",
		GPU_Series: "",
		GPU: "",

		Effective_Memory_Clock: "",
		Memory_Size: "",
		Memory_Interface: "",
		Memory_Type: "",

		DirectX: "",
		OpenGL: "",

		HDMI: "",
		DisplayPort: "",

		Virtual_Reality_Ready: "",
		Cooler: "",
		System_Requirments: "",
		Power_Connectors: "",
		FormFactor: "",
		Max_GPU_Length: "",
		Card_Dimentions: "",
		SlotWidth: "",
		Power_Consumption: "",
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
		} else if (data.Interface === "") {
			alert("Please enter data in all the given fields(Interface)");
		} else if (data.Manufacturer === "") {
			alert("Please enter data in all the given fields(Manufacturer)");
		} else if (data.GPU_Series === "") {
			alert("Please enter data in all the given fields (GPU_Series)");
		} else if (data.GPU === "") {
			alert("Please enter data in all the given fields (GPU)");
		} else if (data.Effective_Memory_Clock === "") {
			alert("Please enter data in all the given fields (Effective_Memory_Clock)");
		} else if (data.Memory_Size === "") {
			alert(
				"Please enter data in all the given fields (Memory_Size)"
			);
		} else if (data.Memory_Interface === "") {
			alert("Please enter data in all the given fields  (Memory_Interface)");
		} else if (data.Memory_Type === "") {
			alert("Please enter data in all the given fields  (Memory_Type)");
		} else if (data.DirectX === "") {
			alert("Please enter data in all the given fields (DirectX)");
		} else if (data.OpenGL === "") {
			alert("Please enter data in all the given fields (OpenGL)");
		} else if (data.HDMI === "") {
			alert("Please enter data in all the given fields(HDMI)");
		} else if (data.DisplayPort === "") {
			alert("Please enter data in all the given fields(DisplayPort)");
		} else if (data.Virtual_Reality_Ready === "") {
			alert("Please enter data in all the given fields (Virtual_Reality_Ready)");
		} else if (data.Cooler === "") {
			alert("Please enter data in all the given fields (Cooler)");
		} else if (data.System_Requirments === "") {
			alert(
				"Please enter data in all the given fields (System_Requirments)"
			);
		} else if (data.Power_Connectors === "") {
			alert("Please enter data in all the given fields (Power_Connectors)");
		} else if (data.FormFactor === "") {
			alert("Please enter data in all the given fields (FormFactor)");
		} else if (data.Max_GPU_Length === "") {
			alert("Please enter data in all the given fields(Max_GPU_Length)");
		
		} else if (data.Card_Dimentions === "") {
			alert("Please enter data in all the given fields(Card_Dimentions)");
		
		} else if (data.SlotWidth === "") {
			alert("Please enter data in all the given fields(SlotWidth)");
		
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields(Power_Consumption)");
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
			formData.append("Interface", data.Interface);
			formData.append("Manufacturer", data.Manufacturer);
			formData.append("GPU_Series", data.GPU_Series);
			formData.append("GPU", data.GPU);
			formData.append("Effective_Memory_Clock", data.Effective_Memory_Clock);
			formData.append(
				"Memory_Size",
				data.Memory_Size
			);
			formData.append("Memory_Interface", data.Memory_Interface);
			formData.append("Memory_Type", data.Memory_Type);
			formData.append("DirectX", data.DirectX);
			formData.append("OpenGL", data.OpenGL);
			formData.append("HDMI", data.HDMI);
			formData.append("DisplayPort", data.DisplayPort);
			formData.append("Virtual_Reality_Ready", data.Virtual_Reality_Ready);
			formData.append("Cooler", data.Cooler);
			formData.append("System_Requirments", data.System_Requirments);
			formData.append("Power_Connectors", data.Power_Connectors);
			formData.append("FormFactor", data.FormFactor);
			formData.append("Max_GPU_Length", data.Max_GPU_Length);
			formData.append("Card_Dimentions", data.Card_Dimentions);
			formData.append("SlotWidth", data.SlotWidth);
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/VideoCard", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managevideocard");
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
						<h1 className={classes.h1}>Add VideoCard</h1>
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
									<label className={classes.label} htmlFor="Interface">
									Interface:
									</label>
									<br />
									<label className={classes.label} htmlFor="Manufacturer">
									Manufacturer:
									</label>
									<br />
									<label className={classes.label} htmlFor="GPU_Series">
									GPU Series:
									</label>
									<br />
									<label className={classes.label} htmlFor="GPU">
									GPU:
									</label>
									<br />
									<label className={classes.label} htmlFor="Effective_Memory_Clock">
									Effective Memory Clock:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="Memory_Size"
									>
										Memory Size:
									</label>
									<br />
									<label className={classes.label} htmlFor="Memory_Interface">
									Memory Interface:
									</label>
									<br />
									<label className={classes.label} htmlFor="Power_Consumption">
									Power Consumption:
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
										className={classes.input}
										type="text"
										id="Manufacturer"
										name="Manufacturer"
										placeholder="Enter Manufacturer"
										required
										onChange={(e) => {
											setData({ ...data, Manufacturer: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="GPU_Series"
										name="GPU_Series"
										placeholder="Enter GPU Series"
										required
										onChange={(e) => {
											setData({ ...data, GPU_Series: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="GPU"
										name="GPU"
										placeholder="Enter GPU"
										required
										onChange={(e) => {
											setData({ ...data, GPU: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Effective_Memory_Clock"
										name="Effective_Memory_Clock"
										placeholder="Enter Effective Memory Clock."
										required
										onChange={(e) => {
											setData({
												...data,
												Effective_Memory_Clock: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Memory_Size"
										name="Memory_Size"
										placeholder="Enter Memory Size"
										required
										onChange={(e) => {
											setData({
												...data,
												Memory_Size: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Memory_Interface"
										name="Memory_Interface"
										placeholder="Enter Memory Interface"
										required
										onChange={(e) => {
											setData({ ...data, Memory_Interface: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Power_Consumption"
										name="Power_Consumption"
										placeholder="Enter Power Consumption."
										required
										onChange={(e) => {
											setData({ ...data, Max_GPU_Length: e.target.value });
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
									<label className={classes.label} htmlFor="Memory_Type">
									Memory Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="DirectX">
									DirectX:
									</label>
									<br />
									<label className={classes.label} htmlFor="OpenGL">
									OpenGL:
									</label>
									<br />
									<label className={classes.label} htmlFor="HDMI">
									HDMI:
									</label>
									<br />
									<label className={classes.label} htmlFor="DisplayPort">
									DisplayPort:
									</label>
									<br />
									<label className={classes.label} htmlFor="Virtual_Reality_Ready">
									Virtual Reality Ready:
									</label>
									<br />
									<label className={classes.label} htmlFor="Cooler">
									Cooler:
									</label>
									<br />
									<label className={classes.label} htmlFor="System_Requirments">
									System Requirments:
									</label>
									<br />
									<label className={classes.label} htmlFor="Power_Connectors">
									Power Connectors:
									</label>
									<br />
									<label className={classes.label} htmlFor="FormFactor">
									FormFactor:
									</label>
									<br />
									<label className={classes.label} htmlFor="Max_GPU_Length">
									Max GPU Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="Card_Dimentions">
									Card Dimentions:
									</label>
									<br />
									<label className={classes.label} htmlFor="SlotWidth">
									Slot Width:
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
										id="Memory_Type"
										name="Memory_Type"
										placeholder="Enter Memory Type"
										required
										onChange={(e) => {
											setData({ ...data, Memory_Type: e.target.value });
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
										id="DirectX"
										name="DirectX"
										placeholder="Enter DirectX."
										required
										onChange={(e) => {
											setData({ ...data, DirectX: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="OpenGL"
										name="OpenGL"
										placeholder="Enter OpenGL."
										required
										onChange={(e) => {
											setData({ ...data, OpenGL: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="HDMI"
										name="HDMI"
										placeholder="Enter HDMI."
										required
										onChange={(e) => {
											setData({ ...data, HDMI: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="DisplayPort"
										name="DisplayPort"
										placeholder="Enter DisplayPort."
										required
										onChange={(e) => {
											setData({ ...data, DisplayPort: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Virtual_Reality_Ready"
										name="Virtual_Reality_Ready"
										placeholder="Enter Virtual Reality Ready."
										required
										onChange={(e) => {
											setData({ ...data, Rdiator_Options: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Cooler"
										name="Cooler"
										placeholder="Enter Cooler."
										required
										onChange={(e) => {
											setData({ ...data, Cooler: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="System_Requirments"
										name="System_Requirments"
										placeholder="Enter System Requirments."
										required
										onChange={(e) => {
											setData({
												...data,
												Max_CPU_Cooler_LeSystem_Requirmentsngth: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Power_Connectors"
										name="Power_Connectors"
										placeholder="Enter Power_Connectors."
										required
										onChange={(e) => {
											setData({ ...data, Power_Connectors: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
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
										className={classes.input}
										type="text"
										id="Max_GPU_Length"
										name="Max_GPU_Length"
										placeholder="Enter Max GPU Length."
										required
										onChange={(e) => {
											setData({ ...data, Max_GPU_Length: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="Card_Dimentions"
										name="Card_Dimentions"
										placeholder="Enter Card Dimentions."
										required
										onChange={(e) => {
											setData({ ...data, Card_Dimentions: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="SlotWidth"
										name="SlotWidth"
										placeholder="Enter Slot Width."
										required
										onChange={(e) => {
											setData({ ...data, Max_GPU_Length: e.target.value });
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

export default AddVideoCard;
