var express = require('express');
var router = express.Router();
let {Processor} = require('../../model/pcParts/ProcessorModel');
let {Memory} = require('../../model/pcParts/MemoryModel');
let {MotherBoard} = require('../../model/pcParts/MotherBoardModel');
let {VideoCard} = require('../../model/pcParts/VideoCardModel');
let {Casing} = require('../../model/pcParts/CasingModel');
let {PSU} = require('../../model/pcParts/PSUModel');
let {Fans} = require('../../model/pcParts/FansModel');
let {SoundCard} = require('../../model/pcParts/SoundCardModel');
let {HardDrive} = require('../../model/pcParts/HardDriveModel');
let {SSD} = require('../../model/pcParts/SSDModel');
let {validationProcessor,validationUpdatedProcessor} = require('../../middleWares/validation/pcParts/validateProcessor');
let {validationMemory,validationUpdatedMemory} = require('../../middleWares/validation/pcParts/validateMemory');
let {validationMotherBoard,validationUpdatedMotherBoard} = require('../../middleWares/validation/pcParts/validateMotherBoard');
let {validationVideoCard,validationUpdatedVideoCard} = require('../../middleWares/validation/pcParts/validateVideoCard');
let {validationCasing,validationUpdatedCasing} = require('../../middleWares/validation/pcParts/validateCasing');
let {validationPSU,validationUpdatedPSU} = require('../../middleWares/validation/pcParts/validatePSU');
let {validationFans,validationUpdatedFans} = require('../../middleWares/validation/pcParts/validateFans');
let {validationSoundCard,validationUpdatedSoundCard} = require('../../middleWares/validation/pcParts/validateSoundCard');
let {validationHardDrive,validationUpdatedHardDrive} = require('../../middleWares/validation/pcParts/validateHardDrive');
let {validationSSD,validationUpdatedSSD} = require('../../middleWares/validation/pcParts/validateSSD');
let multer = require('multer');
let fs = require('fs');
let {auth} = require('../../middleWares/authentication/auth');
let adminAuth = require('../../middleWares/authentication/adminAuth');







let storage = multer.diskStorage( {
destination:(req,file,cb)=>{

    let dir =  './client/public/uploads/pcParts'

    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    cb(null,dir);
},
filename:(req,file,cb)=>{
    cb(null, new Date().toISOString().replace(/:/g, ".") + file.originalname);
},

    
});



let fileFilter = (res,file,cb)=>{

    if((file.mimetype == 'image/jpg') || (file.mimetype == 'image/jpeg') ){
        cb(null,true);
    }
    else{
        cb(new Error('File is not of type jpg or jpeg'),false);
    }

}






let upload = multer({storage:storage , fileFilter: fileFilter });



// i- Processor API



/* GET processor. */
router.get('/processor', async (req, res)=> {
  
    let products = await Processor.find();

    return res.send(products);

});



//get singel processor

