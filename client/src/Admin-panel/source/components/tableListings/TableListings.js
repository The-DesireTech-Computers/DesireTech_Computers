import React from "react";
import classes from "./TableListings.module.css";
import { withRouter } from "react-router-dom";
import axios from '../../axiosInstance';





let TableListings = ({ path, title, model, price, quantity,id, history,apiPath ,onDelete}) => {
	/* props needed

    title
    model
    price
    quantity
    path
	id
	apiPath
    */

	let handelUpdateProduct = () => {
		// sending query params
		let queryString = new URLSearchParams({id});

		history.push({
			pathname: "/" + path,
			search: "?" + queryString.toString(),
		});
	};


	 //delete button
	 let handelDeleteProduct = () => {

		console.log('delet fucnc');
	
		 axios.delete(apiPath + '/' + id)
		.then(res=>{
			console.log('deleted successfuly');
			onDelete();
				})
		.catch(err=>{
			console.log('not deleted');
			console.log(err);
		});
	};




	return (
		<tr>
			<td>{title}</td>
			<td>{model} </td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>
				<button className={classes.updateBtn1} onClick={handelUpdateProduct}>
					{" "}
					Update{" "}
				</button>{" "}
				/{"  "}
				<button className={classes.deleteBtn1} onClick={handelDeleteProduct}>
					{" "}
					Delete{" "}
				</button>
			</td>
		</tr>
	);
};

export default withRouter(TableListings);
