import React, { useEffect, useState } from "react";
import classes from "./ManageFeedbacks.module.css";
import Navbar from "../header/Navbar";
import axios from '../../axiosInstance';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
let ManageFeedbacks = (props) => {


	
	let [data,setData] = useState();


	let getData = ()=>{
		axios.get('feedback')
		.then(res=>{
			setData(res.data);
		})
		.catch(err=>{
			alert(err.response.data);
		});
	}


	let deleteItem = (id)=>{
		axios.delete('feedback/'+ id)
		.then(res=>{
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
			return 	<tr key={x._id}>
			<td>{x.title}</td>
			<td>{x.description}</td>
			<td>{x.user.name}</td>
			<td>{x.user.email}</td>
			<td>
			<button className={classes.approveBtn1}   onClick={()=>{deleteItem(x._id)}} > Delete </button>
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
							<h1>Manage Feedbacks</h1>
						</li>
					</ul>
				</div>
				<div className={classes.tab1}>
					<table className={classes.container1}>
						<tr>
							<th className={classes.name1}>Title</th>
							<th className={classes.description1}>Description</th>
							<th className={classes.email1}>User Name</th>
							<th className={classes.email1}>User Email</th>
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
