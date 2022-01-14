const mongoose = require('mongoose');
const joi = require('@hapi/joi');
const { string } = require('@hapi/joi');


let monitorModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'monitor'
        },

    Model:{
        brand:String,
        cabinetcolor:String,
        model:String,
    },
    Details:{
        glarescreen:String,
        displaytype:String,
        adaptivesychronisetech:String,
        pixelpitch:String,
        refreshRatio:String,
        
    },
    connectivity:{
        connector:String,
        inputvideocapability:String,

    },
    power:{
        powersupply:String,
        powerconsumption:String,
    },

    image:{
        thumbnail:String,
    gallery: Array,
    },
 });
 let monitorModel = mongoose.model('monitor',monitorModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        cabinetcolor:joi.string().required() ,
        model:joi.string().required() ,

   
            glarescreen:joi.string().required() ,
            displaytype:joi.string().required() ,
            adaptivesychronisetech:joi.string().required() ,
            pixelpitch:joi.string().required() ,
            refreshRatio:joi.string().required() ,
          
     
            connector:joi.string().required() ,
            inputvideocapability:joi.string().required() ,
          
            powersupply:joi.string().required(),
            powerconsumption:joi.string().required(),
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



    module.exports.monitor= monitorModel;
    module.exports.validationMonitor = validation;