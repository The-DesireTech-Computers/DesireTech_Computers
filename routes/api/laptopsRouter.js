var express = require("express");
var router = express.Router();
let { Laptops } = require("../../model/laptopsModel");
let { validation,validationUpdated } = require("../../middleWares/validation/validateLaptops");
let multer = require("multer");
let fs = require("fs");
let {auth} = require('../../middleWares/authentication/auth');
let adminAuth = require('../../middleWares/authentication/adminAuth');

let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		let dir = "./client/public/uploads/laptops";

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		cb(null, dir);
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString().replace(/:/g, ".") + file.originalname);
	},
});

let fileFilter = (res, file, cb) => {
	if (file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
		cb(null, true);
	} else {
		cb(new Error("File is not of type jpg or jpeg"), false);
	}
};

let upload = multer({ storage: storage, fileFilter: fileFilter });






/* GET pre-built PCs. */
router.get("/", async (req, res) => {
	let laptops = await Laptops.find();

	return res.send(laptops);
});




//get singel product

router.get("/:id", async (req, res) => {
	try {
		let product = await Laptops.findById(req.params.id);
		if (!product) return res.send("Product not present for given ID");
		return res.send(product);
	} catch (err) {
		return res.send("Invalid Id");
	}
});



//Delete product

router.delete("/:id",auth,adminAuth, async (req, res) => {
	let product1 = await Laptops.findById(req.params.id);
	let dir = "./client/public/uploads/laptops/";

	if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}



	let product = await Laptops.findByIdAndDelete(req.params.id);

	return res.send(product);
});

//update product

