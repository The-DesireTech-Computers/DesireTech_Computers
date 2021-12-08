import React, { useState } from "react";
import { RiChat2Line } from "react-icons/ri";
import axios from "../../axiosInstance/axiosInstance";
import classes from "./ContactUs.module.css";

let ContactUs = (props) => {
	let [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});

	let handelSubmitBtn = () => {
		if (data.name === "") {
			alert("Kindly fill all the feilds (message) ");
		} else if (data.email === "") {
			alert("Kindly fill all the feilds (message) ");
		} else if (data.message === "") {
			alert("Kindly fill all the feilds (message) ");
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
	};

	return (
		<div>
			<div id={classes.container1}>
				<h1 className={classes.h1}>&bull; Keep in Touch with Us &bull;</h1>
				<br />
				<RiChat2Line className={classes.iconcontact} />
				<form className={classes.form} id={classes.contact_form}>
					<div className={classes.name}>
						<label for="name"></label>
						<input
							className={classes.input}
							type="text"
							placeholder="My name is"
							name="name"
							id="name_input"
							required
							onChange={(e) => {
								setData({ ...data, name: e.target.value });
							}}
						/>
					</div>
					<div className={classes.email}>
						<label for="email"></label>
						<input
							className={classes.input}
							type="email"
							placeholder="My e-mail is"
							name="email"
							id="email_input"
							required
							onChange={(e) => {
								setData({ ...data, email: e.target.value });
							}}
						/>
					</div>
					<div className={classes.message}>
						<label for="message"></label>
						<textarea
							className={classes.textarea}
							name="message"
							placeholder="I'd like to chat about"
							id="message_input"
							cols="30"
							rows="5"
							required
							onChange={(e) => {
								setData({ ...data, message: e.target.value });
							}}
						></textarea>
					</div>
				</form>
				<div className={classes.submit}>
					<button id={classes.form_button} onClick={handelSubmitBtn}>
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
