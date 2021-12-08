import React, { useEffect, useState } from "react";
import Navbar from "../../../header/Navbar";
import TableListings from "../../../tableListings/TableListings";
import Spinner from "../../../LoadingSpinner/LoadingSpinner";
import axios from "../../../../axiosInstance";
import classes from "../../Table.module.css";

let ManageFan = (props) => {
	let [data, setData] = useState([]);

	let getData = () => {
		axios
			.get("pcParts/fans")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	let handelAddBtn = () => {
		props.history.push("/admin-panel/addfans");
	};

	//maping table data

	let tableData = <Spinner />;
	if (data) {
		tableData = data.map((element) => {
			return (
				<TableListings
					key={element._id}
					title={element.title}
					model={element.Model.model}
					price={element.price}
					quantity={element.quantity}
					id={element._id}
					path="admin-panel/updatefans"
					apiPath="pcParts/fans"
					onDelete={getData}
				/>
			);
		});
	}

	return (
		<div>
			<Navbar />
			<div className={classes.main1}>
				<div className={classes.heading1}>
					<ul>
						<li className={classes.navleft1}>
							<h1>Manage Fan</h1>
						</li>
						<li className={classes.navright1}>
							<button className={classes.addBtn1} onClick={handelAddBtn}>
								{" "}
								Add Product{" "}
							</button>
						</li>
					</ul>
				</div>
				<div className={classes.tab1}>
					<table className={classes.container1}>
						<thead>
							<tr>
								<th className={classes.title1}>Title</th>
								<th className={classes.company1}>Model</th>
								<th className={classes.price1}>Price</th>
								<th className={classes.quantity1}>Quantity</th>
								<th className={classes.actions1}>Actions</th>
							</tr>
						</thead>
						<tbody>{tableData}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageFan;
