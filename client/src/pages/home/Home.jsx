import React, { useEffect, useState } from "react";
import HomeCarousel from "./carousel/HomeCarousel";

import "./Home.css";
const Home = () => {
	return (
		<div>
			<HomeCarousel />
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-6"></div>
					<div className="col-lg-6">
						<iframe
							width="100%"
							height="400"
							src="https://www.youtube.com/embed/MCW-kevlDjo?controls=1"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
