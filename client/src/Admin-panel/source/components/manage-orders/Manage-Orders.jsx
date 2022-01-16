import React, { useEffect, useState } from "react";
import classes from "./ManageOrders.module.css";
import Navbar from "../header/Navbar";
import axios from "../../axiosInstance";
import axios1 from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
let ManageOrders = (props) => {


	let [data,setData] = useState();

	let getData = ()=>{
		axios.get('/order').then(res=>{
			let arr = res.data;
		
			setData(	arr.filter(x=>{
				return x.status !== "delivered" && x.Shipping_Info
			}));
		}).catch(err=>{
			console.log('error')
		})

	}

	useEffect(()=>{

		getData();
	},[])


	let shipBtnHandler = async (orderId,products)=>{
let array= [];

		for(let item of products){
			if(item.category ==="accessories" || item.category ==="pcParts"){
				await axios.get('/'+item.category+"/"+item.category1+"/"+item.product_id,).then(res=>{
					let i = res.data;
					i.quantity = i.quantity - item.quantity;
					array.push(i);
				}).catch(err=>{
					console.log('error');
				})
			}else{
				await axios.get('/'+item.category+"/"+item.product_id,).then(res=>{
					let i = res.data;
					i.quantity = i.quantity - item.quantity;
					array.push(i);
				}).catch(err=>{
					console.log('error');
				})
			}
			
		}

		console.log(array);

		for(let item of array){
			let obj= {
				quantity: item.quantity
			}


			if(item.category ==="accessories" || item.category ==="pcParts"){
				await axios1.put('http://localhost:4000/api/'+item.category+"/"+item.category1+"/quantity/"+item._id,obj).then(res=>{
					console.log(res.data)
					}).catch(err=>{
						console.log('error');
					})	
			}
			else{
				await axios1.put('http://localhost:4000/api/'+item.category+"/quantity/"+item._id,obj).then(res=>{
					console.log(res.data)
					}).catch(err=>{
						console.log('error');
					})
			}

			
		}


		axios.put('/order/shipped/'+orderId).then(res=>{
			console.log("shipped");
			getData();
		}).catch(err=>{
			console.log("error")
		})
	}

	let deliveredBtnHandler = (id)=>{
		axios.put('/order/delivered/'+id).then(res=>{
			console.log("delivered")
			getData();
		}).catch(err=>{
			console.log("error")
		})
	}

	let td = <LoadingSpinner/>;

	if(data){

		td = data.map(order=>{
			
	return(	<tr key={order._id}>
		<td>{data.indexOf(order)+1}</td>
		<td>{order._id}</td>
		<td>
			{order.products.map(x=>{
				return (<ul>
				<li><strong>Title :</strong>{x.title}</li>
				<li><strong>Quantity:</strong> {x.quantity}</li>
			</ul>)
			})}
		</td>
		<td>{
			<ul>
				<li><strong>Address:</strong>  {order.Shipping_Info.address}</li>
				<li><strong>City:</strong> {order.Shipping_Info.city}</li>
				<li><strong>Street:</strong> {order.Shipping_Info.street}</li>
				<li><strong>State:</strong> {order.Shipping_Info.state}</li>
				<li><strong>Country:</strong> {order.Shipping_Info.country}</li>
			</ul>
			}</td>
	
		<td><strong>{order.totalPrice} PKR</strong></td>
		<td>Cash on Delivery</td>
		<td>{order.user.userName}</td>
		<td>{order.user.user_PhoneNumber}</td>
		<td>{order.status==="shipped"? 
		<button onClick={()=>deliveredBtnHandler(order._id)} className={classes.deleteBtn1}>Delivered</button>
		: <button  onClick={()=>shipBtnHandler(order._id,order.products)} className={classes.updateBtn1}>Ship</button>}</td>
	</tr>)
		})
		
		
		
	}




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
						{data ? <tr>
							<th className={classes.id1}>Sr#</th>
							<th className={classes.id1}>Order ID</th>
							<th className={classes.items1}>Items List</th>
							{data[0].Shipping_Info ? 
							<th className={classes.items1}>Shipping Info.</th>:null
							}
							<th className={classes.price11}>Total Price</th>
							<th className={classes.payment1}>Payment Method</th>
							<th className={classes.date1}>User Name</th>
							<th className={classes.date1}>User Phone#</th>
							<th className={classes.date1}>Actions</th>
						</tr>: null}
						{td}
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageOrders;
