import React from "react";
import "./Navbar.css";
import { RiLogoutBoxRLine, RiSettings5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
	let handelLogoutBtn = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<div className="nav-contain1">
			<ul className="navlist1">
				<li className="navleft12 dropdown1">
					<NavLink className="dropbtn1 linksadmin11" to="/admin-panel/home">
						Manage Inventory
					</NavLink>
					<div className="dropdown-content11">
						<NavLink to="/admin-panel/manageprebuilt" className="linksadmin11">
							Manage Pr-Built PCs
						</NavLink>
						<NavLink to="/admin-panel/managelaptops" className="linksadmin11">
							Manage Laptops
						</NavLink>
						<div to="/admin-panel/manageparts" className="linksadmin11">
							Manage PC Parts
							<div className="linksadmin21">
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managecasing"
								>
									Computer Cases
								</NavLink>
								<NavLink className="linksadmin31" to="/admin-panel/managefans">
									Fans & PC Cooling
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/manageharddrive"
								>
									Hard Drives
								</NavLink>
								<NavLink className="linksadmin31" to="/admin-panel/managessd">
									SSDs
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managememory"
								>
									Memory
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managemotherboard"
								>
									MotherBoards
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/manageprocessor"
								>
									CPUs/Processors
								</NavLink>
								<NavLink className="linksadmin31" to="/admin-panel/managepsu">
									Power Supplies
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managesoundcard"
								>
									Sound Cards
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managevideocard"
								>
									Video Cards
								</NavLink>
							</div>
						</div>
						<div to="/manageaccessories" className="linksadmin11">
							Manage PC Accessories
							<div className="linksadmin21">
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managecaseFan"
								>
									Case Fan
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/manageheadset"
								>
									HeadSet
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managekeyboard"
								>
									Keyboard
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managemicrophone"
								>
									Microphpone
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managemonitor"
								>
									Monitor
								</NavLink>
								<NavLink className="linksadmin31" to="/admin-panel/managemouse">
									Mouse
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managespeaker"
								>
									Speaker
								</NavLink>
								<NavLink
									className="linksadmin31"
									to="/admin-panel/managewebcam"
								>
									Web Cam
								</NavLink>
							</div>
						</div>
					</div>
				</li>
				<li className="navleft12">
					<NavLink to="/admin-panel/manageorders" className="linksadmin11">
						Manage Orders
					</NavLink>
				</li>
				<li className="navleft12">
					<NavLink to="/admin-panel/managefeedbacks" className="linksadmin11">
						Manage Feedbacks
					</NavLink>
				</li>
				<li className="navright12">
					<div className="iconstylebox1" onClick={handelLogoutBtn}>
						<RiLogoutBoxRLine className="iconstyle11" />
					</div>
				</li>
				<li className="navright12">
					<NavLink to="/admin-panel/profile" className="linksadmin11">
						<RiSettings5Line className="iconstyle21" />
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
