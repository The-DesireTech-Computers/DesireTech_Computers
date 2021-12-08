import React from "react";
import { Link } from "react-router-dom";
const DetailHeader = ({ data, addToCartBtnHandler }) => {
	return (
		<div className="row">
			<div className="col-md-6">
				<div
					id="custCarousel"
					className="carousel slide"
					data-bs-ride="carousel"
					align="center"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills" />
						</div>
						<div className="carousel-item">
							<img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills" />
						</div>
						<div className="carousel-item">
							<img src="https://i.imgur.com/83fandJ.jpg" alt="Hills" />
						</div>
						<div className="carousel-item">
							<img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills" />
						</div>
					</div>
					<ol className="carousel-indicators list-inline">
						<li className="list-inline-item active">
							<Link
								id="carousel-selector-0"
								data-bs-slide-to="0"
								data-bs-target="#custCarousel"
							>
								<img
									src="https://i.imgur.com/weXVL8M.jpg"
									className="img-fluid"
								/>
							</Link>
						</li>
						<li className="list-inline-item">
							<Link
								id="carousel-selector-1"
								data-bs-slide-to="1"
								data-bs-target="#custCarousel"
							>
								<img
									src="https://i.imgur.com/Rpxx6wU.jpg"
									className="img-fluid"
								/>
							</Link>
						</li>
						<li className="list-inline-item">
							<Link
								id="carousel-selector-2"
								data-bs-slide-to="2"
								data-bs-target="#custCarousel"
							>
								<img
									src="https://i.imgur.com/83fandJ.jpg"
									className="img-fluid"
								/>
							</Link>
						</li>
						<li className="list-inline-item">
							<Link
								id="carousel-selector-2"
								data-bs-slide-to="3"
								data-bs-target="#custCarousel"
							>
								<img
									src="https://i.imgur.com/JiQ9Ppv.jpg"
									className="img-fluid"
								/>
							</Link>
						</li>
					</ol>
				</div>
			</div>
			<div className="col-md-6">
				<h1 id="detailh1">{data ? data.title : ""}</h1>

				<table className="table text-light table-borderless">
					<thead>
						<th className="detailvar">
							<h4 className="mt-4">Information:</h4>
						</th>
						<th className="detaildes"></th>
					</thead>
					<tbody>
						<tr>
							<td>
								<h5>
									<b>Price:</b>
								</h5>
							</td>
							<td>
								<h5>{data ? data.price : ""} PKR</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>
									<b>Quantity:</b>
								</h5>
							</td>
							<td>
								<h5>{data ? data.quantity + " Units" : "Out Of Stock"}</h5>
							</td>
						</tr>
					</tbody>
				</table>

				<button className="btn btn-warning my-3" onClick={addToCartBtnHandler}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default DetailHeader;
