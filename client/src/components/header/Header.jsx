import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
//using react-icons packge
import { RiLogoutBoxRLine, RiShoppingCart2Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Start";

const Header = (props) => {
	const [show, setShow] = useState(false);
	const auth = useContext(AuthContext);
	console.log(auth);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		setShow(window.pageYOffset > 145);
	};

	let logoutBtnHandler = () => {
		localStorage.removeItem("tokken");
		localStorage.removeItem("user_id");
		window.location.reload();
	};

	let showLoginLogoutBtn = (
		<React.Fragment>
			<li className="navright">
				<NavLink className="links" to="/login">
					Login
				</NavLink>
			</li>
			<li className="navright">
				<NavLink className="links" to="/signup">
					Signup
				</NavLink>
			</li>
		</React.Fragment>
	);

	if (auth) {
		showLoginLogoutBtn = (
			<li className="navright">
				<div className="iconstylebox" onClick={logoutBtnHandler}>
					<RiLogoutBoxRLine className="iconstyle1" />
				</div>
			</li>
		);
	}

	return (
		<div>
			<div className="navigation-div">
				{/* top navbar */}
				<div className="container-fluid">
					<ul className="unlist">
						<li className="navleft">
							<NavLink className="links" exact to="/">
								Home
							</NavLink>
						</li>
						<li className="navleft">
							<NavLink className="links" to="/contactus">
								Contact Us
							</NavLink>
						</li>
						{showLoginLogoutBtn}
					</ul>
				</div>
				{/* top logo display */}
				<div className="nav-contain2">
					<img src="/images/logo/logo.png" alt="logo" className="logo" />
				</div>
				{/* 2nd navbar for products */}
				<div className="navmain">
					<div className={show ? "nav-sticky" : "nav-contain3"} id="navbar">
						<ul className="unlist2">
							<li className="navleft">
								<NavLink className="links2" to="/custom-built">
									Custom-Built PCs
								</NavLink>
							</li>
							<li className="navleft dropdowns1">
								<div className="links2">Pre-Built PCs</div>
								<div className="dropdown-content1">
									<NavLink className="links3" to="/desktops">
										Desktops
									</NavLink>
									<NavLink className="links3" to="/laptops">
										Laptops
									</NavLink>
								</div>
							</li>
							<li className="navleft dropdowns2" data>
								<div className="links2">PC Accessories</div>
								<div className="dropdown-content2">
									<NavLink className="links3" to="/pcaccessories/casefan">
										Case Fan
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/headset">
										Headset
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/keyboard">
										Keyboard
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/microphone">
										Microphone
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/monitor">
										Monitor
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/mouse">
										Mouse
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/speaker">
										Speaker
									</NavLink>
									<NavLink className="links3" to="/pcaccessories/webcam">
										Webcam
									</NavLink>
								</div>
							</li>
							<li className="navleft dropdowns3">
								<div className="links2">PC Parts</div>
								<div className="dropdown-content3">
									<NavLink className="links3" to="/pcparts/casing">
										Computer Cases
									</NavLink>
									<NavLink className="links3" to="/pcparts/coolingsystem">
										Fans & PC Cooling
									</NavLink>
									<NavLink className="links3" to="/pcparts/harddrive">
										Hard Drives
									</NavLink>
									<NavLink className="links3" to="/pcparts/ssd">
										SSDs
									</NavLink>
									<NavLink className="links3" to="/pcparts/memory">
										Memory
									</NavLink>
									<NavLink className="links3" to="/pcparts/motherboard">
										MotherBoards
									</NavLink>
									<NavLink className="links3" to="/pcparts/cpu">
										CPUs/Processors
									</NavLink>
									<NavLink className="links3" to="/pcparts/psu">
										Power Supplies
									</NavLink>
									<NavLink className="links3" to="/pcparts/soundcard">
										Sound Cards
									</NavLink>
									<NavLink className="links3" to="/pcparts/videocard">
										Video Cards
									</NavLink>
								</div>
							</li>

							<li className="navright">
								<NavLink className="iconstylebox2" to="/shoppingcart">
									<RiShoppingCart2Line className="iconstyle2" />
								</NavLink>
							</li>
							{/* <li className="navright">
								<form id="demo-2">
									<input type="search" placeholder="Search" />
								</form>
							</li> */}
						</ul>
					</div>
				</div>
			</div>
			<div className="navigation-div2">
				<div className="nav-contain2">
					<img src="/images/logo/logo1.png" alt="logo" className="logo2" />
				</div>
				<div className="navmain2">
					<div className={show ? "nav-sticky2" : "nav-contain4"} id="navbar">
						<ul className="unlist2">
							<li className="navleft">
								<div className="iconstylebox2" onClick={props.sideDrawerToggel}>
									<FiMenu className="iconstyle2" />
								</div>
							</li>
							<li className="navright">
								<NavLink className="iconstylebox2" to="/shoppingcart">
									<RiShoppingCart2Line className="iconstyle2" />
								</NavLink>
							</li>
							<li className="navright">
								<form id="demo-2">
									<input type="search" placeholder="Search" />
								</form>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
