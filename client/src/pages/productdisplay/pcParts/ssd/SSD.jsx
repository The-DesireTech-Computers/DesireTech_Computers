import React, { useState, useEffect } from "react";
import ProductCard from "../../../../components/productcard/ProductCard";
import "../../ProductDisplay.css";
import axios from "../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import SSDCategory from "./SSDCategory";
const SSD = () => {
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
		let cart = localStorage.getItem("ssd_cart");

		if (cart) {
			cart = cart.split(",");
			if (!cart.includes(product_id)) {
				cart.push(product_id);
			}

			localStorage.setItem("ssd_cart", cart);
		} else {
			localStorage.setItem("ssd_cart", product_id);
		}
		console.log(cart);
	};

	useEffect(() => {
		axios
			.get("pcParts/ssd")
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
					img={"/uploads/pcParts/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					product_id={product._id}
					quantity={product.quantity}
					addToCartBtnHandler={addToCartBtnHandler}
					path="ssddetails"
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
					path="ssddetails"
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="container mt-5">
				<div className="cbcontainer">
					<div className="hero-image">
						<img src="/images/others/ssd.jpg" className="cbimage" />
						<div className="heroimg">
							<div className="hero-text-light">
								<h1 id="cbh1text">Storage Drives</h1>
								<p id="cbptext">Here you can find SSDs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<SSDCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setCapacityFilterHandler={setCapacityFilterHandler}
					setPriceFilterHandler={setPriceFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="container-fluid mt-3">
						<h3 className="cbheading">SSDs:</h3>
						<div className="row mx-auto">{products}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SSD;
