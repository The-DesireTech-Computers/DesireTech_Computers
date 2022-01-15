import React, { useContext, useState } from "react";
import classes from "./SideDrawer.module.css";
import BlackBackground from "../BlackBackground/BlackBackground";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import { AuthContext } from "../../../Start";

const SideDrawer = (props) => {
	const auth = useContext(AuthContext);
	let logoutBtnHandler = () => {
		localStorage.removeItem("tokken");
		localStorage.removeItem("user_id");
		window.location.reload();
	};

	let showLoginLogoutBtn = (
		<React.Fragment>
			<NavLink className="links5" to="/login" onClick={props.closeSideDrawer}>
				Login
			</NavLink>
			<NavLink className="links5" to="/signup" onClick={props.closeSideDrawer}>
				Signup
			</NavLink>
		</React.Fragment>
	);

	if (auth) {
		showLoginLogoutBtn = (
			<div className="links5" onClick={logoutBtnHandler}>
				Logout
			</div>
		);
	}

	let assignedClasses = [classes.SideDrawer, classes.Close];

	if (props.show) {
		assignedClasses = [classes.SideDrawer, classes.Open];
	}
	let [group1, setGroup1] = useState(true);
	let [group2, setGroup2] = useState(false);
	let [group3, setGroup3] = useState(false);
	let group1handler = () => {
		setGroup1(true);
		setGroup2(false);
		setGroup3(false);
	};
	let group2handler = () => {
		setGroup2(true);
		setGroup1(false);
		setGroup3(false);
	};
	let group3handler = () => {
		setGroup3(true);
		setGroup1(false);
		setGroup2(false);
	};

	let groupdiv = null;
	if (group1) {
		groupdiv = (
			<div className="mt-3 border">
				<NavLink className="links5" to="/" onClick={props.closeSideDrawer}>
					Home
				</NavLink>
				<NavLink
					className="links5"
					to="/contactus"
					onClick={props.closeSideDrawer}
				>
					Contact Us
				</NavLink>
			</div>
		);
	} else if (group2) {
		groupdiv = (
			<div className="mt-3 border">
				<NavLink
					className="links5"
					to="/custom-built"
					onClick={props.closeSideDrawer}
				>
					Custom-Built PCs
				</NavLink>
				<Dropdown name="Pre-Built PCs">
					<NavLink
						className="links5"
						to="/desktops"
						onClick={props.closeSideDrawer}
					>
						Desktops
					</NavLink>
					<NavLink
						className="links5"
						to="/laptops"
						onClick={props.closeSideDrawer}
					>
						Laptops
					</NavLink>
				</Dropdown>
				<Dropdown name="PC Parts">
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/casing"
					>
						Computer Cases
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/coolingsystem"
					>
						Fans & PC Cooling
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/harddrive"
					>
						Hard Drives
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/ssd"
					>
						SSDs
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/memory"
					>
						Memory
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/motherboard"
					>
						MotherBoards
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/cpu"
					>
						CPUs/Processors
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/psu"
					>
						Power Supplies
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/soundcard"
					>
						Sound Cards
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcparts/videocard"
					>
						Video Cards
					</NavLink>
				</Dropdown>
				<Dropdown name="PC Accessories">
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/casefan"
					>
						Case Fan
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/headset"
					>
						Headset
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/keyboard"
					>
						Keyboard
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/microphone"
					>
						Microphone
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/monitor"
					>
						Monitor
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/mouse"
					>
						Mouse
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/speaker"
					>
						Speaker
					</NavLink>
					<NavLink
						className="links5"
						onClick={props.closeSideDrawer}
						to="/pcaccessories/webcam"
					>
						Webcam
					</NavLink>
				</Dropdown>
			</div>
		);
	} else if (group3) {
		groupdiv = <div className="mt-3 border ">{showLoginLogoutBtn}</div>;
	}

	return (
		<React.Fragment>
			<BlackBackground
				view={props.show}
				disappearbackground={props.closeSideDrawer}
			/>
			<div className={assignedClasses.join(" ")}>
				<div className="btn-group" role="group">
					<button
						type="button"
						className="btn btn-outline-success"
						onClick={group1handler}
					>
						DesireTech
					</button>
					<button
						type="button"
						className="btn btn-outline-info"
						onClick={group2handler}
					>
						Store
					</button>
					<button
						type="button"
						className="btn btn-outline-danger"
						onClick={group3handler}
					>
						Account
					</button>
				</div>
				{groupdiv}
			</div>
		</React.Fragment>
	);
};

export default SideDrawer;
