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


	
	let [data, setData] = useState([]);
	let [mainCart, setMainCart] = useState([]);
	let [totalPrice, setTotalPrice] = useState([]);
	let [user, setUser] = useState();
	let [order,setOrder] = useState({
		products:[],
		userName:'',
		user_id:'',
		user_PhoneNumber:0,
		totalPrice:0
	});

	let array = localStorage.getItem("CustomBuilt");
	let user_id = localStorage.getItem("user_id");

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
			if(data === null){
				setData(1);
			}
	}, [ssdID]);



	useEffect(()=>{
		if (motherBoard && cpu && coolingSystem && memory && videocard && psu && casing && hdd && ssd &&data){
			setMainCart((prev) => [...prev,motherBoard,cpu,coolingSystem,memory,videocard,psu,casing,hdd,ssd]);
		}
	},[data]);


	useEffect(()=>{

		axios.get('/users/'+user_id).then(res=>{
			setUser(res.data);
		}).catch(err=>{
			console.log('error');
		})

	},[user_id])


	useEffect(() => {
		if (mainCart) {
			let total = 0;
			for (let e of mainCart) {

				total = total +e.price;
			}
			setTotalPrice(total);
		}
	}, [mainCart]);
	useEffect(() => {
		if(mainCart.length !==0 && user){
		let array =[];
		for(let item of mainCart){
			let product = {
				title:'',
				product_id:'',
				category:'',
				quantity:''
			}
			product.title = item.title;
			product.product_id = item._id;
			product.category = item.category;
			product.category1 = item.category1;
			product.quantity = item.quantity;
	
			array.push(product);
		}
		setOrder({...order,products:array,userName:user.name,user_id:user._id,user_PhoneNumber:user.phone,totalPrice:totalPrice});
		}
	

	}, [mainCart,user,totalPrice]);


	console.log(order);
	console.log(mainCart);



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

	let onclickhandler = () => {
		let CustomBuilt = localStorage.getItem("CustomBuilt");
		if (CustomBuilt) {
			localStorage.setItem("cart2", CustomBuilt);
			localStorage.removeItem("CustomBuilt");
			props.history.push("/shoppingcart");
		} else {
			props.history.push("/custom-built/cbmotherboard");
		}
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
