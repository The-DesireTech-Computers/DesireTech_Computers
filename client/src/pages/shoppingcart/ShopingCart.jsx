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
	let [casing_cart, setcasing_cart] = useState(
		localStorage.getItem("casing_cart")
	);
	let [coolingSystem_cart, setcoolingSystem_cart] = useState(
		localStorage.getItem("coolingSystem_cart")
	);
	let [hardDrive_cart, sethardDrive_cart] = useState(
		localStorage.getItem("hardDrive_cart")
	);
	let [ssd_cart, setssd_cart] = useState(
		localStorage.getItem("ssd_cart")
	);
	let [memory_cart, setmemory_cart] = useState(
		localStorage.getItem("memory_cart")
	);
	let [motherBoard_cart, setmotherBoard_cart] = useState(
		localStorage.getItem("motherBoard_cart")
	);
	let [cpu_cart, setcpu_cart] = useState(
		localStorage.getItem("cpu_cart")
	);
	let [videoCard_cart, setvideoCard_cart] = useState(
		localStorage.getItem("videoCard_cart")
	);
	let [psu_cart, setpsu_cart] = useState(
		localStorage.getItem("psu_cart")
	);

	let main_cart = [];

	let deleteBtnHandler = (id) => {
		
		
		let prebuilt = localStorage.getItem("preBuilt_cart");
		let laptops = localStorage.getItem("laptops_cart");
		let casing = localStorage.getItem("casing_cart");
		let coolingSystem = localStorage.getItem("coolingSystem_cart");
		let hardDrive = localStorage.getItem("hardDrive_cart");
		let ssd = localStorage.getItem("ssd_cart");
		let memory = localStorage.getItem("memory_cart");
		let motherBoard = localStorage.getItem("motherBoard_cart");
		let cpu = localStorage.getItem("cpu_cart");
		let videocard = localStorage.getItem("videoCard_cart");
		let psu = localStorage.getItem("psu_cart");

		
		

		if (prebuilt) {
			prebuilt = prebuilt.split(",");
			prebuilt = prebuilt.filter((x) => {
				return x !== id;
			});

			localStorage.setItem("preBuilt_cart", prebuilt);
		}

		if (laptops) {
			laptops = laptops.split(",");	
			laptops = laptops.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("laptops_cart", laptops);
		}
		if (casing) {
			casing = casing.split(",");	
			casing = casing.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("casing_cart", casing);
		}
		if (coolingSystem) {
			coolingSystem = coolingSystem.split(",");	
			coolingSystem = coolingSystem.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("coolingSystem_cart", coolingSystem);
		}
		if (hardDrive) {
			hardDrive = hardDrive.split(",");	
			hardDrive = hardDrive.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("hardDrive_cart", hardDrive);
		}
		if (ssd) {
			ssd = ssd.split(",");	
			ssd = ssd.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("ssd_cart", ssd);
		}
		if (memory) {
			memory = memory.split(",");	
			memory = memory.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("memory_cart", memory);
		}
		if (motherBoard) {
			motherBoard = motherBoard.split(",");	
			motherBoard = motherBoard.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("motherBoard_cart", motherBoard);
		}
		if (cpu) {
			cpu = cpu.split(",");	
			cpu = cpu.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("cpu_cart", cpu);
		}
		if (videocard) {
			videocard = videocard.split(",");	
			videocard = videocard.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("videoCard_cart", videocard);
		}
		if (psu) {
			psu = psu.split(",");	
			psu = psu.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("psu_cart", psu);
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
	}, [preBuilt_cart]);

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
	}, [laptops_cart]);

	useEffect(() => {
		if (casing_cart) {
			casing_cart = casing_cart.split(",");

			for (let item of casing_cart) {
				console.log(item);
				axios
					.get("/pcParts/casing/" + item)
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
			console.log("casing_cart_items");
		}
		console.log(data);
	}, [casing_cart]);

	useEffect(() => {
		if (coolingSystem_cart) {
			coolingSystem_cart = coolingSystem_cart.split(",");

			for (let item of coolingSystem_cart) {
				console.log(item);
				axios
					.get("/pcParts/fans/" + item)
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
			console.log("coolingSystem_cart_items");
		}
		console.log(data);
	}, [coolingSystem_cart]);

	useEffect(() => {
		if (hardDrive_cart) {
			hardDrive_cart = hardDrive_cart.split(",");

			for (let item of hardDrive_cart) {
				console.log(item);
				axios
					.get("/pcParts/harddrive/" + item)
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
			console.log("hardDrive_cart_items");
		}
		console.log(data);
	}, [hardDrive_cart]);

	useEffect(() => {
		if (ssd_cart) {
			ssd_cart = ssd_cart.split(",");

			for (let item of ssd_cart) {
				console.log(item);
				axios
					.get("/pcParts/ssd/" + item)
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
			console.log("ssd_cart_items");
		}
		console.log(data);
	}, [ssd_cart]);

	useEffect(() => {
		if (memory_cart) {
			memory_cart = memory_cart.split(",");

			for (let item of memory_cart) {
				console.log(item);
				axios
					.get("/pcParts/memory/" + item)
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
			console.log("memory_cart_items");
		}
		console.log(data);
	}, [memory_cart]);

	useEffect(() => {
		if (motherBoard_cart) {
			motherBoard_cart = motherBoard_cart.split(",");

			for (let item of motherBoard_cart) {
				console.log(item);
				axios
					.get("/pcParts/motherboard/" + item)
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
			console.log("motherBoard_cart_items");
		}
		console.log(data);
	}, [motherBoard_cart]);

	useEffect(() => {
		if (cpu_cart) {
			cpu_cart = cpu_cart.split(",");

			for (let item of cpu_cart) {
				console.log(item);
				axios
					.get("/pcParts/processor/" + item)
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
			console.log("cpu_cart_items");
		}
		console.log(data);
	}, [cpu_cart]);

	useEffect(() => {
		if (videoCard_cart) {
			videoCard_cart = videoCard_cart.split(",");

			for (let item of videoCard_cart) {
				console.log(item);
				axios
					.get("/pcParts/videocard/" + item)
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
			console.log("videoCard_cart_items");
		}
		console.log(data);
	}, [videoCard_cart]);

	useEffect(() => {
		if (psu_cart) {
			psu_cart = psu_cart.split(",");

			for (let item of psu_cart) {
				console.log(item);
				axios
					.get("/pcParts/psu/" + item)
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
			console.log("psu_cart_items");
		}
		console.log(data);
	}, [psu_cart]);







	

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
							{/* <strong>Total: $1.99</strong> */}
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
							{/* <strong>Total: $1.99</strong> */}
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
