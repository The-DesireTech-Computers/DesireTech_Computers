import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Dropdown.css";

let Dropdown = (props) => {
	let [toggle, setToggle] = useState(false);

	let toggleHandler = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<button className="dropdownbtn" onClick={toggleHandler}>
				{props.name}
				<RiArrowRightSLine className="menuicon" />
			</button>
			<div className={toggle ? "dropdowncontainer2" : "dropdowncontainer"}>
				{props.children}
			</div>
		</div>
	);
};

export default Dropdown;
