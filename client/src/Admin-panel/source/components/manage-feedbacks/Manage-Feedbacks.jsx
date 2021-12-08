import React from "react";
import classes from "./ManageFeedbacks.module.css";
import Navbar from "../header/Navbar";
let ManageFeedbacks = (props) => {
	return (
		<div>
			<Navbar />
			<div className={classes.main}>
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
							<th className={classes.name}>Name</th>
							<th className={classes.email}>Email</th>
							<th className={classes.description}>Description</th>
							<th classes={classes.action}>Actions</th>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
							<td>
								<button className={classes.approveBtn}> Approve </button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageFeedbacks;
