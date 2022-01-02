import React, { useState } from "react";
import classes from "./Login.module.css";
import axios from "../../axiosAuthInstance";
import Spinner from "../LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = (props) => {
	let [data, setData] = useState({
		email: "",
		password: "",
	});
	let [loading, setLoading] = useState(false);

	let handelLoginBtn = async () => {
		console.log("Login button");
		setLoading(true);

		await axios
			.post("users/login", data)
			.then((res) => {
				let user = res.data.user;
				if (user.role === "admin") {
					localStorage.setItem("tokken", res.data.tokken);
					localStorage.setItem("user_id", res.data.user._id);
					window.location.replace("/admin-panel/home");
					setLoading(false);
				} else {
					setLoading(false);
					toast.error("Only Admin is Authorization to access ", {
						position: toast.POSITION.TOP_LEFT,
					});
				}
			})
			.catch((err) => {
				setLoading(false);

				toast.error(err.response.data, {
					position: toast.POSITION.TOP_LEFT,
				});
			});
	};

	let form = <Spinner />;

	if (!loading) {
		form = (
			<div className={classes.Maincontainer1}>
				<div className={classes.containerlogin1}>
					<div className={classes.wraplogin1}>
						<div className={classes.loginpic1}>
							<img
								src="/images/logo/fulllogo_light.png"
								className="mt-5 mx-4 pt-4"
								alt="Logo"
							/>
						</div>

						<form className={classes.loginform1} method="post">
							<span className={classes.loginformtitle1}>Login</span>

							<div className={classes.wrapinput1}>
								<input
									type="text"
									className={classes.input1}
									name="email"
									placeholder="Email"
									required
									onChange={(e) => {
										setData({ ...data, email: e.target.value });
									}}
								/>
								<span className={classes.focusinput1}></span>
								<span className={classes.symbolinput1}>
									<FaEnvelope />
								</span>
							</div>
							<div className={classes.wrapinput1}>
								<input
									type="password"
									className={classes.input1}
									name="pass"
									placeholder="Password"
									required
									onChange={(e) => {
										setData({ ...data, password: e.target.value });
									}}
								/>
								<span className={classes.focusinput1}></span>
								<span className={classes.symbolinput1}>
									<FaLock />
								</span>
							</div>
						</form>

						<div className={classes.loginformbtncontainer1}>
							<button
								className={classes.loginformbtn1}
								onClick={handelLoginBtn}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <div>{form}</div>;
};

export default Login;
