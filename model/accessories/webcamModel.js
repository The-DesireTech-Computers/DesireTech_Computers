const mongoose = require('mongoose');
const joi = require('@hapi/joi');
const { string } = require('@hapi/joi');


let webcamModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'accessories'
        },

    Model:{
        brand:String,
        name:String,
        model:String,
    },
    Details:{
        interface:String,
        color:String,
        videoResolution:String,
        maximumResolution:String,
        focusSetting:String,
        lens:String,
        operatingSystem:String,
        
    },
  
    features:{
        feature:String,
    },
    
    image:{
        thumbnail:String,
    gallery: Array,
    },
    
 });
 let webcamModel = mongoose.model('webcam',webcamModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        name:joi.string().required() ,
        model:joi.string().required() ,

   
            interface:joi.string().required() ,
            color:joi.string().required() ,
            videoResolution:joi.string().required() ,
            maximumResolution:joi.string().required() ,
            focusSetting:joi.string().required() ,
            lens:joi.string().required() ,
            operatingSystem:joi.string().required() ,
          
          
            feature:joi.string().required(),
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};


    module.exports.webcam= webcamModel;
    module.exports.validationWebcam = validation;