import React, { useEffect, useState } from "react";
import classes from "./ManageContactUs.module.css";
import Navbar from "../header/Navbar";
import axios from '../../axiosInstance';
let ManageFeedbacks = (props) => {

	let [data,setData] = useState();


	

	useEffect(()=>{
		axios.get('contactUs')
		.then(res=>{
			setData(res.data);
		})
		.catch(err=>{
			alert(err.response.data);
		});
	},[])



	return (
		<div>
			<Navbar />
			<div className={classes.main1}>
				<div className={classes.heading1}>
					<ul>
						<li className={classes.navleft1}>
							<h1>Manage Contact Us</h1>
						</li>
					</ul>
				</div>
				<div className={classes.tab1}>
					<table className={classes.container1}>
						<tr>
							<th className={classes.name1}>Name</th>
							<th className={classes.email1}>Email</th>
							<th className={classes.description1}>Description</th>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageFeedbacks;
