import React, { useState, useEffect } from "react";
import ProductCard from "../../../../components/productcard/ProductCard";
import "../../ProductDisplay.css";
import axios from "../../../../axiosInstance/axiosInstance";
import VCCategory from "./VideoCardCategory";
import Spinner from "../../../../components/LoadingSpinner/LoadingSpinner";
const VideoCard = () => {
	let [data, setData] = useState();
	let [data1, setData1] = useState();
	let [data2, setData2] = useState();
	let [data3, setData3] = useState();
	let [data4, setData4] = useState();
	let [data5, setData5] = useState();
	let [companyFilter, setCompanyFilter] = useState();
	let [capacityFilter, setCapacityFilter] = useState();
	let [manufacturerFilter, setManufacturerFilter] = useState();
	let [priceFilter, setPriceFilter] = useState();

	let setCompanyFilterHandler = (x) => {
		setCompanyFilter(x);
	};
	let setCapacityFilterHandler = (x) => {
		setCapacityFilter(x);
	};
	let setManufacturerFilterHandler = (x) => {
		setManufacturerFilter(x);
	};
	let setPriceFilterHandler = (x) => {
		setPriceFilter(x);
	};

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("videoCard_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(product_id);

			localStorage.setItem("videoCard_cart", cart);
		} else {
			localStorage.setItem("videoCard_cart", product_id);
		}
		console.log(cart);
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
		setData1(data);
		setData2(data1);
	}, [data, companyFilter, capacityFilter, manufacturerFilter, priceFilter]);

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
	}, [data, data2]);

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
	}, [data, data3]);
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
		setData5(data4);
	}, [data, data4]);
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
	}, [data, data5]);
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
					path="videocarddetails"
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
					path="videocarddetails"
				/>
			);
		});
	}

	return (
		<div className="container-fluid">
			<div className="container mt-5">
				<div className="cbcontainer">
					<div className="hero-image">
						<img src="/images/others/gpu.jpg" className="cbimage" />
						<div className="heroimg">
							<div className="hero-text-light">
								<h1 id="cbh1text">Graphics Card</h1>
								<p id="cbptext">Here you can find GPUs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<VCCategory
					setCompanyFilterHandler={setCompanyFilterHandler}
					setCapacityFilterHandler={setCapacityFilterHandler}
					setManufacturerFilterHandler={setManufacturerFilterHandler}
					setPriceFilterHandler={setPriceFilterHandler}
				/>
				<div className="col-md-8 ">
					<div className="container-fluid mt-3">
						<h3 className="cbheading">Graphic Cards:</h3>
						<div className="row mx-auto">{products}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
