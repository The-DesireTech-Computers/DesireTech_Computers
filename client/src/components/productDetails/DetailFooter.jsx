import React, { useState, useEffect } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import axios from "../../axiosInstance/axiosInstance";

const DetailFooter = ({ id }) => {
	let [auth, setAuth] = useState(localStorage.getItem("tokken"));
	let [userId, setUserId] = useState(localStorage.getItem("user_id"));
	let [formData, setFormData] = useState({
		user: userId,
		product_id: id,
		title: "",
		description: "",
	});
	let [data, setData] = useState([]);


	let getFeedbacks = () => {
		axios
			.get("feedback")
			.then((res) => {
				let x = res.data;
				setData(
					x.filter((e) => {
						return e.product_id === id && e.approved === true;
					})
				);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};

	let formSubmithandler = () => {
		axios
			.post("feedback", formData)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
			getFeedbacks();
			setFormData({...formData,title:"",description:""})
	};



	useEffect(() => {
		getFeedbacks();
	}, []);

	let submitBtn = (
		<button
			type="button"
			className="btn btn-outline-primary buttonsignup"
			onClick={formSubmithandler}
		>
			Submit
		</button>
	);

	if (data) {
		if (
			data.some((e) => {
				return e.user._id === userId;
			})
		) {
			submitBtn = (
				<button
					type="button"
					className="btn btn-outline-secondary buttonsignup disabled "
					onClick={formSubmithandler}
				>
					Submit
				</button>
			);
		}
	}

	let feedbacks = (
		<React.Fragment>
			<tr>
				<th>Name</th>
				<th></th>
			</tr>
			<tr>
				<td>Title</td>
				<td>Description</td>
			</tr>
		</React.Fragment>
	);

	if (data && data.length !== 0) {
		console.log("inside");
		feedbacks = data.map((feedback) => {
			return (
				<React.Fragment>
					<tr>
						<th>{feedback.user.name}</th>
						<th></th>
					</tr>
					<tr>
						<td>{feedback.title}</td>
						<td>{feedback.description}</td>
					</tr>
				</React.Fragment>
			);
		});
	}

	let submitForm = null;

	if (auth) {
		submitForm = (
			<div className="container containlogin text-dark">
				<div className="row py-5 align-items-center">
					<div className="col-md-7">
						<div class="input-group mb-3">
							<span class="input-group-text">
								<RiAccountCircleFill />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="Name"
									value={formData.title}
									onChange={(e) => {
										setFormData({ ...formData, title: e.target.value });
									}}
								/>
								<label for="floatingInput">Title</label>
							</div>
						</div>

						<div class="input-group mb-3">
							<span class="input-group-text">
								<VscFeedback />
							</span>
							<div className="form-floating">
								<textarea
									class="form-control feedbackarea"
									id="floatingInput"
									placeholder="Description"
									aria-label="With textarea"
									value={formData.description}
									onChange={(e) => {
										setFormData({ ...formData, description: e.target.value });
									}}
								/>
								<label for="floatingInput">Description</label>
							</div>
						</div>

						<div class="input-group mb-3 ">{submitBtn}</div>
					</div>
					<div className="col-md-5 mb-5 text-center d-none d-md-block">
						<img
							src="/images/others/feedback.jpg"
							alt="logo"
							className="img-fluid mb-3 mx-auto imgfeedback"
						/>
						<h2>Submit a Feedback</h2>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="row mt-4 table-responsive">
				<table
					className="table table-light table-hover table-striped table-bordered"
					id="cbtable"
				>
					<thead>
						<tr>
							<th className="detailvar">
								<h3>Feedbacks:</h3>
							</th>
							<th className="detaildes"></th>
						</tr>
					</thead>
					<tbody>{feedbacks}</tbody>
				</table>
			</div>

			{submitForm}
		</div>
	);
};

export default DetailFooter;
