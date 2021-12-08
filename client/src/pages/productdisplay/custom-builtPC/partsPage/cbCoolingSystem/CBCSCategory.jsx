import React from "react";

const CBCSCategory = ({ setCompanyFilterHandler }) => {
	return (
		<div className="col-md-4">
			<div className="container-fluid mt-3">
				<h3 className="cbheading">Shop Category:</h3>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample">
					<div class="accordion-item " id="ctg1">
						<h2 class="accordion-header" id="flush-headingOne">
							<button
								class="accordion-button collapsed"
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
							class="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingOne"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								<div class="form-check">
									<input
										class="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios1"
										value="Corsair"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="exampleRadios1">
										Corsair
									</label>
								</div>
								<div class="form-check">
									<input
										class="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="ASUS"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="exampleRadios2">
										ASUS
									</label>
								</div>
								<div class="form-check">
									<input
										class="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios3"
										value="Cooler Master"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="exampleRadios3">
										Cooler Master
									</label>
								</div>
								<div class="form-check">
									<input
										class="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios4"
										value="Thermaltake"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="exampleRadios4">
										Thermaltake
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

export default CBCSCategory;
