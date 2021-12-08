import React, { useState } from "react";
import { FaEnvelope, FaLock, FaPhoneSquareAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "../../axiosInstance/axiosInstance";
import "./Signup.css";
const Signup = (props) => {
	let [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});

	let pass = null;
	let confpass = null;

	let createAccount = () => {
		if (data.name === "") {
			alert("Kindly fill all the given fields (name)");
		} else if (data.email === "") {
			alert("Kindly fill all the given fields (email)");
		} else if (data.phone === 0 || data.phone === "") {
			alert("Kindly fill all the given fields (phone)");
		} else if (pass === "") {
			alert("Kindly fill all the given fields (password)");
		} else if (confpass === "") {
			alert("Kindly fill all the given fields (confirm password)");
		} else {
			if (pass === confpass) {
				console.log(data);

				//posting data to backend
				axios
					.post("users/register", data)
					.then((res) => {
						props.history.push("/login");
					})
					.catch((error) => {
						console.log(error.message);
					});
			} else {
				alert("Password and Confirm Password do not match");
			}
		}
	};

	return (
		<div className="container containsignup">
			<div className="row mt-5 py-5 align-items-center">
				<div className="col-md-5 mb-5 text-center">
					<img
						src="/images/logo/logo1.png"
						alt="logo"
						className="img-fluid mb-3 mx-auto d-none d-md-block imgsignup"
					/>
					<h1>Create an account</h1>
				</div>
				<div className="col-md-7">
					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaUser />
						</span>
						<div className="form-floating">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Name"
								required
								onChange={(e) => {
									setData({ ...data, name: e.target.value });
								}}
							/>
							<label for="floatingInput">Name</label>
						</div>
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaEnvelope />
						</span>
						<div className="form-floating">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								required
								placeholder="Email"
								onChange={(e) => {
									setData({ ...data, email: e.target.value });
								}}
							/>
							<label for="floatingInput">Email address</label>
						</div>
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaPhoneSquareAlt />
						</span>
						<div className="form-floating">
							<input
								type="tel"
								class="form-control"
								id="floatingInput"
								placeholder="03XX-XXXXXXX"
								pattern="[0-9]{4}-[0-9]{7}"
								required
								onChange={(e) => {
									setData({ ...data, phone: e.target.value });
								}}
							/>
							<label for="floatingInput">Phone #</label>
						</div>
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaLock />
						</span>
						<div className="form-floating">
							<input
								type="password"
								class="form-control"
								id="floatingInput"
								required
								placeholder="Password"
								onChange={(e) => {
									pass = e.target.value;
								}}
							/>
							<label for="floatingInput">Password</label>
						</div>
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaLock />
						</span>
						<div className="form-floating">
							<input
								type="password"
								class="form-control"
								id="floatingInput"
								required
								placeholder="Confirm Password"
								onChange={(e) => {
									confpass = e.target.value;
									if (pass === confpass) {
										setData({ ...data, password: e.target.value });
									}
								}}
							/>
							<label for="floatingInput">Confirm Password</label>
						</div>
					</div>
					<div class="input-group mb-3 ">
						<button
							type="button"
							className="btn btn-outline-primary buttonsignup"
							onClick={createAccount}
						>
							Create Account
						</button>
					</div>
					<div class="form-group col-lg-7 mx-auto d-flex align-items-center my-4">
						<div class="border-bottom w-100 ml-5"></div>
						<span class="px-2 small text-muted font-weight-bold text-muted">
							OR
						</span>
						<div class="border-bottom w-100 mr-5"></div>
					</div>
					<div class="text-center w-100">
						<p class="text-muted font-weight-bold">
							Already Registered?{" "}
							<Link to="/login" class="text-primary ml-2">
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
