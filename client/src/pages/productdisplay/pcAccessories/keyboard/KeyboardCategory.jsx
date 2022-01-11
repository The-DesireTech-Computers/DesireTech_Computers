import React from "react";
const KeyboardCategory = ({
	setCompanyFilterHandler,
	setPriceFilterHandler,
}) => {
	return (
		<div className="col-md-4">
			<div className="container-fluid mt-3">
				<h3 className="cbheading">Shop Category:</h3>
				<div
					className="accordion accordion-flush mt-4"
					id="accordionFlushExample"
				>
					<div className="accordion-item " id="ctg1">
						<h2 className="accordion-header" id="flush-headingOne">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne"
							>
								By Company
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							className="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingOne"
							data-bs-parent="#accordionFlushExample"
						>
							<div className="accordion-body">
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios1"
										value="Corsair"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label className="form-check-label" for="exampleRadios1">
										Corsair
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="Microsoft"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label className="form-check-label" for="exampleRadios2">
										Microsoft
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="ASUS"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label className="form-check-label" for="exampleRadios2">
										ASUS
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="Logitech"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label className="form-check-label" for="exampleRadios2">
										Logitech
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample4">
					<div class="accordion-item mt-1" id="ctg1">
						<h2 class="accordion-header" id="flush-headingFifth">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseFifth"
								aria-expanded="false"
								aria-controls="flush-collapseFifth"
							>
								By Price
							</button>
						</h2>
						<div
							id="flush-collapseFifth"
							class="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingFifth"
							data-bs-parent="#accordionFlushExample4"
						>
							<div class="accordion-body">
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios10"
										value={0}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck4">
										0 PKR - 15000 PKR
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios4"
										value={15000}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck4">
										15000 PKR - 20000 PKR
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios5"
										value={20000}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										20000 PKR - 30000 PKR
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios6"
										value={30000}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										30000 PKR - 50000 PKR
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios7"
										value={50000}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										50000 PKR - 70000 PKR
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios8"
										value={70000}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										70000 PKR - 100000 PKR
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios4"
										id="exampleRadios9"
										value={100000}
										onChange={(e) => {
											setPriceFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										100000 PKR - Above
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KeyboardCategory;
