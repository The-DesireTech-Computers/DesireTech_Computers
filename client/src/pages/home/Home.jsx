import React, { useEffect, useState } from "react";
import HomeCarousel from "./carousel/HomeCarousel";

import "./Home.css";
const Home = () => {
	return (
		<div>
			<HomeCarousel />
			<div className="container mt-5 text-light d-flex justify-content-center">
				<h2>Why Should you build a Custom PC</h2>
			</div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-6">
						<ul className="ulstyle">
							<li>Cost and Performance</li>
							<li>Time and Convenience</li>
							<li>Customization Options</li>
							<li>Repairs and Customer Support</li>
							<li>Warranty</li>
							<li>Peripherals</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<iframe
							width="100%"
							height="400"
							src="https://www.youtube.com/embed/MCW-kevlDjo?controls=1"
						></iframe>
					</div>
				</div>
			</div>
			<div className="container mt-5 text-light d-flex justify-content-center">
				<h2>Why Should you Choose Us</h2>
			</div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-6">
						<img
							width="100%"
							height="400"
							src="/images/others/why.png"
							className="imgshd img-fluid"
						></img>
					</div>
					<div className="col-lg-6">
						<ul className="ulstyle">
							<li>Orignal Products</li>
							<li>Low Costs</li>
							<li>Timely Shipments</li>
							<li>Customization Options</li>
							<li>Repairs and Customer Support</li>
							<li>Warranty</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container mt-5 text-light d-flex justify-content-center">
				<h2>Our Team</h2>
			</div>
			<div className="container mt-5 text-light">
				<div className="row ">
					<div className="col-md-2"></div>
					<div className="col-md-4">
						<img src="/images/others/prof.png" alt="Avatar" class="avatar" />
						<h3 className=" mt-3">Dr. Muhammad Sharjeel</h3>
						<p>Project Supervisor</p>
						<p>muhammadsharjeel@cuilahore.edu.pk</p>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-4">
						<img src="/images/others/prof.png" alt="Avatar" class="avatar" />
						<h3 className=" mt-3">Dr. Touseef Tahir</h3>
						<p>Co Supervisor</p>
						<p>touseeftahir@cuilahore.edu.pk</p>
					</div>
				</div>
			</div>
			<div className="container mt-5 text-light">
				<div className="row ">
					<div className="col-md-1"></div>
					<div className="col-md-3">
						<img src="/images/others/idrees.jpg" alt="Avatar" class="avatar" />
						<h3 className=" mt-3">Muhammad Idrees</h3>
						<p>Group Leader</p>
						<p>SP18-BSE-059@cuilahore.edu.pk</p>
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-3">
						<img src="/images/others/hassan.jpeg" alt="Avatar" class="avatar" />
						<h3 className=" mt-3">Hassan Bilal</h3>
						<p>Group Member</p>
						<p>SP18-BSE-079@cuilahore.edu.pk</p>
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-3">
						<img src="/images/others/hanzala.jpg" alt="Avatar" class="avatar" />
						<h3 className="text-light mt-3">Hanzala Irfan</h3>
						<p>Group Member</p>
						<p>SP18-BSE-002@cuilahore.edu.pk</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