router.get('/processor/:id', async (req, res)=> {

    try{
        let product = await Processor.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete processor


router.delete('/processor/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await Processor.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await Processor.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update processor

router.put('/processor/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedProcessor , async (req, res)=> {
    
    let product = await Processor.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.processorType = req.body.processorType;
        product.Model.series = req.body.series;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;

   
        product.Details.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Details.CoreName = req.body.CoreName;
        product.Details.NumberOfCores = req.body.NumberOfCores;
        product.Details.NumberOfThreads = req.body.NumberOfThreads;
        product.Details.OperatingFrequency = req.body.OperatingFrequency;
        product.Details.MaxFrequency = req.body.MaxFrequency;
        product.Details.BusSpeed = req.body.BusSpeed;
        product.Details.L3_Cache = req.body.L3_Cache;
        product.Details.ManufacturingTech = req.body.ManufacturingTech;
        product.Details.bit_Support = req.body.bit_Support;
        product.Details.Hyper_Threading_Support = req.body.Hyper_Threading_Support;
        product.Details.MemoryType = req.body.MemoryType;
        product.Details.MemoryChannel = req.body.MemoryChannel;
        product.Details.Virtualization_Tech_Support = req.body.Virtualization_Tech_Support;
        product.Details.IntegratedGraphics = req.body.IntegratedGraphics;
        product.Details.Graphics_Base_Frequency = req.body.Graphics_Base_Frequency;
        product.Details.Graphics_Max_Dynamic_Frequency = req.body.Graphics_Max_Dynamic_Frequency;
        product.Details.PCI_Express_Revision = req.body.PCI_Express_Revision;
        product.Details.Max_Number_PCI_Express_Lane = req.body.Max_Number_PCI_Express_Lane;
        product.Details.Thermal_Design_Power = req.body.Thermal_Design_Power;
        product.Details.CoolingDevice = req.body.CoolingDevice;

        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
            product.Model.processorType = req.body.processorType;
            product.Model.series = req.body.series;
            product.Model.name = req.body.name;
            product.Model.model = req.body.model;
    
       
            product.Details.CPU_Socket_Type = req.body.CPU_Socket_Type;
            product.Details.CoreName = req.body.CoreName;
            product.Details.NumberOfCores = req.body.NumberOfCores;
            product.Details.NumberOfThreads = req.body.NumberOfThreads;
            product.Details.OperatingFrequency = req.body.OperatingFrequency;
            product.Details.MaxFrequency = req.body.MaxFrequency;
            product.Details.BusSpeed = req.body.BusSpeed;
            product.Details.L3_Cache = req.body.L3_Cache;
            product.Details.ManufacturingTech = req.body.ManufacturingTech;
            product.Details.bit_Support = req.body.bit_Support;
            product.Details.Hyper_Threading_Support = req.body.Hyper_Threading_Support;
            product.Details.MemoryType = req.body.MemoryType;
            product.Details.MemoryChannel = req.body.MemoryChannel;
            product.Details.Virtualization_Tech_Support = req.body.Virtualization_Tech_Support;
            product.Details.IntegratedGraphics = req.body.IntegratedGraphics;
            product.Details.Graphics_Base_Frequency = req.body.Graphics_Base_Frequency;
            product.Details.Graphics_Max_Dynamic_Frequency = req.body.Graphics_Max_Dynamic_Frequency;
            product.Details.PCI_Express_Revision = req.body.PCI_Express_Revision;
            product.Details.Max_Number_PCI_Express_Lane = req.body.Max_Number_PCI_Express_Lane;
            product.Details.Thermal_Design_Power = req.body.Thermal_Design_Power;
            product.Details.CoolingDevice = req.body.CoolingDevice;


            product.Power_Consumption = req.body.Power_Consumption;
            
            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
            product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
    
            product.Model.brand = req.body.brand;
            product.Model.processorType = req.body.processorType;
            product.Model.series = req.body.series;
            product.Model.name = req.body.name;
            product.Model.model = req.body.model;
    
       
            product.Details.CPU_Socket_Type = req.body.CPU_Socket_Type;
            product.Details.CoreName = req.body.CoreName;
            product.Details.NumberOfCores = req.body.NumberOfCores;
            product.Details.NumberOfThreads = req.body.NumberOfThreads;
            product.Details.OperatingFrequency = req.body.OperatingFrequency;
            product.Details.MaxFrequency = req.body.MaxFrequency;
            product.Details.BusSpeed = req.body.BusSpeed;
            product.Details.L3_Cache = req.body.L3_Cache;
            product.Details.ManufacturingTech = req.body.ManufacturingTech;
            product.Details.bit_Support = req.body.bit_Support;
            product.Details.Hyper_Threading_Support = req.body.Hyper_Threading_Support;
            product.Details.MemoryType = req.body.MemoryType;
            product.Details.MemoryChannel = req.body.MemoryChannel;
            product.Details.Virtualization_Tech_Support = req.body.Virtualization_Tech_Support;
            product.Details.IntegratedGraphics = req.body.IntegratedGraphics;
            product.Details.Graphics_Base_Frequency = req.body.Graphics_Base_Frequency;
            product.Details.Graphics_Max_Dynamic_Frequency = req.body.Graphics_Max_Dynamic_Frequency;
            product.Details.PCI_Express_Revision = req.body.PCI_Express_Revision;
            product.Details.Max_Number_PCI_Express_Lane = req.body.Max_Number_PCI_Express_Lane;
            product.Details.Thermal_Design_Power = req.body.Thermal_Design_Power;
            product.Details.CoolingDevice = req.body.CoolingDevice;


            product.Power_Consumption = req.body.Power_Consumption;
        
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
        product.Model.processorType = req.body.processorType;
        product.Model.series = req.body.series;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;

   
        product.Details.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Details.CoreName = req.body.CoreName;
        product.Details.NumberOfCores = req.body.NumberOfCores;
        product.Details.NumberOfThreads = req.body.NumberOfThreads;
        product.Details.OperatingFrequency = req.body.OperatingFrequency;
        product.Details.MaxFrequency = req.body.MaxFrequency;
        product.Details.BusSpeed = req.body.BusSpeed;
        product.Details.L3_Cache = req.body.L3_Cache;
        product.Details.ManufacturingTech = req.body.ManufacturingTech;
        product.Details.bit_Support = req.body.bit_Support;
        product.Details.Hyper_Threading_Support = req.body.Hyper_Threading_Support;
        product.Details.MemoryType = req.body.MemoryType;
        product.Details.MemoryChannel = req.body.MemoryChannel;
        product.Details.Virtualization_Tech_Support = req.body.Virtualization_Tech_Support;
        product.Details.IntegratedGraphics = req.body.IntegratedGraphics;
        product.Details.Graphics_Base_Frequency = req.body.Graphics_Base_Frequency;
        product.Details.Graphics_Max_Dynamic_Frequency = req.body.Graphics_Max_Dynamic_Frequency;
        product.Details.PCI_Express_Revision = req.body.PCI_Express_Revision;
        product.Details.Max_Number_PCI_Express_Lane = req.body.Max_Number_PCI_Express_Lane;
        product.Details.Thermal_Design_Power = req.body.Thermal_Design_Power;
        product.Details.CoolingDevice = req.body.CoolingDevice;


        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add processor

//restrict picture selection in front end gallery=6  

router.post('/processor',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationProcessor , async (req, res)=> {

    try{
        
        let product = new Processor();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.processorType = req.body.processorType;
        product.Model.series = req.body.series;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;

   
        product.Details.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Details.CoreName = req.body.CoreName;
        product.Details.NumberOfCores = req.body.NumberOfCores;
        product.Details.NumberOfThreads = req.body.NumberOfThreads;
        product.Details.OperatingFrequency = req.body.OperatingFrequency;
        product.Details.MaxFrequency = req.body.MaxFrequency;
        product.Details.BusSpeed = req.body.BusSpeed;
        product.Details.L3_Cache = req.body.L3_Cache;
        product.Details.ManufacturingTech = req.body.ManufacturingTech;
        product.Details.bit_Support = req.body.bit_Support;
        product.Details.Hyper_Threading_Support = req.body.Hyper_Threading_Support;
        product.Details.MemoryType = req.body.MemoryType;
        product.Details.MemoryChannel = req.body.MemoryChannel;
        product.Details.Virtualization_Tech_Support = req.body.Virtualization_Tech_Support;
        product.Details.IntegratedGraphics = req.body.IntegratedGraphics;
        product.Details.Graphics_Base_Frequency = req.body.Graphics_Base_Frequency;
        product.Details.Graphics_Max_Dynamic_Frequency = req.body.Graphics_Max_Dynamic_Frequency;
        product.Details.PCI_Express_Revision = req.body.PCI_Express_Revision;
        product.Details.Max_Number_PCI_Express_Lane = req.body.Max_Number_PCI_Express_Lane;
        product.Details.Thermal_Design_Power = req.body.Thermal_Design_Power;
        product.Details.CoolingDevice = req.body.CoolingDevice;


        product.Power_Consumption = req.body.Power_Consumption;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});






//****************************************************************************************** */


// ii-Memory/RAM API


/* GET RAM. */
router.get('/memory', async (req, res)=> {
  
    let products = await Memory.find();

    return res.send(products);

});



//get singel memory

router.get('/memory/:id', async (req, res)=> {

    try{
        let product = await Memory.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete memory


router.delete('/memory/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await Memory.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await Memory.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update memory

router.put('/memory/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedMemory , async (req, res)=> {
    
    let product = await Memory.findById(req.params.id);


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

   
        product.Details.Capacity = req.body.Capacity;
        product.Details.Type = req.body.type;
        product.Details.Memory_Pins = req.body.Memory_Pins;
        product.Details.speed = req.body.speed;
        product.Details.CAS_Latency = req.body.CAS_Latency;
        product.Details.timing = req.body.timing;
        product.Details.voltage = req.body.voltage;
        product.Details.ECC = req.body.ECC;
        product.Details.Buffered = req.body.Buffered;
        product.Details.Multi_Channel_Kit = req.body.Multi_Channel_Kit;
        product.Details.chipset = req.body.chipset;
        product.Details.color = req.body.color;
        product.Details.HeatSpreader = req.body.HeatSpreader;
        product.Details.features = req.body.features;
        product.Details.recommendUse = req.body.recommendUse;

        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
    
       
            product.Details.Capacity = req.body.Capacity;
            product.Details.Type = req.body.type;
            product.Details.Memory_Pins = req.body.Memory_Pins;
            product.Details.speed = req.body.speed;
            product.Details.CAS_Latency = req.body.CAS_Latency;
            product.Details.timing = req.body.timing;
            product.Details.voltage = req.body.voltage;
            product.Details.ECC = req.body.ECC;
            product.Details.Buffered = req.body.Buffered;
            product.Details.Multi_Channel_Kit = req.body.Multi_Channel_Kit;
            product.Details.chipset = req.body.chipset;
            product.Details.color = req.body.color;
            product.Details.HeatSpreader = req.body.HeatSpreader;
            product.Details.features = req.body.features;
            product.Details.recommendUse = req.body.recommendUse;
            
        product.Power_Consumption = req.body.Power_Consumption;
            
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
    
       
            product.Details.Capacity = req.body.Capacity;
            product.Details.Type = req.body.type;
            product.Details.Memory_Pins = req.body.Memory_Pins;
            product.Details.speed = req.body.speed;
            product.Details.CAS_Latency = req.body.CAS_Latency;
            product.Details.timing = req.body.timing;
            product.Details.voltage = req.body.voltage;
            product.Details.ECC = req.body.ECC;
            product.Details.Buffered = req.body.Buffered;
            product.Details.Multi_Channel_Kit = req.body.Multi_Channel_Kit;
            product.Details.chipset = req.body.chipset;
            product.Details.color = req.body.color;
            product.Details.HeatSpreader = req.body.HeatSpreader;
            product.Details.features = req.body.features;
            product.Details.recommendUse = req.body.recommendUse;
            
        product.Power_Consumption = req.body.Power_Consumption;
        
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

   
        product.Details.Capacity = req.body.Capacity;
        product.Details.Type = req.body.type;
        product.Details.Memory_Pins = req.body.Memory_Pins;
        product.Details.speed = req.body.speed;
        product.Details.CAS_Latency = req.body.CAS_Latency;
        product.Details.timing = req.body.timing;
        product.Details.voltage = req.body.voltage;
        product.Details.ECC = req.body.ECC;
        product.Details.Buffered = req.body.Buffered;
        product.Details.Multi_Channel_Kit = req.body.Multi_Channel_Kit;
        product.Details.chipset = req.body.chipset;
        product.Details.color = req.body.color;
        product.Details.HeatSpreader = req.body.HeatSpreader;
        product.Details.features = req.body.features;
        product.Details.recommendUse = req.body.recommendUse;
        
        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add memory

//restrict picture selection in front end gallery=6  

router.post('/memory',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationMemory , async (req, res)=> {

    try{
        
        let product = new Memory();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;

   
        product.Details.Capacity = req.body.Capacity;
        product.Details.Type = req.body.type;
        product.Details.Memory_Pins = req.body.Memory_Pins;
        product.Details.speed = req.body.speed;
        product.Details.CAS_Latency = req.body.CAS_Latency;
        product.Details.timing = req.body.timing;
        product.Details.voltage = req.body.voltage;
        product.Details.ECC = req.body.ECC;
        product.Details.Buffered = req.body.Buffered;
        product.Details.Multi_Channel_Kit = req.body.Multi_Channel_Kit;
        product.Details.chipset = req.body.chipset;
        product.Details.color = req.body.color;
        product.Details.HeatSpreader = req.body.HeatSpreader;
        product.Details.features = req.body.features;
        product.Details.recommendUse = req.body.recommendUse;
        
        product.Power_Consumption = req.body.Power_Consumption;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});











//****************************************************************************************** */


// iii-MotherBoard API


/* GET MotherBoard. */
router.get('/motherboard', async (req, res)=> {
  
    let products = await MotherBoard.find();

    return res.send(products);

});



//get singel MotherBoard

router.get('/motherboard/:id', async (req, res)=> {

    try{
        let product = await MotherBoard.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete MotherBoard


router.delete('/motherboard/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await MotherBoard.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await MotherBoard.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update MotherBoard

router.put('/motherboard/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedMotherBoard , async (req, res)=> {
    
    let product = await MotherBoard.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.model = req.body.model;

   
        product.Supported_CPU.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Supported_CPU.CPU_Type = req.body.CPU_Type;
    
        product.Chipset = req.body.Chipset;
        product.Onboard_Video_Chipset = req.body.Onboard_Video_Chipset;
    
        product.Memory.Memory_Pins = req.body.Memory_Pins;
        product.Memory.Number_Of_Memory_Slots = req.body.Number_Of_Memory_Slots;
        product.Memory.Memory_Standard = req.body.Memory_Standard;
        product.Memory.Maximum_Memory_Supported = req.body.Maximum_Memory_Supported;
        product.Memory.Channel_Supported = req.body.Channel_Supported;
        
        product.Expansion_Slots.PCI_Express = req.body.PCI_Express;
       
        product.Storage_Device.SATA_6GBs = req.body.SATA_6GBs;
        product.Storage_Device.M2 = req.body.M2;
   
        product.Onboard_Audio.Audio_Chipset = req.body.Audio_Chipset;
        product.Onboard_Audio.Audio_Channels = req.body.Audio_Channels;
      
        product.Onboard_LAN.LAN_Chipset = req.body.LAN_Chipset;
        product.Onboard_LAN.Max_LAN_Speed = req.body.Max_LAN_Speed;
        product.Onboard_LAN.Wireless_LAN = req.body.Wireless_LAN;
        product.Onboard_LAN.Bluetooth = req.body.Bluetooth;

        product.Rear_Panel_Ports = req.body.Rear_Panel_Ports;
      
        product.Internal_IO_Connectors.Onboard_USB = req.body.Onboard_USB;
        product.Internal_IO_Connectors.Other_Connectors = req.body.Other_Connectors;
       
        product.Physical_Spec.Form_Factor = req.body.Form_Factor;
        product.Physical_Spec.LED_Lighting = req.body.LED_Lighting;
        product.Physical_Spec.Dimentions = req.body.Dimentions;
        product.Physical_Spec.Power_Pin = req.body.Power_Pin;
       
        product.Windows = req.body.Windows;
        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
        product.company = req.body.company;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
        product.Model.model = req.body.model;

   
        product.Supported_CPU.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Supported_CPU.CPU_Type = req.body.CPU_Type;
    
        product.Chipset = req.body.Chipset;
        product.Onboard_Video_Chipset = req.body.Onboard_Video_Chipset;
    
        product.Memory.Memory_Pins = req.body.Memory_Pins;
        product.Memory.Number_Of_Memory_Slots = req.body.Number_Of_Memory_Slots;
        product.Memory.Memory_Standard = req.body.Memory_Standard;
        product.Memory.Maximum_Memory_Supported = req.body.Maximum_Memory_Supported;
        product.Memory.Channel_Supported = req.body.Channel_Supported;
        
        product.Expansion_Slots.PCI_Express = req.body.PCI_Express;
       
        product.Storage_Device.SATA_6GBs = req.body.SATA_6GBs;
        product.Storage_Device.M2 = req.body.M2;
   
        product.Onboard_Audio.Audio_Chipset = req.body.Audio_Chipset;
        product.Onboard_Audio.Audio_Channels = req.body.Audio_Channels;
      
        product.Onboard_LAN.LAN_Chipset = req.body.LAN_Chipset;
        product.Onboard_LAN.Max_LAN_Speed = req.body.Max_LAN_Speed;
        product.Onboard_LAN.Wireless_LAN = req.body.Wireless_LAN;
        product.Onboard_LAN.Bluetooth = req.body.Bluetooth;

        product.Rear_Panel_Ports = req.body.Rear_Panel_Ports;
      
        product.Internal_IO_Connectors.Onboard_USB = req.body.Onboard_USB;
        product.Internal_IO_Connectors.Other_Connectors = req.body.Other_Connectors;
       
        product.Physical_Spec.Form_Factor = req.body.Form_Factor;
        product.Physical_Spec.LED_Lighting = req.body.LED_Lighting;
        product.Physical_Spec.Dimentions = req.body.Dimentions;
        product.Physical_Spec.Power_Pin = req.body.Power_Pin;
       
        product.Windows = req.body.Windows;
        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
        product.company = req.body.company;
            
            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
            product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
    
            
        product.Model.brand = req.body.brand;
        product.Model.model = req.body.model;

   
        product.Supported_CPU.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Supported_CPU.CPU_Type = req.body.CPU_Type;
    
        product.Chipset = req.body.Chipset;
        product.Onboard_Video_Chipset = req.body.Onboard_Video_Chipset;
    
        product.Memory.Memory_Pins = req.body.Memory_Pins;
        product.Memory.Number_Of_Memory_Slots = req.body.Number_Of_Memory_Slots;
        product.Memory.Memory_Standard = req.body.Memory_Standard;
        product.Memory.Maximum_Memory_Supported = req.body.Maximum_Memory_Supported;
        product.Memory.Channel_Supported = req.body.Channel_Supported;
        
        product.Expansion_Slots.PCI_Express = req.body.PCI_Express;
       
        product.Storage_Device.SATA_6GBs = req.body.SATA_6GBs;
        product.Storage_Device.M2 = req.body.M2;
   
        product.Onboard_Audio.Audio_Chipset = req.body.Audio_Chipset;
        product.Onboard_Audio.Audio_Channels = req.body.Audio_Channels;
      
        product.Onboard_LAN.LAN_Chipset = req.body.LAN_Chipset;
        product.Onboard_LAN.Max_LAN_Speed = req.body.Max_LAN_Speed;
        product.Onboard_LAN.Wireless_LAN = req.body.Wireless_LAN;
        product.Onboard_LAN.Bluetooth = req.body.Bluetooth;

        product.Rear_Panel_Ports = req.body.Rear_Panel_Ports;
      
        product.Internal_IO_Connectors.Onboard_USB = req.body.Onboard_USB;
        product.Internal_IO_Connectors.Other_Connectors = req.body.Other_Connectors;
       
        product.Physical_Spec.Form_Factor = req.body.Form_Factor;
        product.Physical_Spec.LED_Lighting = req.body.LED_Lighting;
        product.Physical_Spec.Dimentions = req.body.Dimentions;
        product.Physical_Spec.Power_Pin = req.body.Power_Pin;
       
        product.Windows = req.body.Windows;
        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
        product.company = req.body.company;
        
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
        product.Model.model = req.body.model;

   
        product.Supported_CPU.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Supported_CPU.CPU_Type = req.body.CPU_Type;
    
        product.Chipset = req.body.Chipset;
        product.Onboard_Video_Chipset = req.body.Onboard_Video_Chipset;
    

        product.Memory.Memory_Pins = req.body.Memory_Pins;
        product.Memory.Number_Of_Memory_Slots = req.body.Number_Of_Memory_Slots;
        product.Memory.Memory_Standard = req.body.Memory_Standard;
        product.Memory.Maximum_Memory_Supported = req.body.Maximum_Memory_Supported;
        product.Memory.Channel_Supported = req.body.Channel_Supported;
        
        product.Expansion_Slots.PCI_Express = req.body.PCI_Express;
       
        product.Storage_Device.SATA_6GBs = req.body.SATA_6GBs;
        product.Storage_Device.M2 = req.body.M2;
   
        product.Onboard_Audio.Audio_Chipset = req.body.Audio_Chipset;
        product.Onboard_Audio.Audio_Channels = req.body.Audio_Channels;
      
        product.Onboard_LAN.LAN_Chipset = req.body.LAN_Chipset;
        product.Onboard_LAN.Max_LAN_Speed = req.body.Max_LAN_Speed;
        product.Onboard_LAN.Wireless_LAN = req.body.Wireless_LAN;
        product.Onboard_LAN.Bluetooth = req.body.Bluetooth;

        product.Rear_Panel_Ports = req.body.Rear_Panel_Ports;
      
        product.Internal_IO_Connectors.Onboard_USB = req.body.Onboard_USB;
        product.Internal_IO_Connectors.Other_Connectors = req.body.Other_Connectors;
       
        product.Physical_Spec.Form_Factor = req.body.Form_Factor;
        product.Physical_Spec.LED_Lighting = req.body.LED_Lighting;
        product.Physical_Spec.Dimentions = req.body.Dimentions;
        product.Physical_Spec.Power_Pin = req.body.Power_Pin;
       
        product.Windows = req.body.Windows;
        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
        product.company = req.body.company;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add MotherBoard

//restrict picture selection in front end gallery=6  

router.post('/motherboard',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationMotherBoard , async (req, res)=> {

    try{
        
        let product = new MotherBoard();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.model = req.body.model;

   
        product.Supported_CPU.CPU_Socket_Type = req.body.CPU_Socket_Type;
        product.Supported_CPU.CPU_Type = req.body.CPU_Type;
    
        product.Chipset = req.body.Chipset;
        product.Onboard_Video_Chipset = req.body.Onboard_Video_Chipset;
    
        product.Memory.Memory_Pins = req.body.Memory_Pins;
        product.Memory.Number_Of_Memory_Slots = req.body.Number_Of_Memory_Slots;
        product.Memory.Memory_Standard = req.body.Memory_Standard;
        product.Memory.Maximum_Memory_Supported = req.body.Maximum_Memory_Supported;
        product.Memory.Channel_Supported = req.body.Channel_Supported;
        
        product.Expansion_Slots.PCI_Express = req.body.PCI_Express;
       
        product.Storage_Device.SATA_6GBs = req.body.SATA_6GBs;
        product.Storage_Device.M2 = req.body.M2;
   
        product.Onboard_Audio.Audio_Chipset = req.body.Audio_Chipset;
        product.Onboard_Audio.Audio_Channels = req.body.Audio_Channels;
      
        product.Onboard_LAN.LAN_Chipset = req.body.LAN_Chipset;
        product.Onboard_LAN.Max_LAN_Speed = req.body.Max_LAN_Speed;
        product.Onboard_LAN.Wireless_LAN = req.body.Wireless_LAN;
        product.Onboard_LAN.Bluetooth = req.body.Bluetooth;

        product.Rear_Panel_Ports = req.body.Rear_Panel_Ports;
      
        product.Internal_IO_Connectors.Onboard_USB = req.body.Onboard_USB;
        product.Internal_IO_Connectors.Other_Connectors = req.body.Other_Connectors;
       
        product.Physical_Spec.Form_Factor = req.body.Form_Factor;
        product.Physical_Spec.LED_Lighting = req.body.LED_Lighting;
        product.Physical_Spec.Dimentions = req.body.Dimentions;
        product.Physical_Spec.Power_Pin = req.body.Power_Pin;
       
        product.Windows = req.body.Windows;
        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
        product.company = req.body.company;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});















//****************************************************************************************** */


// iv-VideoCard API


/* GET VideoCard. */
router.get('/videocard', async (req, res)=> {
  
    let products = await VideoCard.find();

    return res.send(products);

});



//get singel VideoCard

router.get('/videocard/:id', async (req, res)=> {

    try{
        let product = await VideoCard.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete VideoCard


router.delete('/videocard/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await VideoCard.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await VideoCard.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update VideoCard

router.put('/videocard/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedVideoCard , async (req, res)=> {
    
    let product = await VideoCard.findById(req.params.id);


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

   
        product.Interface = req.body.Interface;
      
        product.Chipset.Manufacturer = req.body.Manufacturer;
        product.Chipset.GPU_Series = req.body.GPU_Series;
        product.Chipset.GPU = req.body.GPU;
      
   
        product.Memory.Effective_Memory_Clock = req.body.Effective_Memory_Clock;
        product.Memory.Memory_Size = req.body.Memory_Size;
        product.Memory.Memory_Interface = req.body.Memory_Interface;
        product.Memory.Memory_Type = req.body.Memory_Type;
   
        product.API.DirectX = req.body.DirectX;
        product.API.OpenGL = req.body.OpenGL;
  
        product.Ports.HDMI = req.body.HDMI;
        product.Ports.DisplayPort = req.body.DisplayPort;
   
        product.Details.Virtual_Reality_Ready = req.body.Virtual_Reality_Ready;
        product.Details.Cooler = req.body.Cooler;
        product.Details.System_Requirments = req.body.System_Requirments;
        product.Details.Power_Connectors = req.body.Power_Connectors;
    
        product.Dimentions.FormFactor = req.body.FormFactor;
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Card_Dimentions = req.body.Card_Dimentions;
        product.Dimentions.SlotWidth = req.body.SlotWidth;


        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
    
       
            product.Interface = req.body.Interface;
          
            product.Chipset.Manufacturer = req.body.Manufacturer;
            product.Chipset.GPU_Series = req.body.GPU_Series;
            product.Chipset.GPU = req.body.GPU;
          
       
            product.Memory.Effective_Memory_Clock = req.body.Effective_Memory_Clock;
            product.Memory.Memory_Size = req.body.Memory_Size;
            product.Memory.Memory_Interface = req.body.Memory_Interface;
            product.Memory.Memory_Type = req.body.Memory_Type;
       
            product.API.DirectX = req.body.DirectX;
            product.API.OpenGL = req.body.OpenGL;
      
            product.Ports.HDMI = req.body.HDMI;
            product.Ports.DisplayPort = req.body.DisplayPort;
       
            product.Details.Virtual_Reality_Ready = req.body.Virtual_Reality_Ready;
            product.Details.Cooler = req.body.Cooler;
            product.Details.System_Requirments = req.body.System_Requirments;
            product.Details.Power_Connectors = req.body.Power_Connectors;
        
            product.Dimentions.FormFactor = req.body.FormFactor;
            product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
            product.Dimentions.Card_Dimentions = req.body.Card_Dimentions;
            product.Dimentions.SlotWidth = req.body.SlotWidth;

            product.Power_Consumption = req.body.Power_Consumption;
            
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
    
       
            product.Interface = req.body.Interface;
          
            product.Chipset.Manufacturer = req.body.Manufacturer;
            product.Chipset.GPU_Series = req.body.GPU_Series;
            product.Chipset.GPU = req.body.GPU;
          
       
            product.Memory.Effective_Memory_Clock = req.body.Effective_Memory_Clock;
            product.Memory.Memory_Size = req.body.Memory_Size;
            product.Memory.Memory_Interface = req.body.Memory_Interface;
            product.Memory.Memory_Type = req.body.Memory_Type;
       
            product.API.DirectX = req.body.DirectX;
            product.API.OpenGL = req.body.OpenGL;
      
            product.Ports.HDMI = req.body.HDMI;
            product.Ports.DisplayPort = req.body.DisplayPort;
       
            product.Details.Virtual_Reality_Ready = req.body.Virtual_Reality_Ready;
            product.Details.Cooler = req.body.Cooler;
            product.Details.System_Requirments = req.body.System_Requirments;
            product.Details.Power_Connectors = req.body.Power_Connectors;
        
            product.Dimentions.FormFactor = req.body.FormFactor;
            product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
            product.Dimentions.Card_Dimentions = req.body.Card_Dimentions;
            product.Dimentions.SlotWidth = req.body.SlotWidth;

            product.Power_Consumption = req.body.Power_Consumption;
        
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

   
        product.Interface = req.body.Interface;
      
        product.Chipset.Manufacturer = req.body.Manufacturer;
        product.Chipset.GPU_Series = req.body.GPU_Series;
        product.Chipset.GPU = req.body.GPU;
      
   
        product.Memory.Effective_Memory_Clock = req.body.Effective_Memory_Clock;
        product.Memory.Memory_Size = req.body.Memory_Size;
        product.Memory.Memory_Interface = req.body.Memory_Interface;
        product.Memory.Memory_Type = req.body.Memory_Type;
   
        product.API.DirectX = req.body.DirectX;
        product.API.OpenGL = req.body.OpenGL;
  
        product.Ports.HDMI = req.body.HDMI;
        product.Ports.DisplayPort = req.body.DisplayPort;
   
        product.Details.Virtual_Reality_Ready = req.body.Virtual_Reality_Ready;
        product.Details.Cooler = req.body.Cooler;
        product.Details.System_Requirments = req.body.System_Requirments;
        product.Details.Power_Connectors = req.body.Power_Connectors;
    
        product.Dimentions.FormFactor = req.body.FormFactor;
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Card_Dimentions = req.body.Card_Dimentions;
        product.Dimentions.SlotWidth = req.body.SlotWidth;


        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add VideoCard

//restrict picture selection in front end gallery=6  

router.post('/videocard',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationVideoCard , async (req, res)=> {

    try{
        
        let product = new VideoCard();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;

   
        product.Interface = req.body.Interface;
      
        product.Chipset.Manufacturer = req.body.Manufacturer;
        product.Chipset.GPU_Series = req.body.GPU_Series;
        product.Chipset.GPU = req.body.GPU;
      
   
        product.Memory.Effective_Memory_Clock = req.body.Effective_Memory_Clock;
        product.Memory.Memory_Size = req.body.Memory_Size;
        product.Memory.Memory_Interface = req.body.Memory_Interface;
        product.Memory.Memory_Type = req.body.Memory_Type;
   
        product.API.DirectX = req.body.DirectX;
        product.API.OpenGL = req.body.OpenGL;
  
        product.Ports.HDMI = req.body.HDMI;
        product.Ports.DisplayPort = req.body.DisplayPort;
   
        product.Details.Virtual_Reality_Ready = req.body.Virtual_Reality_Ready;
        product.Details.Cooler = req.body.Cooler;
        product.Details.System_Requirments = req.body.System_Requirments;
        product.Details.Power_Connectors = req.body.Power_Connectors;
    
        product.Dimentions.FormFactor = req.body.FormFactor;
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Card_Dimentions = req.body.Card_Dimentions;
        product.Dimentions.SlotWidth = req.body.SlotWidth;


        product.Power_Consumption = req.body.Power_Consumption;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});







//****************************************************************************************** */


// v-Casing API


/* GET Casing. */
router.get('/casing', async (req, res)=> {
  
    let products = await Casing.find();

    return res.send(products);

});



//get singel Casing

router.get('/casing/:id', async (req, res)=> {

    try{
        let product = await Casing.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete Casing


router.delete('/casing/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await Casing.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await Casing.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update Casing

router.put('/casing/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedCasing , async (req, res)=> {
    
    let product = await Casing.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;

   
        product.Details.Type = req.body.type;
        product.Details.Color = req.body.Color;
        product.Details.Casing_Material = req.body.Casing_Material;
        product.Details.With_Power_Supply = req.body.With_Power_Supply;
        product.Details.Power_Supply_Mounted = req.body.Power_Supply_Mounted;
        product.Details.Side_Panel_Window = req.body.Side_Panel_Window;
        product.Details.Dust_Filters = req.body.Dust_Filters;
 
        product.Expansions.Internal_Drive_Bays25 = req.body.Internal_Drive_Bays25;
        product.Expansions.Internal_Drive_Bays35 = req.body.Internal_Drive_Bays35;
        product.Expansions.Expansion_Slots = req.body.Expansion_Slots;
   
        product.Front_Panel_Ports = req.body.Front_Panel_Ports;

        product.Cooling_System.Fan_Options = req.body.Fan_Options;
        product.Cooling_System.Rdiator_Options = req.body.Rdiator_Options;
  
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Max_CPU_Cooler_Length = req.body.Max_CPU_Cooler_Length;
        product.Dimentions.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Dimentions.Case_Dimentions = req.body.Case_Dimentions;
        product.Dimentions.Weight = req.body.Weight;
        product.Dimentions.Supported_Motherboard = req.body.Supported_Motherboard;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
    
       
        product.Details.Type = req.body.type;
        product.Details.Color = req.body.Color;
        product.Details.Casing_Material = req.body.Casing_Material;
        product.Details.With_Power_Supply = req.body.With_Power_Supply;
        product.Details.Power_Supply_Mounted = req.body.Power_Supply_Mounted;
        product.Details.Side_Panel_Window = req.body.Side_Panel_Window;
        product.Details.Dust_Filters = req.body.Dust_Filters;
 
        product.Expansions.Internal_Drive_Bays25 = req.body.Internal_Drive_Bays25;
        product.Expansions.Internal_Drive_Bays35 = req.body.Internal_Drive_Bays35;
        product.Expansions.Expansion_Slots = req.body.Expansion_Slots;
   
        product.Front_Panel_Ports = req.body.Front_Panel_Ports;

        product.Cooling_System.Fan_Options = req.body.Fan_Options;
        product.Cooling_System.Rdiator_Options = req.body.Rdiator_Options;
  
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Max_CPU_Cooler_Length = req.body.Max_CPU_Cooler_Length;
        product.Dimentions.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Dimentions.Case_Dimentions = req.body.Case_Dimentions;
        product.Dimentions.Weight = req.body.Weight;
        product.Dimentions.Supported_Motherboard = req.body.Supported_Motherboard;
            
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
    
       
            product.Details.Type = req.body.type;
            product.Details.Color = req.body.Color;
            product.Details.Casing_Material = req.body.Casing_Material;
            product.Details.With_Power_Supply = req.body.With_Power_Supply;
            product.Details.Power_Supply_Mounted = req.body.Power_Supply_Mounted;
            product.Details.Side_Panel_Window = req.body.Side_Panel_Window;
            product.Details.Dust_Filters = req.body.Dust_Filters;
     
            product.Expansions.Internal_Drive_Bays25 = req.body.Internal_Drive_Bays25;
            product.Expansions.Internal_Drive_Bays35 = req.body.Internal_Drive_Bays35;
            product.Expansions.Expansion_Slots = req.body.Expansion_Slots;
       
            product.Front_Panel_Ports = req.body.Front_Panel_Ports;
    
            product.Cooling_System.Fan_Options = req.body.Fan_Options;
            product.Cooling_System.Rdiator_Options = req.body.Rdiator_Options;
      
            product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
            product.Dimentions.Max_CPU_Cooler_Length = req.body.Max_CPU_Cooler_Length;
            product.Dimentions.Max_PSU_Length = req.body.Max_PSU_Length;
            product.Dimentions.Case_Dimentions = req.body.Case_Dimentions;
            product.Dimentions.Weight = req.body.Weight;
            product.Dimentions.Supported_Motherboard = req.body.Supported_Motherboard;
        
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

   
        product.Details.Type = req.body.type;
        product.Details.Color = req.body.Color;
        product.Details.Casing_Material = req.body.Casing_Material;
        product.Details.With_Power_Supply = req.body.With_Power_Supply;
        product.Details.Power_Supply_Mounted = req.body.Power_Supply_Mounted;
        product.Details.Side_Panel_Window = req.body.Side_Panel_Window;
        product.Details.Dust_Filters = req.body.Dust_Filters;
 
        product.Expansions.Internal_Drive_Bays25 = req.body.Internal_Drive_Bays25;
        product.Expansions.Internal_Drive_Bays35 = req.body.Internal_Drive_Bays35;
        product.Expansions.Expansion_Slots = req.body.Expansion_Slots;
   
        product.Front_Panel_Ports = req.body.Front_Panel_Ports;

        product.Cooling_System.Fan_Options = req.body.Fan_Options;
        product.Cooling_System.Rdiator_Options = req.body.Rdiator_Options;
  
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Max_CPU_Cooler_Length = req.body.Max_CPU_Cooler_Length;
        product.Dimentions.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Dimentions.Case_Dimentions = req.body.Case_Dimentions;
        product.Dimentions.Weight = req.body.Weight;
        product.Dimentions.Supported_Motherboard = req.body.Supported_Motherboard;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add Casing

//restrict picture selection in front end gallery=6  

router.post('/casing',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationCasing , async (req, res)=> {

    try{
        
        let product = new Casing();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;

   
        product.Details.Type = req.body.type;
        product.Details.Color = req.body.Color;
        product.Details.Casing_Material = req.body.Casing_Material;
        product.Details.With_Power_Supply = req.body.With_Power_Supply;
        product.Details.Power_Supply_Mounted = req.body.Power_Supply_Mounted;
        product.Details.Side_Panel_Window = req.body.Side_Panel_Window;
        product.Details.Dust_Filters = req.body.Dust_Filters;
 
        product.Expansions.Internal_Drive_Bays25 = req.body.Internal_Drive_Bays25;
        product.Expansions.Internal_Drive_Bays35 = req.body.Internal_Drive_Bays35;
        product.Expansions.Expansion_Slots = req.body.Expansion_Slots;
   
        product.Front_Panel_Ports = req.body.Front_Panel_Ports;

        product.Cooling_System.Fan_Options = req.body.Fan_Options;
        product.Cooling_System.Rdiator_Options = req.body.Rdiator_Options;
  
        product.Dimentions.Max_GPU_Length = req.body.Max_GPU_Length;
        product.Dimentions.Max_CPU_Cooler_Length = req.body.Max_CPU_Cooler_Length;
        product.Dimentions.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Dimentions.Case_Dimentions = req.body.Case_Dimentions;
        product.Dimentions.Weight = req.body.Weight;
        product.Dimentions.Supported_Motherboard = req.body.Supported_Motherboard;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});













//****************************************************************************************** */


// vi-PSU API


/* GET PSU. */
router.get('/psu', async (req, res)=> {
  
    let products = await PSU.find();

    return res.send(products);

});



//get singel PSU

router.get('/psu/:id', async (req, res)=> {

    try{
        let product = await PSU.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete PSU


router.delete('/psu/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await PSU.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await PSU.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update PSU

router.put('/psu/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedPSU , async (req, res)=> {
    console.log(req.body);
    let product = await PSU.findById(req.params.id);


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

   
        product.Details.Type = req.body.type;
        product.Details.Maximum_Power = req.body.Maximum_Power;
        product.Details.Fans = req.body.Fans;
        product.Details.PFC = req.body.PFC;
        product.Details.Main_Connectors = req.body.Main_Connectors;
        product.Details.Rails = req.body.Rails;
        product.Details.PCI_Express_Connector = req.body.PCI_Express_Connector;
        product.Details.SATA_Power_Connector = req.body.SATA_Power_Connector;
        product.Details.SLI = req.body.SLI;
        product.Details.Haswell_Support = req.body.Haswell_Support;
        product.Details.CrossFire = req.body.CrossFire;
        product.Details.Modular = req.body.Modular;
        product.Details.Energy_Efficent = req.body.Energy_Efficent;
        product.Details.Input_Voltage = req.body.Input_Voltage;
        product.Details.Input_Frequency_Range = req.body.Input_Frequency_Range;
        product.Details.Input_Current = req.body.Input_Current;
        product.Details.Output = req.body.Output;
        product.Details.Dimentions = req.body.Dimentions;
        product.Details.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Details.Weight = req.body.Weight;
 
        product.Features.Connectors = req.body.Connectors;
        product.Features.Features = req.body.Features;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
    
       
            product.Details.Type = req.body.type;
        product.Details.Maximum_Power = req.body.Maximum_Power;
        product.Details.Fans = req.body.Fans;
        product.Details.PFC = req.body.PFC;
        product.Details.Main_Connectors = req.body.Main_Connectors;
        product.Details.Rails = req.body.Rails;
        product.Details.PCI_Express_Connector = req.body.PCI_Express_Connector;
        product.Details.SATA_Power_Connector = req.body.SATA_Power_Connector;
        product.Details.SLI = req.body.SLI;
        product.Details.Haswell_Support = req.body.Haswell_Support;
        product.Details.CrossFire = req.body.CrossFire;
        product.Details.Modular = req.body.Modular;
        product.Details.Energy_Efficent = req.body.Energy_Efficent;
        product.Details.Input_Voltage = req.body.Input_Voltage;
        product.Details.Input_Frequency_Range = req.body.Input_Frequency_Range;
        product.Details.Input_Current = req.body.Input_Current;
        product.Details.Output = req.body.Output;
        product.Details.Dimentions = req.body.Dimentions;
        product.Details.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Details.Weight = req.body.Weight;
 
        product.Features.Connectors = req.body.Connectors;
        product.Features.Features = req.body.Features;
            
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
    
       
            product.Details.Type = req.body.type;
        product.Details.Maximum_Power = req.body.Maximum_Power;
        product.Details.Fans = req.body.Fans;
        product.Details.PFC = req.body.PFC;
        product.Details.Main_Connectors = req.body.Main_Connectors;
        product.Details.Rails = req.body.Rails;
        product.Details.PCI_Express_Connector = req.body.PCI_Express_Connector;
        product.Details.SATA_Power_Connector = req.body.SATA_Power_Connector;
        product.Details.SLI = req.body.SLI;
        product.Details.Haswell_Support = req.body.Haswell_Support;
        product.Details.CrossFire = req.body.CrossFire;
        product.Details.Modular = req.body.Modular;
        product.Details.Energy_Efficent = req.body.Energy_Efficent;
        product.Details.Input_Voltage = req.body.Input_Voltage;
        product.Details.Input_Frequency_Range = req.body.Input_Frequency_Range;
        product.Details.Input_Current = req.body.Input_Current;
        product.Details.Output = req.body.Output;
        product.Details.Dimentions = req.body.Dimentions;
        product.Details.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Details.Weight = req.body.Weight;
 
        product.Features.Connectors = req.body.Connectors;
        product.Features.Features = req.body.Features;
        
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

   
        product.Details.Type = req.body.type;
        product.Details.Maximum_Power = req.body.Maximum_Power;
        product.Details.Fans = req.body.Fans;
        product.Details.PFC = req.body.PFC;
        product.Details.Main_Connectors = req.body.Main_Connectors;
        product.Details.Rails = req.body.Rails;
        product.Details.PCI_Express_Connector = req.body.PCI_Express_Connector;
        product.Details.SATA_Power_Connector = req.body.SATA_Power_Connector;
        product.Details.SLI = req.body.SLI;
        product.Details.Haswell_Support = req.body.Haswell_Support;
        product.Details.CrossFire = req.body.CrossFire;
        product.Details.Modular = req.body.Modular;
        product.Details.Energy_Efficent = req.body.Energy_Efficent;
        product.Details.Input_Voltage = req.body.Input_Voltage;
        product.Details.Input_Frequency_Range = req.body.Input_Frequency_Range;
        product.Details.Input_Current = req.body.Input_Current;
        product.Details.Output = req.body.Output;
        product.Details.Dimentions = req.body.Dimentions;
        product.Details.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Details.Weight = req.body.Weight;
 
        product.Features.Connectors = req.body.Connectors;
        product.Features.Features = req.body.Features;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add PSU

//restrict picture selection in front end gallery=6  

router.post('/psu',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationPSU, async (req, res)=> {
console.log(req.body);
    try{
        
        let product = new PSU();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;

   
        product.Details.Type = req.body.type;
        product.Details.Maximum_Power = req.body.Maximum_Power;
        product.Details.Fans = req.body.Fans;
        product.Details.PFC = req.body.PFC;
        product.Details.Main_Connectors = req.body.Main_Connectors;
        product.Details.Rails = req.body.Rails;
        product.Details.PCI_Express_Connector = req.body.PCI_Express_Connector;
        product.Details.SATA_Power_Connector = req.body.SATA_Power_Connector;
        product.Details.SLI = req.body.SLI;
        product.Details.Haswell_Support = req.body.Haswell_Support;
        product.Details.CrossFire = req.body.CrossFire;
        product.Details.Modular = req.body.Modular;
        product.Details.Energy_Efficent = req.body.Energy_Efficent;
        product.Details.Input_Voltage = req.body.Input_Voltage;
        product.Details.Input_Frequency_Range = req.body.Input_Frequency_Range;
        product.Details.Input_Current = req.body.Input_Current;
        product.Details.Output = req.body.Output;
        product.Details.Dimentions = req.body.Dimentions;
        product.Details.Max_PSU_Length = req.body.Max_PSU_Length;
        product.Details.Weight = req.body.Weight;
 
        product.Features.Connectors = req.body.Connectors;
        product.Features.Features = req.body.Features;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});










//****************************************************************************************** */


// vii-Fans API


/* GET Fans. */
router.get('/fans', async (req, res)=> {
  
    let products = await Fans.find();

    return res.send(products);

});



//get singel Fans

router.get('/fans/:id', async (req, res)=> {

    try{
        let product = await Fans.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete Fans


router.delete('/fans/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await Fans.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){


		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await Fans.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update Fans

router.put('/fans/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedFans , async (req, res)=> {
    
    let product = await Fans.findById(req.params.id);


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
        product.Model.Type = req.body.type;

        product.Block.Block_Compatability = req.body.Block_Compatability;
        product.Block.Block_Dim = req.body.Block_Dim;
        product.Block.Block_Material = req.body.Block_Material;

        product.Radiator.Radiator_Dim = req.body.Radiator_Dim;
        product.Radiator.Radiator_Material = req.body.Radiator_Material;

        product.Fan.Fan_Size = req.body.Fan_Size;
        product.Fan.Fan_Dim = req.body.Fan_Dim;
        product.Fan.Bearing_Type = req.body.Bearing_Type;
        product.Fan.Fan_RPM = req.body.Fan_RPM;
        product.Fan.Fan_Air_Flow = req.body.Fan_Air_Flow;
        product.Fan.Fan_Noise = req.body.Fan_Noise;
        product.Fan.Fan_Connector = req.body.Fan_Connector;
        product.Fan.color = req.body.color;

        product.Tube.Tube_Dim = req.body.Tube_Dim;
        product.Tube.Tube_Material = req.body.Tube_Material;

        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
        product.Model.Type = req.body.type;

        product.Block.Block_Compatability = req.body.Block_Compatability;
        product.Block.Block_Dim = req.body.Block_Dim;
        product.Block.Block_Material = req.body.Block_Material;

        product.Radiator.Radiator_Dim = req.body.Radiator_Dim;
        product.Radiator.Radiator_Material = req.body.Radiator_Material;

        product.Fan.Fan_Size = req.body.Fan_Size;
        product.Fan.Fan_Dim = req.body.Fan_Dim;
        product.Fan.Bearing_Type = req.body.Bearing_Type;
        product.Fan.Fan_RPM = req.body.Fan_RPM;
        product.Fan.Fan_Air_Flow = req.body.Fan_Air_Flow;
        product.Fan.Fan_Noise = req.body.Fan_Noise;
        product.Fan.Fan_Connector = req.body.Fan_Connector;
        product.Fan.color = req.body.color;

        product.Tube.Tube_Dim = req.body.Tube_Dim;
        product.Tube.Tube_Material = req.body.Tube_Material;

        product.Features = req.body.Features;
        
        product.Power_Consumption = req.body.Power_Consumption;
            
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
        product.Model.Type = req.body.type;

        product.Block.Block_Compatability = req.body.Block_Compatability;
        product.Block.Block_Dim = req.body.Block_Dim;
        product.Block.Block_Material = req.body.Block_Material;

        product.Radiator.Radiator_Dim = req.body.Radiator_Dim;
        product.Radiator.Radiator_Material = req.body.Radiator_Material;

        product.Fan.Fan_Size = req.body.Fan_Size;
        product.Fan.Fan_Dim = req.body.Fan_Dim;
        product.Fan.Bearing_Type = req.body.Bearing_Type;
        product.Fan.Fan_RPM = req.body.Fan_RPM;
        product.Fan.Fan_Air_Flow = req.body.Fan_Air_Flow;
        product.Fan.Fan_Noise = req.body.Fan_Noise;
        product.Fan.Fan_Connector = req.body.Fan_Connector;
        product.Fan.color = req.body.color;

        product.Tube.Tube_Dim = req.body.Tube_Dim;
        product.Tube.Tube_Material = req.body.Tube_Material;

        product.Features = req.body.Features;
        
        product.Power_Consumption = req.body.Power_Consumption;
        
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
        product.Model.Type = req.body.type;

        product.Block.Block_Compatability = req.body.Block_Compatability;
        product.Block.Block_Dim = req.body.Block_Dim;
        product.Block.Block_Material = req.body.Block_Material;

        product.Radiator.Radiator_Dim = req.body.Radiator_Dim;
        product.Radiator.Radiator_Material = req.body.Radiator_Material;

        product.Fan.Fan_Size = req.body.Fan_Size;
        product.Fan.Fan_Dim = req.body.Fan_Dim;
        product.Fan.Bearing_Type = req.body.Bearing_Type;
        product.Fan.Fan_RPM = req.body.Fan_RPM;
        product.Fan.Fan_Air_Flow = req.body.Fan_Air_Flow;
        product.Fan.Fan_Noise = req.body.Fan_Noise;
        product.Fan.Fan_Connector = req.body.Fan_Connector;
        product.Fan.color = req.body.color;

        product.Tube.Tube_Dim = req.body.Tube_Dim;
        product.Tube.Tube_Material = req.body.Tube_Material;

        product.Features = req.body.Features;
        
        product.Power_Consumption = req.body.Power_Consumption;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add Fans

//restrict picture selection in front end gallery=6  

router.post('/fans',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationFans, async (req, res)=> {

    try{
        
        let product = new Fans();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;
        product.Model.Type = req.body.type;

        product.Block.Block_Compatability = req.body.Block_Compatability;
        product.Block.Block_Dim = req.body.Block_Dim;
        product.Block.Block_Material = req.body.Block_Material;

        product.Radiator.Radiator_Dim = req.body.Radiator_Dim;
        product.Radiator.Radiator_Material = req.body.Radiator_Material;

        product.Fan.Fan_Size = req.body.Fan_Size;
        product.Fan.Fan_Dim = req.body.Fan_Dim;
        product.Fan.Bearing_Type = req.body.Bearing_Type;
        product.Fan.Fan_RPM = req.body.Fan_RPM;
        product.Fan.Fan_Air_Flow = req.body.Fan_Air_Flow;
        product.Fan.Fan_Noise = req.body.Fan_Noise;
        product.Fan.Fan_Connector = req.body.Fan_Connector;
        product.Fan.color = req.body.color;

        product.Tube.Tube_Dim = req.body.Tube_Dim;
        product.Tube.Tube_Material = req.body.Tube_Material;

        product.Features = req.body.Features;
        product.Power_Consumption = req.body.Power_Consumption;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});






















//****************************************************************************************** */


// viii-SoundCard API


/* GET SoundCard. */
router.get('/soundcard', async (req, res)=> {
  
    let products = await SoundCard.find();

    return res.send(products);

});



//get singel SoundCard

router.get('/soundcard/:id', async (req, res)=> {

    try{
        let product = await SoundCard.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete SoundCard


router.delete('/soundcard/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await SoundCard.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await SoundCard.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update SoundCard

router.put('/soundcard/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedSoundCard , async (req, res)=> {
    
    let product = await SoundCard.findById(req.params.id);


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
        product.Model.part = req.body.part;

        product.Audio_Core.Audio_Chipset = req.body.Audio_Chipset;
        product.Audio_Core.Sample_Rate = req.body.Sample_Rate;
        product.Audio_Core.Digital_Audio = req.body.Digital_Audio;
        product.Audio_Core.SNR = req.body.SNR;
        product.Audio_Core.Encode = req.body.Encode;

        product.Ports.Line_In = req.body.Line_In;
        product.Ports.Line_Out = req.body.Line_Out;
        product.Ports.SPDIF_Out = req.body.SPDIF_Out;
        product.Ports.Other_Ports = req.body.Other_Ports;

        product.Details.Interface = req.body.Interface;
        product.Details.Operating_System_Supported = req.body.Operating_System_Supported;
        product.Details.System_Requirments = req.body.System_Requirments;

        product.Package_Contents = req.body.Package_Contents;
        product.Details.Dimentions = req.body.Dimentions;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
            product.Model.part = req.body.part;
    
            product.Audio_Core.Audio_Chipset = req.body.Audio_Chipset;
            product.Audio_Core.Sample_Rate = req.body.Sample_Rate;
            product.Audio_Core.Digital_Audio = req.body.Digital_Audio;
            product.Audio_Core.SNR = req.body.SNR;
            product.Audio_Core.Encode = req.body.Encode;
    
            product.Ports.Line_In = req.body.Line_In;
            product.Ports.Line_Out = req.body.Line_Out;
            product.Ports.SPDIF_Out = req.body.SPDIF_Out;
            product.Ports.Other_Ports = req.body.Other_Ports;
    
            product.Details.Interface = req.body.Interface;
            product.Details.Operating_System_Supported = req.body.Operating_System_Supported;
            product.Details.System_Requirments = req.body.System_Requirments;
    
            product.Package_Contents = req.body.Package_Contents;
            product.Details.Dimentions = req.body.Dimentions;
            
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
            product.Model.part = req.body.part;
    
            product.Audio_Core.Audio_Chipset = req.body.Audio_Chipset;
            product.Audio_Core.Sample_Rate = req.body.Sample_Rate;
            product.Audio_Core.Digital_Audio = req.body.Digital_Audio;
            product.Audio_Core.SNR = req.body.SNR;
            product.Audio_Core.Encode = req.body.Encode;
    
            product.Ports.Line_In = req.body.Line_In;
            product.Ports.Line_Out = req.body.Line_Out;
            product.Ports.SPDIF_Out = req.body.SPDIF_Out;
            product.Ports.Other_Ports = req.body.Other_Ports;
    
            product.Details.Interface = req.body.Interface;
            product.Details.Operating_System_Supported = req.body.Operating_System_Supported;
            product.Details.System_Requirments = req.body.System_Requirments;
    
            product.Package_Contents = req.body.Package_Contents;
            product.Details.Dimentions = req.body.Dimentions;
        
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
        product.Model.part = req.body.part;

        product.Audio_Core.Audio_Chipset = req.body.Audio_Chipset;
        product.Audio_Core.Sample_Rate = req.body.Sample_Rate;
        product.Audio_Core.Digital_Audio = req.body.Digital_Audio;
        product.Audio_Core.SNR = req.body.SNR;
        product.Audio_Core.Encode = req.body.Encode;

        product.Ports.Line_In = req.body.Line_In;
        product.Ports.Line_Out = req.body.Line_Out;
        product.Ports.SPDIF_Out = req.body.SPDIF_Out;
        product.Ports.Other_Ports = req.body.Other_Ports;

        product.Details.Interface = req.body.Interface;
        product.Details.Operating_System_Supported = req.body.Operating_System_Supported;
        product.Details.System_Requirments = req.body.System_Requirments;

        product.Package_Contents = req.body.Package_Contents;
        product.Details.Dimentions = req.body.Dimentions;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add SoundCard

//restrict picture selection in front end gallery=6  

router.post('/soundcard',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationSoundCard, async (req, res)=> {

    try{
        
        let product = new SoundCard();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;
        product.Model.part = req.body.part;

        product.Audio_Core.Audio_Chipset = req.body.Audio_Chipset;
        product.Audio_Core.Sample_Rate = req.body.Sample_Rate;
        product.Audio_Core.Digital_Audio = req.body.Digital_Audio;
        product.Audio_Core.SNR = req.body.SNR;
        product.Audio_Core.Encode = req.body.Encode;

        product.Ports.Line_In = req.body.Line_In;
        product.Ports.Line_Out = req.body.Line_Out;
        product.Ports.SPDIF_Out = req.body.SPDIF_Out;
        product.Ports.Other_Ports = req.body.Other_Ports;

        product.Details.Interface = req.body.Interface;
        product.Details.Operating_System_Supported = req.body.Operating_System_Supported;
        product.Details.System_Requirments = req.body.System_Requirments;

        product.Package_Contents = req.body.Package_Contents;
        product.Details.Dimentions = req.body.Dimentions;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});


















//****************************************************************************************** */


// ix-HardDrive API


/* GET HardDrive. */
router.get('/harddrive', async (req, res)=> {
  
    let products = await HardDrive.find();

    return res.send(products);

});



//get singel HardDrive

router.get('/harddrive/:id', async (req, res)=> {

    try{
        let product = await HardDrive.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete HardDrive


router.delete('/harddrive/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await HardDrive.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await HardDrive.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update HardDrive

router.put('/harddrive/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedHardDrive , async (req, res)=> {
    
    let product = await HardDrive.findById(req.params.id);


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
        product.Model.packing = req.body.packing;
    
        product.Performance.Interface = req.body.Interface;
        product.Performance.Capacity = req.body.Capacity;
        product.Performance.RPM = req.body.RPM;
        product.Performance.Cache = req.body.Cache;
        product.Performance.Average_Latency = req.body.Average_Latency;
 
        product.Feature.Feature = req.body.Feature;
        product.Feature.Usage = req.body.Usage;
    
        product.Dimentions.FormFactor = req.body.FormFactor;
        product.Dimentions.Height = req.body.Height;
        product.Dimentions.Width = req.body.Width;
        product.Dimentions.Length = req.body.Length;
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
            product.Model.packing = req.body.packing;
        
            product.Performance.Interface = req.body.Interface;
            product.Performance.Capacity = req.body.Capacity;
            product.Performance.RPM = req.body.RPM;
            product.Performance.Cache = req.body.Cache;
            product.Performance.Average_Latency = req.body.Average_Latency;
     
            product.Feature.Feature = req.body.Feature;
            product.Feature.Usage = req.body.Usage;
        
            product.Dimentions.FormFactor = req.body.FormFactor;
            product.Dimentions.Height = req.body.Height;
            product.Dimentions.Width = req.body.Width;
            product.Dimentions.Length = req.body.Length;
            
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
            product.Model.packing = req.body.packing;
        
            product.Performance.Interface = req.body.Interface;
            product.Performance.Capacity = req.body.Capacity;
            product.Performance.RPM = req.body.RPM;
            product.Performance.Cache = req.body.Cache;
            product.Performance.Average_Latency = req.body.Average_Latency;
     
            product.Feature.Feature = req.body.Feature;
            product.Feature.Usage = req.body.Usage;
        
            product.Dimentions.FormFactor = req.body.FormFactor;
            product.Dimentions.Height = req.body.Height;
            product.Dimentions.Width = req.body.Width;
            product.Dimentions.Length = req.body.Length;
        
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
        product.Model.packing = req.body.packing;
    
        product.Performance.Interface = req.body.Interface;
        product.Performance.Capacity = req.body.Capacity;
        product.Performance.RPM = req.body.RPM;
        product.Performance.Cache = req.body.Cache;
        product.Performance.Average_Latency = req.body.Average_Latency;
 
        product.Feature.Feature = req.body.Feature;
        product.Feature.Usage = req.body.Usage;
    
        product.Dimentions.FormFactor = req.body.FormFactor;
        product.Dimentions.Height = req.body.Height;
        product.Dimentions.Width = req.body.Width;
        product.Dimentions.Length = req.body.Length;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add HardDrive

//restrict picture selection in front end gallery=6  

router.post('/harddrive',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationHardDrive, async (req, res)=> {

    try{
        
        let product = new HardDrive();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;
        product.Model.packing = req.body.packing;
    
        product.Performance.Interface = req.body.Interface;
        product.Performance.Capacity = req.body.Capacity;
        product.Performance.RPM = req.body.RPM;
        product.Performance.Cache = req.body.Cache;
        product.Performance.Average_Latency = req.body.Average_Latency;
 
        product.Feature.Feature = req.body.Feature;
        product.Feature.Usage = req.body.Usage;
    
        product.Dimentions.FormFactor = req.body.FormFactor;
        product.Dimentions.Height = req.body.Height;
        product.Dimentions.Width = req.body.Width;
        product.Dimentions.Length = req.body.Length;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});















//****************************************************************************************** */


// x-SSD API


/* GET SSD. */
router.get('/ssd', async (req, res)=> {
  
    let products = await SSD.find();

    return res.send(products);

});



//get singel SSD

router.get('/ssd/:id', async (req, res)=> {

    try{
        let product = await SSD.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete SSD


router.delete('/ssd/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await SSD.findById(req.params.id);
    let dir = './client/public/uploads/pcParts/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await SSD.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update SSD

router.put('/ssd/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedSSD , async (req, res)=> {
    
    let product = await SSD.findById(req.params.id);


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
        product.Model.Device_Type = req.body.Device_Type;
        product.Model.UsedFor = req.body.UsedFor;
    
        product.Details.Interface = req.body.Interface;
        product.Details.Capacity = req.body.Capacity;
        product.Details.Memory_Components = req.body.Memory_Components;
        product.Details.FormFactor = req.body.FormFactor;
  
        product.Performance.Max_Sequential_Read = req.body.Max_Sequential_Read;
        product.Performance.Max_Sequential_Write = req.body.Max_Sequential_Write;
        product.Performance.MTTF = req.body.MTTF;
        product.Performance.Cache = req.body.Cache;

        product.Feature = req.body.Feature;

        product.Environmental.Operating_Temperature = req.body.Operating_Temperature;
 
        
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        product.image.gallery=[];
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
            product.Model.Device_Type = req.body.Device_Type;
            product.Model.UsedFor = req.body.UsedFor;
        
            product.Details.Interface = req.body.Interface;
            product.Details.Capacity = req.body.Capacity;
            product.Details.Memory_Components = req.body.Memory_Components;
            product.Details.FormFactor = req.body.FormFactor;
      
            product.Performance.Max_Sequential_Read = req.body.Max_Sequential_Read;
            product.Performance.Max_Sequential_Write = req.body.Max_Sequential_Write;
            product.Performance.MTTF = req.body.MTTF;
            product.Performance.Cache = req.body.Cache;
    
            product.Feature = req.body.Feature;
    
            product.Environmental.Operating_Temperature = req.body.Operating_Temperature;
     
            
            
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
            product.Model.Device_Type = req.body.Device_Type;
            product.Model.UsedFor = req.body.UsedFor;
        
            product.Details.Interface = req.body.Interface;
            product.Details.Capacity = req.body.Capacity;
            product.Details.Memory_Components = req.body.Memory_Components;
            product.Details.FormFactor = req.body.FormFactor;
      
            product.Performance.Max_Sequential_Read = req.body.Max_Sequential_Read;
            product.Performance.Max_Sequential_Write = req.body.Max_Sequential_Write;
            product.Performance.MTTF = req.body.MTTF;
            product.Performance.Cache = req.body.Cache;
    
            product.Feature = req.body.Feature;
    
            product.Environmental.Operating_Temperature = req.body.Operating_Temperature;
     
            
        
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
        product.Model.Device_Type = req.body.Device_Type;
        product.Model.UsedFor = req.body.UsedFor;
    
        product.Details.Interface = req.body.Interface;
        product.Details.Capacity = req.body.Capacity;
        product.Details.Memory_Components = req.body.Memory_Components;
        product.Details.FormFactor = req.body.FormFactor;
  
        product.Performance.Max_Sequential_Read = req.body.Max_Sequential_Read;
        product.Performance.Max_Sequential_Write = req.body.Max_Sequential_Write;
        product.Performance.MTTF = req.body.MTTF;
        product.Performance.Cache = req.body.Cache;

        product.Feature = req.body.Feature;

        product.Environmental.Operating_Temperature = req.body.Operating_Temperature;
 
        
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add SSD

//restrict picture selection in front end gallery=6  

router.post('/ssd',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationSSD, async (req, res)=> {

    try{
        
        let product = new SSD();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;
        product.Model.Device_Type = req.body.Device_Type;
        product.Model.UsedFor = req.body.UsedFor;
    
        product.Details.Interface = req.body.Interface;
        product.Details.Capacity = req.body.Capacity;
        product.Details.Memory_Components = req.body.Memory_Components;
        product.Details.FormFactor = req.body.FormFactor;
  
        product.Performance.Max_Sequential_Read = req.body.Max_Sequential_Read;
        product.Performance.Max_Sequential_Write = req.body.Max_Sequential_Write;
        product.Performance.MTTF = req.body.MTTF;
        product.Performance.Cache = req.body.Cache;

        product.Feature = req.body.Feature;

        product.Environmental.Operating_Temperature = req.body.Operating_Temperature;
 
        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
   }
   catch(err){
      
      return  res.status(400).send(err.message);

       
   }
        
});














module.exports = router;