router.put(
	"/:id",auth,adminAuth,
	upload.fields([
		{ name: "thumbnail", maxCount: 1 },
		{ name: "gallery", maxCount: 6 },
	]),
	validationUpdated,
	async (req, res) => {

		let product = await Laptops.findById(req.params.id);
        if(!product){
            return res.status(400).send("Product not present for given ID")
        }

        console.log(req.files);

        if(req.files.thumbnail && req.files.gallery){
       
			product.title = req.body.title;
			product.price = req.body.price;
			product.quantity = req.body.quantity;
			

			product.Model.brand = req.body.brand;
			product.Model.series = req.body.series;
			product.Model.model = req.body.model;
			product.Model.partNumber = req.body.partNumber;
	
			product.Info.color = req.body.color;
			
			product.Info.CPU = req.body.CPU;
			product.Info.screen = req.body.screen;
			
			product.Info.storage = req.body.storage;
			
			
			product.Info.dimentions = req.body.dimentions;
			product.Info.weight = req.body.weight;
			product.Info.otherFeatures = req.body.otherFeatures;
			

			product.CPU.CPU_Type = req.body.CPU_Type;
			product.CPU.CPU_Speed = req.body.CPU_Speed;
			product.CPU.NumberOfCores = req.body.NumberOfCores;
			product.CPU.CPU_L3_Cache = req.body.CPU_L3_Cache;
		
			product.Display.ScreenSize = req.body.ScreenSize;
			product.Display.TouchScreen = req.body.TouchScreen;
			product.Display.WideScreenSupport = req.body.WideScreenSupport;
			product.Display.DisplayType = req.body.DisplayType;
			product.Display.resolution = req.body.resolution;
			product.Display.panel = req.body.panel;
			product.Display.colorGamut = req.body.colorGamut;
			product.Display.LCD_Features = req.body.LCD_Features;
		
			product.OperatingSystem.OS = req.body.OS;
			
			product.Graphics.GPU = req.body.GPU;
			product.Graphics.videoMemory = req.body.videoMemory;
			product.Graphics.GraphicsType = req.body.GraphicsType;
	
			product.Storage.SSD = req.body.SSD;
			product.Storage.HDD = req.body.HDD;
			product.Storage.spec = req.body.Storage_Spec;
		
			product.Memory.memory = req.body.memory;
			product.Memory.spec = req.body.Memory_Spec;
			product.Memory.Slot_Total= req.body.Memory_Slot_Total;
			product.Memory.Slot_Available = req.body.Memory_Slot_Available;
			
			product.OpticalDrive.Type = req.body.OpticalDrive_Type;
		
			product.Communication.WLAN = req.body.WLAN;
			product.Communication.WiFi_Generation = req.body.WiFi_Generation;
			product.Communication.bluetooth = req.body.bluetooth;
			
			product.Ports.USB = req.body.Ports_USB;
			product.Ports.HDMI = req.body.Ports_HDMI;
			product.Ports.AudioPorts = req.body.Ports_AudioPorts;
	
			product.Audio.audio = req.body.audio;
		
			product.InputDevice.keyboard = req.body.keyboard;
			product.InputDevice.BacklitKeyboard = req.body.BacklitKeyboard;
			product.InputDevice.webcam = req.body.webcam;
		
			product.General.style = req.body.style;
			product.General.Type = req.body.type;
			product.General.usage = req.body.usage;
			
			product.Power.AC_Adapter = req.body.AC_Adapter;
			product.Power.battery = req.body.battery;
            
            product.image.thumbnail = req.files.thumbnail[0].filename;
            product.image.gallery = [];
            for (let index in req.files.gallery){
                product.image.gallery[index] = req.files.gallery[index].filename;
            }

            console.log('thumbnail,gallery');
    
        }
        else if(req.files.thumbnail || req.files.gallery ){
            if(req.files.thumbnail){
            	product.title = req.body.title;
			product.price = req.body.price;
			product.quantity = req.body.quantity;
			
			
			product.Model.brand = req.body.brand;
			product.Model.series = req.body.series;
			product.Model.model = req.body.model;
			product.Model.partNumber = req.body.partNumber;
	
			product.Info.color = req.body.color;
			
			product.Info.CPU = req.body.CPU;
			product.Info.screen = req.body.screen;
			
			product.Info.storage = req.body.storage;
			
			
			product.Info.dimentions = req.body.dimentions;
			product.Info.weight = req.body.weight;
			product.Info.otherFeatures = req.body.otherFeatures;
			

			product.CPU.CPU_Type = req.body.CPU_Type;
			product.CPU.CPU_Speed = req.body.CPU_Speed;
			product.CPU.NumberOfCores = req.body.NumberOfCores;
			product.CPU.CPU_L3_Cache = req.body.CPU_L3_Cache;
		
			product.Display.ScreenSize = req.body.ScreenSize;
			product.Display.TouchScreen = req.body.TouchScreen;
			product.Display.WideScreenSupport = req.body.WideScreenSupport;
			product.Display.DisplayType = req.body.DisplayType;
			product.Display.resolution = req.body.resolution;
			product.Display.panel = req.body.panel;
			product.Display.colorGamut = req.body.colorGamut;
			product.Display.LCD_Features = req.body.LCD_Features;
		
			product.OperatingSystem.OS = req.body.OS;
			
			product.Graphics.GPU = req.body.GPU;
			product.Graphics.videoMemory = req.body.videoMemory;
			product.Graphics.GraphicsType = req.body.GraphicsType;
	
			product.Storage.SSD = req.body.SSD;
			product.Storage.HDD = req.body.HDD;
			product.Storage.spec = req.body.Storage_Spec;
		
			product.Memory.memory = req.body.memory;
			product.Memory.spec = req.body.Memory_Spec;
			product.Memory.Slot_Total= req.body.Memory_Slot_Total;
			product.Memory.Slot_Available = req.body.Memory_Slot_Available;
			
			product.OpticalDrive.Type = req.body.OpticalDrive_Type;
		
			product.Communication.WLAN = req.body.WLAN;
			product.Communication.WiFi_Generation = req.body.WiFi_Generation;
			product.Communication.bluetooth = req.body.bluetooth;
			
			product.Ports.USB = req.body.Ports_USB;
			product.Ports.HDMI = req.body.Ports_HDMI;
			product.Ports.AudioPorts = req.body.Ports_AudioPorts;
	
			product.Audio.audio = req.body.audio;
		
			product.InputDevice.keyboard = req.body.keyboard;
			product.InputDevice.BacklitKeyboard = req.body.BacklitKeyboard;
			product.InputDevice.webcam = req.body.webcam;
		
			product.General.style = req.body.style;
			product.General.Type = req.body.type;
			product.General.usage = req.body.usage;
			
			product.Power.AC_Adapter = req.body.AC_Adapter;
			product.Power.battery = req.body.battery;
                
                product.image.thumbnail = req.files.thumbnail[0].filename;
                 product.image.gallery =product.image.gallery;
                
            }
            else if(req.files.gallery){
				product.title = req.body.title;
				product.price = req.body.price;
				product.quantity = req.body.quantity;
				
				
				product.Model.brand = req.body.brand;
				product.Model.series = req.body.series;
				product.Model.model = req.body.model;
				product.Model.partNumber = req.body.partNumber;
		
				product.Info.color = req.body.color;
				
				product.Info.CPU = req.body.CPU;
				product.Info.screen = req.body.screen;
				
				product.Info.storage = req.body.storage;
				
				
				product.Info.dimentions = req.body.dimentions;
				product.Info.weight = req.body.weight;
				product.Info.otherFeatures = req.body.otherFeatures;
				
	
				product.CPU.CPU_Type = req.body.CPU_Type;
				product.CPU.CPU_Speed = req.body.CPU_Speed;
				product.CPU.NumberOfCores = req.body.NumberOfCores;
				product.CPU.CPU_L3_Cache = req.body.CPU_L3_Cache;
			
				product.Display.ScreenSize = req.body.ScreenSize;
				product.Display.TouchScreen = req.body.TouchScreen;
				product.Display.WideScreenSupport = req.body.WideScreenSupport;
				product.Display.DisplayType = req.body.DisplayType;
				product.Display.resolution = req.body.resolution;
				product.Display.panel = req.body.panel;
				product.Display.colorGamut = req.body.colorGamut;
				product.Display.LCD_Features = req.body.LCD_Features;
			
				product.OperatingSystem.OS = req.body.OS;
				
				product.Graphics.GPU = req.body.GPU;
				product.Graphics.videoMemory = req.body.videoMemory;
				product.Graphics.GraphicsType = req.body.GraphicsType;
		
				product.Storage.SSD = req.body.SSD;
				product.Storage.HDD = req.body.HDD;
				product.Storage.spec = req.body.Storage_Spec;
			
				product.Memory.memory = req.body.memory;
				product.Memory.spec = req.body.Memory_Spec;
				product.Memory.Slot_Total= req.body.Memory_Slot_Total;
				product.Memory.Slot_Available = req.body.Memory_Slot_Available;
				
				product.OpticalDrive.Type = req.body.OpticalDrive_Type;
			
				product.Communication.WLAN = req.body.WLAN;
				product.Communication.WiFi_Generation = req.body.WiFi_Generation;
				product.Communication.bluetooth = req.body.bluetooth;
				
				product.Ports.USB = req.body.Ports_USB;
				product.Ports.HDMI = req.body.Ports_HDMI;
				product.Ports.AudioPorts = req.body.Ports_AudioPorts;
		
				product.Audio.audio = req.body.audio;
			
				product.InputDevice.keyboard = req.body.keyboard;
				product.InputDevice.BacklitKeyboard = req.body.BacklitKeyboard;
				product.InputDevice.webcam = req.body.webcam;
			
				product.General.style = req.body.style;
				product.General.Type = req.body.type;
				product.General.usage = req.body.usage;
				
				product.Power.AC_Adapter = req.body.AC_Adapter;
				product.Power.battery = req.body.battery;
            
            product.image.thumbnail = product.image.thumbnail;
            product.image.gallery = [];
            for (let index in req.files.gallery){
                product.image.gallery[index] = req.files.gallery[index].filename;
            }
            console.log('gallery');
            }
            
        }
        else{
			product.title = req.body.title;
			product.price = req.body.price;
			product.quantity = req.body.quantity;
			
			
			product.Model.brand = req.body.brand;
			product.Model.series = req.body.series;
			product.Model.model = req.body.model;
			product.Model.partNumber = req.body.partNumber;
	
			product.Info.color = req.body.color;
			
			product.Info.CPU = req.body.CPU;
			product.Info.screen = req.body.screen;
			
			product.Info.storage = req.body.storage;
			
			
			product.Info.dimentions = req.body.dimentions;
			product.Info.weight = req.body.weight;
			product.Info.otherFeatures = req.body.otherFeatures;
			

			product.CPU.CPU_Type = req.body.CPU_Type;
			product.CPU.CPU_Speed = req.body.CPU_Speed;
			product.CPU.NumberOfCores = req.body.NumberOfCores;
			product.CPU.CPU_L3_Cache = req.body.CPU_L3_Cache;
		
			product.Display.ScreenSize = req.body.ScreenSize;
			product.Display.TouchScreen = req.body.TouchScreen;
			product.Display.WideScreenSupport = req.body.WideScreenSupport;
			product.Display.DisplayType = req.body.DisplayType;
			product.Display.resolution = req.body.resolution;
			product.Display.panel = req.body.panel;
			product.Display.colorGamut = req.body.colorGamut;
			product.Display.LCD_Features = req.body.LCD_Features;
		
			product.OperatingSystem.OS = req.body.OS;
			
			product.Graphics.GPU = req.body.GPU;
			product.Graphics.videoMemory = req.body.videoMemory;
			product.Graphics.GraphicsType = req.body.GraphicsType;
	
			product.Storage.SSD = req.body.SSD;
			product.Storage.HDD = req.body.HDD;
			product.Storage.spec = req.body.Storage_Spec;
		
			product.Memory.memory = req.body.memory;
			product.Memory.spec = req.body.Memory_Spec;
			product.Memory.Slot_Total= req.body.Memory_Slot_Total;
			product.Memory.Slot_Available = req.body.Memory_Slot_Available;
			
			product.OpticalDrive.Type = req.body.OpticalDrive_Type;
		
			product.Communication.WLAN = req.body.WLAN;
			product.Communication.WiFi_Generation = req.body.WiFi_Generation;
			product.Communication.bluetooth = req.body.bluetooth;
			
			product.Ports.USB = req.body.Ports_USB;
			product.Ports.HDMI = req.body.Ports_HDMI;
			product.Ports.AudioPorts = req.body.Ports_AudioPorts;
	
			product.Audio.audio = req.body.audio;
		
			product.InputDevice.keyboard = req.body.keyboard;
			product.InputDevice.BacklitKeyboard = req.body.BacklitKeyboard;
			product.InputDevice.webcam = req.body.webcam;
		
			product.General.style = req.body.style;
			product.General.Type = req.body.type;
			product.General.usage = req.body.usage;
			
			product.Power.AC_Adapter = req.body.AC_Adapter;
			product.Power.battery = req.body.battery;
            
            product.image.thumbnail = product.image.thumbnail;
            product.image.gallery= product.image.gallery;

            console.log('both not present');
            
        }

        await product.save();
        console.log(product);
        return res.send(product);


	
	}
);

