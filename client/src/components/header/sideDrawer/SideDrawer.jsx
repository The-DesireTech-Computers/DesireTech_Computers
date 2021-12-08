import React, { useState } from "react";
import classes from "./SideDrawer.module.css";
import BlackBackground from "../BlackBackground/BlackBackground";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";

const SideDrawer = (props) => {
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
			<div>
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
			<div>
				<Dropdown name="Pre-Built PCs">
					<NavLink
						className="links5"
						to="/submenu38"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu1"
						onClick={props.closeSideDrawer}
					>
						Company2
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu2"
						onClick={props.closeSideDrawer}
					>
						Company3
					</NavLink>
				</Dropdown>
				<Dropdown name="PC Parts">
					<NavLink
						className="links5"
						to="/submenu12"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu13"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu14"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
				</Dropdown>
				<Dropdown name="PC Accessories">
					<NavLink
						className="links5"
						to="/submenu26"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu27"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu28"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
				</Dropdown>
				<Dropdown name="Custom-Built">
					<NavLink
						className="links5"
						to="/submenu29"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
					<NavLink
						className="links5"
						to="/submenu30"
						onClick={props.closeSideDrawer}
					>
						Company1
					</NavLink>
				</Dropdown>
			</div>
		);
	} else if (group3) {
		groupdiv = (
			<div>
				<NavLink className="links5" to="/login" onClick={props.closeSideDrawer}>
					Login
				</NavLink>
				<NavLink
					className="links5"
					to="/signup"
					onClick={props.closeSideDrawer}
				>
					Signup
				</NavLink>
			</div>
		);
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
						className="btn btn-outline-primary"
						onClick={group1handler}
					>
						DesireTech
					</button>
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={group2handler}
					>
						Store
					</button>
					<button
						type="button"
						className="btn btn-outline-primary"
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
