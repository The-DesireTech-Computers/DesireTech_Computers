import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SideDrawer from "./components/header/sideDrawer/SideDrawer";

import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ContactUs from "./pages/contactUs/ContactUs";
import ShoppingCart from "./pages/shoppingcart/ShopingCart";

import CustomBuilt from "./pages/productdisplay/custom-builtPC/Custom-Built";

import PreBuilt from "./pages/productdisplay/pre-builtPC/PreBuilt";
import PreBuiltDetails from "./pages/productdisplay/pre-builtPC/PreBuilt-Details";

import Laptops from "./pages/productdisplay/laptops/Laptops";
import LaptopsDetails from "./pages/productdisplay/laptops/Laptop-Details";

import Casing from "./pages/productdisplay/pcParts/casing/Casing";
import CasingDetails from "./pages/productdisplay/pcParts/casing/Casing-Details";
import CoolingSystem from "./pages/productdisplay/pcParts/coolingSystem/CoolingSystem";
import CoolingSystemDetails from "./pages/productdisplay/pcParts/coolingSystem/CoolingSystem-Details";
import CPU from "./pages/productdisplay/pcParts/cpu/CPU";
import CPUDetails from "./pages/productdisplay/pcParts/cpu/CPU-Details";
import Memory from "./pages/productdisplay/pcParts/memory/Memory";
import MemoryDetails from "./pages/productdisplay/pcParts/memory/Memory-Details";
import MotherBoard from "./pages/productdisplay/pcParts/motherBoard/MotherBoard";
import MotherBoardDetails from "./pages/productdisplay/pcParts/motherBoard/MotherBoard-Details";
import PSU from "./pages/productdisplay/pcParts/psu/PSU";
import PSUDetails from "./pages/productdisplay/pcParts/psu/PSU-Details";
import SoundCard from "./pages/productdisplay/pcParts/soundCard/SoundCard";
import SoundCardDetails from "./pages/productdisplay/pcParts/soundCard/SoundCard-Details";
import VideoCard from "./pages/productdisplay/pcParts/videoCard/VideoCard";
import VideoCardDetails from "./pages/productdisplay/pcParts/videoCard/VideoCard-Details";
import HardDrive from "./pages/productdisplay/pcParts/hardDrive/HardDrive";
import HardDriveDetails from "./pages/productdisplay/pcParts/hardDrive/HardDrive-Details";
import SSD from "./pages/productdisplay/pcParts/ssd/SSD";
import SSDDetails from "./pages/productdisplay/pcParts/ssd/SSD-Details";

import CaseFan from "./pages/productdisplay/pcAccessories/caseFan/CaseFan";
import CaseFanDetails from "./pages/productdisplay/pcAccessories/caseFan/CaseFan-Details";
import Headset from "./pages/productdisplay/pcAccessories/headset/Headset";
import HeadsetDetails from "./pages/productdisplay/pcAccessories/headset/Headset-Details";
import Keyboard from "./pages/productdisplay/pcAccessories/keyboard/Keyboard";
import KeyboardDetails from "./pages/productdisplay/pcAccessories/keyboard/Keyboard-Details";
import Microphone from "./pages/productdisplay/pcAccessories/microphone/Microphone";
import MicrophoneDetails from "./pages/productdisplay/pcAccessories/microphone/Microphone-Details";
import Monitor from "./pages/productdisplay/pcAccessories/monitor/Monitor";
import MonitorDetails from "./pages/productdisplay/pcAccessories/monitor/Monitor-Details";
import Mouse from "./pages/productdisplay/pcAccessories/mouse/Mouse";
import MouseDetails from "./pages/productdisplay/pcAccessories/mouse/Mouse-Details";
import Speaker from "./pages/productdisplay/pcAccessories/speaker/Speaker";
import SpeakerDetails from "./pages/productdisplay/pcAccessories/speaker/Speaker-Details";
import Webcam from "./pages/productdisplay/pcAccessories/webcam/Webcam";
import WebcamDetails from "./pages/productdisplay/pcAccessories/webcam/Webcam-Details";

