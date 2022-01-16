let mongoose = require("mongoose");

let ordersSchema = mongoose.Schema({
	products: Array,
	user: {
		userName: String,
		user_id: mongoose.Schema.Types.ObjectId,
		user_PhoneNumber: Number,
	},
	Shipping_Info: {
		address: String,
		street: String,
		city: String,
		state: String,
		country: String,
	},
	totalPrice: Number,
	Assemble: String,
	status: {
		type: String,
		default: "pending",
	},
});

let productModel = mongoose.model("order", ordersSchema);

module.exports.Order = productModel;
