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
	let [ssd_cart, setssd_cart] = useState(localStorage.getItem("ssd_cart"));
	let [memory_cart, setmemory_cart] = useState(
		localStorage.getItem("memory_cart")
	);
	let [motherBoard_cart, setmotherBoard_cart] = useState(
		localStorage.getItem("motherBoard_cart")
	);
	let [cpu_cart, setcpu_cart] = useState(localStorage.getItem("cpu_cart"));
	let [videoCard_cart, setvideoCard_cart] = useState(
		localStorage.getItem("videoCard_cart")
	);
	let [psu_cart, setpsu_cart] = useState(localStorage.getItem("psu_cart"));
	let [soundCard_cart, setsoundCard_cart] = useState(
		localStorage.getItem("soundCard_cart")
	);

	let [caseFan_cart, setcaseFan_cart] = useState(
		localStorage.getItem("caseFan_cart")
	);
	let [headset_cart, setheadset_cart] = useState(
		localStorage.getItem("headset_cart")
	);
	let [keyboard_cart, setkeyboard_cart] = useState(
		localStorage.getItem("keyboard_cart")
	);
	let [microphone_cart, setmicrophone_cart] = useState(
		localStorage.getItem("microphone_cart")
	);
	let [monitor_cart, setmonitor_cart] = useState(
		localStorage.getItem("monitor_cart")
	);
	let [mouse_cart, setmouse_cart] = useState(
		localStorage.getItem("mouse_cart")
	);
	let [speaker_cart, setspeaker_cart] = useState(
		localStorage.getItem("speaker_cart")
	);
	let [webcam_cart, setwebcam_cart] = useState(
		localStorage.getItem("webcam_cart")
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
		let soundcard = localStorage.getItem("soundCard_cart");

		let caseFan = localStorage.getItem("caseFan_cart");
		let webcam = localStorage.getItem("webcam_cart");
		let speaker = localStorage.getItem("speaker_cart");
		let mouse = localStorage.getItem("mouse_cart");
		let monitor = localStorage.getItem("monitor_cart");
		let microphone = localStorage.getItem("microphone_cart");
		let keyboard = localStorage.getItem("keyboard_cart");
		let headset = localStorage.getItem("headset_cart");

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
		if (soundcard) {
			soundcard = soundcard.split(",");
			soundcard = soundcard.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("soundCard_cart", soundcard);
		}
		if (caseFan) {
			caseFan = caseFan.split(",");
			caseFan = caseFan.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("caseFan_cart", caseFan);
		}
		if (webcam) {
			webcam = webcam.split(",");
			webcam = webcam.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("webcam_cart", webcam);
		}
		if (speaker) {
			speaker = speaker.split(",");
			speaker = speaker.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("speaker_cart", speaker);
		}
		if (mouse) {
			mouse = mouse.split(",");
			mouse = mouse.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("mouse_cart", mouse);
		}
		if (monitor) {
			monitor = monitor.split(",");
			monitor = monitor.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("monitor_cart", monitor);
		}
		if (microphone) {
			microphone = microphone.split(",");
			microphone = microphone.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("microphone_cart", microphone);
		}
		if (keyboard) {
			keyboard = keyboard.split(",");
			keyboard = keyboard.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("keyboard_cart", keyboard);
		}
		if (headset) {
			headset = headset.split(",");
			headset = headset.filter((x) => {
				return x !== id;
			});
			localStorage.setItem("headset_cart", headset);
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
	useEffect(() => {
		if (soundCard_cart) {
			soundCard_cart = soundCard_cart.split(",");

			for (let item of soundCard_cart) {
				console.log(item);
				axios
					.get("/pcParts/soundcard/" + item)
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
			console.log("soundcard_cart_items");
		}
		console.log(data);
	}, [soundCard_cart]);
	useEffect(() => {
		if (caseFan_cart) {
			caseFan_cart = caseFan_cart.split(",");

			for (let item of caseFan_cart) {
				console.log(item);
				axios
					.get("/accessories/casefan/" + item)
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
			console.log("caseFan_cart_items");
		}
		console.log(data);
	}, [caseFan_cart]);

	useEffect(() => {
		if (webcam_cart) {
			webcam_cart = webcam_cart.split(",");

			for (let item of webcam_cart) {
				console.log(item);
				axios
					.get("/accessories/webcam/" + item)
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
			console.log("webcam_cart_items");
		}
		console.log(data);
	}, [webcam_cart]);

	useEffect(() => {
		if (speaker_cart) {
			speaker_cart = speaker_cart.split(",");

			for (let item of speaker_cart) {
				console.log(item);
				axios
					.get("/accessories/speaker/" + item)
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
			console.log("speaker_cart_items");
		}
		console.log(data);
	}, [speaker_cart]);

	useEffect(() => {
		if (mouse_cart) {
			mouse_cart = mouse_cart.split(",");

			for (let item of mouse_cart) {
				console.log(item);
				axios
					.get("/accessories/mouse/" + item)
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
			console.log("mouse_cart_items");
		}
		console.log(data);
	}, [mouse_cart]);

	useEffect(() => {
		if (monitor_cart) {
			monitor_cart = monitor_cart.split(",");

			for (let item of monitor_cart) {
				console.log(item);
				axios
					.get("/accessories/monitor/" + item)
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
			console.log("monitor_cart_items");
		}
		console.log(data);
	}, [monitor_cart]);

	useEffect(() => {
		if (microphone_cart) {
			microphone_cart = microphone_cart.split(",");

			for (let item of microphone_cart) {
				console.log(item);
				axios
					.get("/accessories/microphone/" + item)
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
			console.log("microphone_cart_items");
		}
		console.log(data);
	}, [microphone_cart]);

	useEffect(() => {
		if (keyboard_cart) {
			keyboard_cart = keyboard_cart.split(",");

			for (let item of keyboard_cart) {
				console.log(item);
				axios
					.get("/accessories/keyboard/" + item)
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
			console.log("keyboard_cart_items");
		}
		console.log(data);
	}, [keyboard_cart]);

	useEffect(() => {
		if (headset_cart) {
			headset_cart = headset_cart.split(",");

			for (let item of headset_cart) {
				console.log(item);
				axios
					.get("/accessories/headset/" + item)
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
			console.log("headset_cart_items");
		}
		console.log(data);
	}, [headset_cart]);

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
								Continue Shopping
							</Link>
						</td>

						<td className="d-none d-sm-block text-center" />
						<td className="d-none d-sm-block text-center">
							<strong>Total: $1.99</strong>
						</td>
						<td></td>
						<td>
							<Link to="#" className="btn btn-success">
								Checkout
							</Link>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ShoppingCart;
