const mongoose = require('mongoose');
const joi = require('@hapi/joi');
const { string } = require('@hapi/joi');


let headsetModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'accessories'
        },
        category1: { type: String, default: "headset" },

    Model:{
        brand:String,
        model:String,
    },
    Details:{
        compatability:String,
        LED:String,
        weight:String,
        
    },
    connectivity:{
        connectiontype:String,
        connector:String,
        cordLength:String,

    },
    features:{
        feature:String,
    },

    image:{
        thumbnail:String,
    gallery: Array,
    },
 });
 let headsetModel = mongoose.model('headset',headsetModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        model:joi.string().required() ,

   
            compatability:joi.string().required() ,
            LED:joi.string().required() ,
            weight:joi.string().required() ,
          
     
            connectiontype:joi.string().required() ,
            connector:joi.string().required() ,
            cordLength:joi.string().required() ,
          
            feature:joi.string().required(),
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



    module.exports.headset= headsetModel;
    module.exports.validationHeadset = validation;