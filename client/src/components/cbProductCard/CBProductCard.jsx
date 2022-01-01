import React from "react";
import { withRouter } from "react-router-dom";
import "./CBProductCard.css";
let CBProductCard = ({ selectBtnHandler, ...props }) => {
	return (
		<tr className="middle textcb">
			<td>
				<div className="row">
					<div className="col-3">
						<img src={props.img} width="90px" height="70px" alt="product" />
					</div>
					<div className="col-1"></div>
					<div className="col-8">{props.title.substring(0, 70)}...</div>
				</div>
			</td>
			<td>{props.detail1}</td>
			<td>{props.detail2}</td>
			<td>{props.detail3}</td>
			<td>{props.price}</td>
			<td>
				<button
					className="btn btn-danger btn-sm"
					onClick={() => {
						selectBtnHandler(props.product_id);
					}}
				>
					Select
				</button>
			</td>
		</tr>
	);
};

export default withRouter(CBProductCard);
