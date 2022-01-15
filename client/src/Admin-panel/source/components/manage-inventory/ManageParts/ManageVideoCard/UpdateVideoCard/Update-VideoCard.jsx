import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";

import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateVideoCard = (props) => {
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
				.get("pcParts/videocard/" + id)
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
		} else if (data.Interface === "") {
			alert("Please enter data in all the given fields(Interface)");
		} else if (data.Chipset.Manufacturer === "") {
			alert("Please enter data in all the given fields(Manufacturer)");
		} else if (data.Chipset.GPU_Series === "") {
			alert("Please enter data in all the given fields (GPU_Series)");
		} else if (data.Chipset.GPU === "") {
			alert("Please enter data in all the given fields (GPU)");
		} else if (data.Memory.Effective_Memory_Clock === "") {
			alert(
				"Please enter data in all the given fields (Effective_Memory_Clock)"
			);
		} else if (data.Memory.Memory_Size === "") {
			alert("Please enter data in all the given fields (Memory_Size)");
		} else if (data.Memory.Memory_Interface === "") {
			alert("Please enter data in all the given fields  (Memory_Interface)");
		} else if (data.Memory.Memory_Type === "") {
			alert("Please enter data in all the given fields  (Memory_Type)");
		} else if (data.API.DirectX === "") {
			alert("Please enter data in all the given fields (DirectX)");
		} else if (data.API.OpenGL === "") {
			alert("Please enter data in all the given fields (OpenGL)");
		} else if (data.Ports.HDMI === "") {
			alert("Please enter data in all the given fields(HDMI)");
		} else if (data.Ports.DisplayPort === "") {
			alert("Please enter data in all the given fields(DisplayPort)");
		} else if (data.Details.Virtual_Reality_Ready === "") {
			alert(
				"Please enter data in all the given fields (Virtual_Reality_Ready)"
			);
		} else if (data.Details.Cooler === "") {
			alert("Please enter data in all the given fields (Cooler)");
		} else if (data.Details.System_Requirments === "") {
			alert("Please enter data in all the given fields (System_Requirments)");
		} else if (data.Details.Power_Connectors === "") {
			alert("Please enter data in all the given fields (Power_Connectors)");
		} else if (data.Dimentions.FormFactor === "") {
			alert("Please enter data in all the given fields (FormFactor)");
		} else if (data.Dimentions.Max_GPU_Length === "") {
			alert("Please enter data in all the given fields(Max_GPU_Length)");
		} else if (data.Dimentions.Card_Dimentions === "") {
			alert("Please enter data in all the given fields(Card_Dimentions)");
		} else if (data.Dimentions.SlotWidth === "") {
			alert("Please enter data in all the given fields(SlotWidth)");
		} else if (data.Power_Consumption === "") {
			alert("Please enter data in all the given fields(Power_Consumption)");
		} else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("Interface", data.Interface);
			formData.append("Manufacturer", data.Chipset.Manufacturer);
			formData.append("GPU_Series", data.Chipset.GPU_Series);
			formData.append("GPU", data.Chipset.GPU);
			formData.append("Effective_Memory_Clock", data.Memory.Effective_Memory_Clock);
			formData.append("Memory_Size", data.Memory.Memory_Size);
			formData.append("Memory_Interface", data.Memory.Memory_Interface);
			formData.append("Memory_Type", data.Memory.Memory_Type);
			formData.append("DirectX", data.API.DirectX);
			formData.append("OpenGL", data.API.OpenGL);
			formData.append("HDMI", data.Ports.HDMI);
			formData.append("DisplayPort", data.Ports.DisplayPort);
			formData.append("Virtual_Reality_Ready", data.Details.Virtual_Reality_Ready);
			formData.append("Cooler", data.Details.Cooler);
			formData.append("System_Requirments", data.Details.System_Requirments);
			formData.append("Power_Connectors", data.Details.Power_Connectors);
			formData.append("FormFactor", data.Dimentions.FormFactor);
			formData.append("Max_GPU_Length", data.Dimentions.Max_GPU_Length);
			formData.append("Card_Dimentions", data.Dimentions.Card_Dimentions);
			formData.append("SlotWidth", data.Dimentions.SlotWidth);
			formData.append("Power_Consumption", data.Power_Consumption);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("pcParts/videocard/"+id, formData)
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

	if (!loading && data) {
		form = (
			<div>
				<Navbar />
				<div className={classes.main1}>
					<div className={classes.inputform1}>
						<h1 className={classes.h11}>Update VideoCard</h1>
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
									<label className={classes.label1} htmlFor="series">
										Series:
									</label>
									<br />
									<label className={classes.label1} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Interface">
										Interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Manufacturer">
										Manufacturer:
									</label>
									<br />
									<label className={classes.label1} htmlFor="GPU_Series">
										GPU Series:
									</label>
									<br />
									<label className={classes.label1} htmlFor="GPU">
										GPU:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Effective_Memory_Clock"
									>
										Effective Memory Clock:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Memory_Size">
										Memory Size:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Memory_Interface">
										Memory Interface:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Power_Consumption">
										Power Consumption:
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
										id="series"
										name="series"
										value={data.Model.series}
										required
										onChange={(e) => {
											setData({ ...data,Model:{...data.Model,series: e.target.value}  });
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
										id="Interface"
										name="Interface"
										value={data.Interface}
										required
										onChange={(e) => {
											setData({ ...data, Interface: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Manufacturer"
										name="Manufacturer"
										value={data.Chipset.Manufacturer}
										required
										onChange={(e) => {
											setData({ ...data,Chipset:{...data.Chipset,Manufacturer: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="GPU_Series"
										name="GPU_Series"
										value={data.Chipset.GPU_Series}
										required
										onChange={(e) => {
											setData({ ...data,Chipset:{...data.Chipset,GPU_Series: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="GPU"
										name="GPU"
										value={data.Chipset.GPU}
										required
										onChange={(e) => {
											setData({ ...data,Chipset:{...data.Chipset,GPU: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Effective_Memory_Clock"
										name="Effective_Memory_Clock"
										value={data.Memory.Effective_Memory_Clock}
										required
										onChange={(e) => {
											setData({ ...data,Memory:{...data.Memory,Effective_Memory_Clock: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Memory_Size"
										name="Memory_Size"
										value={data.Memory.Memory_Size}
										required
										onChange={(e) => {
											setData({ ...data,Memory:{...data.Memory,Memory_Size: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Memory_Interface"
										name="Memory_Interface"
										value={data.Memory.Memory_Interface}
										required
										onChange={(e) => {
											setData({ ...data,Memory:{...data.Memory,Memory_Interface: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Power_Consumption"
										name="Power_Consumption"
										value={data.Power_Consumption}
										required
										onChange={(e) => {
											setData({ ...data, Power_Consumption: e.target.value });
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
									<label className={classes.label1} htmlFor="Memory_Type">
										Memory Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="DirectX">
										DirectX:
									</label>
									<br />
									<label className={classes.label1} htmlFor="OpenGL">
										OpenGL:
									</label>
									<br />
									<label className={classes.label1} htmlFor="HDMI">
										HDMI:
									</label>
									<br />
									<label className={classes.label1} htmlFor="DisplayPort">
										DisplayPort:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="Virtual_Reality_Ready"
									>
										Virtual Reality Ready:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Cooler">
										Cooler:
									</label>
									<br />
									<label
										className={classes.label1}
										htmlFor="System_Requirments"
									>
										System Requirments:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Power_Connectors">
										Power Connectors:
									</label>
									<br />
									<label className={classes.label1} htmlFor="FormFactor">
										FormFactor:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Max_GPU_Length">
										Max GPU Length:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Card_Dimentions">
										Card Dimentions:
									</label>
									<br />
									<label className={classes.label1} htmlFor="SlotWidth">
										Slot Width:
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
										id="Memory_Type"
										name="Memory_Type"
										value={data.Memory.Memory_Type}
										required
										onChange={(e) => {
											setData({ ...data,Memory:{...data.Memory,Memory_Type: e.target.value}  });
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
										id="DirectX"
										name="DirectX"
										value={data.API.DirectX}
										required
										onChange={(e) => {
											setData({ ...data,API:{...data.API,DirectX: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="OpenGL"
										name="OpenGL"
										value={data.API.OpenGL}
										required
										onChange={(e) => {
											setData({ ...data,API:{...data.API,OpenGL: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="HDMI"
										name="HDMI"
										value={data.Ports.HDMI}
										required
										onChange={(e) => {
											setData({ ...data,Ports:{...data.Ports,HDMI: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="DisplayPort"
										name="DisplayPort"
										value={data.Ports.DisplayPort}
										required
										onChange={(e) => {
											setData({ ...data,Ports:{...data.Ports,DisplayPort: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Virtual_Reality_Ready"
										name="Virtual_Reality_Ready"
										value={data.Details.Virtual_Reality_Ready}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Virtual_Reality_Ready: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Cooler"
										name="Cooler"
										value={data.Details.Cooler}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Cooler: e.target.value}  });
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
											setData({ ...data,Details:{...data.Details,System_Requirments: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Power_Connectors"
										name="Power_Connectors"
										value={data.Details.Power_Connectors}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Power_Connectors: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="FormFactor"
										name="FormFactor"
										value={data.Dimentions.FormFactor}
										required
										onChange={(e) => {
											setData({ ...data,Dimentions:{...data.Dimentions,FormFactor: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Max_GPU_Length"
										name="Max_GPU_Length"
										value={data.Dimentions.Max_GPU_Length}
										required
										onChange={(e) => {
											setData({ ...data,Dimentions:{...data.Dimentions,Max_GPU_Length: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Card_Dimentions"
										name="Card_Dimentions"
										value={data.Dimentions.Card_Dimentions}
										required
										onChange={(e) => {
											setData({ ...data,Dimentions:{...data.Dimentions,Card_Dimentions: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="SlotWidth"
										name="SlotWidth"
										value={data.Dimentions.SlotWidth}
										required
										onChange={(e) => {
											setData({ ...data,Dimentions:{...data.Dimentions,SlotWidth: e.target.value}  });
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

	return <div>{form}</div>};

export default UpdateVideoCard;
