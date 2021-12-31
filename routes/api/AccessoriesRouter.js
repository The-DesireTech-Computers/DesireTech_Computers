var express = require('express');
var router = express.Router();
let {headset, validationHeadset} = require('../../model/accessories/headset');
let {keyboard} = require('../../model/accessories/keyboardModel');
let {microphone} = require('../../model/accessories/microphoneModel');
let {monitor} = require('../../model/accessories/monitorModel');
let {CaseFan} = require('../../model/accessories/caseFanModel');
let {mouse} = require('../../model/accessories/mouseModel');
let {speaker} = require('../../model/accessories/speakerModel');
let {webcam} = require('../../model/accessories/webcamModel');

let {validationCaseFan,validationUpdatedCaseFan} = require('../../middleWares/validation/accessories/validateCaseFan');
let {validationHeadSet,validationUpdatedHeadSet} = require('../../middleWares/validation/accessories/validateHeadSet');
let {validationKeyboard,validationUpdatedKeyboard} = require('../../middleWares/validation/accessories/validateKeyBoard');
let {validationMicrophone,validationUpdatedMicrophone} = require('../../middleWares/validation/accessories/validateMicrophone');
let {validationMonitor,validationUpdatedMonitor} = require('../../middleWares/validation/accessories/validateMonitor');
let {validationMouse,validationUpdatedMouse} = require('../../middleWares/validation/accessories/validateMouse');
let {validationSpeaker,validationUpdatedSpeaker} = require('../../middleWares/validation/accessories/validateSpeaker');
let {validationWebcam,validationUpdatedWebcam} = require('../../middleWares/validation/accessories/validateWebcam');

let multer = require('multer');
let fs = require('fs');
let {auth} = require('../../middleWares/authentication/auth');
let adminAuth = require('../../middleWares/authentication/adminAuth');







