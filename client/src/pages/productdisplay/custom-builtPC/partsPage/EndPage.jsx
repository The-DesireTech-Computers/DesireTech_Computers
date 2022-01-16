import React, { useEffect, useState } from "react";
import "./PartsPage.css";
import axios from "../../../../axiosInstance/axiosInstance";

const EndPage = (props) => {
	let [motherBoard, setMotherBoard] = useState();
	let [cpu, setCPU] = useState();
	let [coolingSystem, setCoolingSystem] = useState();
	let [memory, setMemory] = useState();
	let [videocard, setVideoCard] = useState();
	let [psu, setPSU] = useState();
	let [casing, setCasing] = useState();
	let [hdd, setHDD] = useState();
	let [ssd, setSSD] = useState();

	let array = localStorage.getItem("CustomBuilt");

	let motherBoardID;
	let cpuID;
	let coolingSystemID;
	let memoryID;
	let videoCardID;
	let psuID;
	let casingID;
	let hddID;
	let ssdID;

	if (array) {
		array = array.split(",");
		motherBoardID = array[0];
		cpuID = array[1];
		coolingSystemID = array[2];
		memoryID = array[3];
		videoCardID = array[4];
		psuID = array[5];
		casingID = array[6];
		hddID = array[7];
		ssdID = array[8];
	}

	useEffect(() => {
		axios
			.get("pcParts/motherboard/" + motherBoardID)
			.then((res) => {
				setMotherBoard(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/processor/" + cpuID)
			.then((res) => {
				setCPU(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/fans/" + coolingSystemID)
			.then((res) => {
				setCoolingSystem(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/memory/" + memoryID)
			.then((res) => {
				setMemory(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/videocard/" + videoCardID)
			.then((res) => {
				setVideoCard(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/psu/" + psuID)
			.then((res) => {
				setPSU(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/harddrive/" + hddID)
			.then((res) => {
				setHDD(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/casing/" + casingID)
			.then((res) => {
				setCasing(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		axios
			.get("pcParts/ssd/" + ssdID)
			.then((res) => {
				setSSD(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, [ssdID]);

	let backBtnHandler = () => {
		let array = localStorage.getItem("CustomBuilt");
		array = array.split(",");
		array.pop();
		localStorage.setItem("CustomBuilt", array);
		props.history.push("/custom-built/cbharddrive");
	};

	let cancelBtnHandler = () => {
		localStorage.removeItem("CustomBuilt");
		props.history.push("/custom-built");
	};

	// let onclickhandler = () => {
	// 	let CustomBuilt = localStorage.getItem("CustomBuilt");
	// 	if (CustomBuilt) {
	// 		localStorage.setItem("cart2", CustomBuilt);
	// 		localStorage.removeItem("CustomBuilt");
	// 		props.history.push("/shoppingcart");
	// 	} else {
	// 		props.history.push("/custom-built/cbmotherboard");
	// 	}
	// };

	return (
		<div className="container">
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Custom-Built Options.
							</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							How would you like the Custom-built PC. Assembled or
							Non-Assembled.
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger">
								Assemble and Ship.
							</button>
							<button type="button" class="btn btn-warning">
								I'll Assemble it.
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="cbcontainer">
				<div className="hero-image">
					<img src="/images/custombuilt/mainpage.jpg" className="cbimage" />
					<div className="heroimg">
						<div className="hero-text-light">
							<h1 id="cbh1text">Custom PC Build</h1>
							<p id="cbptext">Build your desired Custom PC</p>
							<button
								type="button"
								className="btn btn-success"
								id="herobtn"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								<span id="herospan">Add to Cart</span>
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
								src={
									motherBoard
										? "/uploads/pcParts/" + motherBoard.image.thumbnail
										: ""
								}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{motherBoard ? motherBoard.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={cpu ? "/uploads/pcParts/" + cpu.image.thumbnail : ""}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{cpu ? cpu.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={
									coolingSystem
										? "/uploads/pcParts/" + coolingSystem.image.thumbnail
										: ""
								}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{coolingSystem ? coolingSystem.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={memory ? "/uploads/pcParts/" + memory.image.thumbnail : ""}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{memory ? memory.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={
									videocard
										? "/uploads/pcParts/" + videocard.image.thumbnail
										: ""
								}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{videocard ? videocard.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={psu ? "/uploads/pcParts/" + psu.image.thumbnail : ""}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{psu ? psu.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={casing ? "/uploads/pcParts/" + casing.image.thumbnail : ""}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{casing ? casing.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={hdd ? "/uploads/pcParts/" + hdd.image.thumbnail : ""}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{hdd ? hdd.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card h-80" id="cbcard">
							<img
								src={ssd ? "/uploads/pcParts/" + ssd.image.thumbnail : ""}
								class="card-img-top p-2"
								id="cbcardimg"
								alt="..."
							/>
							<div class="card-body" id="cbcardbody2">
								<p class="card-text" id="cbcardtext2">
									{ssd ? ssd.title : ""}
								</p>
							</div>
						</div>
					</div>
					<div className="col"></div>
				</div>
				<div className="row mt-5">
					<div className="col">
						<button
							className="btn btn-info"
							id="cbbutton"
							onClick={backBtnHandler}
						>
							<span id="cbbtnspan">Back</span>
						</button>
					</div>
					<div className="col">
						<button
							className="btn btn-danger"
							id="cbbutton"
							onClick={cancelBtnHandler}
						>
							<span id="cbbtnspan">Cancel</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EndPage;
