import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import axios from "../../axiosInstance/axiosInstance";
import Alerts from "../../components/alert/Alerts";

const UserProfile = (props) => {
	let [data, setData] = useState();
	let [newPassword, setNewPassword] = useState("");
	let [confirmPassword, setConfirmPassword] = useState("");
	let [alertShow, setAlertShow] = useState(false);
	let [msg, setmsg] = useState();
	let id = localStorage.getItem("user_id");

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
	let alert = <Alerts msg={msg} alertShow={alertShow} />;
	let handelSubmitBtn = async () => {
		if (data.name === "") {
			// alert('name cannot be left empty')
			setAlertShow(true);
			setmsg("show name");
		} else if (data.phone === "" || data.phone === 0) {
			alert("phone number cannot be left empty");
		} else if (data.email === "") {
			alert("email canot be left empty");
		} else if (newPassword === "") {
			alert("password cannot be left empty");
		} else if (confirmPassword === "") {
			alert("confirm password cannot be left empty");
		} else if (newPassword !== confirmPassword) {
			alert("confirm password should be equal to password feild");

			console.log(data);
		} else {
			setData({ ...data, password: newPassword });

			await axios
				.put("users/" + data._id, data)
				.then((res) => {
					console.log("successful udate");
					props.history.replace("/");
				})
				.catch((err) => {
					console.log(err.response.data);
				});
		}
	};

	return (
		<div className="container containlogin">
			<div className="row mt-5 py-5 align-items-center">
				<div className="col-md-6">
					{alert}
					<form method="put">
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaUserTie />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									required
									id="floatingInput"
									placeholder="John"
									value={data ? data.name : ""}
									onChange={(e) => {
										setData({ ...data, name: e.target.value });
									}}
								/>
								<label for="floatingInput">Name</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaPhoneAlt />
							</span>
							<div className="form-floating">
								<input
									type="number"
									class="form-control"
									required
									id="floatingInput"
									value={data ? data.phone : ""}
									placeholder="03xxxxxxxxx"
									onChange={(e) => {
										setData({ ...data, phone: e.target.value });
									}}
								/>
								<label for="floatingInput">Phone no.</label>
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
									value={data ? data.email : ""}
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
									required
									onChange={(e) => {
										setNewPassword(e.target.value);
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
									type="passowrd"
									class="form-control"
									id="floatingInput"
									placeholder="anything"
									required
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
								<label for="floatingInput">Confirm Password</label>
							</div>
						</div>
					</form>
					<div class="input-group mb-3 ">
						<button
							type="submit"
							className="btn btn-outline-primary buttonsignup"
							onClick={handelSubmitBtn}
						>
							Update
						</button>
					</div>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
	);
};

export default UserProfile;
