import React from "react";

const CBCPUCategory = ({ setCompanyFilterHandler }) => {
	return (
		<div className="col-md-4">
			<div className="container-fluid mt-3">
				<h3 className="cbheading">Shop Category:</h3>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample">
					<div class="accordion-item mt-1" id="ctg1">
						<h2 class="accordion-header" id="flush-headingTwo">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo"
							>
								By Company
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							class="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingTwo"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios1"
										value="AMD"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck1">
										AMD Processor
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="Intel"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										Intel Processor
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

export default CBCPUCategory;
