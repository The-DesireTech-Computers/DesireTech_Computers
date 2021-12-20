import React from "react";
import classes from "./ManageFeedbacks.module.css";
import Navbar from "../header/Navbar";
let ManageFeedbacks = (props) => {
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
							<th className={classes.name1}>Name</th>
							<th className={classes.email1}>Email</th>
							<th className={classes.description1}>Description</th>
							<th classes={classes.action1}>Actions</th>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
							<td>
								<button className={classes.approveBtn1}> Approve </button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageFeedbacks;
