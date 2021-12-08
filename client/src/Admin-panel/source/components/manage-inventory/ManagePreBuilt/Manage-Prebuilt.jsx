import React, { useEffect, useState } from "react";
import "../Table.css";
import Navbar from "../../header/Navbar";
import TableListings from "../../tableListings/TableListings";
import Spinner from '../../LoadingSpinner/LoadingSpinner';
import axios from '../../../axiosInstance';
let ManagePreBuilt = (props) => {

	let [data,setData] = useState([]);


// fetching pre-built desktops from backend
	let getData = ()=>{
		axios.get('preBuiltDesktop')
		.then( res=>{
			setData(res.data);
		} )
		.catch( err=>{
			console.log(err);
		});

	}

	useEffect( ()=>{

		getData();

	},[] );


  let handelAddBtn = ()=>{
	props.history.push('/admin-panel/addprebuilt');
  }


 



	//maping table data 

	let tableData = <Spinner />
if(data){
	tableData = data.map(
		element => {

		return (<TableListings
							key={element._id}
							title= {element.title}
							model= {element.Model.model}
							price={element.price}
							quantity={element.quantity}
							id={element._id}
							path="admin-panel/updateprebuilt"
							apiPath="preBuiltDesktop"
							onDelete={getData}
						/>)
	});
}
	


	return (
		<div>
			<Navbar />
			<div className="main1">
				<div className="heading1">
					<ul>
						<li className="navleft1">
							<h1>Manage Pre-Built PCs</h1>
						</li>
						<li className="navright1">
							<button className="addBtn1"  onClick={handelAddBtn}  > Add Product </button>
						</li>
					</ul>
				</div>
				<div className="tab1">
					<table className="container1">
						<thead>
						<tr>
							<th className="title1">Title</th>
							<th className="company1">Model</th>
							<th className="price1">Price</th>
							<th className="quantity1">Quantity</th>
							<th className="actions1">Actions</th>
						</tr>
						</thead>

						<tbody>
						{tableData}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManagePreBuilt;
