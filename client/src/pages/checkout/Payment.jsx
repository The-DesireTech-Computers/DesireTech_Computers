import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance/axiosInstance";
import { FaCreditCard, FaStreetView } from "react-icons/fa";
import "./Payment.css";

const Payment = (props) => {
	let [data, setData] = useState();
	let [selectedClient, setSelectedClient] = useState("none");

	function closehandle() {
		props.history.replace("/");
	}

	function handleSelectChange(event) {
		setSelectedClient(event.target.value);
	}
	return (
		<div className="container containlogin">
			<div className="row mt-5 py-5 align-items-center">
				<div className="col-md-6">
					<select
						class="form-select input-group mb-3"
						aria-label="Default select example"
						value={selectedClient}
						onChange={handleSelectChange}
					>
						<option value="none">Select Payment Method.</option>
						<option value="COD">Cash on Delivery.</option>
						<option value="Card">Master/Visa Card.</option>
					</select>
					<form
						method="put"
						className={
							selectedClient == "none" || selectedClient == "COD"
								? "disableform"
								: null
						}
					>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaCreditCard />
							</span>
							<div className="form-floating">
								<input
									type="number"
									class="form-control"
									required
									placeholder="Address"
									id="floatingInput"
									onChange={(e) => {
										setData({ ...data, name: e.target.value });
									}}
								/>
								<label for="floatingInput">Card Number</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaStreetView />
							</span>
							<div className="form-floating">
								<input
									type="date"
									class="form-control"
									required
									placeholder="Street"
									id="floatingInput"
									onChange={(e) => {
										setData({ ...data, phone: e.target.value });
									}}
								/>
								<label for="floatingInput">Expiry Date</label>
							</div>
						</div>
					</form>
					<div class="input-group mb-3 ">
						<button
							type="button"
							className="btn btn-outline-primary buttonsignup"
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
						>
							Confirm
						</button>
					</div>
				</div>
				<div
					class="modal fade"
					id="staticBackdrop"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabindex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="staticBackdropLabel">
									Order Successful
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
									onClick={closehandle}
								></button>
							</div>
							<div class="modal-body">Thanks for Shopping!</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 mb-5 text-center d-none d-md-block">
					<img
						src="/images/others/payment.png"
						alt="logo"
						className="img-fluid mb-3 mx-auto imgfeedback"
					/>
					<h2>Select Payment Method</h2>
				</div>
			</div>
		</div>
	);
};

export default Payment;
