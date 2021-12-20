import React from "react";
import ProductCard from "../productcard/ProductCard";
import Spinner from "../LoadingSpinner/LoadingSpinner";
import "./ProductCarousel.css";

const ProductCarousel = (data, addToCartBtnHandler) => {
	let products = <Spinner />;

	if (data) {
		products = data.map((product) => {
			return (
				<ProductCard
					key={product._id}
					img={"/uploads/preBuiltpc/" + product.image.thumbnail}
					title={product.title}
					price={product.price}
					product_id={product._id}
					addToCartBtnHandler={addToCartBtnHandler}
					path="desktopsdetails"
				/>
			);
		});
	}

	return (
		<div className="container mt-5">
			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="..." class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="..." class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="..." class="d-block w-100" alt="..." />
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default ProductCarousel;
