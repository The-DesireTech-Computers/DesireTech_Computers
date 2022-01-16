var express = require('express');
var router = express.Router();
let {PreBuiltDesktop} = require('../../model/prebuiltDesktopModel');
let {validation,validationUpdated} = require('../../middleWares/validation/validatePreBuiltDesktop');
let multer = require('multer');
let fs = require('fs');
let {auth} = require('../../middleWares/authentication/auth');
let adminAuth = require('../../middleWares/authentication/adminAuth');






let storage = multer.diskStorage( {
destination:(req,file,cb)=>{

    let dir = './client/public/uploads/preBuiltpc';

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













let upload = multer({storage:storage, fileFilter: fileFilter });



/* GET pre-built PCs. */
router.get('/', async (req, res)=> {
  
    let products = await PreBuiltDesktop.find();

    return res.send(products);

});



//get singel product

router.get('/:id', async (req, res)=> {

    try{
        let product = await PreBuiltDesktop.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete product


router.delete('/:id', auth,adminAuth, async (req, res)=> {


 
    let product1 = await PreBuiltDesktop.findById(req.params.id);

    let dir = './client/public/uploads/preBuiltpc/';
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}

    let product = await PreBuiltDesktop.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update product

router.put('/:id', upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdated , async (req, res)=> {
   
        let product = await PreBuiltDesktop.findById(req.params.id);
        if(!product){
            return res.status(400).send("Product not present for given ID")
        }

        console.log(req.files);

        if(req.files.thumbnail && req.files.gallery){
       
            product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
           


            product.Model.brand=req.body.brand;
            product.Model.series=req.body.series;
            product.Model.model=req.body.model;
 
            product.information.Type=req.body.type;
            product.information.formFactor=req.body.formFactor;
            product.information.usage=req.body.usage;
            product.information.processor=req.body.processor
            product.information.processorMainFeatures=req.body.processorMainFeatures;
            product.information.cachePerProcessor=req.body.cachePerProcessor;
            product.information.memory=req.body.memory;
            product.information.storage=req.body.storage;
            product.information.graphics=req.body.graphics;
            product.information.powerSupply=req.body.powerSupply;
            product.information.case=req.body.case;
            product.information.coolingSystem=req.body.coolingsystem;
            product.information.operatingSystem=req.body.operatingSystem;
            product.information.windows=req.body.windows;
        
         
            product.MotherBoard.chipset=req.body.MotherBoard_Chipset;
            product.MotherBoard.MotherBoard_Name=req.body.MotherBoard_Name;
 
            product.CPU.CPU_Type=req.body.CPU_Type;
            product.CPU.CPU_Speed=req.body.CPU_Speed;
            product.CPU.L3_Cache_Per_CPU=req.body.L3_Cache_Per_CPU;
            product.CPU.CPU_MainFeatures=req.body.CPU_MainFeatures;
 
            product.Graphics.GPU_Type=req.body.GPU_Type;
            product.Graphics.VideoMemory=req.body.VideoMemory;
            product.Graphics.VR_Ready=req.body.VR_Ready;
 
 
            product.Memory.capacity=req.body.Memory_Capacity;
            product.Memory.speed=req.body.Memory_Speed;
            product.Memory.spec=req.body.Memory_Spec;
 
            product.Storage.SSD=req.body.SSD;
            product.Storage.HDD=req.body.HDD;
 
         
            product.Optical_Drive.Type=req.body.OpticalDrive_Type;
         
            product.Communication.LAN_Speed=req.body.LAN_Speed;
            product.Communication.WLAN=req.body.WLAN;
 
            product.Audio.WIFI_Generation=req.body.WIFI_Generation;
 
            product.FrontPanelPorts.Front_USB=req.body.FrontPanel_Front_USB;
            product.FrontPanelPorts.FrontAudioPorts=req.body.FrontPanel_FrontAudioPorts;
 
            product.BackPanelPorts.PS_2=req.body.BackPanel_PS_2;
            product.BackPanelPorts.videoPort=req.body.BackPanel_VideoPort;
            product.BackPanelPorts.Rear_USB=req.body.BackPanel_Rear_USB;
            product.BackPanelPorts.Rj45=req.body.BackPanel_Rj45;
            product.BackPanelPorts.RearAudioPorts=req.body.BackPanel_RearAudioPorts;
            product.BackPanelPorts.SP_DIF=req.body.BackPanel_SP_DIF;
            
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
               


           product.Model.brand=req.body.brand;
           product.Model.series=req.body.series;
           product.Model.model=req.body.model;

           product.information.Type=req.body.type;
           product.information.formFactor=req.body.formFactor;
           product.information.usage=req.body.usage;
           product.information.processor=req.body.processor
           product.information.processorMainFeatures=req.body.processorMainFeatures;
           product.information.cachePerProcessor=req.body.cachePerProcessor;
           product.information.memory=req.body.memory;
           product.information.storage=req.body.storage;
           product.information.graphics=req.body.graphics;
           product.information.powerSupply=req.body.powerSupply;
           product.information.case=req.body.case;
           product.information.coolingSystem=req.body.coolingsystem;
           product.information.operatingSystem=req.body.operatingSystem;
           product.information.windows=req.body.windows;
       
        
           product.MotherBoard.chipset=req.body.MotherBoard_Chipset;
           product.MotherBoard.MotherBoard_Name=req.body.MotherBoard_Name;

           product.CPU.CPU_Type=req.body.CPU_Type;
           product.CPU.CPU_Speed=req.body.CPU_Speed;
           product.CPU.L3_Cache_Per_CPU=req.body.L3_Cache_Per_CPU;
           product.CPU.CPU_MainFeatures=req.body.CPU_MainFeatures;

           product.Graphics.GPU_Type=req.body.GPU_Type;
           product.Graphics.VideoMemory=req.body.VideoMemory;
           product.Graphics.VR_Ready=req.body.VR_Ready;


           product.Memory.capacity=req.body.Memory_Capacity;
           product.Memory.speed=req.body.Memory_Speed;
           product.Memory.spec=req.body.Memory_Spec;

           product.Storage.SSD=req.body.SSD;
           product.Storage.HDD=req.body.HDD;

        
           product.Optical_Drive.Type=req.body.OpticalDrive_Type;
        
           product.Communication.LAN_Speed=req.body.LAN_Speed;
           product.Communication.WLAN=req.body.WLAN;

           product.Audio.WIFI_Generation=req.body.WIFI_Generation;

           product.FrontPanelPorts.Front_USB=req.body.FrontPanel_Front_USB;
           product.FrontPanelPorts.FrontAudioPorts=req.body.FrontPanel_FrontAudioPorts;

           product.BackPanelPorts.PS_2=req.body.BackPanel_PS_2;
           product.BackPanelPorts.videoPort=req.body.BackPanel_VideoPort;
           product.BackPanelPorts.Rear_USB=req.body.BackPanel_Rear_USB;
           product.BackPanelPorts.Rj45=req.body.BackPanel_Rj45;
           product.BackPanelPorts.RearAudioPorts=req.body.BackPanel_RearAudioPorts;
           product.BackPanelPorts.SP_DIF=req.body.BackPanel_SP_DIF;
                
                product.image.thumbnail = req.files.thumbnail[0].filename;
                 product.image.gallery =product.image.gallery;
                
            }
            else if(req.files.gallery){
                product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
           


            product.Model.brand=req.body.brand;
            product.Model.series=req.body.series;
            product.Model.model=req.body.model;
 
            product.information.Type=req.body.type;
            product.information.formFactor=req.body.formFactor;
            product.information.usage=req.body.usage;
            product.information.processor=req.body.processor
            product.information.processorMainFeatures=req.body.processorMainFeatures;
            product.information.cachePerProcessor=req.body.cachePerProcessor;
            product.information.memory=req.body.memory;
            product.information.storage=req.body.storage;
            product.information.graphics=req.body.graphics;
            product.information.powerSupply=req.body.powerSupply;
            product.information.case=req.body.case;
            product.information.coolingSystem=req.body.coolingsystem;
            product.information.operatingSystem=req.body.operatingSystem;
            product.information.windows=req.body.windows;
        
         
            product.MotherBoard.chipset=req.body.MotherBoard_Chipset;
            product.MotherBoard.MotherBoard_Name=req.body.MotherBoard_Name;
 
            product.CPU.CPU_Type=req.body.CPU_Type;
            product.CPU.CPU_Speed=req.body.CPU_Speed;
            product.CPU.L3_Cache_Per_CPU=req.body.L3_Cache_Per_CPU;
            product.CPU.CPU_MainFeatures=req.body.CPU_MainFeatures;
 
            product.Graphics.GPU_Type=req.body.GPU_Type;
            product.Graphics.VideoMemory=req.body.VideoMemory;
            product.Graphics.VR_Ready=req.body.VR_Ready;
 
 
            product.Memory.capacity=req.body.Memory_Capacity;
            product.Memory.speed=req.body.Memory_Speed;
            product.Memory.spec=req.body.Memory_Spec;
 
            product.Storage.SSD=req.body.SSD;
            product.Storage.HDD=req.body.HDD;
 
         
            product.Optical_Drive.Type=req.body.OpticalDrive_Type;
         
            product.Communication.LAN_Speed=req.body.LAN_Speed;
            product.Communication.WLAN=req.body.WLAN;
 
            product.Audio.WIFI_Generation=req.body.WIFI_Generation;
 
            product.FrontPanelPorts.Front_USB=req.body.FrontPanel_Front_USB;
            product.FrontPanelPorts.FrontAudioPorts=req.body.FrontPanel_FrontAudioPorts;
 
            product.BackPanelPorts.PS_2=req.body.BackPanel_PS_2;
            product.BackPanelPorts.videoPort=req.body.BackPanel_VideoPort;
            product.BackPanelPorts.Rear_USB=req.body.BackPanel_Rear_USB;
            product.BackPanelPorts.Rj45=req.body.BackPanel_Rj45;
            product.BackPanelPorts.RearAudioPorts=req.body.BackPanel_RearAudioPorts;
            product.BackPanelPorts.SP_DIF=req.body.BackPanel_SP_DIF;
            
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
           


            product.Model.brand=req.body.brand;
            product.Model.series=req.body.series;
            product.Model.model=req.body.model;
 
            product.information.Type=req.body.type;
            product.information.formFactor=req.body.formFactor;
            product.information.usage=req.body.usage;
            product.information.processor=req.body.processor
            product.information.processorMainFeatures=req.body.processorMainFeatures;
            product.information.cachePerProcessor=req.body.cachePerProcessor;
            product.information.memory=req.body.memory;
            product.information.storage=req.body.storage;
            product.information.graphics=req.body.graphics;
            product.information.powerSupply=req.body.powerSupply;
            product.information.case=req.body.case;
            product.information.coolingSystem=req.body.coolingsystem;
            product.information.operatingSystem=req.body.operatingSystem;
            product.information.windows=req.body.windows;
        
         
            product.MotherBoard.chipset=req.body.MotherBoard_Chipset;
            product.MotherBoard.MotherBoard_Name=req.body.MotherBoard_Name;
 
            product.CPU.CPU_Type=req.body.CPU_Type;
            product.CPU.CPU_Speed=req.body.CPU_Speed;
            product.CPU.L3_Cache_Per_CPU=req.body.L3_Cache_Per_CPU;
            product.CPU.CPU_MainFeatures=req.body.CPU_MainFeatures;
 
            product.Graphics.GPU_Type=req.body.GPU_Type;
            product.Graphics.VideoMemory=req.body.VideoMemory;
            product.Graphics.VR_Ready=req.body.VR_Ready;
 
 
            product.Memory.capacity=req.body.Memory_Capacity;
            product.Memory.speed=req.body.Memory_Speed;
            product.Memory.spec=req.body.Memory_Spec;
 
            product.Storage.SSD=req.body.SSD;
            product.Storage.HDD=req.body.HDD;
 
         
            product.Optical_Drive.Type=req.body.OpticalDrive_Type;
         
            product.Communication.LAN_Speed=req.body.LAN_Speed;
            product.Communication.WLAN=req.body.WLAN;
 
            product.Audio.WIFI_Generation=req.body.WIFI_Generation;
 
            product.FrontPanelPorts.Front_USB=req.body.FrontPanel_Front_USB;
            product.FrontPanelPorts.FrontAudioPorts=req.body.FrontPanel_FrontAudioPorts;
 
            product.BackPanelPorts.PS_2=req.body.BackPanel_PS_2;
            product.BackPanelPorts.videoPort=req.body.BackPanel_VideoPort;
            product.BackPanelPorts.Rear_USB=req.body.BackPanel_Rear_USB;
            product.BackPanelPorts.Rj45=req.body.BackPanel_Rj45;
            product.BackPanelPorts.RearAudioPorts=req.body.BackPanel_RearAudioPorts;
            product.BackPanelPorts.SP_DIF=req.body.BackPanel_SP_DIF;
            
            product.image.thumbnail = product.image.thumbnail;
            product.image.gallery= product.image.gallery;

            console.log('both not present');
            
        }
        

        


        await product.save();
        console.log(product);
        return res.send(product);
    
    
});



// Add item 

//restrict picture selection in front end gallery=6  

router.post('/',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validation , async (req, res)=> {

    console.log(req.body);


        let product = new PreBuiltDesktop();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

           product.Model.brand=req.body.brand;
           product.Model.series=req.body.series;
           product.Model.model=req.body.model;
     console.log(req.body.type);
           

           product.information.Type=req.body.type;
           product.information.formFactor=req.body.formFactor;
           product.information.usage=req.body.usage;
           product.information.processor=req.body.processor
           product.information.processorMainFeatures=req.body.processorMainFeatures;
           product.information.cachePerProcessor=req.body.cachePerProcessor;
           product.information.memory=req.body.memory;
           product.information.storage=req.body.storage;
           product.information.graphics=req.body.graphics;
           product.information.powerSupply=req.body.powerSupply;
           product.information.case=req.body.case;
           product.information.coolingSystem=req.body.coolingsystem;
           product.information.operatingSystem=req.body.operatingSystem;
           product.information.windows=req.body.windows;
       
        
           product.MotherBoard.chipset=req.body.MotherBoard_Chipset;
           product.MotherBoard.motherBoardName=req.body.MotherBoard_Name;

           product.CPU.CPU_Type=req.body.CPU_Type;
           product.CPU.CPU_Speed=req.body.CPU_Speed;
           product.CPU.L3_Cache_Per_CPU=req.body.L3_Cache_Per_CPU;
           product.CPU.CPU_MainFeatures=req.body.CPU_MainFeatures;

           product.Graphics.GPU_Type=req.body.GPU_Type;
           product.Graphics.VideoMemory=req.body.VideoMemory;
           product.Graphics.VR_Ready=req.body.VR_Ready;


           product.Memory.capacity=req.body.Memory_Capacity;
           product.Memory.speed=req.body.Memory_Speed;
           product.Memory.spec=req.body.Memory_Spec;

           product.Storage.SSD=req.body.SSD;
           product.Storage.HDD=req.body.HDD;

        
           product.Optical_Drive.Type=req.body.OpticalDrive_Type;
        
           product.Communication.LAN_Speed=req.body.LAN_Speed;
           product.Communication.WLAN=req.body.WLAN;

           product.Audio.WIFI_Generation=req.body.WIFI_Generation;

           product.FrontPanelPorts.Front_USB=req.body.FrontPanel_Front_USB;
           product.FrontPanelPorts.FrontAudioPorts=req.body.FrontPanel_FrontAudioPorts;

           product.BackPanelPorts.PS_2=req.body.BackPanel_PS_2;
           product.BackPanelPorts.videoPort=req.body.BackPanel_VideoPort;
           product.BackPanelPorts.Rear_USB=req.body.BackPanel_Rear_USB;
           product.BackPanelPorts.Rj45=req.body.BackPanel_Rj45;
           product.BackPanelPorts.RearAudioPorts=req.body.BackPanel_RearAudioPorts;
           product.BackPanelPorts.SP_DIF=req.body.BackPanel_SP_DIF;
       


        
        product.image.thumbnail = req.files.thumbnail[0].filename;
        for (let index in req.files.gallery){
            product.image.gallery[index] = req.files.gallery[index].filename;
        }


        await product.save();
        return res.send(product);
        
});


//update quantity

router.put('/quantity/:id', async (req,res)=>{
    console.log(req.body);
    let product = await PreBuiltDesktop.findById(req.params.id);
    if(!product){
        res.status(404).send("product not found on this ID")
    }
    
    console.log(product.quantity);

   product.quantity = req.body.quantity;

    await product.save();
    res.send(product);
})
    


module.exports = router;
