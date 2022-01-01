import React, { useState } from "react";
import { RiAccountCircleFill, RiChat2Line } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import axios from "../../axiosInstance/axiosInstance";
import "./ContactUs.css";

let ContactUs = (props) => {
	let [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});

	let handelSubmitBtn = () => {
		if (data.name === "") {
			alert("Kindly fill all the feilds (name) ");
		} else if (data.email === "") {
			alert("Kindly fill all the feilds (email) ");
		} else if (data.message === "") {
			alert("Kindly fill all the feilds (message) ");
		} else if (
			typeof data.email !== "undefined" &&
			typeof data.name !== "undefined"
		) {
			let lastAtPos = data.email.lastIndexOf("@");
			let lastDotPos = data.email.lastIndexOf(".");
			let nameval = data.name.match(/^[a-zA-Z]+$/);

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					data.email.indexOf("@@") == -1 &&
					lastDotPos > 2 &&
					data.email.length - lastDotPos > 2
				)
			) {
			} else if (!nameval) {
				alert("Name should contain letters only");
			} else {
				axios
					.post("contactUs", data)
					.then((res) => {
						props.history.push("/");
						alert("message sent successfully");
					})
					.catch((err) => {
						alert(err.response.data);
						console.log(err.response.data);
					});
			}
		}
	};

	return (
		<div className="anime">
			<div className="container containlogin text-dark mt-5">
				<div className="row py-5 align-items-center">
					<div className="col-md-7">
						<form className="needs-validation">
							<div className="input-group mb-3 anime1">
								<span className="input-group-text">
									<RiAccountCircleFill />
								</span>
								<div className="form-floating form-group">
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="Name"
										onChange={(e) => {
											setData({ ...data, name: e.target.value });
										}}
									/>
									<label for="name">Name</label>
								</div>
							</div>
							<div className="input-group mb-3 anime2">
								<span className="input-group-text">
									<RiAccountCircleFill />
								</span>
								<div className="form-floating form-group">
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Email"
										onChange={(e) => {
											setData({ ...data, email: e.target.value });
										}}
									/>
									<label for="email">Email</label>
								</div>
							</div>

							<div className="input-group mb-3 anime3">
								<span className="input-group-text">
									<VscFeedback />
								</span>
								<div className="form-floating form-group">
									<textarea
										className="form-control feedbackarea"
										id="message"
										type="text"
										placeholder="Message"
										aria-label="With textarea"
										onChange={(e) => {
											setData({ ...data, message: e.target.value });
										}}
									/>
									<label for="message">Message</label>
								</div>
							</div>

							<div className="input-group mb-3 anime4">
								<button
									type="submit"
									className="btn btn-outline-primary buttonsignup"
									onClick={handelSubmitBtn}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="col-md-5 mb-5 text-center d-none d-md-block">
						<img
							src="/images/others/feedback.jpg"
							alt="logo"
							className="img-fluid mb-3 mx-auto imgfeedback"
						/>
						<h2>Have any Question?</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
