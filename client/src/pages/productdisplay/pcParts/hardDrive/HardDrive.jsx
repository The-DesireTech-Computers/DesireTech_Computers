import React, { useState, useEffect } from "react";
import ProductCard from "../../../../components/productcard/ProductCard";
import "../../ProductDisplay.css";
import axios from "../../../../axiosInstance/axiosInstance";
import Spinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import HardDiskCategory from "./HardDiskCategory";
const HardDrive = () => {
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
		let cart = localStorage.getItem("hardDrive_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(product_id);

			localStorage.setItem("hardDrive_cart", cart);
		} else {
			localStorage.setItem("hardDrive_cart", product_id);
		}
		console.log(cart);
	};

	useEffect(() => {
		axios
			.get("pcParts/harddrive")
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
					path="harddrivedetails"
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
					path="harddrivedetails"
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<HardDiskCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setCapacityFilterHandler={setCapacityFilterHandler}
					setPriceFilterHandler={setPriceFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="container-fluid ">
						<div className="row mx-auto">{products}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HardDrive;
