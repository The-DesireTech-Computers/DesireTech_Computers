import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBSSDCategory from "./CBSSDCategory";
const CBSSD = (props) => {
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

	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbharddrive");
	};

	let selectBtnHandler = (product_id) => {
		let CustomBuilt = localStorage.getItem("CustomBuilt");
		if (CustomBuilt) {
			CustomBuilt = CustomBuilt.split(",");
			CustomBuilt.push(product_id);
			localStorage.setItem("CustomBuilt", CustomBuilt);
			props.history.push("/custom-built/cbendpage");
		} else {
			props.history.push("/custom-built/cbmotherboard");
		}
	};

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[8]) {
			props.history.push("/custom-built/cbendpage");
		}
	}

	useEffect(() => {
		axios
			.get("pcParts/ssd")
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
			if (companyFilter === "SAMSUNG") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "SAMSUNG";
					})
				);
			} else if (companyFilter === "SEAGATE") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "SEAGATE";
					})
				);
			} else if (companyFilter === "INTEL") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "INTEL";
					})
				);
			} else if (companyFilter === "Corsair") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "Corsair";
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
							e.Details.Capacity === "128GB" || e.Details.Capacity === "256GB"
						);
					})
				);
			} else if (capacityFilter === "500GB - 1TB") {
				setData1(
					data1.filter((e) => {
						return (
							e.Details.Capacity === "500GB" ||
							e.Details.Capacity === "750GB" ||
							e.Details.Capacity === "1TB"
						);
					})
				);
			} else if (capacityFilter === "1TB - 2TB") {
				setData1(
					data1.filter((e) => {
						return (
							e.Details.Capacity === "1TB" ||
							e.Details.Capacity === "1.5TB" ||
							e.Details.Capacity === "2TB"
						);
					})
				);
			} else if (capacityFilter === "2TB and Higher") {
				setData1(
					data1.filter((e) => {
						return (
							e.Details.Capacity !== "128GB" &&
							e.Details.Capacity !== "256GB" &&
							e.Details.Capacity !== "500GB" &&
							e.Details.Capacity !== "750GB" &&
							e.Details.Capacity !== "1TB" &&
							e.Details.Capacity !== "1.5TB"
						);
					})
				);
			}
		}
	}, [data, data3]);

	let cbproducts = <Spinner />;

	if (data1) {
		cbproducts = data1.map((product) => {
			return (
				<CBProductCard
					key={product._id}
					img={"/uploads/pcParts/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					detail1={product.Details.Capacity}
					detail2={product.Details.Interface}
					detail3={product.Performance.Cache}
					product_id={product._id}
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBSSDCategory
					setCapacityFilterHandler={setCapacityFilterHandler}
					setCompanyFilterHandler={setCompanyFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select Storage (SSD)</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">Capacity</th>
											<th className="cbcolor">Interface</th>
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

export default CBSSD;