let storage = multer.diskStorage( {
destination:(req,file,cb)=>{

    let dir =  './client/public/uploads/accessories'

    
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



// i- casefan API



/* GET casefan. */
router.get('/casefan', async (req, res)=> {
  
    let products = await CaseFan.find();

    return res.send(products);

});



//get singel casefan

router.get('/casefan/:id', async (req, res)=> {

    try{
        let product = await CaseFan.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete casefan


router.delete('/casefan/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await CaseFan.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){
		fs.unlinkSync(dir + product1.image.thumbnail);
		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}
    let product = await CaseFan.findByIdAndDelete(req.params.id);
    return res.send(product);
});


//update casefan

router.put('/casefan/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedCaseFan , async (req, res)=> {
    
    let product = await CaseFan.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
        product.title = req.body.title;
        product.price=req.body.title;
        product.quantity=req.body.title;
       
    
     
              product.Model.brand = req.body.brand;
            product.Model.series = req.body.series;
                product.Model.model = req.body.model;
    
       
                product.Details.Type =   req.body.type;
                product.Details.Compatability = req.body.Compatability;
                product.Details.Size =  req.body.Size;
                product.Details.BearingType =   req.body.BearingType;
                product.Details.RPM =  req.body.RPM;
                product.Details.AirFlow = req.body.AirFlow;
                product.Details.NoiseLvel =  req.body.NoiseLvel;
                product.Details.PowerConnector =  req.body.PowerConnector;
                product.Details.Color =  req.body.Color;
                product.Details.LED = req.body.LED;
         
                product.features.feature = req.body.feature;
              
                product.Dimentions.Dimention = req.body.Dimention;
        
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
            product.price=req.body.title;
            product.quantity=req.body.title;
           
        
         
                  product.Model.brand = req.body.brand;
                product.Model.series = req.body.series;
                    product.Model.model = req.body.model;
        
           
                    product.Details.Type =   req.body.type;
                    product.Details.Compatability = req.body.Compatability;
                    product.Details.Size =  req.body.Size;
                    product.Details.BearingType =   req.body.BearingType;
                    product.Details.RPM =  req.body.RPM;
                    product.Details.AirFlow = req.body.AirFlow;
                    product.Details.NoiseLvel =  req.body.NoiseLvel;
                    product.Details.PowerConnector =  req.body.PowerConnector;
                    product.Details.Color =  req.body.Color;
                    product.Details.LED = req.body.LED;
             
                    product.features.feature = req.body.feature;
                  
                    product.Dimentions.Dimention = req.body.Dimention;
            
            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
            product.title = req.body.title;
        product.price=req.body.title;
        product.quantity=req.body.title;
       
    
     
              product.Model.brand = req.body.brand;
            product.Model.series = req.body.series;
                product.Model.model = req.body.model;
    
       
                product.Details.Type =   req.body.type;
                product.Details.Compatability = req.body.Compatability;
                product.Details.Size =  req.body.Size;
                product.Details.BearingType =   req.body.BearingType;
                product.Details.RPM =  req.body.RPM;
                product.Details.AirFlow = req.body.AirFlow;
                product.Details.NoiseLvel =  req.body.NoiseLvel;
                product.Details.PowerConnector =  req.body.PowerConnector;
                product.Details.Color =  req.body.Color;
                product.Details.LED = req.body.LED;
         
                product.features.feature = req.body.feature;
              
                product.Dimentions.Dimention = req.body.Dimention;
        
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
        product.price=req.body.title;
        product.quantity=req.body.title;
       
    
     
              product.Model.brand = req.body.brand;
            product.Model.series = req.body.series;
                product.Model.model = req.body.model;
    
       
                product.Details.Type =   req.body.type;
                product.Details.Compatability = req.body.Compatability;
                product.Details.Size =  req.body.Size;
                product.Details.BearingType =   req.body.BearingType;
                product.Details.RPM =  req.body.RPM;
                product.Details.AirFlow = req.body.AirFlow;
                product.Details.NoiseLvel =  req.body.NoiseLvel;
                product.Details.PowerConnector =  req.body.PowerConnector;
                product.Details.Color =  req.body.Color;
                product.Details.LED = req.body.LED;
         
                product.features.feature = req.body.feature;
              
                product.Dimentions.Dimention = req.body.Dimention;
        
        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add casefan

//restrict picture selection in front end gallery=6  

router.post('/casefan',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationCaseFan , async (req, res)=> {
console.log(req.body);
    try{
        
        let product = new CaseFan();

        product.title = req.body.title;
        product.price=req.body.title;
        product.quantity=req.body.title;
       
    
     
              product.Model.brand = req.body.brand;
            product.Model.series = req.body.series;
                product.Model.model = req.body.model;
    
       
                product.Details.Type =   req.body.type;
                product.Details.Compatability = req.body.Compatability;
                product.Details.Size =  req.body.Size;
                product.Details.BearingType =   req.body.BearingType;
                product.Details.RPM =  req.body.RPM;
                product.Details.AirFlow = req.body.AirFlow;
                product.Details.NoiseLvel =  req.body.NoiseLvel;
                product.Details.PowerConnector =  req.body.PowerConnector;
                product.Details.Color =  req.body.Color;
                product.Details.LED = req.body.LED;
         
                product.features.feature = req.body.feature;
              
                product.Dimentions.Dimention = req.body.Dimention;
 
        
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


// ii-headset


/* GET headset. */
router.get('/headset', async (req, res)=> {
  
    let products = await headset.find();

    return res.send(products);

});



//get singel headset

router.get('/headset/:id', async (req, res)=> {

    try{
        let product = await headset.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete headset


router.delete('/headset/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await headset.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await headset.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update headset

router.put('/headset/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedHeadSet , async (req, res)=> {
    
    let product = await headset.findById(req.params.id);


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

       product.Details.compatability = req.body.compatability;
       product.Details.LED = req.body.LED;
       product.Details.weight = req.body.weight;
      
      
       product.connectivity.connectiontype = req.body.connectiontype;
       product.connectivity.connector = req.body.connector;
       product.connectivity.cordLength = req.body.cordLength;
      
       product.features.feature = req.body.feature;
   
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
    
           product.Details.compatability = req.body.compatability;
           product.Details.LED = req.body.LED;
           product.Details.weight = req.body.weight;
          
          
           product.connectivity.connectiontype = req.body.connectiontype;
           product.connectivity.connector = req.body.connector;
           product.connectivity.cordLength = req.body.cordLength;
          
           product.features.feature = req.body.feature;

            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
                product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.model = req.body.model;

       product.Details.compatability = req.body.compatability;
       product.Details.LED = req.body.LED;
       product.Details.weight = req.body.weight;
      
      
       product.connectivity.connectiontype = req.body.connectiontype;
       product.connectivity.connector = req.body.connector;
       product.connectivity.cordLength = req.body.cordLength;
      
       product.features.feature = req.body.feature;

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

       product.Details.compatability = req.body.compatability;
       product.Details.LED = req.body.LED;
       product.Details.weight = req.body.weight;
      
      
       product.connectivity.connectiontype = req.body.connectiontype;
       product.connectivity.connector = req.body.connector;
       product.connectivity.cordLength = req.body.cordLength;
      
       product.features.feature = req.body.feature;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add headset

//restrict picture selection in front end gallery=6  

router.post('/headset',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationHeadSet, async (req, res)=> {

    try{
        
        let product = new headset();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.model = req.body.model;

       product.Details.compatability = req.body.compatability;
       product.Details.LED = req.body.LED;
       product.Details.weight = req.body.weight;
      
      
       product.connectivity.connectiontype = req.body.connectiontype;
       product.connectivity.connector = req.body.connector;
       product.connectivity.cordLength = req.body.cordLength;
      
       product.features.feature = req.body.feature;
        
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


// iii-keyboard API


/* GET keyboard. */
router.get('/keyboard', async (req, res)=> {
  
    let products = await keyboard.find();

    return res.send(products);

});



//get singel keyboard

router.get('/keyboard/:id', async (req, res)=> {

    try{
        let product = await keyboard.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete keyboard


router.delete('/keyboard/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await keyboard.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await keyboard.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update keyboard

router.put('/keyboard/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedKeyboard , async (req, res)=> {
    
    let product = await keyboard.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.keyboardInterface = req.body.keyboardInterface;
        product.Details.designStyle = req.body.designStyle;
        product.Details.palmRest = req.body.palmRest;
        product.Details.mechanicalKeyboard = req.body.mechanicalKeyboard;
        product.Details.keyswitchtype = req.body.keyswitchtype;
        product.Details.keyboardcolor = req.body.keyboardcolor;
        product.Details.dimension = req.body.dimension;
        product.Details.backlit = req.body.backlit;
        product.Details.Type = req.body.type;
       
       
        product.features.feature = req.body.feature;

        
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
          product.Model.name = req.body.name;
          product.Model.model = req.body.model;
         
          product.Details.keyboardInterface = req.body.keyboardInterface;
          product.Details.designStyle = req.body.designStyle;
          product.Details.palmRest = req.body.palmRest;
          product.Details.mechanicalKeyboard = req.body.mechanicalKeyboard;
          product.Details.keyswitchtype = req.body.keyswitchtype;
          product.Details.keyboardcolor = req.body.keyboardcolor;
          product.Details.dimension = req.body.dimension;
          product.Details.backlit = req.body.backlit;
          product.Details.Type = req.body.type;
         
         
          product.features.feature = req.body.feature;

            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
          
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.keyboardInterface = req.body.keyboardInterface;
        product.Details.designStyle = req.body.designStyle;
        product.Details.palmRest = req.body.palmRest;
        product.Details.mechanicalKeyboard = req.body.mechanicalKeyboard;
        product.Details.keyswitchtype = req.body.keyswitchtype;
        product.Details.keyboardcolor = req.body.keyboardcolor;
        product.Details.dimension = req.body.dimension;
        product.Details.backlit = req.body.backlit;
        product.Details.Type = req.body.type;
       
       
        product.features.feature = req.body.feature;

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
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.keyboardInterface = req.body.keyboardInterface;
        product.Details.designStyle = req.body.designStyle;
        product.Details.palmRest = req.body.palmRest;
        product.Details.mechanicalKeyboard = req.body.mechanicalKeyboard;
        product.Details.keyswitchtype = req.body.keyswitchtype;
        product.Details.keyboardcolor = req.body.keyboardcolor;
        product.Details.dimension = req.body.dimension;
        product.Details.backlit = req.body.backlit;
        product.Details.Type = req.body.type;
       
       
        product.features.feature = req.body.feature;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add keyboard

//restrict picture selection in front end gallery=6  

router.post('/keyboard',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationKeyboard , async (req, res)=> {

    try{
        
        let product = new keyboard();

       
        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.keyboardInterface = req.body.keyboardInterface;
        product.Details.designStyle = req.body.designStyle;
        product.Details.palmRest = req.body.palmRest;
        product.Details.mechanicalKeyboard = req.body.mechanicalKeyboard;
        product.Details.keyswitchtype = req.body.keyswitchtype;
        product.Details.keyboardcolor = req.body.keyboardcolor;
        product.Details.dimension = req.body.dimension;
        product.Details.backlit = req.body.backlit;
        product.Details.Type = req.body.type;
       
       
        product.features.feature = req.body.feature;
        
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


// iv-microphone API


/* GET microphone. */
router.get('/microphone', async (req, res)=> {
  
    let products = await microphone.find();

    return res.send(products);

});



//get singel microphone

router.get('/microphone/:id', async (req, res)=> {

    try{
        let product = await microphone.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete microphone


router.delete('/microphone/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await microphone.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await microphone.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update microphone

router.put('/microphone/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedMicrophone, async (req, res)=> {
    
    let product = await microphone.findById(req.params.id);


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
        product.Details.specification = req.body.specification;

        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;

   
        
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
            product.Details.specification = req.body.specification;
    
            product.Dimension.dimension = req.body.dimension;
            product.Dimension.weight = req.body.weight;

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
        product.Details.specification = req.body.specification;

        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;


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
        product.Details.specification = req.body.specification;

        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add microphone

//restrict picture selection in front end gallery=6  

router.post('/microphone',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationMicrophone , async (req, res)=> {

    try{
        
        let product = new microphone();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;

   
        product.Details.Type = req.body.type;
        product.Details.specification = req.body.specification;

        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;
        
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


// v-monitor API


/* GET monitor. */
router.get('/monitor', async (req, res)=> {
  
    let products = await monitor.find();

    return res.send(products);

});



//get singel monitor

router.get('/monitor/:id', async (req, res)=> {

    try{
        let product = await monitor.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete monitor


router.delete('/monitor/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await monitor.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await monitor.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update monitor

router.put('/monitor/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedMonitor, async (req, res)=> {
    
    let product = await monitor.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.cabinetcolor = req.body.cabinetcolor;
        product.Model.model = req.body.model;
        
        
        product.Details.glarescreen = req.body.glarescreen;
        product.Details.displaytype = req.body.displaytype;
        product.Details.adaptivesychronisetech = req.body.adaptivesychronisetech;
        product.Details.pixelpitch = req.body.pixelpitch;
        product.Details.refreshRatio = req.body.refreshRatio;
        
        
        product.connectivity.connector = req.body.connector;
        product.connectivity.inputvideocapability = req.body.inputvideocapability;
      
        product.power.powersupply = req.body.powersupply;
        product.power.powerconsumption = req.body.powerconsumption;

        
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
            product.Model.cabinetcolor = req.body.cabinetcolor;
            product.Model.model = req.body.model;
            
            
            product.Details.glarescreen = req.body.glarescreen;
            product.Details.displaytype = req.body.displaytype;
            product.Details.adaptivesychronisetech = req.body.adaptivesychronisetech;
            product.Details.pixelpitch = req.body.pixelpitch;
            product.Details.refreshRatio = req.body.refreshRatio;
            
            
            product.connectivity.connector = req.body.connector;
            product.connectivity.inputvideocapability = req.body.inputvideocapability;
          
            product.power.powersupply = req.body.powersupply;
            product.power.powerconsumption = req.body.powerconsumption;

            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
            product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
    
            
               product.Model.brand = req.body.brand;
        product.Model.cabinetcolor = req.body.cabinetcolor;
        product.Model.model = req.body.model;
        
        
        product.Details.glarescreen = req.body.glarescreen;
        product.Details.displaytype = req.body.displaytype;
        product.Details.adaptivesychronisetech = req.body.adaptivesychronisetech;
        product.Details.pixelpitch = req.body.pixelpitch;
        product.Details.refreshRatio = req.body.refreshRatio;
        
        
        product.connectivity.connector = req.body.connector;
        product.connectivity.inputvideocapability = req.body.inputvideocapability;
      
        product.power.powersupply = req.body.powersupply;
        product.power.powerconsumption = req.body.powerconsumption;

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
        product.Model.cabinetcolor = req.body.cabinetcolor;
        product.Model.model = req.body.model;
        
        
        product.Details.glarescreen = req.body.glarescreen;
        product.Details.displaytype = req.body.displaytype;
        product.Details.adaptivesychronisetech = req.body.adaptivesychronisetech;
        product.Details.pixelpitch = req.body.pixelpitch;
        product.Details.refreshRatio = req.body.refreshRatio;
        
        
        product.connectivity.connector = req.body.connector;
        product.connectivity.inputvideocapability = req.body.inputvideocapability;
      
        product.power.powersupply = req.body.powersupply;
        product.power.powerconsumption = req.body.powerconsumption;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add monitor

//restrict picture selection in front end gallery=6  

router.post('/monitor',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationMonitor , async (req, res)=> {

    try{
        
        let product = new monitor();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.cabinetcolor = req.body.cabinetcolor;
        product.Model.model = req.body.model;
        
        
        product.Details.glarescreen = req.body.glarescreen;
        product.Details.displaytype = req.body.displaytype;
        product.Details.adaptivesychronisetech = req.body.adaptivesychronisetech;
        product.Details.pixelpitch = req.body.pixelpitch;
        product.Details.refreshRatio = req.body.refreshRatio;
        
        
        product.connectivity.connector = req.body.connector;
        product.connectivity.inputvideocapability = req.body.inputvideocapability;
      
        product.power.powersupply = req.body.powersupply;
        product.power.powerconsumption = req.body.powerconsumption;
 
        
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


// vi-mouse API


/* GET mouse. */
router.get('/mouse', async (req, res)=> {
  
    let products = await mouse.find();

    return res.send(products);

});



//get singel mouse

router.get('/mouse/:id', async (req, res)=> {

    try{
        let product = await mouse.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete mouse


router.delete('/mouse/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await mouse.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await mouse.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update mouse

router.put('/mouse/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedMouse , async (req, res)=> {
    
    let product = await mouse.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

       
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
       
        product.Details.Type = req.body.type;
        product.Details.interface = req.body.interface;
        product.Details.trackingmethod = req.body.trackingmethod;
        product.Details.maximumdpi = req.body.maximumdpi;
        product.Details.button = req.body.button;
        product.Details.weightadjustment = req.body.weightadjustment;
        product.Details.scrollingcapablity = req.body.scrollingcapablity;
        product.Details.color = req.body.color;
       
        product.features.feature = req.body.feature;
        
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
            product.Model.name = req.body.name;
            product.Model.model = req.body.model;
           
           
            product.Details.Type = req.body.type;
            product.Details.interface = req.body.interface;
            product.Details.trackingmethod = req.body.trackingmethod;
            product.Details.maximumdpi = req.body.maximumdpi;
            product.Details.button = req.body.button;
            product.Details.weightadjustment = req.body.weightadjustment;
            product.Details.scrollingcapablity = req.body.scrollingcapablity;
            product.Details.color = req.body.color;
           
            product.features.feature = req.body.feature;

            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
            product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
    
            
              product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
       
        product.Details.Type = req.body.type;
        product.Details.interface = req.body.interface;
        product.Details.trackingmethod = req.body.trackingmethod;
        product.Details.maximumdpi = req.body.maximumdpi;
        product.Details.button = req.body.button;
        product.Details.weightadjustment = req.body.weightadjustment;
        product.Details.scrollingcapablity = req.body.scrollingcapablity;
        product.Details.color = req.body.color;
       
        product.features.feature = req.body.feature;

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
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
       
        product.Details.Type = req.body.type;
        product.Details.interface = req.body.interface;
        product.Details.trackingmethod = req.body.trackingmethod;
        product.Details.maximumdpi = req.body.maximumdpi;
        product.Details.button = req.body.button;
        product.Details.weightadjustment = req.body.weightadjustment;
        product.Details.scrollingcapablity = req.body.scrollingcapablity;
        product.Details.color = req.body.color;
       
        product.features.feature = req.body.feature;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add mouse

//restrict picture selection in front end gallery=6  

router.post('/mouse',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationMouse, async (req, res)=> {

    try{
        
        let product = new mouse();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
       
        product.Details.Type = req.body.type;
        product.Details.interface = req.body.interface;
        product.Details.trackingmethod = req.body.trackingmethod;
        product.Details.maximumdpi = req.body.maximumdpi;
        product.Details.button = req.body.button;
        product.Details.weightadjustment = req.body.weightadjustment;
        product.Details.scrollingcapablity = req.body.scrollingcapablity;
        product.Details.color = req.body.color;
       
        product.features.feature = req.body.feature;
        
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


// vii-speaker API


/* GET speaker. */
router.get('/speaker', async (req, res)=> {
  
    let products = await speaker.find();

    return res.send(products);

});



//get singel speaker

router.get('/speaker/:id', async (req, res)=> {

    try{
        let product = await speaker.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete speaker


router.delete('/speaker/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await speaker.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await speaker.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update speaker

router.put('/speaker/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedSpeaker , async (req, res)=> {
    
    let product = await speaker.findById(req.params.id);


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
        product.Details.color = req.body.color;
        product.Details.configuration = req.body.configuration;
        product.Details.totalPower = req.body.totalPower;
        product.Details.systemRequirement = req.body.systemRequirement;
        
        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;
        
        
        product.features.feature = req.body.feature;

      
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
            product.Details.color = req.body.color;
            product.Details.configuration = req.body.configuration;
            product.Details.totalPower = req.body.totalPower;
            product.Details.systemRequirement = req.body.systemRequirement;
            
            product.Dimension.dimension = req.body.dimension;
            product.Dimension.weight = req.body.weight;
            
            
            product.features.feature = req.body.feature;

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
        product.Details.color = req.body.color;
        product.Details.configuration = req.body.configuration;
        product.Details.totalPower = req.body.totalPower;
        product.Details.systemRequirement = req.body.systemRequirement;
        
        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;
        
        
        product.features.feature = req.body.feature;

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
        product.Details.color = req.body.color;
        product.Details.configuration = req.body.configuration;
        product.Details.totalPower = req.body.totalPower;
        product.Details.systemRequirement = req.body.systemRequirement;
        
        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;
        
        
        product.features.feature = req.body.feature;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add speaker

//restrict picture selection in front end gallery=6  

router.post('/speaker',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationSpeaker, async (req, res)=> {

    try{
        
        let product = new speaker();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        product.Model.brand = req.body.brand;
        product.Model.series = req.body.series;
        product.Model.model = req.body.model;
        
        
        product.Details.Type = req.body.type;
        product.Details.color = req.body.color;
        product.Details.configuration = req.body.configuration;
        product.Details.totalPower = req.body.totalPower;
        product.Details.systemRequirement = req.body.systemRequirement;
        
        product.Dimension.dimension = req.body.dimension;
        product.Dimension.weight = req.body.weight;
        
        
        product.features.feature = req.body.feature;
        
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


// viii-webcam API


/* GET webcam. */
router.get('/webcam', async (req, res)=> {
  
    let products = await webcam.find();

    return res.send(products);

});



//get singel webcam

router.get('/webcam/:id', async (req, res)=> {

    try{
        let product = await webcam.findById(req.params.id);
        if(!product) return res.send("Product not present for given ID")
    return res.send(product);
    }
    catch(err){
        return res.send('Invalid Id');

    }
    
});


//Delete webcam


router.delete('/webcam/:id',  auth,adminAuth,async (req, res)=> {


 
    let product1 = await webcam.findById(req.params.id);
    let dir = './client/public/uploads/accessories/'
   
    if(fs.existsSync(dir + product1.image.thumbnail )){

		fs.unlinkSync(dir + product1.image.thumbnail);

		for (let index in product1.image.gallery) {
			fs.unlinkSync(dir + product1.image.gallery[index]);
		}
	}


    let product = await webcam.findByIdAndDelete(req.params.id);

    return res.send(product);
});


//update webcam

router.put('/webcam/:id', auth,adminAuth,upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationUpdatedWebcam , async (req, res)=> {
    
    let product = await webcam.findById(req.params.id);


    if(!product){
        return res.status(400).send("Product not present for given ID")
    }

    console.log(req.files);

    if(req.files.thumbnail && req.files.gallery){
   
          product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.interface = req.body.interface;
        product.Details.color = req.body.color;
        product.Details.videoResolution = req.body.videoResolution;
        product.Details.maximumResolution = req.body.maximumResolution;
        product.Details.focusSetting = req.body.focusSetting;
        product.Details.lens = req.body.lens;
        product.Details.operatingSystem = req.body.operatingSystem;
        
        product.features.feature = req.body.feature;

    
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
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.interface = req.body.interface;
        product.Details.color = req.body.color;
        product.Details.videoResolution = req.body.videoResolution;
        product.Details.maximumResolution = req.body.maximumResolution;
        product.Details.focusSetting = req.body.focusSetting;
        product.Details.lens = req.body.lens;
        product.Details.operatingSystem = req.body.operatingSystem;
        
        product.features.feature = req.body.feature;

            product.image.thumbnail = req.files.thumbnail[0].filename;
             product.image.gallery =product.image.gallery;
            
        }
        else if(req.files.gallery){
        
            product.title = req.body.title;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
    
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.interface = req.body.interface;
        product.Details.color = req.body.color;
        product.Details.videoResolution = req.body.videoResolution;
        product.Details.maximumResolution = req.body.maximumResolution;
        product.Details.focusSetting = req.body.focusSetting;
        product.Details.lens = req.body.lens;
        product.Details.operatingSystem = req.body.operatingSystem;
        
        product.features.feature = req.body.feature;

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
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.interface = req.body.interface;
        product.Details.color = req.body.color;
        product.Details.videoResolution = req.body.videoResolution;
        product.Details.maximumResolution = req.body.maximumResolution;
        product.Details.focusSetting = req.body.focusSetting;
        product.Details.lens = req.body.lens;
        product.Details.operatingSystem = req.body.operatingSystem;
        
        product.features.feature = req.body.feature;

        product.image.thumbnail = product.image.thumbnail;
        product.image.gallery= product.image.gallery;

        console.log('both not present');
        
    }

    await product.save();
    console.log(product);
    return res.send(product);

    
});



// Add webcam

//restrict picture selection in front end gallery=6  

router.post('/webcam',auth,adminAuth, upload.fields([{ name: 'thumbnail', maxCount: 1 },{ name: 'gallery', maxCount: 6 }]) , validationWebcam, async (req, res)=> {

    try{
        
        let product = new webcam();

        product.title = req.body.title;
        product.price = req.body.price;
        product.quantity = req.body.quantity;

        
        product.Model.brand = req.body.brand;
        product.Model.name = req.body.name;
        product.Model.model = req.body.model;
       
        product.Details.interface = req.body.interface;
        product.Details.color = req.body.color;
        product.Details.videoResolution = req.body.videoResolution;
        product.Details.maximumResolution = req.body.maximumResolution;
        product.Details.focusSetting = req.body.focusSetting;
        product.Details.lens = req.body.lens;
        product.Details.operatingSystem = req.body.operatingSystem;
        
        product.features.feature = req.body.feature;
        
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
