const mongoose = require('mongoose');
const joi = require('@hapi/joi');
const { number } = require('@hapi/joi');




let memorySchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
    Model:{
        brand:String,
        series:String,
        model:String,
    },
    Details:{
        Capacity:Number,
        Type:String,
        Memory_Pins: Number,
        speed:String,
        CAS_Latency:String,
        timing:String,
        voltage:String,
        ECC:String,
        Buffered:String,
        Multi_Channel_Kit:String,
        chipset:String,
        color:String,
        HeatSpreader:String,
        features:String,
        recommendUse:String,
       
    },
    Power_Consumption:Number,


    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let MemoryModel = mongoose.model('memory',memorySchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,

   
        Capacity:joi.number().required(),
        type:joi.string().required(),
        Memory_Pins:joi.number().required(),
        speed:joi.string().required(),
        CAS_Latency:joi.string().required(),
        timing:joi.string().required(),
        voltage:joi.string().required(),
        ECC:joi.string().required(),
        Buffered:joi.string().required(),
        Multi_Channel_Kit:joi.string().required(),
        chipset:joi.string().required(),
        color:joi.string().required(),
        HeatSpreader:joi.string().required(),
        features:joi.string().required(),
        recommendUse:joi.string().required(),

        Power_Consumption:joi.number().required(),
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.Memory = MemoryModel;
module.exports.validationMemory = validation;