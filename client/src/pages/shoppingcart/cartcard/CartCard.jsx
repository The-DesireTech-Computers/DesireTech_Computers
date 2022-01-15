import React from "react";
import { MdDeleteForever } from "react-icons/md";

const CartCard = ({ title, price, product_id, deleteBtnHandler, img }) => {
	return (
		<tr className="middle">
			<td>
				<div className="row">
					<div className="col-sm-2 text-center">
						<img src={img} alt="..." className="img-responsive cartimg" />
					</div>
					<div className="col-sm-1" />
					<div className="col-sm-9">
						<p>{title.substring(0, 90)}...</p>
					</div>
				</div>
			</td>
			<td className="text-center">{price} PKR</td>
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
					<MdDeleteForever className="icon1" />
				</button>
			</td>
		</tr>
	);
};

export default CartCard;
