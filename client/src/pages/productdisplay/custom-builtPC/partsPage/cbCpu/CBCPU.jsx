import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBCPUCategory from "./CBCPUCategory";
const CBCPU = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [motherBoard, setMotherBoard] = useState();
	let [filteredData, setFilteredData] = useState([]);
	let [companyFilter, setCompanyFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let backBtnHandler = () => {
		localStorage.removeItem("CustomBuilt");
		props.history.push("/custom-built/cbmotherboard");
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
			.get("pcParts/processor")
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
			setFilteredData(
				data.filter((e) => {
					return e.Model.processorType === "Desktop";
				})
			);
		}
	}, [data]);

	useEffect(() => {
		if (filteredData) {
			console.log(filteredData);
			setFilteredData(
				filteredData.filter((e) => {
					return (
						e.Details.CPU_Socket_Type ===
						motherBoard.Supported_CPU.CPU_Socket_Type
					);
				})
			);
		}
	}, [motherBoard]);

	console.log(filteredData);

	useEffect(() => {
		if (companyFilter) {
			if (companyFilter === "Intel") {
				setData1(
					filteredData.filter((e) => {
						return e.Model.brand === "Intel";
					})
				);
			} else if (companyFilter === "AMD") {
				setData1(
					filteredData.filter((e) => {
						return e.Model.brand === "AMD";
					})
				);
			} else {
				setData1(filteredData);
			}
		}
	}, [companyFilter]);

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[1]) {
			props.history.push("/custom-built/cbcoolingsystem");
		}
	}

	let cbproducts = <Spinner />;

	if (data1) {
		cbproducts = data1.map((product) => {
			return (
				<CBProductCard
					key={product._id}
					img={"/images/productimages/4.jpg"}
					title={product.title}
					price={product.price}
					detail1={product.Details.NumberOfCores}
					detail2={product.Details.NumberOfThreads}
					detail3={product.Details.L3_Cache}
					product_id={product._id}
					path="/custom-built/cbcoolingsystem"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	} else if (filteredData) {
		cbproducts = filteredData.map((product) => {
			return (
				<CBProductCard
					key={product._id}
					img={"/images/productimages/4.jpg"}
					title={product.title}
					price={product.price}
					detail1={product.Details.NumberOfCores}
					detail2={product.Details.NumberOfThreads}
					detail3={product.Details.L3_Cache}
					product_id={product._id}
					path="/custom-built/cbcoolingsystem"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBCPUCategory setCompanyFilterHandler={setCompanyFilterHandler} />
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select CPU</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype"># of Cores</th>
											<th className="cbcolor"># of Threads</th>
											<th className="cbmaterial">L3 Cache</th>
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

export default CBCPU;
