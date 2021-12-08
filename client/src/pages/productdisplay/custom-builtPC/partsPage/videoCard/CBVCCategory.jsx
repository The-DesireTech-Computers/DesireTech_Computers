import React from "react";

const CBVCCategory = ({
	setCompanyFilterHandler,
	setCapacityFilterHandler,
	setManufacturerFilterHandler,
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
										value="NVIDIA"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck1">
										NVIDIA
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="AMD"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										AMD
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample3">
					<div class="accordion-item mt-1" id="ctg1">
						<h2 class="accordion-header" id="flush-headingThree">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree"
								aria-expanded="false"
								aria-controls="flush-collapseThree"
							>
								By Manufacturer
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							class="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingThree"
							data-bs-parent="#accordionFlushExample3"
						>
							<div class="accordion-body">
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios8"
										value="ZOTAC"
										onChange={(e) => {
											setManufacturerFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck8">
										ZOTAC
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios9"
										value="MSI"
										onChange={(e) => {
											setManufacturerFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck9">
										MSI
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios10"
										value="ASUS"
										onChange={(e) => {
											setManufacturerFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck10">
										ASUS
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios11"
										value="GIGABYTE"
										onChange={(e) => {
											setManufacturerFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck11">
										GIGABYTE
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios13"
										value="ASRock"
										onChange={(e) => {
											setManufacturerFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck13">
										ASRock
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
										value={2}
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck4">
										2 GB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios5"
										value={4}
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										4 GB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios6"
										value={6}
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck6">
										6 GB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios7"
										value={8}
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck7">
										8 GB
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios12"
										value={12}
										onChange={(e) => {
											setCapacityFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck12">
										12 GB
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

export default CBVCCategory;
