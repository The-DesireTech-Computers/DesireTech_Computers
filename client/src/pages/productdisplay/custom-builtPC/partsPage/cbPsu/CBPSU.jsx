import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBPSUCategory from "./CBPSUCategory";

const CBPSU = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [motherBoard, setMotherBoard] = useState(0);
	let [cpu, setCPU] = useState(0);
	let [coolingSystem, setCoolingSystem] = useState(0);
	let [memory, setMemory] = useState(0);
	let [videocard, setVideoCard] = useState(0);
	let [filteredData, setFilteredData] = useState([]);
	let [companyFilter, setCompanyFilter] = useState();
	let [powerAdd, setPowerAdd] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};

	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbvideocard");
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
	let cpuID = array[1];
	let coolingSystemID = array[2];
	let memoryID = array[3];
	let videoCardID = array[4];

	useEffect(() => {
		axios
			.get("pcParts/psu")
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
				setMotherBoard(res.data.Power_Consumption);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/processor/" + cpuID)
			.then((res) => {
				setCPU(res.data.Power_Consumption);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/fans/" + coolingSystemID)
			.then((res) => {
				setCoolingSystem(res.data.Power_Consumption);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/memory/" + memoryID)
			.then((res) => {
				setMemory(res.data.Power_Consumption);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/videocard/" + videoCardID)
			.then((res) => {
				setVideoCard(res.data.Power_Consumption);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [data]);

	useEffect(() => {
		setPowerAdd(motherBoard + cpu + coolingSystem + memory + videocard);
	}, [motherBoard, cpu, coolingSystem, memory, videocard]);
	useEffect(() => {
		if (data) {
			setFilteredData(
				data.filter((e) => {
					return (
						e.Details.Maximum_Power > powerAdd &&
						e.Details.Maximum_Power < powerAdd + 100
					);
				})
			);
		}
	}, [powerAdd]);

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

		if (check[5]) {
			props.history.push("/custom-built/cbcasing");
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
					detail2={product.Details.Energy_Efficent}
					detail3={product.Details.Modular}
					product_id={product._id}
					path="/custom-built/cbcasing"
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
					detail2={product.Details.Energy_Efficent}
					detail3={product.Details.Modular}
					product_id={product._id}
					path="/custom-built/cbcasing"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBPSUCategory setCompanyFilterHandler={setCompanyFilterHandler} />
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select Power Supply Unit</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">Type</th>
											<th className="cbcolor">Energy Efficient</th>
											<th className="cbmaterial">Modular</th>
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

export default CBPSU;
