import React from "react";
import classes from "./ManageOrders.module.css";
import Navbar from "../header/Navbar";
let ManageOrders = (props) => {
	return (
		<div>
			<Navbar />
			<div className={classes.main1}>
				<div className={classes.heading1}>
					<ul>
						<li className={classes.navleft1}>
							<h1>Manage Orders</h1>
						</li>
					</ul>
				</div>
				<div className={classes.tab1}>
					<table className={classes.container1}>
						<tr>
							<th className={classes.id1}>Order ID</th>
							<th className={classes.items1}>Items List</th>
							<th className={classes.price11}>Price</th>
							<th className={classes.payment1}>Payment Menthod</th>
							<th className={classes.date1}>Date</th>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
							<td>Germany</td>
							<td>Germany</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageOrders;
