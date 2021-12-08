import React from "react";
import { MdDeleteForever } from "react-icons/md";

const CartCard = ({ title, price, product_id, deleteBtnHandler }) => {
	return (
		<tr className="middle">
			<td>
				<div className="row">
					<div className="col-sm-2 text-center">
						<img
							src="/images/productimages/4.jpg"
							alt="..."
							className="img-responsive cartimg"
						/>
					</div>
					<div className="col-sm-1" />
					<div className="col-sm-9">
						<p>{title}</p>
					</div>
				</div>
			</td>
			<td className="text-center">$ {price}</td>
			<td className="text-center">
				<input type="number" className="form-control" value="1" />
			</td>

			<td className="text-center">
				<button
					className="btn btn-danger btn-sm"
					onClick={() => {
						deleteBtnHandler(product_id);
					}}
				>
					Delete
					<MdDeleteForever className="icon1" />
				</button>
			</td>
		</tr>
	);
};

export default CartCard;
