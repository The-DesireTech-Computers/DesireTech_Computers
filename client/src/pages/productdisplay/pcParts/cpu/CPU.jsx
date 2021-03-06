import React, { useState, useEffect } from "react";
import ProductCard from "../../../../components/productcard/ProductCard";
import "../../ProductDisplay.css";
import CPUCategory from "./CPUCategory";
import axios from "../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../components/LoadingSpinner/LoadingSpinner";
const CPU = () => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [companyFilter, setCompanyFilter] = useState();
	let [priceFilter, setPriceFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let setPriceFilterHandler = (x) => {
		setPriceFilter(x);
	};
	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("cpu_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(product_id)) {
				cart.push(product_id);
			}

			localStorage.setItem("cpu_cart", cart);
		} else {
			localStorage.setItem("cpu_cart", product_id);
		}
		console.log(cart);
	};
	useEffect(() => {
		axios
			.get("pcParts/processor")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);
	useEffect(() => {
		setData1(data);
		setData2(data1);
	}, [data, companyFilter, priceFilter]);

	useEffect(() => {
		if (companyFilter) {
			if (companyFilter === "Intel") {
				setData1(
					data.filter((e) => {
						return e.Model.brand === "Intel";
					})
				);
			} else if (companyFilter === "AMD") {
				setData1(
					data.filter((e) => {
						return e.Model.brand === "AMD";
					})
				);
			}
		}
		setData3(data2);
	}, [data, data2]);
	useEffect(() => {
		if (priceFilter) {
			if (priceFilter == 0) {
				setData1(
					data1.filter((e) => {
						return e.price >= 0 && e.price <= 15000;
					})
				);
			} else if (priceFilter == 15000) {
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
	}, [data, data3]);

	let products = <Spinner />;

	if (data1) {
		products = data1.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/uploads/pcParts/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					product_id={product._id}
					quantity={product.quantity}
					addToCartBtnHandler={addToCartBtnHandler}
					path="cpudetails"
				/>
			);
		});
	} else if (data) {
		products = data.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/uploads/pcParts/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					product_id={product._id}
					quantity={product.quantity}
					addToCartBtnHandler={addToCartBtnHandler}
					path="cpudetails"
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="container mt-5">
				<div className="cbcontainer">
					<div className="hero-image">
						<img src="/images/others/cpu.jpg" className="cbimage" />
						<div className="heroimg">
							<div className="hero-text-light">
								<h1 id="cbh1text">CPUs</h1>
								<p id="cbptext">Here you can find CPUs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<CPUCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setPriceFilterHandler={setPriceFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="container-fluid mt-3">
						<h3 className="cbheading">CPUs:</h3>
						<div className="row mx-auto">{products}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CPU;
