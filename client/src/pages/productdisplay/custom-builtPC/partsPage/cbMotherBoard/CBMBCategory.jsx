import React from "react";
const CBMBCategory = ({ setMotherBoardFilter }) => {
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
										value="AMD"
										onChange={(e) => {
											setMotherBoardFilter(e.target.value);
										}}
									/>
									<label className="form-check-label" for="exampleRadios1">
										AMD MotherBoards
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios2"
										value="Intel"
										onChange={(e) => {
											setMotherBoardFilter(e.target.value);
										}}
									/>
									<label className="form-check-label" for="exampleRadios2">
										Intel MotherBoards
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

export default CBMBCategory;
