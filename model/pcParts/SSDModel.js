const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let SSDSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'ssd'
        },
    Model:{
        brand:String,
        series:String,
        model:String,
        Device_Type:String,
        UsedFor:String,
    },
    Details:{
        Interface:String,
        Capacity:String,
        Memory_Components:String,
        FormFactor:String,
       
    },
    Performance:{
        Max_Sequential_Read:String,
        Max_Sequential_Write:String,
        MTTF:String,
        Cache:String,
    },
    Feature:String,
Environmental:{
    Operating_Temperature:String,
},
    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let SSDModel = mongoose.model('ssd',SSDSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

   
        brand:joi.string().required(),
        series:joi.string().required(),
        model:joi.string().required(),
        Device_Type:joi.string().required(),
        UsedFor:joi.string().required(),
    
        Interface:joi.string().required(),
        Capacity:joi.string().required(),
        Memory_Components:joi.string().required(),
        FormFactor:joi.string().required(),
        
  
        Max_Sequential_Read:joi.string().required(),
        Max_Sequential_Write:joi.string().required(),
        MTTF:joi.string().required(),
        Cache:joi.string().required(),

    Feature:joi.string().required(),

    Operating_Temperature:joi.string().required(),

   
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.SSD= SSDModel;
module.exports.validationSSD = validation;