import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "../../axiosInstance/axiosInstance";

import "./Login.css";
const Login = (props) => {
	let [data, setData] = useState({
		email: "",
		password: "",
	});

	let loginBtnHandler = () => {
		console.log("login");
		if (data.email === "") {
			alert("please fill all fields (Email)");
		} else if (data.password === "") {
			alert("please fill all fields (Password)");
		} else {
			//sending login request

			axios
				.post("users/login", data)
				.then((res) => {
					localStorage.setItem("tokken", res.data.tokken);
					localStorage.setItem("user_id", res.data.user._id);
					window.location.replace("/");
				})
				.catch((error) => {
					console.log(error.response.data);
					alert(error.response.data);
				});
		}
	};

	return (
		<div className="container containlogin">
			<div className="row mt-5 py-5 align-items-center">
				<div className="col-md-5 mb-5 text-center">
					<img
						src="/images/logo/logo1.png"
						alt="logo"
						className="img-fluid mb-3 mx-auto d-none d-md-block imglogin"
					/>
					<h2>Account Login</h2>
				</div>
				<div className="col-md-7">
					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaEnvelope />
						</span>
						<div className="form-floating">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="name@example.com"
								onChange={(e) => {
									setData({ ...data, email: e.target.value });
								}}
							/>
							<label for="floatingInput">Email address</label>
						</div>
					</div>

					<div class="input-group mb-3">
						<span class="input-group-text">
							<FaLock />
						</span>
						<div className="form-floating">
							<input
								type="passowrd"
								class="form-control"
								id="floatingInput"
								placeholder="anything"
								onChange={(e) => {
									setData({ ...data, password: e.target.value });
								}}
							/>
							<label for="floatingInput">Password</label>
						</div>
					</div>

					<div class="input-group mb-3 ">
						<button
							type="button"
							className="btn btn-outline-primary buttonsignup"
							onClick={loginBtnHandler}
						>
							Login
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
							Dont have an Account?{" "}
							<Link to="/signup" class="text-primary ml-2">
								Signup
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
