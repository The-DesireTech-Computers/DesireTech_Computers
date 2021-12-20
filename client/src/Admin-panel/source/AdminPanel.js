import { React, useEffect, useState } from "react";
import axios from "./axiosAuthInstance";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./components/RoutesComponents/PublicRoutes/PublicRoute";
import PrivateRoute from "./components/RoutesComponents/PrivateRoutes/PrivateRoute";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ManageCaseFan from "./components/manage-inventory/ManageAccessories/ManageCaseFan/Manage-CaseFan";
import AddCaseFan from "./components/manage-inventory/ManageAccessories/ManageCaseFan/AddCaseFan/Add-CaseFan";
import UpdateCaseFan from "./components/manage-inventory/ManageAccessories/ManageCaseFan/UpdateCasing/Update-CaseFan";
import ManageHeadset from "./components/manage-inventory/ManageAccessories/Manageheadset/Manage-headset";
import AddHeadset from "./components/manage-inventory/ManageAccessories/Manageheadset/Addheadset/Add-headset";
import UpdateHeadset from "./components/manage-inventory/ManageAccessories/Manageheadset/Updateheadset/Update-headset";
import ManageKeyboard from "./components/manage-inventory/ManageAccessories/Managekeyboard/Manage-keyboard";
import Addkeyboard from "./components/manage-inventory/ManageAccessories/Managekeyboard/Addkeyboard/Add-keyboard";
import UpdateKeyboard from "./components/manage-inventory/ManageAccessories/Managekeyboard/Updatekeyboard/Update-keyboard";
import ManageMicrophone from "./components/manage-inventory/ManageAccessories/Managemicrophone/Manage-microphone";
import AddMicrophone from "./components/manage-inventory/ManageAccessories/Managemicrophone/Addmicrophone/Add-microphone";
import UpdateMicrophone from "./components/manage-inventory/ManageAccessories/Managemicrophone/Updatemicrophone/Update-microphone";
import ManageMonitor from "./components/manage-inventory/ManageAccessories/Managemonitor/Manage-monitor";
import AddMonitor from "./components/manage-inventory/ManageAccessories/Managemonitor/Addmonitor/Add-monitor";
import UpdateMonitor from "./components/manage-inventory/ManageAccessories/Managemonitor/Updatemonitor/Update-monitor";
import ManageMouse from "./components/manage-inventory/ManageAccessories/Managemouse/Manage-mouse";
import Addmouse from "./components/manage-inventory/ManageAccessories/Managemouse/Addmouse/Add-mouse";
import Updatemouse from "./components/manage-inventory/ManageAccessories/Managemouse/Updatemouse/Update-mouse";
import ManageSpeaker from "./components/manage-inventory/ManageAccessories/Managespeaker/Manage-speaker";
import Addspeaker from "./components/manage-inventory/ManageAccessories/Managespeaker/Addspeaker/Add-speaker";
import Updatespeaker from "./components/manage-inventory/ManageAccessories/Managespeaker/Updatespeaker/Update-speaker";
import ManageWebcam from "./components/manage-inventory/ManageAccessories/ManageWebcam/Manage-Webcam";
import AddWebcam from "./components/manage-inventory/ManageAccessories/ManageWebcam/AddWebcam/Add-Webcam";
import UpdateWebcam from "./components/manage-inventory/ManageAccessories/ManageWebcam/UpdateWebcam/Update-Webcam";
import ManageLaptops from "./components/manage-inventory/ManageLaptops/Manage-Laptops";
import AddLaptops from "./components/manage-inventory/ManageLaptops/AddLaptops/Add-Laptops";
import UpdateLaptops from "./components/manage-inventory/ManageLaptops/UpdateLaptops/Update-Laptops";
import ManageCasing from "./components/manage-inventory/ManageParts/ManageCasing/Manage-Casing";
import ManageFans from "./components/manage-inventory/ManageParts/ManageFans/Manage-Fan";
import ManageHardDrive from "./components/manage-inventory/ManageParts/ManageHardDrive/Manage-HardDrive";
import ManageMemory from "./components/manage-inventory/ManageParts/ManageMemory/Manage-Memory";
import ManageMotherBoard from "./components/manage-inventory/ManageParts/ManageMotherBoard/Manage-MotherBoard";
import ManageCPU from "./components/manage-inventory/ManageParts/ManageProcessor/Manage-Processor";
import ManagePSU from "./components/manage-inventory/ManageParts/ManagePSU/Manage-PSU";
import ManageSoundCard from "./components/manage-inventory/ManageParts/ManageSoundCard/Manage-SoundCard";
import ManageSSD from "./components/manage-inventory/ManageParts/ManageSSD/Manage-SSD";
import ManageVideoCard from "./components/manage-inventory/ManageParts/ManageVideoCard/Manage-VideoCard";
import AddCasing from "./components/manage-inventory/ManageParts/ManageCasing/AddCasing/Add-Casing";
import UpdateCasing from "./components/manage-inventory/ManageParts/ManageCasing/UpdateCasing/Update-Casing";
import AddFan from "./components/manage-inventory/ManageParts/ManageFans/AddFan/Add-Fan";
import UpdateFans from "./components/manage-inventory/ManageParts/ManageFans/UpdateFan/Update-Fan";
import AddHardDrive from "./components/manage-inventory/ManageParts/ManageHardDrive/AddHardDrive/Add-HardDrive";
import UpdateHardDrive from "./components/manage-inventory/ManageParts/ManageHardDrive/UpdateHardDrive/Update-HardDrive";
import AddMemory from "./components/manage-inventory/ManageParts/ManageMemory/AddMemory/Add-Memory";
import UpdateMemory from "./components/manage-inventory/ManageParts/ManageMemory/UpdateMemory/Update-Memory";
import AddProcessor from "./components/manage-inventory/ManageParts/ManageProcessor/AddProcessor/Add-Processor";
import UpdateProcessor from "./components/manage-inventory/ManageParts/ManageProcessor/UpdateProcessor/Update-Processor";
import AddMotherBoard from "./components/manage-inventory/ManageParts/ManageMotherBoard/AddMotherBoard/Add-MotherBoard";
import UpdateMotherBoard from "./components/manage-inventory/ManageParts/ManageMotherBoard/UpdateMotherBoard/Update-MotherBoard";
import AddPSU from "./components/manage-inventory/ManageParts/ManagePSU/AddPSU/Add-PSU";
import UpdatePSU from "./components/manage-inventory/ManageParts/ManagePSU/UpdatePSU/Update-PSU";
import AddSoundCard from "./components/manage-inventory/ManageParts/ManageSoundCard/AddSoundCard/Add-SoundCard";
import UpdateSoundCard from "./components/manage-inventory/ManageParts/ManageSoundCard/UpdateSoundCard/Update-SoundCard";
import AddSSD from "./components/manage-inventory/ManageParts/ManageSSD/AddSSD/Add-SSD";
import UpdateSSD from "./components/manage-inventory/ManageParts/ManageSSD/UpdateSSD/Update-SSD";
import AddVideoCard from "./components/manage-inventory/ManageParts/ManageVideoCard/AddVideoCard/Add-VideoCard";
import UpdateVideoCard from "./components/manage-inventory/ManageParts/ManageVideoCard/UpdateVideoCard/Update-VideoCard";
import ManagePrebuilt from "./components/manage-inventory/ManagePreBuilt/Manage-Prebuilt";
import AddPreBuilt from "./components/manage-inventory/ManagePreBuilt/AddPreBuilt/Add-PreBuilt";
import UpdatePreBuilt from "./components/manage-inventory/ManagePreBuilt/UpdatePreBuilt/Update-PreBuilt";
import ManageOrders from "./components/manage-orders/Manage-Orders";
import ManageFeedbacks from "./components/manage-feedbacks/Manage-Feedbacks";
import Profile from "./components/profile/Profile";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPanel() {
	let [auth, setAuth] = useState(false);
	let [user, setUser] = useState();
	let tokken = localStorage.getItem("tokken");
	let user_id = localStorage.getItem("user_id");

	useEffect(() => {
		axios
			.get("users/" + user_id)
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		if (user) {
			if (tokken && user.role === "admin") {
				if (!auth) {
					setAuth(true);
				}
			} else {
				setAuth(false);
			}
		}
	}, [user]);

	return (
		<div>
			<Router>
				<ToastContainer />
				<Switch>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managecasefan"
						exact
						component={ManageCaseFan}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addcasefan"
						exact
						component={AddCaseFan}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatecasefan"
						exact
						component={UpdateCaseFan}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/manageheadset"
						exact
						component={ManageHeadset}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addheadset"
						exact
						component={AddHeadset}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updateheadset"
						exact
						component={UpdateHeadset}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managekeyboard"
						exact
						component={ManageKeyboard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addkeyboard"
						exact
						component={Addkeyboard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatekeyboard"
						exact
						component={UpdateKeyboard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managemicrophone"
						exact
						component={ManageMicrophone}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addmicrophone"
						exact
						component={AddMicrophone}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatemicrophone"
						exact
						component={UpdateMicrophone}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managemonitor"
						exact
						component={ManageMonitor}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addmonitor"
						exact
						component={AddMonitor}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatemonitor"
						exact
						component={UpdateMonitor}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managemouse"
						exact
						component={ManageMouse}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addmouse"
						exact
						component={Addmouse}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatemouse"
						exact
						component={Updatemouse}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managespeaker"
						exact
						component={ManageSpeaker}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addspeaker"
						exact
						component={Addspeaker}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatespeaker"
						exact
						component={Updatespeaker}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managewebcam"
						exact
						component={ManageWebcam}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addwebcam"
						exact
						component={AddWebcam}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatewebcam"
						exact
						component={UpdateWebcam}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managelaptops"
						exact
						component={ManageLaptops}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addlaptops"
						exact
						component={AddLaptops}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatelaptops"
						exact
						component={UpdateLaptops}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managecasing"
						exact
						component={ManageCasing}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managefans"
						component={ManageFans}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/manageharddrive"
						exact
						component={ManageHardDrive}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managememory"
						exact
						component={ManageMemory}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managemotherboard"
						exact
						component={ManageMotherBoard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/manageprocessor"
						exact
						component={ManageCPU}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managepsu"
						exact
						component={ManagePSU}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managesoundcard"
						exact
						component={ManageSoundCard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managessd"
						exact
						component={ManageSSD}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managevideocard"
						exact
						component={ManageVideoCard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addcasing"
						exact
						component={AddCasing}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatecasing"
						exact
						component={UpdateCasing}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addfans"
						exact
						component={AddFan}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatefans"
						exact
						component={UpdateFans}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addharddrive"
						exact
						component={AddHardDrive}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updateharddrive"
						exact
						component={UpdateHardDrive}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addmemory"
						exact
						component={AddMemory}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatememory"
						exact
						component={UpdateMemory}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addmotherboard"
						exact
						component={AddMotherBoard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatemotherboard"
						exact
						component={UpdateMotherBoard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addprocessor"
						exact
						component={AddProcessor}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updateprocessor"
						exact
						component={UpdateProcessor}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addpsu"
						exact
						component={AddPSU}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatepsu"
						exact
						component={UpdatePSU}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addsoundcard"
						exact
						component={AddSoundCard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatesoundcard"
						exact
						component={UpdateSoundCard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addssd"
						exact
						component={AddSSD}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatessd"
						exact
						component={UpdateSSD}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addvideocard"
						exact
						component={AddVideoCard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updatevideocard"
						exact
						component={UpdateVideoCard}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/manageprebuilt"
						exact
						component={ManagePrebuilt}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/addprebuilt"
						exact
						component={AddPreBuilt}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/updateprebuilt"
						exact
						component={UpdatePreBuilt}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/manageorders"
						exact
						component={ManageOrders}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/managefeedbacks"
						exact
						component={ManageFeedbacks}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/profile"
						exact
						component={Profile}
					/>
					<PrivateRoute
						auth={auth}
						path="/admin-panel/not-found"
						exact
						component={NotFound}
					/>
					<PrivateRoute path="/admin-panel/home" auth={auth} component={Home} />
					<PublicRoute path="/admin-panel" auth={auth} component={Login} />

					<Redirect to="/admin-panel/not-found" />
				</Switch>
			</Router>
		</div>
	);
}

export default AdminPanel;
