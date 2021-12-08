import React from "react";
import "./Custom-Built.css";
import CBCasing from "./partsPage/cbCasing/CBCasing";
import { Route, Switch } from "react-router";
import CBCPU from "./partsPage/cbCpu/CBCPU";
import CBCoolingSystem from "./partsPage/cbCoolingSystem/CBCoolingSystem";
import CBHardDrive from "./partsPage/cbHardDrive/CBHardDrive";
import CBMemory from "./partsPage/cbMemory/CBMemory";
import CBMotherBoard from "./partsPage/cbMotherBoard/CBMotherBoard";
import CBPSU from "./partsPage/cbPsu/CBPSU";
import CBVideoCard from "./partsPage/videoCard/VideoCard";
import CBSSD from "./partsPage/cbSSD/CBSSD";
import StartPage from "./partsPage/StartPage";
import EndPage from "./partsPage/EndPage";

const CustomBuilt = () => {
	return (
		<div className="mt-5">
			<Switch>
				<Route path="/custom-built/cbcasing" component={CBCasing} />
				<Route path="/custom-built/cbcpu" component={CBCPU} />
				<Route path="/custom-built/cbharddrive" component={CBHardDrive} />
				<Route path="/custom-built/cbmemory" component={CBMemory} />
				<Route path="/custom-built/cbssd" component={CBSSD} />
				<Route path="/custom-built/cbpsu" component={CBPSU} />
				<Route path="/custom-built/cbvideocard" component={CBVideoCard} />
				<Route
					path="/custom-built/cbcoolingsystem"
					component={CBCoolingSystem}
				/>
				<Route path="/custom-built/cbmotherboard" component={CBMotherBoard} />
				<Route path="/custom-built/cbendpage" component={EndPage} />
				<Route path="/" component={StartPage} />
			</Switch>
		</div>
	);
};

export default CustomBuilt;