import PublicRoute from "./components/RoutesComponents/PublicRoutes/PublicRoute";
export const AuthContext = createContext();

function Start() {
	const [showDrawer, setShowDrawer] = useState(false);
	let [auth, setAuth] = useState(false);
	let tokken = localStorage.getItem("tokken");

	useEffect(() => {
		if (tokken) {
			setAuth(true);
		} else {
			setAuth(false);
		}
	}, [tokken]);

	let ShowSideDrawerHandler = () => {
		setShowDrawer(false);
	};

	let ShowSideDrawerToggelHandler = () => {
		setShowDrawer(!showDrawer);
	};

	return (
		<div className="App">
			<AuthContext.Provider value={auth}>
				<BrowserRouter>
					<SideDrawer
						show={showDrawer}
						closeSideDrawer={ShowSideDrawerHandler}
					/>
					<Header sideDrawerToggel={ShowSideDrawerToggelHandler} />

					<Switch>
						<Route path="/custom-built" component={CustomBuilt} />

						<Route path="/desktopsdetails" component={PreBuiltDetails} />
						<Route path="/desktops" component={PreBuilt} />

						<Route path="/laptops" component={Laptops} />
						<Route path="/laptopsdetails" component={LaptopsDetails} />

						<Route path="/pcparts/casing" component={Casing} />
						<Route path="/casingdetails" component={CasingDetails} />
						<Route path="/pcparts/cpu" component={CPU} />
						<Route path="/cpudetails" component={CPUDetails} />
						<Route path="/pcparts/memory" component={Memory} />
						<Route path="/memorydetails" component={MemoryDetails} />
						<Route path="/pcparts/motherboard" component={MotherBoard} />
						<Route path="/motherboarddetails" component={MotherBoardDetails} />
						<Route path="/pcparts/psu" component={PSU} />
						<Route path="/psudetails" component={PSUDetails} />
						<Route path="/pcparts/soundcard" component={SoundCard} />
						<Route path="/soundcarddetails" component={SoundCardDetails} />
						<Route path="/pcparts/videocard" component={VideoCard} />
						<Route path="/videocarddetails" component={VideoCardDetails} />
						<Route path="/pcparts/harddrive" component={HardDrive} />
						<Route path="/harddrivedetails" component={HardDriveDetails} />
						<Route path="/pcparts/ssd" component={SSD} />
						<Route path="/ssddetails" component={SSDDetails} />
						<Route path="/pcparts/coolingsystem" component={CoolingSystem} />
						<Route
							path="/coolingsystemdetails"
							component={CoolingSystemDetails}
						/>

						<Route path="/pcaccessories/casefan" component={CaseFan} />
						<Route path="/caseFandetails" component={CaseFanDetails} />
						<Route path="/pcaccessories/headset" component={Headset} />
						<Route path="/headsetdetails" component={HeadsetDetails} />
						<Route path="/pcaccessories/keyboard" component={Keyboard} />
						<Route path="/keyboarddetails" component={KeyboardDetails} />
						<Route path="/pcaccessories/microphone" component={Microphone} />
						<Route path="/microphonedetails" component={MicrophoneDetails} />
						<Route path="/pcaccessories/monitor" component={Monitor} />
						<Route path="/monitordetails" component={MonitorDetails} />
						<Route path="/pcaccessories/mouse" component={Mouse} />
						<Route path="/mousedetails" component={MouseDetails} />
						<Route path="/pcaccessories/speaker" component={Speaker} />
						<Route path="/speakerdetails" component={SpeakerDetails} />
						<Route path="/pcaccessories/webcam" component={Webcam} />
						<Route path="/webcamdetails" component={WebcamDetails} />

						<Route path="/shoppingcart" component={ShoppingCart} />
						<PublicRoute path="/signup" auth={auth} component={Signup} />
						<PublicRoute path="/login" auth={auth} component={Login} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/" exact component={Home} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</AuthContext.Provider>
		</div>
	);
}

export default Start;
