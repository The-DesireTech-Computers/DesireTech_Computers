import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminPanel from "./Admin-panel/source/AdminPanel";
import Start from "./Start";



function App() {

	

	return (
		<div>
				<BrowserRouter>
					<Switch>
						<Route path={"/admin-panel"} component={AdminPanel} />
						<Route exact path={"/"} component={Start} />
	
					</Switch>
				</BrowserRouter>
		</div>
	);
}

export default App;
