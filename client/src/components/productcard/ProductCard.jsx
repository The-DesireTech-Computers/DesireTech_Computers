import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { withRouter } from "react-router-dom";
import "./ProductCard.css";
let ProductCard = ({
	img,
	title,
	price,
	product_id,
	path,
	history,
	addToCartBtnHandler,
}) => {
	let handelDetailsProduct = () => {
		// sending query params
		let queryString = new URLSearchParams({ product_id });

		history.push({
			pathname: "/" + path,
			search: "?" + queryString.toString(),
		});
	};

	return (
		<div className="col mt-4">
			<div className="card">
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">{title.substring(0, 60)}...</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Price: {price} PKR</li>
				</ul>
				<div className="card-body">
					<button
						id="btncard"
						type="button"
						className="btn btn-outline-warning"
						onClick={() => {
							addToCartBtnHandler(product_id);
						}}
					>
						<MdAddShoppingCart />
					</button>{" "}
					<button
						id="btncard"
						type="button"
						className="btn btn-outline-info"
						onClick={handelDetailsProduct}
					>
						View Details <RiArrowDropRightLine className="icondetails" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ProductCard);
