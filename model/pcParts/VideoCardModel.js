const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let VideoCardSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
        category1: { type: String, default: "videocard" },
    Model:{
        brand:String,
        series:String,
        model:String,
    },
    Interface:String,
    Chipset:{
        Manufacturer:String,
        GPU_Series:String,
        GPU:String,
    },
Memory:{
    Effective_Memory_Clock:String,
    Memory_Size:Number,
    Memory_Interface:String,
    Memory_Type:String,
},
API:{
    DirectX:String,
    OpenGL:String,
},
Ports:{
    HDMI:String,
    DisplayPort:String,
},
Details:{
    Virtual_Reality_Ready:String,
    Cooler:String,
    System_Requirments:String,
    Power_Connectors:String,
},
Dimentions:{
    FormFactor:String,
    Max_GPU_Length:Number,
    Card_Dimentions:String,
    SlotWidth:String,
},


Power_Consumption: Number,



    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let VideoCardModel = mongoose.model('videocard',VideoCardSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,

   
        Interface:joi.string().required() ,
      
            Manufacturer:joi.string().required() ,
            GPU_Series:joi.string().required() ,
            GPU:joi.string().required() ,
      
   
        Effective_Memory_Clock:joi.string().required() ,
        Memory_Size:joi.number().required() ,
        Memory_Interface:joi.string().required() ,
        Memory_Type:joi.string().required() ,
   
        DirectX:joi.string().required() ,
        OpenGL:joi.string().required() ,
  
        HDMI:joi.string().required() ,
        DisplayPort:joi.string().required() ,
   
        Virtual_Reality_Ready:joi.string().required() ,
        Cooler:joi.string().required() ,
        System_Requirments:joi.string().required() ,
        Power_Connectors:joi.string().required() ,
    
        FormFactor:joi.string().required() ,
        Max_GPU_Length:joi.number().required() ,
        Card_Dimentions:joi.string().required() ,
        SlotWidth:joi.string().required() ,
        
        
        
        
        Power_Consumption:joi.number().required() ,
   
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.VideoCard= VideoCardModel;
module.exports.validationVideoCard = validation;