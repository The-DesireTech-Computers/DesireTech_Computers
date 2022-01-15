import { React, useEffect, useState } from "react";
import Navbar from "../header/Navbar";
import axios from "../../axiosAuthInstance";
import Spinner from "../LoadingSpinner/LoadingSpinner";
import classes from "./Profile.module.css";
import { toast } from "react-toastify";

const UpdateProfile = (props) => {
	let [data, setData] = useState();
	let [newPassword, setNewPassword] = useState("");
	let [confirmPassword, setConfirmPassword] = useState("");
	let [loading, setLoading] = useState(false);
	let id = localStorage.getItem("user_id");

	//fetching singel element from back-end
	useEffect(() => {
		if (id) {
			axios
				.get("users/" + id)
				.then((res) => {
					setData(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);

	let handelSubmitBtn = async () => {
		if (data.name === "") {
			toast.error("Please enter data in all the given fields ", {
				position: toast.POSITION.TOP_LEFT,
			});
		} else if (data.email === "") {
			toast.error("Please enter data in all the given fields ", {
				position: toast.POSITION.TOP_LEFT,
			});
		} else if (newPassword === "") {
			toast.error("Please enter data in all the given fields ", {
				position: toast.POSITION.TOP_LEFT,
			});
		} else if (confirmPassword === "") {
			toast.error("Please enter data in all the given fields ", {
				position: toast.POSITION.TOP_LEFT,
			});
		} else if (newPassword !== confirmPassword) {
			toast.error("New password and Confirm password fields does not match ", {
				position: toast.POSITION.TOP_LEFT,
			});

			console.log(data);
		} else {
			setData({ ...data, password: newPassword });

			setLoading(true);

			await axios
				.put("users/" + data._id, data)
				.then((res) => {
					toast.success("Profile updated successfully ", {
						position: toast.POSITION.TOP_LEFT,
					});
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data, {
						position: toast.POSITION.TOP_LEFT,
					});
					setLoading(false);
				});
		}
	};

	let form = <Spinner />;

	if (!loading) {
		form = <Spinner />;

		if (data) {
			form = (
				<div>
					<Navbar />
					<div className={classes.main1}>
						<div className={classes.inputform1}>
							<h1 className={classes.h11}>Update Profile</h1>
							<form className={classes.form1} method="put">
								<div className={classes.form21}>
									<div className={classes.row1}>
										<label className={classes.label1} htmlFor="name">
											Name:
										</label>
										<br />
										<label className={classes.label1} htmlFor="email">
											Email:
										</label>
										<br />
										<label className={classes.label1} htmlFor="newPassword">
											New Password:
										</label>
										<br />
										<label className={classes.label1} htmlFor="confirmPassword">
											Confirm Password:
										</label>
										<br />
									</div>
									<div className={classes.row1}>
										<input
											className={classes.input1}
											type="text"
											id="name"
											name="name"
											required
											onChange={(e) => {
												setData({ ...data, name: e.target.value });
											}}
											value={data.name}
										/>
										<br />
										<input
											className={classes.input1}
											type="email"
											id="email"
											name="email"
											required
											value={data.email}
											onChange={(e) => {
												setData({ ...data, email: e.target.value });
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="password"
											id="newPassword"
											name="newPassword"
											required
											placeholder="New Password"
											onChange={(e) => {
												setNewPassword(e.target.value);
											}}
										/>
										<br />
										<input
											className={classes.input1}
											type="password"
											id="confirmPassword"
											name="confirmPassword"
											required
											placeholder="Confirm Password"
											onChange={(e) => {
												let confirmPass = e.target.value;
												if (confirmPass === newPassword) {
													setData({ ...data, password: confirmPass });
													setConfirmPassword(e.target.value);
												} else {
													setConfirmPassword(e.target.value);
												}
											}}
										/>
										<br />
									</div>
								</div>
							</form>
							<div className={classes.btnDiv1}>
								<input
									className={classes.btn1}
									type="submit"
									value="Update"
									onClick={handelSubmitBtn}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

	return <div>{form}</div>;
};

export default UpdateProfile;
