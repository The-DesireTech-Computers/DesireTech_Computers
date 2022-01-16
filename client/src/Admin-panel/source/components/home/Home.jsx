import React from "react";
import "./Home.css";
import Navbar from "../header/Navbar";
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="containerfluid">
				<div className="container my-5 pb-5">
					<div className="cbcontainer">
						<div className="hero-image">
							<img src="/images/others/admin.jpg" className="cbimage" />
							<div className="heroimg">
								<div className="hero-text-light">
									<h1 id="cbh1text">Admin</h1>
									<p id="cbptext">Welcome to Admin Panel.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
