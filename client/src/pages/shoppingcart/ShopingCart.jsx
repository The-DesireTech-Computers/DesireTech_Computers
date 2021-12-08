import React, { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartCard from "./cartcard/CartCard";
import axios from "../../axiosInstance/axiosInstance";
const ShoppingCart = (props) => {
	let [data, setData] = useState([]);
	let [data1, setData1] = useState([]);

	let [preBuilt_cart, setpreBuilt_cart] = useState(
		localStorage.getItem("preBuilt_cart")
	);
	let [laptops_cart, setlaptops_cart] = useState(
		localStorage.getItem("laptops_cart")
	);

	let main_cart = [];


	let deleteBtnHandler = (id) => {
		let prebuilt = localStorage.getItem("preBuilt_cart");
		let laptops = localStorage.getItem("laptops_cart");
		prebuilt = prebuilt.split(",");
		laptops = laptops.split(",");

		if (prebuilt) {
			prebuilt = prebuilt.filter((x) => {
				return x !== id;
			});

			localStorage.setItem("preBuilt_cart", prebuilt);
		}

		if (laptops) {
			laptops = laptops.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("laptops_cart", laptops);
		}

	
		window.location.reload();
	};

	useEffect(() => {
		if (preBuilt_cart) {
			preBuilt_cart = preBuilt_cart.split(",");
			for (let item of preBuilt_cart) {
				console.log(item);
				axios
					.get("/preBuiltDesktop/" + item)
					.then((res) => {
						setData((prev) => [...prev, res.data]);
					})
					.catch((err) => {
						if (err.response.data) {
							console.log(err.response.data);
						} else {
							console.log("error fetching data");
						}
					});
			}
			console.log("prebuilt_cart_items");
		}
		console.log(data);
	}, [preBuilt_cart, data1]);

	useEffect(() => {
		if (laptops_cart) {
			laptops_cart = laptops_cart.split(",");

			for (let item of laptops_cart) {
				console.log(item);
				axios
					.get("/laptops/" + item)
					.then((res) => {
						setData((prev) => [...prev, res.data]);
					})
					.catch((err) => {
						if (err.response.data) {
							console.log(err.response.data);
						} else {
							console.log("error fetching data");
						}
					});
			}
			console.log("laptops_cart_items");
		}
		console.log(data);
	}, [laptops_cart, data1]);

	console.log(data);
	console.log("data");

	return (
		<div className="container cartcontain mt-5">
			<table id="cart" className="table table-hover table-striped">
				<thead>
					<tr>
						<th className="product">Product</th>
						<th className="price">Price</th>
						<th className="quantity">Quantity</th>

						<th className="actions">Actions</th>
					</tr>
				</thead>
				<tbody>
					{data
						? data.map((item) => {
								return (
									<CartCard
										title={item.title}
										price={item.price}
										key={item._id}
										product_id={item._id}
										deleteBtnHandler={deleteBtnHandler}
									/>
								);
						  })
						: null}
				</tbody>
				<tfoot>
					<tr className="d-block d-sm-none">
						<td className="text-center">
							<strong>Total: $1.99</strong>
						</td>
					</tr>
					<tr>
						<td>
							<Link to="#" className="btn btn-warning">
								<FaAngleLeft className="icon1" /> Continue Shopping
							</Link>
						</td>

						<td className="d-none d-sm-block text-center" />
						<td className="d-none d-sm-block text-center">
							<strong>Total: $1.99</strong>
						</td>

						<td>
							<Link to="#" className="btn btn-success">
								Checkout <FaAngleRight className="icon1" />
							</Link>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ShoppingCart;
