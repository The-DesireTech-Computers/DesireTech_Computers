let mongoose = require("mongoose");
let joi = require("@hapi/joi");

let laptopsSchema = mongoose.Schema({
	title: String,
	price: Number,
	quantity: Number,
	Model:{
	brand: String,
	series: String,
	model: String,
	partNumber: String,
	},
	Info:{
		color:String,
		CPU:String,
		screen:String,
		storage:String,
		dimentions:String,
		weight:String,
		otherFeatures:String,
	},
	CPU:{
		CPU_Type:String,
		CPU_Speed:String,
		NumberOfCores:String,
		CPU_L3_Cache:String,
	},
	Display:{
		ScreenSize:String,
		TouchScreen:String,
		WideScreenSupport:String,
		DisplayType:String,
		resolution:String,
		panel:String,
		colorGamut:String,
		LCD_Features:String,
	},
	OperatingSystem:{
		OS:String,
	},
	Graphics:{
		GPU:String,
		videoMemory:String,
		GraphicsType:String,
	},
	Storage:{
		SSD:String,
		HDD:String,
		spec:String,
	},
	Memory:{
		memory:String,
		spec:String,
		Slot_Total:String,
		Slot_Available:String,
	},
	OpticalDrive:{
		Type:String,
	},
	Communication:{
		WLAN:String,
		WiFi_Generation:String,
		bluetooth:String,
	},
	Ports:{
		USB:String,
		HDMI:String,
		AudioPorts:String,
	},
	Audio:{
		audio:String,
	},
	InputDevice:{
		keyboard:String,
		BacklitKeyboard:String,
		webcam:String,
	},
	General:{
		style:String,
		Type:String,
		usage:String,
	},
	Power:{
		AC_Adapter:String,
		battery:String,
	},

	image: {
		thumbnail: String,
		gallery: Array,
	},
});

let laptopsModel = mongoose.model("laptops", laptopsSchema);

let validation = (data) => {
	const schema = joi.object({
		title: joi.string().required(),
		price: joi.number().required(),
		quantity: joi.number().required(),

			brand: joi.string().required() ,
			series: joi.string().required() ,
			model: joi.string().required() ,
			partNumber: joi.string().required() ,
	
				color:joi.string().required() ,
				
				CPU:joi.string().required() ,
				screen:joi.string().required() ,
				
				storage:joi.string().required() ,
				
				
				dimentions:joi.string().required() ,
				weight:joi.string().required() ,
				otherFeatures:joi.string().required() ,
			

				CPU_Type:joi.string().required() ,
				CPU_Speed:joi.string().required() ,
				NumberOfCores:joi.string().required() ,
				CPU_L3_Cache:joi.string().required() ,
		
				ScreenSize:joi.string().required() ,
				TouchScreen:joi.string().required() ,
				WideScreenSupport:joi.string().required() ,
				DisplayType:joi.string().required() ,
				resolution:joi.string().required() ,
				panel:joi.string().required() ,
				colorGamut:joi.string().required() ,
				LCD_Features:joi.string().required() ,
		
				OS:joi.string().required() ,
			
				GPU:joi.string().required() ,
				videoMemory:joi.string().required() ,
				GraphicsType:joi.string().required() ,
	
				SSD:joi.string().required() ,
				HDD:joi.string().required() ,
				Storage_Spec:joi.string().required() ,
		
				memory:joi.string().required() ,
				Memory_Spec:joi.string().required() ,
				Memory_Slot_Total:joi.string().required() ,
				Memory_Slot_Available:joi.string().required() ,
			
				OpticalDrive_Type:joi.string().required() ,
		
				WLAN:joi.string().required() ,
				WiFi_Generation:joi.string().required() ,
				bluetooth:joi.string().required() ,
			
				Ports_USB:joi.string().required() ,
				Ports_HDMI:joi.string().required() ,
				Ports_AudioPorts:joi.string().required() ,
	
				audio:joi.string().required() ,
		
				keyboard:joi.string().required() ,
				BacklitKeyboard:joi.string().required() ,
				webcam:joi.string().required() ,
		
				style:joi.string().required() ,
				type:joi.string().required() ,
				usage:joi.string().required() ,
			
				AC_Adapter:joi.string().required() ,
				battery:joi.string().required() ,



		thumbnail: joi.string().required(),
		gallery: joi.array().required(),
	});

	return schema.validate(data, { abortEarly: false });
};

module.exports.Laptops = laptopsModel;
module.exports.validationLaptops = validation;
