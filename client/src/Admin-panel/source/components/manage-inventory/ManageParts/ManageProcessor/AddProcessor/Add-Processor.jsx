import { React, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../Form.module.css";

const AddProcessor = (props) => {
	let [data, setData] = useState({
		title:'',
      price: '',
      quantity:'',

        brand:'' ,
        processorType:'' ,
        series:'' ,
        name:'' ,
        model:'' ,

		CPU_Socket_Type:'' ,
		CoreName:'' ,
            NumberOfCores:'' ,
            NumberOfThreads:'' ,
            OperatingFrequency:'' ,
            MaxFrequency:'' ,
            BusSpeed:'' ,
            L3_Cache:'' ,
            ManufacturingTech:'' ,
            bit_Support:'' ,
            Hyper_Threading_Support:'' ,
            MemoryType:'' ,
            MemoryChannel:'' ,
            Max_CPU_Cooler_Length:'' ,
            Virtualization_Tech_Support:'' ,
            IntegratedGraphics:'' ,
            Graphics_Base_Frequency:'' ,
			Graphics_Max_Dynamic_Frequency:'',
            PCI_Express_Revision:'',
            Max_Number_PCI_Express_Lane:'',
            Thermal_Design_Power:'',
            CoolingDevice:'',
	
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
		} else if (data.processorType === "") {
			alert("Please enter data in all the given fields(processorType)");
		} else if (data.CPU_Socket_Type === "") {
			alert("Please enter data in all the given fields(CPU_Socket_Type)");
		} else if (data.CoreName === "") {
			alert("Please enter data in all the given fields (CoreName)");
		} else if (data.NumberOfCores === "") {
			alert("Please enter data in all the given fields (NumberOfCores)");
		} else if (data.NumberOfThreads === "") {
			alert("Please enter data in all the given fields (NumberOfThreads)");
		} else if (data.OperatingFrequency === "") {
			alert("Please enter data in all the given fields (OperatingFrequency)");
		} else if (data.MaxFrequency === "") {
			alert("Please enter data in all the given fields  (MaxFrequency)");
		} else if (data.BusSpeed === "") {
			alert("Please enter data in all the given fields  (BusSpeed)");
		} else if (data.L3_Cache === "") {
			alert("Please enter data in all the given fields (L3_Cache)");
		} else if (data.ManufacturingTech === "") {
			alert("Please enter data in all the given fields (ManufacturingTech)");
		} else if (data.bit_Support === "") {
			alert("Please enter data in all the given fields(bit_Support)");
		} else if (data.Hyper_Threading_Support === "") {
			alert(
				"Please enter data in all the given fields(Hyper_Threading_Support)"
			);
		} else if (data.MemoryType === "") {
			alert("Please enter data in all the given fields (MemoryType)");
		} else if (data.MemoryChannel === "") {
			alert("Please enter data in all the given fields (MemoryChannel)");
		} else if (data.Max_CPU_Cooler_Length === "") {
			alert(
				"Please enter data in all the given fields (Max_CPU_Cooler_Length)"
			);
		} else if (data.Graphics_Base_Frequency === "") {
			alert(
				"Please enter data in all the given fields (Graphics_Base_Frequency)"
			);
		} else if (data.Graphics_Max_Dynamic_Frequency === "") {
			alert(
				"Please enter data in all the given fields (Graphics_Max_Dynamic_Frequency)"
			);
		} else if (data.PCI_Express_Revision === "") {
			alert("Please enter data in all the given fields(PCI_Express_Revision)");
		} else if (data.Max_Number_PCI_Express_Lane === "") {
			alert(
				"Please enter data in all the given fields(Max_Number_PCI_Express_Lane)"
			);
		} else if (data.Thermal_Design_Power === "") {
			alert("Please enter data in all the given fields(Thermal_Design_Power)");
		} else if (data.CoolingDevice === "") {
			alert("Please enter data in all the given fields(CoolingDevice)");
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
			formData.append("processorType", data.processorType);
			formData.append("CPU_Socket_Type", data.CPU_Socket_Type);
			formData.append("CoreName", data.CoreName);
			formData.append("NumberOfCores", data.NumberOfCores);
			formData.append("NumberOfThreads", data.NumberOfThreads);
			formData.append("OperatingFrequency", data.OperatingFrequency);
			formData.append("MaxFrequency", data.MaxFrequency);
			formData.append("BusSpeed", data.BusSpeed);
			formData.append("L3_Cache", data.L3_Cache);
			formData.append("ManufacturingTech", data.ManufacturingTech);
			formData.append("bit_Support", data.bit_Support);
			formData.append("Hyper_Threading_Support", data.Hyper_Threading_Support);
			formData.append("MemoryType", data.MemoryType);
			formData.append("MemoryChannel", data.MemoryChannel);
			formData.append("Max_CPU_Cooler_Length", data.Max_CPU_Cooler_Length);
			formData.append("Graphics_Base_Frequency", data.Graphics_Base_Frequency);
			formData.append(
				"Graphics_Max_Dynamic_Frequency",
				data.Graphics_Max_Dynamic_Frequency
			);
			formData.append("PCI_Express_Revision", data.PCI_Express_Revision);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.post("pcParts/Processor", formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/manageprocessor");
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
						<h1 className={classes.h1}>Add Processor</h1>
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
									<label className={classes.label} htmlFor="processorType">
										processorType:
									</label>
									<br />
									<label className={classes.label} htmlFor="CPU_Socket_Type">
										CPU_Socket_Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="Processormaterial">
										Processor Material:
									</label>
									<br />
									<label className={classes.label} htmlFor="withpowersupply">
										With Power Supply:
									</label>
									<br />
									<label className={classes.label} htmlFor="powersupplymounted">
										Power Supply Mounted:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="motherboardcompatability"
									>
										MotherBoard Compatability:
									</label>
									<br />
									<label className={classes.label} htmlFor="dustfilters">
										Dust Filters:
									</label>
									<br />
									<label className={classes.label} htmlFor="thumbnail">
										Thumbnail:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										processorType="text"
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
										processorType="number"
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
										processorType="text"
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
										processorType="text"
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
										processorType="text"
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
										processorType="text"
										id="processorType"
										name="processorType"
										placeholder="Enter processorType"
										required
										onChange={(e) => {
											setData({ ...data, processorType: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="CPU_Socket_Type"
										name="CPU_Socket_Type"
										placeholder="Enter CPU_Socket_Type"
										required
										onChange={(e) => {
											setData({ ...data, CPU_Socket_Type: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="Processormaterial"
										name="Processormaterial"
										placeholder="Enter Processor Material"
										required
										onChange={(e) => {
											setData({ ...data, CoreName: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="withpowersupply"
										name="withpowersupply"
										placeholder="Enter With Power Supply"
										required
										onChange={(e) => {
											setData({ ...data, NumberOfCores: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="powersupplymounted"
										name="powersupplymounted"
										placeholder="Enter Power Supply Mounted."
										required
										onChange={(e) => {
											setData({ ...data, NumberOfThreads: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="motherboardcompatabililty"
										name="motherboardcompatability"
										placeholder="Enter MotherBoard Compatability"
										required
										onChange={(e) => {
											setData({ ...data, OperatingFrequency: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="dustfilters"
										name="dustfilters"
										placeholder="Enter Dust Filters"
										required
										onChange={(e) => {
											setData({ ...data, BusSpeed: e.target.value });
										}}
									/>
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											processorType="file"
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
									<label className={classes.label} htmlFor="sidepanelwindow">
										Side Panel Window:
									</label>
									<br />
									<label className={classes.label} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label} htmlFor="internaldrivebays">
										Internal Drive Bays:
									</label>
									<br />
									<label className={classes.label} htmlFor="expansionslots">
										Expansion Slots:
									</label>
									<br />
									<label className={classes.label} htmlFor="frontpanelports">
										Front Panel Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="fanoptions">
										Fan Options:
									</label>
									<br />
									<label className={classes.label} htmlFor="radiatoroptions">
										Radiator Options:
									</label>
									<br />
									<label className={classes.label} htmlFor="maxgpulength">
										Max GPU Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="maxcpucoolerlength">
										Max CPU Cooler Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="maxpsulength">
										Max PSU Length:
									</label>
									<br />
									<label className={classes.label} htmlFor="casedimentions">
										Case Dimentions:
									</label>
									<br />
									<label
										className={classes.label}
										htmlFor="PCI_Express_Revision"
									>
										PCI_Express_Revision:
									</label>
									<br />
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										processorType="text"
										id="sidepanelwindow"
										name="sidepanelwindow"
										placeholder="Enter Side Panel Window"
										required
										onChange={(e) => {
											setData({ ...data, MaxFrequency: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="number"
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
										processorType="text"
										id="internaldrivebay"
										name="internaldrivebay"
										placeholder="Enter Internal Drive Bays."
										required
										onChange={(e) => {
											setData({ ...data, L3_Cache: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="expansionslots"
										name="expansionslots"
										placeholder="Enter Expansion Slots."
										required
										onChange={(e) => {
											setData({ ...data, ManufacturingTech: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="frontpanelports"
										name="frontpanelports"
										placeholder="Enter Front Panel Ports."
										required
										onChange={(e) => {
											setData({ ...data, bit_Support: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="fanoptions"
										name="fanoptions"
										placeholder="Enter Fan Options."
										required
										onChange={(e) => {
											setData({
												...data,
												Hyper_Threading_Support: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="radiatoroptions"
										name="radiatoroptions"
										placeholder="Enter Radiator Options."
										required
										onChange={(e) => {
											setData({ ...data, MemoryType: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="maxgpulength"
										name="maxgpulength"
										placeholder="Enter Max GPU Length."
										required
										onChange={(e) => {
											setData({ ...data, MemoryChannel: e.target.value });
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="maxcpucoolerlength"
										name="maxcpucoolerlength"
										placeholder="Enter Max CPU Cooler Length."
										required
										onChange={(e) => {
											setData({
												...data,
												Max_CPU_Cooler_Length: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="maxpsulength"
										name="maxpsulength"
										placeholder="Enter Max PSU Length."
										required
										onChange={(e) => {
											setData({
												...data,
												Graphics_Base_Frequency: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="casedimentions"
										name="casedimentions"
										placeholder="Enter Case Dimentions."
										required
										onChange={(e) => {
											setData({
												...data,
												Graphics_Max_Dynamic_Frequency: e.target.value,
											});
										}}
									/>
									<br />
									<input
										className={classes.input}
										processorType="text"
										id="PCI_Express_Revision"
										name="PCI_Express_Revision"
										placeholder="Enter PCI_Express_Revision."
										required
										onChange={(e) => {
											setData({
												...data,
												PCI_Express_Revision: e.target.value,
											});
										}}
									/>
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											processorType="file"
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
								processorType="submit"
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

export default AddProcessor;
