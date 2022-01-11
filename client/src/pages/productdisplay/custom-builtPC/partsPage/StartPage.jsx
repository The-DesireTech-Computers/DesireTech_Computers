import React from "react";
import "./PartsPage.css";
const StartPage = (props) => {
	let onclickhandler = () => {
		props.history.push("/custom-built/cbmotherboard");
	};

	return (
		<div className="container">
			<div className="cbcontainer">
				<div className="hero-image">
					<img src="/images/custombuilt/mainpage.jpg" className="cbimage" />
					<div className="heroimg">
						<div className="hero-text-light">
							<h1 id="cbh1text">Custom PC Build</h1>
							<p id="cbptext">Build your desired Custom PC</p>
							<button
								className="btn btn-success"
								id="herobtn"
								onClick={onclickhandler}
							>
								<span id="herospan">Start Building</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto">
				<div class="row mt-5 g-3">
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/motherboard.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									Motherboard
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/cpu.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									CPU
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/cpucooler.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									CPU Cooler
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/ram.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									RAM
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/gpu.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									GPU
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/psu.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									PSU
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/case.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									Case
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/diskdrive.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									HDD
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src="/images/custombuilt/ssd.png"
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody">
								<p class="card-text" id="cbcardtext">
									SSD
								</p>
							</div>
						</div>
					</div>
					<div className="col"></div>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
