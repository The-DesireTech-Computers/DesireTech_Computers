const mongoose = require('mongoose');
const joi = require('@hapi/joi');


let mouseModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,

    Model:{
        brand:String,
        name:String,
        model:String,
    },
    Details:{
        Type:String,
        interface:String,
        trackingmethod:Number,
        maximumdpi:String,
        button:String,
        weightadjustment:String,
        scrollingcapablity:String,
        color:String,
        
    },
    features:{
        feature:String
    },

    image:{
        thumbnail:String,
    gallery: Array,
    },
 });
 let mouseModel = mongoose.model('mouse',mouseModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        name:joi.string().required() ,
        model:joi.string().required() ,

   
            type:joi.string().required() ,
            interface:joi.string().required() ,
            trackingmethod:joi.string().required() ,
            maximumdpi:joi.string().required() ,
            button:joi.string().required() ,
            weightadjustment:joi.string().required() ,
            scrollingcapablity:joi.string().required() ,
            color:joi.string().required() ,
     
            feature:joi.string().required() ,
          
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};


    module.exports.mouse= mouseModel;
    module.exports.validationMouse = validation;