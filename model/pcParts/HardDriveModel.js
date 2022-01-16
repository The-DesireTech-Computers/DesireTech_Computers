const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let HardDriveSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
        category1: { type: String, default: "harddrive" },
    Model:{
        brand:String,
        series:String,
        model:String,
        packing:String,
    },
    Performance:{
        Interface:String,
        Capacity:String,
        RPM:String,
        Cache:String,
        Average_Latency:String,
    },
    Feature:{
        Feature:String,
        Usage:String,
    },
Dimentions:{
    FormFactor:String,
    Height:String,
    Width:String,
    Length:String,
},



    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let HardDriveModel = mongoose.model('harddrive',HardDriveSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

        brand:joi.string().required(),
        series:joi.string().required(),
        model:joi.string().required(),
        packing:joi.string().required(),
    
        Interface:joi.string().required(),
        Capacity:joi.string().required(),
        RPM:joi.string().required(),
        Cache:joi.string().required(),
        Average_Latency:joi.string().required(),
 
        Feature:joi.string().required(),
        Usage:joi.string().required(),
    
    FormFactor:joi.string().required(),
    Height:joi.string().required(),
    Width:joi.string().required(),
    Length:joi.string().required(),

   
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.HardDrive= HardDriveModel;
module.exports.validationHardDrive = validation;