import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import axios from "../../axiosInstance/axiosInstance";

const UserProfile = (props) => {
	let [data, setData] = useState();
	let [newPassword, setNewPassword] = useState("");
	let [confirmPassword, setConfirmPassword] = useState("");
	let [alertShow, setAlertShow] = useState(false);
	let [msg, setmsg] = useState("");
	let id = localStorage.getItem("user_id");
	let [order, setOrder] = useState();

	useEffect(() => {
		axios
			.get("/order")
			.then((res) => {
				let data = res.data;
				setOrder(
					data.filter((x) => {
						return x.user.user_id === id;
					})
				);
			})
			.catch((err) => {
				console.log("error");
			});
	}, []);

	let orderlist;
	if (order) {
		orderlist = order.map((e) => {
			return (
				<tr>
					<td>{e._id}</td>
					<td>
						{e.products.map((x) => {
							return (
								<ul>
									<li>
										<strong>Title :</strong>
										{x.title.substring(0, 30)}...
									</li>
									<li>
										<strong>Quantity:</strong> {x.quantity}
									</li>
								</ul>
							);
						})}
					</td>
					<td>{e.status}</td>
				</tr>
			);
		});
	}

	console.log(order);
	console.log(orderlist);

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
	let alert = (
		<div class="position-fixed top-0 start-0 p-3" style={{ "z-index": 300 }}>
			<div
				id="liveToast"
				className={alertShow ? "toast show" : "toast hide"}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<img
						src="/images/logo/favicon.png"
						height="20px"
						width="20px"
						class="rounded me-2"
						alt="..."
					/>
					<strong class="me-auto">Alert!</strong>

					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">{msg}</div>
			</div>
		</div>
	);

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
			<div className="row mt-5 py-5 ">
				<div className="col-md-6 align-items-center">
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
				<div className="col-md-6">
					<table className="table">
						<thead>
							<tr>
								<td>Order Id</td>
								<td>Product List</td>
								<td>Status</td>
							</tr>
						</thead>
						<tbody>{orderlist}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
