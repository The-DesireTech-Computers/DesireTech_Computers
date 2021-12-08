import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBMBCategory from "./CBMBCategory";

const CBMotherBoard = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [MBFilter, setMBFilter] = useState();

	let setMotherBoardFilter = (x) => {
		setMBFilter(x);
	};

	let selectBtnHandler = (product_id) => {
		let CustomBuilt = localStorage.getItem("CustomBuilt");
		if (CustomBuilt) {
			CustomBuilt = CustomBuilt.split(",");
			CustomBuilt.push(product_id);
			localStorage.setItem("CustomBuilt", CustomBuilt);
			props.history.push("/custom-built/cbcpu");
		} else {
			let CustomBuilt = [];
			CustomBuilt.push(product_id);
			localStorage.setItem("CustomBuilt", CustomBuilt);
			props.history.push("/custom-built/cbcpu");
		}
	};

	useEffect(() => {
		axios
			.get("pcParts/motherboard")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		if (MBFilter) {
			if (MBFilter === "AMD") {
				setData1(
					data.filter((e) => {
						return e.company === "AMD";
					})
				);
			} else if (MBFilter === "Intel") {
				setData1(
					data.filter((e) => {
						return e.company === "Intel";
					})
				);
			} else {
				setData1(data);
			}
		}
	}, [MBFilter]);

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[0]) {
			props.history.push("/custom-built/cbcpu");
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
					detail1={product.Supported_CPU.CPU_Socket_Type}
					detail2={product.Physical_Spec.Form_Factor}
					detail3={product.Memory.Maximum_Memory_Supported}
					product_id={product._id}
					path="/custom-built/cbcpu"
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
					detail1={product.Supported_CPU.CPU_Socket_Type}
					detail2={product.Physical_Spec.Form_Factor}
					detail3={product.Memory.Maximum_Memory_Supported}
					product_id={product._id}
					path="/custom-built/cbcpu"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBMBCategory setMotherBoardFilter={setMotherBoardFilter} />
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select MotherBoard</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">Socket Type /CPU</th>
											<th className="cbcolor">Form Factor</th>
											<th className="cbmaterial">Max Memory</th>
											<th className="cbprice">Price</th>
											<th className="cbactions">Actions</th>
										</tr>
									</thead>
									<tbody>{cbproducts}</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CBMotherBoard;
