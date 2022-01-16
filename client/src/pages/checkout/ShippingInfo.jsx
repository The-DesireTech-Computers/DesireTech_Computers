import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance/axiosInstance";
import { FaAddressCard, FaCity, FaStreetView } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

const ShippingInfo = (props) => {
	let [data, setData] = useState();
	let [data1, setData1] = useState({
		address: "",
		street: "",
		city: "",
		state: "",
		country: "",
	});
	let [orderId, setOrderId] = useState();

	//receiving query params
	useEffect(() => {
		let params = new URLSearchParams(props.location.search);
		let id = null;

		for (let [key, value] of params) {
			id = value;
		}
		setOrderId(id);
	}, []);

	useEffect(() => {
		axios
			.get("/order/" + orderId)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log("error receiving data");
			});
	}, [orderId]);

	useEffect(() => {
		setData1({ ...data });
	}, [data]);

	let continueBtnHandler = () => {
		if (orderId !== undefined && data1) {
			if (data1.address === "") {
				alert("Please enter data in all the given fields  (address)");
			} else if (data1.street === "") {
				alert("Please enter data in all the given fields  (street)");
			} else if (data1.city === "") {
				alert("Please enter data in all the given fields (city)");
			} else if (data1.state === "") {
				alert("Please enter data in all the given fields(state)");
			} else if (data1.country === "") {
				alert("Please enter data in all the given fields (country)");
			} else {
				axios
					.put("/order/" + orderId, data1)
					.then((res) => {
						console.log("success");
						props.history.push("/payment");
					})
					.catch((err) => {
						console.log("error");
					});
			}
		}
	};

	console.log(data1);
	console.log(data);
	return (
		<div className="container containlogin">
			<div className="row mt-5 py-5 align-items-center">
				<div className="col-md-6">
					<form method="put">
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaAddressCard />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									required
									placeholder="Address"
									id="floatingInput"
									onChange={(e) => {
										setData1({ ...data1, address: e.target.value });
									}}
								/>
								<label for="floatingInput">Address</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaStreetView />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									required
									placeholder="Street"
									id="floatingInput"
									onChange={(e) => {
										setData1({ ...data1, street: e.target.value });
									}}
								/>
								<label for="floatingInput">Street</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaCity />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									placeholder="City"
									id="floatingInput"
									required
									onChange={(e) => {
										setData1({ ...data1, city: e.target.value });
									}}
								/>
								<label for="floatingInput">City</label>
							</div>
						</div>

						<div class="input-group mb-3">
							<span class="input-group-text">
								<GrMapLocation />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="State"
									required
									onChange={(e) => {
										setData1({ ...data1, state: e.target.value });
									}}
								/>
								<label for="floatingInput">State</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<GrMapLocation />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="Country"
									required
									onChange={(e) => {
										setData1({ ...data1, country: e.target.value });
									}}
								/>
								<label for="floatingInput">Country</label>
							</div>
						</div>
					</form>
					<div class="input-group mb-3 ">
						<button
							type="submit"
							className="btn btn-outline-primary buttonsignup"
							onClick={continueBtnHandler}
						>
							Continue
						</button>
					</div>
				</div>
				<div className="col-md-6 mb-5 text-center d-none d-md-block">
					<img
						src="/images/others/shipping.png"
						alt="logo"
						className="img-fluid mb-3 mx-auto imgfeedback"
					/>
					<h2>Provide Shipping Info</h2>
				</div>
			</div>
		</div>
	);
};

export default ShippingInfo;
