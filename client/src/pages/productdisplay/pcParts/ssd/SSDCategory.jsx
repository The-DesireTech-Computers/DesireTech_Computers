import React from "react";

const SSDCategory = ({
	setCompanyFilterHandler,
	setCapacityFilterHandler,
	setPriceFilterHandler
}) => {
	return (
		<div className="col-md-4">
			<div className="container-fluid mt-3">
				<h3 className="cbheading">Shop Category:</h3>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample">
					<div class="accordion-item mt-1" id="ctg1">
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
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios1"
										value="SAMSUNG"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck1">
									SAMSUNG
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="SEAGATE"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										SEAGATE
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios3"
										value="INTEL"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck3">
									INTEL
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios3"
										value="Corsair"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck3">
									Corsair
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample2">
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
								By Capacity
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							class="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingTwo"
							data-bs-parent="#accordionFlushExample2"
						>
							<div class="accordion-body">
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios4"
										value="Under 500GB"
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck4">
										Under 500GB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios5"
										value="500GB - 1TB"
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										500GB - 1TB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios6"
										value="1TB - 2TB"
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck6">
										1TB - 2TB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios7"
										value="2TB and Higher"
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck7">
										2TB and Higher
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

export default SSDCategory;
