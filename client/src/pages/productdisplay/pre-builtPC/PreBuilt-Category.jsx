import React from "react";

const PreBuiltCategory = ({
	setCompanyFilterHandler,
	setTypeFilterHandler,
	setCpuTypeFilterHandler,
	setGpuTypeFilterHandler,
	setPriceFilterHandler,
}) => {
	return (
		<div className="col-md-4">
			<div className="container-fluid mt-3">
				<h3 className="cbheading">Sort By</h3>
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
										value="DELL"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck1">
										DELL
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="HP"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										HP
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="ACER"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										ACER
									</label>
								</div>
								<div class="form-check">
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
									<label class="form-check-label" for="defaultCheck2">
										ASUS
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="Lenovo"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										Lenovo
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="MSI"
										onChange={(e) => {
											setCompanyFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck2">
										MSI
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
								By Type
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
										value="Gaming"
										onChange={(e) => {
											setTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck8">
										Gaming
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios9"
										value="Graphics"
										onChange={(e) => {
											setTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck9">
										Graphics Work
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios2"
										id="exampleRadios10"
										value="Office"
										onChange={(e) => {
											setTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck10">
										Office Work
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
								By CPU Type
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
										value="AMD Ryzen"
										onChange={(e) => {
											setCpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck4">
										AMD Ryzen
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios5"
										value="AMD A-Series"
										onChange={(e) => {
											setCpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										AMD A-Series
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios6"
										value="Intel core i9"
										onChange={(e) => {
											setCpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck6">
										Intel core i9
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios7"
										value="Intel core i7"
										onChange={(e) => {
											setCpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck7">
										Intel core i7
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios12"
										value="Intel core i5"
										onChange={(e) => {
											setCpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck12">
										Intel core i5
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios1"
										id="exampleRadios12"
										value="Intel core i3"
										onChange={(e) => {
											setCpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck12">
										Intel core i3
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="accordion accordion-flush mt-4" id="accordionFlushExample3">
					<div class="accordion-item mt-1" id="ctg1">
						<h2 class="accordion-header" id="flush-headingForth">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseForth"
								aria-expanded="false"
								aria-controls="flush-collapseForth"
							>
								By GPU Type
							</button>
						</h2>
						<div
							id="flush-collapseForth"
							class="accordion-collapse collapse textcolor"
							aria-labelledby="flush-headingForth"
							data-bs-parent="#accordionFlushExample3"
						>
							<div class="accordion-body">
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios3"
										id="exampleRadios4"
										value="AMD"
										onChange={(e) => {
											setGpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck4">
										AMD
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios3"
										id="exampleRadios5"
										value="NVIDIA"
										onChange={(e) => {
											setGpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										NVIDIA
									</label>
								</div>
								<div class="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios3"
										id="exampleRadios10"
										value="NA"
										onChange={(e) => {
											setGpuTypeFilterHandler(e.target.value);
										}}
									/>
									<label class="form-check-label" for="defaultCheck5">
										No GPU
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

export default PreBuiltCategory;
