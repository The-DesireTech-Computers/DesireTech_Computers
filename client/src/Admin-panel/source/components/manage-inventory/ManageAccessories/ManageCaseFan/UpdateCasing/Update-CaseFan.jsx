import { React, useEffect, useState } from "react";
import Navbar from "../../../../header/Navbar";
import axios from "../../../../../axiosInstance";
import Spinner from "../../../../LoadingSpinner/LoadingSpinner";
import classes from "../../../Form.module.css";

const UpdateCaseFan = (props) => {
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
				.get("accessories/casefan/" + id)
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
		} else if (data.Details.type === "") {
			alert("Please enter data in all the given fields(type)");
		} else if (data.Details.Compatability === "") {
			alert("Please enter data in all the given fields(Compatability)");
		} else if (data.Details.Size === "") {
			alert("Please enter data in all the given fields (Size)");
		} else if (data.Details.BearingType === "") {
			alert("Please enter data in all the given fields (BearingType)");
		} else if (data.Details.RPM === "") {
			alert("Please enter data in all the given fields (RPM)");
		} else if (data.Details.AirFlow === "") {
			alert("Please enter data in all the given fields (AirFlow)");
		} else if (data.Details.NoiseLvel === "") {
			alert("Please enter data in all the given fields  (NoiseLvel)");
		} else if (data.Details.PowerConnector === "") {
			alert("Please enter data in all the given fields  (PowerConnector)");
		} else if (data.Details.Color === "") {
			alert("Please enter data in all the given fields (Color)");
		} else if (data.Details.LED === "") {
			alert("Please enter data in all the given fields (LED)");
		}else if (data.features.feature === "") {
			alert("Please enter data in all the given fields (LED)");
		} else if (data.Dimentions.Dimention === "") {
			alert("Please enter data in all the given fields (LED)");
		}  
		 else {
			setLoading(true);

			let formData = new FormData();

			formData.append("title", data.title);
			formData.append("price", data.price);
			formData.append("quantity", data.quantity);
			formData.append("brand", data.Model.brand);
			formData.append("series", data.Model.series);
			formData.append("model", data.Model.model);
			formData.append("type", data.Details.Type);
			formData.append("Compatability", data.Details.Compatability);
			formData.append("Size", data.Details.Size);
			formData.append("BearingType", data.Details.BearingType);
			formData.append("RPM", data.Details.RPM);
			formData.append("AirFlow", data.Details.AirFlow);
			formData.append("NoiseLvel", data.Details.NoiseLvel);
			formData.append("PowerConnector", data.Details.PowerConnector);
			formData.append("Color", data.Details.Color);
			formData.append("LED", data.Details.LED);
			formData.append("feature", data.features.feature);
			formData.append("Dimention", data.Dimentions.Dimention);

			formData.append("thumbnail", thumbnail);

			if (gallery) {
				for (let i = 0; i < gallery.length; i++) {
					formData.append("gallery", gallery[i]);
				}
			}

			await axios
				.put("accessories/casefan/"+id, formData)
				.then((res) => {
					console.log("product Added successfully");
					setLoading(false);
					props.history.replace("/admin-panel/managecasefan");
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
						<h1 className={classes.h11}>Update Case Fan</h1>
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
									<label className={classes.label1} htmlFor="type">
										Type:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Compatability">
										Compatability:
									</label>

									<br />
									<label className={classes.label1} htmlFor="AirFlow">
										Air Flow:
									</label>
									<br />
									<label className={classes.label1} htmlFor="NoiseLvel">
										Noise Lvel:
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
										id="type"
										name="type"
										value={data.Details.Type}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Type: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="Compatability"
										name="Compatability"
										value={data.Details.Compatability}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Compatability: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="AirFlow"
										name="AirFlow"
										value={data.Details.AirFlow}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,AirFlow: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="NoiseLvel"
										name="NoiseLvel"
										value={data.Details.NoiseLvel}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,NoiseLvel: e.target.value}  });
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
									<label className={classes.label1} htmlFor="PowerConnector">
										PowerConnector:
									</label>
									<br />
									<label className={classes.label1} htmlFor="quantity">
										Quantity:
									</label>
									<br />

									<label className={classes.label1} htmlFor="Color">
										Color:
									</label>
									<br />
									<label className={classes.label1} htmlFor="LED">
										LED:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Size">
										Size:
									</label>
									<br />
									<label className={classes.label1} htmlFor="BearingType">
										BearingType:
									</label>
									<br />
									<label className={classes.label1} htmlFor="RPM">
										RPM:
									</label>
									<br />
									<label className={classes.label1} htmlFor="feature">
										feature:
									</label>
									<br />
									<label className={classes.label1} htmlFor="Dimention">
									Dimention:
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
										id="PowerConnector"
										name="PowerConnector"
										value={data.Details.PowerConnector}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,PowerConnector: e.target.value}  });
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
										id="Color"
										name="Color"
										value={data.Details.Color}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Color: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="LED"
										name="LED"
										value={data.Details.LED}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,LED: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="number"
										id="Size"
										name="Size"
										value={data.Details.Size}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,Size: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="BearingType"
										name="BearingType"
										value={data.Details.BearingType}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,BearingType: e.target.value}  });
										}}
									/>
									<br />
									<input
										className={classes.input1}
										type="text"
										id="RPM"
										name="RPM"
										value={data.Details.RPM}
										required
										onChange={(e) => {
											setData({ ...data,Details:{...data.Details,RPM: e.target.value}  });
										}}
									/>
									<br />

									<input
										className={classes.input1}
										type="text"
										id="feature"
										name="feature"
										value={data.features.feature}
										required
										onChange={(e) => {
											setData({ ...data,features:{...data.features,feature: e.target.value}  });
										}}
									/>
									<br />

									<input
										className={classes.input1}
										type="text"
										id="Dimention"
										name="Dimention"
										value={data.Dimentions.Dimention}
										required
										onChange={(e) => {
											setData({ ...data,Dimentions:{...data.Dimentions,Dimention: e.target.value}  });
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

export default UpdateCaseFan;
