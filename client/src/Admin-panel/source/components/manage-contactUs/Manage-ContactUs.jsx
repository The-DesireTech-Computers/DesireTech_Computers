import React, { useEffect, useState } from "react";
import classes from "./ManageContactUs.module.css";
import Navbar from "../header/Navbar";
import axios from '../../axiosInstance';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
let ManageFeedbacks = (props) => {

	let [data,setData] = useState();


	let getData = ()=>{
		axios.get('contactUs')
		.then(res=>{
			setData(res.data);
		})
		.catch(err=>{
			alert(err.response.data);
		});
	}


	let deleteItem = (id)=>{
		axios.delete('contactUs/' + id).then(res=>{
			console.log('deleted Successfully');
			getData();
		}).catch(err=>{
			console.log('error deleting message');
		})
	}
	

	useEffect(()=>{
		getData();
	},[]);

	


	let form = <LoadingSpinner />

	if(data){
		form = data.map(x=>{
			return 	<tr>
			<td>{x.name}</td>
			<td>{x.email}</td>
			<td>{x.message}</td>
			<td>
			<button className={classes.approveBtn1}> Approve </button>
			</td>
		</tr>
		}) 
	}



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
							<th className={classes.description1}>Message</th>
							<th classes={classes.action1}>Actions</th>
						</tr>
						{form}
						
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageFeedbacks;
