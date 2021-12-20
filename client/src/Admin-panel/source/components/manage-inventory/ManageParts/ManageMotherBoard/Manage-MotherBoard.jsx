import React, { useEffect, useState } from "react";
import Navbar from "../../../header/Navbar";
import TableListings from "../../../tableListings/TableListings";
import Spinner from "../../../LoadingSpinner/LoadingSpinner";
import axios from "../../../../axiosInstance";
import classes from "../Table.module.css";

let ManageMotherBoard = (props) => {
	let [data, setData] = useState([]);

	let getData = () => {
		axios
			.get("pcParts/motherboard")
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
		props.history.push("/admin-panel/addmotherboard");
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
					path="admin-panel/updatemotherboard"
					apiPath="pcParts/motherboard"
					onDelete={getData}
				/>
			);
		});
	}

	return (
		<div>
			<Navbar />
			<div className={classes.main}>
				<div className={classes.heading}>
					<ul>
						<li className={classes.navleft}>
							<h1>Manage MotherBoard</h1>
						</li>
						<li className={classes.navright}>
							<button className={classes.addBtn} onClick={handelAddBtn}>
								{" "}
								Add Product{" "}
							</button>
						</li>
					</ul>
				</div>
				<div className={classes.tab}>
					<table className={classes.container}>
						<thead>
							<tr>
								<th className={classes.title}>Title</th>
								<th className={classes.company}>Model</th>
								<th className={classes.price}>Price</th>
								<th className={classes.quantity}>Quantity</th>
								<th className={classes.actions}>Actions</th>
							</tr>
						</thead>
						<tbody>{tableData}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageMotherBoard;
