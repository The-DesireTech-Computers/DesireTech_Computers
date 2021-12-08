import React from "react";
import ProductCard from "../../../components/productcard/ProductCard";
import "./PcAccessories.css";

/*

    for mapping product cards on the screen according to data fetched from backend:


    let data = data fetched from backend ;

    let productCard = data.map(e=>{
        <li>
        <ProductCard
					img={e.image}
					title={e.title}
					price={e.price}
					link='navigation url link to the product details page'
				/>
        </li>
    })


     */
const ProductDisplay = () => {
	return (
		<div className="container-fluid d-flex">
			<div className="row">
				<div className="col-md-4">
					<div className="container-fluid mt-3 sorting">
						<h3>Sort Category:</h3>
						<div class="accordion accordion-flush" id="accordionFlushExample">
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
										By Type
									</button>
								</h2>
								<div
									id="flush-collapseOne"
									class="accordion-collapse collapse"
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
												value="option1"
											/>
											<label class="form-check-label" for="exampleRadios1">
												Office PC
											</label>
										</div>
										<div class="form-check">
											<input
												class="form-check-input"
												type="radio"
												name="exampleRadios"
												id="exampleRadios2"
												value="option2"
											/>
											<label class="form-check-label" for="exampleRadios2">
												Gaming PC
											</label>
										</div>
										<div class="form-check">
											<input
												class="form-check-input"
												type="radio"
												name="exampleRadios"
												id="exampleRadios3"
												value="option3"
											/>
											<label class="form-check-label" for="exampleRadios3">
												Graphics PC
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

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
								class="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample"
							>
								<div class="accordion-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="defaultCheck1"
										/>
										<label class="form-check-label" for="defaultCheck1">
											AMD
										</label>
									</div>
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="defaultCheck2"
										/>
										<label class="form-check-label" for="defaultCheck2">
											NVIDIA
										</label>
									</div>
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="defaultCheck3"
										/>
										<label class="form-check-label" for="defaultCheck3">
											INTEL
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-8 ">
					<div className="container-fluid ">
						<div className="row mx-auto">
							<ProductCard
								img={"/images/productimages/4.jpg"}
								title="Some quick example text to build on the card title and make up the
                                bulk of the card's content."
								price="1200"
								link="#card"
							/>
							<ProductCard
								img={"/images/productimages/4.jpg"}
								title="Some quick example text to build on the card title and make up the
                                bulk of the card's content."
								price="1200"
								link="#card"
							/>
							<ProductCard
								img={"/images/productimages/4.jpg"}
								title="Some quick example text to build on the card title and make up the
                                bulk of the card's content."
								price="1200"
								link="#card"
							/>
							<ProductCard
								img={"/images/productimages/4.jpg"}
								title="Some quick example text to build on the card title and make up the
                                bulk of the card's content."
								price="1200"
								link="#card"
							/>
							<ProductCard
								img={"/images/productimages/4.jpg"}
								title="Some quick example text to build on the card title and make up the
                                bulk of the card's content."
								price="1200"
								link="#card"
							/>
							<ProductCard
								img={"/images/productimages/4.jpg"}
								title="Some quick example text to build on the card title and make up the
                                bulk of the card's content."
								price="1200"
								link="#card"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDisplay;
