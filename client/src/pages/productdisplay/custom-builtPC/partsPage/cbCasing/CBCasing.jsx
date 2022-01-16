import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBCaseCategory from "./CBCaseCategory";
const CBCasing = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [motherBoard, setMotherBoard] = useState();
	let [psu, setPSU] = useState();
	let [coolingSystem, setCoolingSystem] = useState();
	let [videocard, setVideoCard] = useState();
	let [filteredData, setFilteredData] = useState([]);
	let [companyFilter, setCompanyFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbpsu");
	};
	let selectBtnHandler = (product_id) => {
		let CustomBuilt = localStorage.getItem("CustomBuilt");
		if (CustomBuilt) {
			CustomBuilt = CustomBuilt.split(",");
			CustomBuilt.push(product_id);
			localStorage.setItem("CustomBuilt", CustomBuilt);
			props.history.push("/custom-built/cbcpu");
		} else {
			props.history.push("/custom-built/cbmotherboard");
		}
	};

	let array = localStorage.getItem("CustomBuilt");
	array = array.split(",");
	let motherBoardID = array[0];
	let psuID = array[5];
	let coolingSystemID = array[2];
	let videoCardID = array[4];

	useEffect(() => {
		axios
			.get("pcParts/casing")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		axios
			.get("pcParts/motherboard/" + motherBoardID)
			.then((res) => {
				setMotherBoard(res.data.Physical_Spec.Form_Factor);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/psu/" + psuID)
			.then((res) => {
				setPSU(res.data.Details.Max_PSU_Length);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/fans/" + coolingSystemID)
			.then((res) => {
				setCoolingSystem(res.data.Fan.Fan_Size);
			})
			.catch((err) => {
				console.log(err.response.data);
			});

		axios
			.get("pcParts/videocard/" + videoCardID)
			.then((res) => {
				setVideoCard(res.data.Dimentions.Max_GPU_Length);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [data]);

	useEffect(() => {
		if (motherBoard && psu && coolingSystem && videocard) {
			console.log(psu, videocard, coolingSystem);

			setFilteredData(
				data.filter((e) => {
					let arr = e.Dimentions.Supported_Motherboard;
					arr = arr.split(",");
					console.log(arr);
					return (
						e.Dimentions.Max_GPU_Length >= videocard &&
						e.Dimentions.Max_CPU_Cooler_Length >= coolingSystem &&
						e.Dimentions.Max_PSU_Length >= psu &&
						arr.some((x) => x === motherBoard)
					);
				})
			);
		}
	}, [motherBoard, psu, coolingSystem, videocard]);

	useEffect(() => {
		if (companyFilter) {
			if (companyFilter === "EVGA") {
				setData1(
					filteredData.filter((e) => {
						return e.Model.brand === "EVGA";
					})
				);
			} else if (companyFilter === "ASUS") {
				setData1(
					filteredData.filter((e) => {
						return e.Model.brand === "ASUS";
					})
				);
			} else if (companyFilter === "Corsair") {
				setData1(
					filteredData.filter((e) => {
						return e.Model.brand === "Corsair";
					})
				);
			} else if (companyFilter === "Cooler Master") {
				setData1(
					filteredData.filter((e) => {
						return e.Model.brand === "Cooler Master";
					})
				);
			}
		}
	}, [companyFilter]);

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[6]) {
			props.history.push("/custom-built/cbharddrive");
		}
	}
	let cbproducts = <Spinner />;

	if (data1) {
		cbproducts = data1.map((product) => {
			return (
				<CBProductCard
					key={product._id}
					img={"/uploads/pcParts/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					detail1={product.Details.Type}
					detail2={product.Details.Color}
					detail3={product.Details.Casing_Material}
					product_id={product._id}
					path="/custom-built/cbharddrive"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	} else {
		cbproducts = filteredData.map((product) => {
			return (
				<CBProductCard
					key={product._id}
					img={"/uploads/pcParts/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					detail1={product.Details.Type}
					detail2={product.Details.Color}
					detail3={product.Details.Casing_Material}
					product_id={product._id}
					path="/custom-built/cbharddrive"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBCaseCategory setCompanyFilterHandler={setCompanyFilterHandler} />
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select Casing</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">Type</th>
											<th className="cbcolor">Color</th>
											<th className="cbmaterial">Material</th>
											<th className="cbprice">Price</th>
											<th className="cbactions">Actions</th>
										</tr>
									</thead>
									<tbody>{cbproducts}</tbody>
								</table>
							</div>
							<button
								className="btn btn-info"
								id="backbtn"
								onClick={backBtnHandler}
							>
								<span id="backspan">Go Back</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CBCasing;
