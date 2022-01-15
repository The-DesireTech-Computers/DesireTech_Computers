import React from "react";

const Payment = () => {
	return (
		<div className="container containlogin">
			<div className="row mt-5 py-5 align-items-center">
				<div className="col-md-6">
					<form method="put">
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaAddressCard />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									required
									placeholder="Address"
									id="floatingInput"
									onChange={(e) => {
										setData({ ...data, name: e.target.value });
									}}
								/>
								<label for="floatingInput">Address</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaStreetView />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									required
									placeholder="Street"
									id="floatingInput"
									onChange={(e) => {
										setData({ ...data, phone: e.target.value });
									}}
								/>
								<label for="floatingInput">Street</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<FaCity />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									placeholder="City"
									id="floatingInput"
									required
									onChange={(e) => {
										setData({ ...data, email: e.target.value });
									}}
								/>
								<label for="floatingInput">City</label>
							</div>
						</div>

						<div class="input-group mb-3">
							<span class="input-group-text">
								<GrMapLocation />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="State"
									required
								/>
								<label for="floatingInput">State</label>
							</div>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">
								<GrMapLocation />
							</span>
							<div className="form-floating">
								<input
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="Country"
									required
								/>
								<label for="floatingInput">Country</label>
							</div>
						</div>
					</form>
					<div class="input-group mb-3 ">
						<button
							type="submit"
							className="btn btn-outline-primary buttonsignup"
						>
							Continue
						</button>
					</div>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
	);
};

export default Payment;