// Add item

//restrict picture selection in front end gallery=6

router.post(
	"/",auth,adminAuth,
	upload.fields([
		{ name: "thumbnail", maxCount: 1 },
		{ name: "gallery", maxCount: 6 },
	]),
	validation,
	async (req, res) => {
		console.log(req.body);
			let product = new Laptops();

			product.title = req.body.title;
			product.price = req.body.price;
			product.quantity = req.body.quantity;
		
			

			product.Model.brand = req.body.brand;
			product.Model.series = req.body.series;
			product.Model.model = req.body.model;
			product.Model.partNumber = req.body.partNumber;
	
			product.Info.color = req.body.color;
			product.Info.CPU = req.body.CPU;
			product.Info.screen = req.body.screen;
			product.Info.storage = req.body.storage;
			product.Info.dimentions = req.body.dimentions;
			product.Info.weight = req.body.weight;
			product.Info.otherFeatures = req.body.otherFeatures;
			

			product.CPU.CPU_Type = req.body.CPU_Type;
			product.CPU.CPU_Speed = req.body.CPU_Speed;
			product.CPU.NumberOfCores = req.body.NumberOfCores;
			product.CPU.CPU_L3_Cache = req.body.CPU_L3_Cache;
		
			product.Display.ScreenSize = req.body.ScreenSize;
			product.Display.TouchScreen = req.body.TouchScreen;
			product.Display.WideScreenSupport = req.body.WideScreenSupport;
			product.Display.DisplayType = req.body.DisplayType;
			product.Display.resolution = req.body.resolution;
			product.Display.panel = req.body.panel;
			product.Display.colorGamut = req.body.colorGamut;
			product.Display.LCD_Features = req.body.LCD_Features;
		
			product.OperatingSystem.OS = req.body.OS;
			
			product.Graphics.GPU = req.body.GPU;
			product.Graphics.videoMemory = req.body.videoMemory;
			product.Graphics.GraphicsType = req.body.GraphicsType;
	
			product.Storage.SSD = req.body.SSD;
			product.Storage.HDD = req.body.HDD;
			product.Storage.spec = req.body.Storage_Spec;
		
			product.Memory.memory = req.body.memory;
			product.Memory.spec = req.body.Memory_Spec;
			product.Memory.Slot_Total= req.body.Memory_Slot_Total;
			product.Memory.Slot_Available = req.body.Memory_Slot_Available;
			
			product.OpticalDrive.Type = req.body.OpticalDrive_Type;
		
			product.Communication.WLAN = req.body.WLAN;
			product.Communication.WiFi_Generation = req.body.WiFi_Generation;
			product.Communication.bluetooth = req.body.bluetooth;
			
			product.Ports.USB = req.body.Ports_USB;
			product.Ports.HDMI = req.body.Ports_HDMI;
			product.Ports.AudioPorts = req.body.Ports_AudioPorts;
	
			product.Audio.audio = req.body.audio;
		
			product.InputDevice.keyboard = req.body.keyboard;
			product.InputDevice.BacklitKeyboard = req.body.BacklitKeyboard;
			product.InputDevice.webcam = req.body.webcam;
		
			product.General.style = req.body.style;
			product.General.Type = req.body.type;
			product.General.usage = req.body.usage;
			
			product.Power.AC_Adapter = req.body.AC_Adapter;
			product.Power.battery = req.body.battery;


			product.image.thumbnail = req.files.thumbnail[0].filename;
			for (let index in req.files.gallery) {
				product.image.gallery[index] = req.files.gallery[index].filename;
			}

			console.log(product);

			await product.save();
			return res.send(product);
		
	}
);

module.exports = router;
