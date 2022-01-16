const mongoose = require("mongoose");
const joi = require("@hapi/joi");

let CasingSchema = mongoose.Schema({
	title: String,
	price: Number,
	quantity: Number,
	category:{type:String,
		default:'pcParts'
		},
		category1: { type: String, default: "casing" },
	Model: {
		brand: String,
		series: String,
		model: String,
	},
	Details: {
		Type: String,
		Color: String,
		Casing_Material: String,
		With_Power_Supply: String,
		Power_Supply_Mounted: String,
		Side_Panel_Window: String,
		Dust_Filters: String,
	},
	Expansions: {
		Internal_Drive_Bays25: Number,
		Internal_Drive_Bays35: Number,
		Expansion_Slots: String,
	},
	Front_Panel_Ports: String,
	Cooling_System: {
		Fan_Options: String,
		Rdiator_Options: String,
	},
	Dimentions: {
		Max_GPU_Length: Number,
		Max_CPU_Cooler_Length: Number,
		Max_PSU_Length: Number,
		Case_Dimentions: String,
		Weight: String,
		Supported_Motherboard:String,
	},

	image: {
		thumbnail: String,
		gallery: Array,
	},
});

let CasingModel = mongoose.model("casing", CasingSchema);

let validation = (data) => {
	const schema = joi.object({
		title: joi.string().required(),
		price: joi.number().required(),
		quantity: joi.number().required(),

		brand: joi.string().required(),
		series: joi.string().required(),
		model: joi.string().required(),

		type: joi.string().required(),
		Color: joi.string().required(),
		Casing_Material: joi.string().required(),
		With_Power_Supply: joi.string().required(),
		Power_Supply_Mounted: joi.string().required(),
		
		Side_Panel_Window: joi.string().required(),
		Dust_Filters: joi.string().required(),

		Internal_Drive_Bays25: joi.number().required(),
		Internal_Drive_Bays35: joi.number().required(),
		Expansion_Slots: joi.string().required(),

		Front_Panel_Ports: joi.string().required(),

		Fan_Options: joi.string().required(),
		Rdiator_Options: joi.string().required(),

		Max_GPU_Length: joi.number().required(),
		Max_CPU_Cooler_Length: joi.number().required(),
		Max_PSU_Length: joi.number().required(),
		Case_Dimentions: joi.string().required(),
		Weight: joi.string().required(),
		Supported_Motherboard: joi.string().required(),

		thumbnail: joi.string().required(),
		gallery: joi.array().required(),
	});

	return schema.validate(data, { abortEarly: false });
};

module.exports.Casing = CasingModel;
module.exports.validationCasing = validation;
