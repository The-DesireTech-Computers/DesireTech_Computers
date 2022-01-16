import React, { useState, useEffect } from "react";
import "../PartsPage.css";
import axios from "../../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import CBProductCard from "../../../../../components/cbProductCard/CBProductCard";
import CBVCCategory from "./CBVCCategory";

const CBVideoCard = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [data4, setData4] = useState();
	let [filteredData, setFilteredData] = useState([]);
	let [companyFilter, setCompanyFilter] = useState();
	let [capacityFilter, setCapacityFilter] = useState();
	let [manufacturerFilter, setManufacturerFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let setCapacityFilterHandler = (x) => {
		setCapacityFilter(x);
	};
	let setManufacturerFilterHandler = (x) => {
		setManufacturerFilter(x);
	};
	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbmemory");
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
			.get("pcParts/videocard")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		if (data) {
			setFilteredData(data);
		}
	}, [data]);

	useEffect(() => {
		setData1(filteredData);
		setData2(data1);
	}, [filteredData, companyFilter, capacityFilter, manufacturerFilter]);

	useEffect(() => {
		if (companyFilter) {
			if (companyFilter) {
				if (companyFilter === "AMD") {
					setData1(
						data1.filter((e) => {
							return e.Chipset.Manufacturer === "AMD";
						})
					);
				} else if (companyFilter === "NVIDIA") {
					setData1(
						data1.filter((e) => {
							return e.Chipset.Manufacturer === "NVIDIA";
						})
					);
				}
			}
		}
		setData3(data2);
	}, [filteredData, data2]);

	useEffect(() => {
		if (manufacturerFilter) {
			if (manufacturerFilter === "MSI") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "MSI";
					})
				);
			} else if (manufacturerFilter === "ZOTAC") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "ZOTAC";
					})
				);
			} else if (manufacturerFilter === "GIGABYTE") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "GIGABYTE";
					})
				);
			} else if (manufacturerFilter === "ASUS") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "ASUS";
					})
				);
			} else if (manufacturerFilter === "ASRock") {
				setData1(
					data1.filter((e) => {
						return e.Model.brand === "ASRock";
					})
				);
			}
		}

		setData4(data3);
	}, [filteredData, data3]);
	useEffect(() => {
		if (capacityFilter) {
			if (capacityFilter == 2) {
				setData1(
					data1.filter((e) => {
						return e.Memory.Memory_Size === 2;
					})
				);
			} else if (capacityFilter == 4) {
				setData1(
					data1.filter((e) => {
						return e.Memory.Memory_Size === 4;
					})
				);
			} else if (capacityFilter == 6) {
				setData1(
					data1.filter((e) => {
						return e.Memory.Memory_Size === 6;
					})
				);
			} else if (capacityFilter == 8) {
				setData1(
					data1.filter((e) => {
						return e.Memory.Memory_Size === 8;
					})
				);
			} else if (capacityFilter == 12) {
				setData1(
					data1.filter((e) => {
						return e.Memory.Memory_Size === 12;
					})
				);
			}
		}
	}, [filteredData, data4]);

	let check = localStorage.getItem("CustomBuilt");
	if (check) {
		check = check.split(",");

		if (check[4]) {
			props.history.push("/custom-built/cbpsu");
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
					detail1={product.Chipset.GPU_Series}
					detail2={product.Memory.Memory_Size}
					detail3={product.Memory.Effective_Memory_Clock}
					product_id={product._id}
					path="/custom-built/cbpsu"
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
					detail1={product.Chipset.GPU_Series}
					detail2={product.Memory.Memory_Size}
					detail3={product.Memory.Effective_Memory_Clock}
					product_id={product._id}
					path="/custom-built/cbpsu"
					selectBtnHandler={selectBtnHandler}
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<CBVCCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setCapacityFilterHandler={setCapacityFilterHandler}
					setManufacturerFilterHandler={setManufacturerFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="divborder">
						<div className="container-fluid mt-3">
							<h3 className="cbheading">Select Video Card</h3>
							<div className="row mt-4 table-responsive">
								<table
									className="table table-light table-hover table-striped"
									id="cbtable"
								>
									<thead>
										<tr>
											<th className="cbproduct">Product</th>
											<th className="cbtype">GPU</th>
											<th className="cbcolor">Memory Size</th>
											<th className="cbmaterial">Core Clock</th>
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

export default CBVideoCard;
