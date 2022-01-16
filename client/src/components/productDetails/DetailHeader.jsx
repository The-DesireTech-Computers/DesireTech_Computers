import React from "react";
import { Link } from "react-router-dom";
const DetailHeader = ({ data, imgpath, addToCartBtnHandler }) => {
	let btnclass = "";
	if (data) {
		btnclass =
			data.quantity > 5
				? "btn btn-warning my-3"
				: "btn btn-secondary disablebtn my-3";
	}

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
							<img
								src={
									data
										? "/uploads/" + imgpath + "/" + data.image.gallery[0]
										: ""
								}
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={
									data
										? "/uploads/" + imgpath + "/" + data.image.gallery[1]
										: ""
								}
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={
									data
										? "/uploads/" + imgpath + "/" + data.image.gallery[2]
										: ""
								}
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={
									data
										? "/uploads/" + imgpath + "/" + data.image.gallery[3]
										: ""
								}
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src={
									data
										? "/uploads/" + imgpath + "/" + data.image.gallery[4]
										: ""
								}
								alt="..."
							/>
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
									src={
										data
											? "/uploads/" + imgpath + "/" + data.image.gallery[0]
											: ""
									}
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
									src={
										data
											? "/uploads/" + imgpath + "/" + data.image.gallery[1]
											: ""
									}
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
									src={
										data
											? "/uploads/" + imgpath + "/" + data.image.gallery[2]
											: ""
									}
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
									src={
										data
											? "/uploads/" + imgpath + "/" + data.image.gallery[3]
											: ""
									}
									className="img-fluid"
								/>
							</Link>
						</li>
						<li className="list-inline-item">
							<Link
								id="carousel-selector-2"
								data-bs-slide-to="4"
								data-bs-target="#custCarousel"
							>
								<img
									src={
										data
											? "/uploads/" + imgpath + "/" + data.image.gallery[4]
											: ""
									}
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

				<button className={btnclass} onClick={addToCartBtnHandler}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default DetailHeader;
