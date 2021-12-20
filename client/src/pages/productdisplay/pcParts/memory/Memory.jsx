import React, { useState, useEffect } from "react";
import ProductCard from "../../../../components/productcard/ProductCard";
import "../../ProductDisplay.css";
import axios from "../../../../axiosInstance/axiosInstance";
import MemoryCategory from "./MemoryCategory";
import Spinner from "../../../../components/LoadingSpinner/LoadingSpinner";
const Memory = () => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [data4, setData4] = useState();
	let [companyFilter, setCompanyFilter] = useState();
	let [capacityFilter, setCapacityFilter] = useState();
	let [priceFilter, setPriceFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let setCapacityFilterHandler = (x) => {
		setCapacityFilter(x);
	};
	let setPriceFilterHandler = (x) => {
		setPriceFilter(x);
	};

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("memory_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(product_id);

			localStorage.setItem("memory_cart", cart);
		} else {
			localStorage.setItem("memory_cart", product_id);
		}
		console.log(cart);
	};
	useEffect(() => {
		axios
			.get("pcParts/memory")
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
	}, [data, companyFilter, capacityFilter, priceFilter]);

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
	}, [data, data2]);

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
		setData4(data3);
	}, [data, data3]);

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
	}, [data, data4]);

	let products = <Spinner />;

	if (data1) {
		products = data1.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/images/productimages/4.jpg"}
					title={product.title}
					price={product.price}
					product_id={product._id}
					addToCartBtnHandler={addToCartBtnHandler}
					path="memorydetails"
				/>
			);
		});
	} else if (data) {
		products = data.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/images/productimages/4.jpg"}
					title={product.title}
					price={product.price}
					product_id={product._id}
					addToCartBtnHandler={addToCartBtnHandler}
					path="memorydetails"
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="container mt-5">
				<div className="cbcontainer">
					<div className="hero-image">
						<img src="/images/others/memory.jpg" className="cbimage" />
						<div className="heroimg">
							<div className="hero-text-light">
								<h1 id="cbh1text">Memory</h1>
								<p id="cbptext">Here you can find RAMs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<MemoryCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setPriceFilterHandler={setPriceFilterHandler}
					setCapacityFilterHandler={setCapacityFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="container-fluid mt-3">
						<h3 className="cbheading">Memory:</h3>
						<div className="row mx-auto">{products}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Memory;
