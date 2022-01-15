import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance/axiosInstance";
import { FaCreditCard, FaStreetView } from "react-icons/fa";
import "./Payment.css";

const Payment = () => {
	let [data, setData] = useState();
	let [selectedClient, setSelectedClient] = useState("none");

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
							type="submit"
							className="btn btn-outline-primary buttonsignup"
						>
							Confirm
						</button>
					</div>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
	);
};

export default Payment;
