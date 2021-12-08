import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBCSCategory from "./CBCSCategory";
const CBCoolingSystem = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [CompanyFilter, setCompanyFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbcpu");
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

	useEffect(() => {
		axios
			.get("pcParts/fans")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.res.data);
			});
	}, []);

	useEffect(() => {
		if (CompanyFilter) {
			if (CompanyFilter === "Corsair") {
				setData1(
					data.filter((e) => {
						return e.Model.brand === "Corsair";
					})
				);
			} else if (CompanyFilter === "ASUS") {
				setData1(
					data.filter((e) => {
						return e.Model.brand === "ASUS";
					})
				);
			} else if (CompanyFilter === "Cooler Master") {
				setData1(
					data.filter((e) => {
						return e.Model.brand === "Cooler Master";
					})
				);
			} else if (CompanyFilter === "Thermaltake") {
				setData1(
					data.filter((e) => {
						return e.Model.brand === "Thermaltake";
					})
				);
			} else {
				setData1(data);
			}
		}
	}, [CompanyFilter]);

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[2]) {
			props.history.push("/custom-built/cbmemory");
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
					detail1={product.Fan.Fan_RPM}
					detail2={product.Fan.Fan_Noise}
					detail3={product.Fan.color}
					product_id={product._id}
					path="/custom-built/cbmemory"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	} else if (data) {
		cbproducts = data.map((product) => {
			return (
				<CBProductCard
					key={product._id}
					img={"/images/productimages/4.jpg"}
					title={product.title}
					price={product.price}
					detail1={product.Fan.Fan_RPM}
					detail2={product.Fan.Fan_Noise}
					detail3={product.Fan.color}
					product_id={product._id}
					path="/custom-built/cbmemory"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	console.log(CompanyFilter);

	return (
		<div className="container-fluid">
			<div className="row">
				<CBCSCategory setCompanyFilterHandler={setCompanyFilterHandler} />
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading"> Select CPU Cooling</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">RPM</th>
											<th className="cbcolor">Noise Level</th>
											<th className="cbmaterial">Color</th>
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

export default CBCoolingSystem;
