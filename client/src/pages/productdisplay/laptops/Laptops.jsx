import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/productcard/ProductCard";
import "../ProductDisplay.css";
import axios from "../../../axiosInstance/axiosInstance";
import Spinner from "../../../components/LoadingSpinner/LoadingSpinner";
import PreBuiltCategory from "./laptop-Catagory";
const Laptops = () => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [data4, setData4] = useState();
	let [data5, setData5] = useState();
	let [data6, setData6] = useState();
	let [companyFilter, setCompanyFilter] = useState();
	let [typeFilter, setTypeFilter] = useState();
	let [cpuTypeFilter, setCpuTypeFilterData] = useState();
	let [gpuTypeFilter, setGpuTypeFilter] = useState();
	let [priceFilter, setPriceFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};

	let setTypeFilterHandler = (x) => {
		setTypeFilter(x);
	};

	let setCpuTypeFilterHandler = (x) => {
		setCpuTypeFilterData(x);
	};
	let setGpuTypeFilterHandler = (x) => {
		setGpuTypeFilter(x);
	};

	let setPriceFilterHandler = (x) => {
		setPriceFilter(x);
	};

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("laptops_cart");
		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(product_id)) {
				cart.push(product_id);
			}
			localStorage.setItem("laptops_cart", cart);
		} else {
			localStorage.setItem("laptops_cart", product_id);
		}
		console.log(cart);
	};

	useEffect(() => {
		axios
			.get("/laptops")
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
	}, [
		data,
		companyFilter,
		typeFilter,
		cpuTypeFilter,
		gpuTypeFilter,
		priceFilter,
	]);

	useEffect(() => {
		if (companyFilter) {
			if (companyFilter) {
				if (companyFilter === "DELL") {
					setData1(
						data1.filter((e) => {
							return e.Model.brand === "DELL" || e.Model.brand === "dell";
						})
					);
				} else if (companyFilter === "HP") {
					setData1(
						data1.filter((e) => {
							return e.Model.brand === "HP" || e.Model.brand === "hp";
						})
					);
				} else if (companyFilter === "ACER") {
					setData1(
						data1.filter((e) => {
							return e.Model.brand === "ACER" || e.Model.brand === "acer";
						})
					);
				} else if (companyFilter === "ASUS") {
					setData1(
						data1.filter((e) => {
							return e.Model.brand === "ASUS" || e.Model.brand === "asus";
						})
					);
				} else if (companyFilter === "Lenovo") {
					setData1(
						data1.filter((e) => {
							return e.Model.brand === "Lenovo" || e.Model.brand === "LENOVO";
						})
					);
				} else if (companyFilter === "MSI") {
					setData1(
						data1.filter((e) => {
							return e.Model.brand === "MSI" || e.Model.brand === "msi";
						})
					);
				}
			}
		}
		setData3(data2);
	}, [data, data2]);

	useEffect(() => {
		if (typeFilter) {
			if (typeFilter === "Gaming") {
				setData1(
					data1.filter((e) => {
						return e.information.Type === "Gaming";
					})
				);
			} else if (typeFilter === "Graphics") {
				setData1(
					data1.filter((e) => {
						return e.information.Type === "Graphics";
					})
				);
			} else if (typeFilter === "Office") {
				setData1(
					data1.filter((e) => {
						return e.information.Type === "Office";
					})
				);
			}
		}
		setData4(data3);
	}, [data, data3]);

	useEffect(() => {
		if (cpuTypeFilter) {
			if (cpuTypeFilter == "AMD Ryzen") {
				setData1(
					data1.filter((e) => {
						return e.CPU.CPU_Type === "AMD Ryzen";
					})
				);
			} else if (cpuTypeFilter == "AMD A-Series") {
				setData1(
					data1.filter((e) => {
						return e.CPU.CPU_Type === "AMD A-Series";
					})
				);
			} else if (cpuTypeFilter == "Intel core i9") {
				setData1(
					data1.filter((e) => {
						return e.CPU.CPU_Type === "Intel core i9";
					})
				);
			} else if (cpuTypeFilter == "Intel core i7") {
				setData1(
					data1.filter((e) => {
						return e.CPU.CPU_Type === "Intel core i7";
					})
				);
			} else if (cpuTypeFilter == "Intel core i5") {
				setData1(
					data1.filter((e) => {
						return e.CPU.CPU_Type === "Intel core i5";
					})
				);
			} else if (cpuTypeFilter == "Intel core i3") {
				setData1(
					data1.filter((e) => {
						return e.CPU.CPU_Type === "Intel core i3";
					})
				);
			}
		}

		setData5(data4);
	}, [data, data4]);

	useEffect(() => {
		if (gpuTypeFilter) {
			if (gpuTypeFilter == "NVIDIA") {
				setData1(
					data1.filter((e) => {
						return e.Graphics.GPU_brand === "NVIDIA";
					})
				);
			} else if (gpuTypeFilter == "AMD") {
				setData1(
					data1.filter((e) => {
						return e.Graphics.GPU_brand === "AMD";
					})
				);
			} else if (gpuTypeFilter == "NA") {
				setData1(
					data1.filter((e) => {
						return e.Graphics.GPU_brand === "NA";
					})
				);
			} else if (gpuTypeFilter == "Intel") {
				setData1(
					data1.filter((e) => {
						return e.Graphics.GPU_brand === "Intel";
					})
				);
			}
		}

		setData6(data5);
	}, [data, data5]);

	useEffect(() => {
		if (priceFilter) {
			if (priceFilter == 15000) {
				setData1(
					data1.filter((e) => {
						return e.price >= 15000 && e.price <= 20000;
					})
				);
			} else if (priceFilter == 20000) {
				setData1(
					data1.filter((e) => {
						return e.price >= 20000 && e.price <= 30000;
					})
				);
			} else if (priceFilter == 30000) {
				setData1(
					data1.filter((e) => {
						return e.price >= 30000 && e.price <= 50000;
					})
				);
			} else if (priceFilter == 50000) {
				setData1(
					data1.filter((e) => {
						return e.price >= 50000 && e.price <= 70000;
					})
				);
			} else if (priceFilter == 70000) {
				setData1(
					data1.filter((e) => {
						return e.price >= 70000 && e.price <= 100000;
					})
				);
			} else if (priceFilter == 100000) {
				setData1(
					data1.filter((e) => {
						return e.price >= 100000;
					})
				);
			}
		}
	}, [data, data6]);

	let products = <Spinner />;

	if (data1) {
		products = data1.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/uploads/laptops/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					product_id={product._id}
					quantity={product.quantity}
					addToCartBtnHandler={addToCartBtnHandler}
					path="laptopsdetails"
				/>
			);
		});
	} else if (data) {
		products = data.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/uploads/laptops/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					product_id={product._id}
					quantity={product.quantity}
					addToCartBtnHandler={addToCartBtnHandler}
					path="laptopsdetails"
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="container mt-5">
				<div className="cbcontainer">
					<div className="hero-image">
						<img src="/images/others/laptops.jpg" className="cbimage" />
						<div className="heroimg">
							<div className="hero-text-light">
								<h1 id="cbh1text">Laptops</h1>
								<p id="cbptext">Here you can find portable PCs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<PreBuiltCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setTypeFilterHandler={setTypeFilterHandler}
					setCpuTypeFilterHandler={setCpuTypeFilterHandler}
					setGpuTypeFilterHandler={setGpuTypeFilterHandler}
					setPriceFilterHandler={setPriceFilterHandler}
				/>
				<div className="col-md-8 mt-3">
					<div className="container-fluid ">
						<h3 className="cbheading">Laptops:</h3>
						<div className="row mx-auto">{products}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Laptops;
