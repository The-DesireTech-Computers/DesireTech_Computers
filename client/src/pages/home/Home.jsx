import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance/axiosInstance";
import ProductCarousel from "../../components/productcarousel/ProductCarousel";
import HomeCarousel from "./carousel/HomeCarousel";

import "./Home.css";
const Home = () => {
	let [data, setData] = useState();

	let addToCartBtnHandler = (product_id) => {
		let cart = localStorage.getItem("preBuilt_cart");

		if (cart) {
			cart = cart.split(",");
			cart.push(product_id);

			localStorage.setItem("preBuilt_cart", cart);
		} else {
			localStorage.setItem("preBuilt_cart", product_id);
		}
		console.log(cart);
	};

	useEffect(() => {
		axios
			.get("/preBuiltDesktop")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	return (
		<div>
			<HomeCarousel />
			{/* <ProductCarousel
				data={data ? data : null}
				addToCartBtnHandler={addToCartBtnHandler}
			/> */}
		</div>
	);
};

export default Home;
