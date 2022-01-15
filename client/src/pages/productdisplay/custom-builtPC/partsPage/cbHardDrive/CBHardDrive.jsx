import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBHDCategory from "./CBHDCategory";
const CBHardDrive = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [companyFilter, setCompanyFilter] = useState();
	let [capacityFilter, setCapacityFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let setCapacityFilterHandler = (x) => {
		setCapacityFilter(x);
	};
	let selectBtnHandler = (product_id) => {
		let CustomBuilt = localStorage.getItem("CustomBuilt");
		if (CustomBuilt) {
			CustomBuilt = CustomBuilt.split(",");
			CustomBuilt.push(product_id);
			localStorage.setItem("CustomBuilt", CustomBuilt);
			props.history.push("/custom-built/cbssd");
		} else {
			props.history.push("/custom-built/cbmotherboard");
		}
	};

	useEffect(() => {
		axios
			.get("pcParts/harddrive")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		setData1(data);
		setData2(data1);
	}, [data, companyFilter, capacityFilter]);

	useEffect(() => {
		if (companyFilter) {
			console.log("company filter");
			if (companyFilter === "TOSHIBA") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "TOSHIBA";
					})
				);
			} else if (companyFilter === "SEAGATE") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "SEAGATE";
					})
				);
			} else if (companyFilter === "Western Digital") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "Western Digital";
					})
				);
			}
		}
		setData3(data2);
	}, [data, data2]);

	useEffect(() => {
		if (capacityFilter) {
			if (capacityFilter === "Under 500GB") {
				setData1(
					data1.filter((e) => {
						return (
							e.Performance.Capacity === "128GB" ||
							e.Performance.Capacity === "256GB"
						);
					})
				);
			} else if (capacityFilter === "500GB - 1TB") {
				setData1(
					data1.filter((e) => {
						return (
							e.Performance.Capacity === "500GB" ||
							e.Performance.Capacity === "750GB" ||
							e.Performance.Capacity === "1TB"
						);
					})
				);
			} else if (capacityFilter === "1TB - 2TB") {
				setData1(
					data1.filter((e) => {
						return (
							e.Performance.Capacity === "1TB" ||
							e.Performance.Capacity === "1.5TB" ||
							e.Performance.Capacity === "2TB"
						);
					})
				);
			} else if (capacityFilter === "2TB and Higher") {
				setData1(
					data1.filter((e) => {
						return (
							e.Performance.Capacity !== "128GB" &&
							e.Performance.Capacity !== "256GB" &&
							e.Performance.Capacity !== "500GB" &&
							e.Performance.Capacity !== "750GB" &&
							e.Performance.Capacity !== "1TB" &&
							e.Performance.Capacity !== "1.5TB"
						);
					})
				);
			}
		}
	}, [data, data3]);

	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbcasing");
	};

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[7]) {
			props.history.push("/custom-built/cbssd");
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
					detail1={product.Performance.Capacity}
					detail2={product.Performance.RPM}
					detail3={product.Performance.Cache}
					product_id={product._id}
					path="/custom-built/cbssd"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBHDCategory
					setCapacityFilterHandler={setCapacityFilterHandler}
					setCompanyFilterHandler={setCompanyFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select Storage (HDD)</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">Capacity</th>
											<th className="cbcolor">RPM</th>
											<th className="cbmaterial">Cache</th>
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

export default CBHardDrive;
