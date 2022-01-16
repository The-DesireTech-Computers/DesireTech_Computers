import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBMemoryCategory from "./CBMemoryCategory";

const CBMemory = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [motherBoard, setMotherBoard] = useState();
	let [filteredData, setFilteredData] = useState([]);
	let [companyFilter, setCompanyFilter] = useState();
	let [capacityFilter, setCapacityFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let setCapacityFilterHandler = (x) => {
		setCapacityFilter(x);
	};

	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbcoolingsystem");
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

	useEffect(() => {
		axios
			.get("pcParts/memory")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		axios
			.get("pcParts/motherboard/" + motherBoardID)
			.then((res) => {
				setMotherBoard(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [data]);

	useEffect(() => {
		if (data) {
			setFilteredData(data);
		}
	}, [data]);

	useEffect(() => {
		if (filteredData) {
			setFilteredData(
				filteredData.filter((e) => {
					return e.Details.Memory_Pins === motherBoard.Memory.Memory_Pins;
				})
			);
		}
	}, [motherBoard]);

	useEffect(() => {
		setData1(filteredData);
		setData2(data1);
	}, [filteredData, companyFilter, capacityFilter]);

	useEffect(() => {
		if (companyFilter) {
			console.log("company filter");
			if (companyFilter === "Corsair") {
				console.log("company Cosair filter");
				console.log(companyFilter);

				setData1(
					data1.filter((e) => {
						return e.Model.brand === "Corsair";
					})
				);
				console.log(data1);
			} else if (companyFilter === "G.SKILL") {
				console.log("company G.Skill filter");
				console.log(companyFilter);

				setData1(
					data1.filter((e) => {
						return e.Model.brand === "G.SKILL";
					})
				);
				console.log(data1);
			} else if (companyFilter === "HyperX") {
				console.log("company hyper filter");
				console.log(companyFilter);

				setData1(
					data1.filter((e) => {
						return e.Model.brand === "HyperX";
					})
				);
				console.log(data1);
			}
		}
		setData3(data2);
	}, [filteredData, data2]);

	useEffect(() => {
		if (capacityFilter) {
			console.log("capacity filter");
			if (capacityFilter == 8) {
				setData1(
					data1.filter((e) => {
						return e.Details.Capacity === 8;
					})
				);
			} else if (capacityFilter == 16) {
				setData1(
					data1.filter((e) => {
						return e.Details.Capacity === 16;
					})
				);
			} else if (capacityFilter == 32) {
				setData1(
					data1.filter((e) => {
						return e.Details.Capacity === 32;
					})
				);
			}
		}
		console.log("use effect filter");
	}, [filteredData, data3]);

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[3]) {
			props.history.push("/custom-built/cbvideocard");
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
					detail1={product.Details.speed}
					detail2={product.Details.color}
					detail3={product.Details.CAS_Latency}
					product_id={product._id}
					path="/custom-built/cbvideocard"
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
					detail1={product.Details.speed}
					detail2={product.Details.color}
					detail3={product.Details.CAS_Latency}
					product_id={product._id}
					path="/custom-built/cbvideocard"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBMemoryCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setCapacityFilterHandler={setCapacityFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select RAM</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">Speed</th>
											<th className="cbcolor">Color</th>
											<th className="cbmaterial">CAS Latency</th>
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

export default CBMemory;
