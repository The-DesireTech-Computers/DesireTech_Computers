const mongoose = require('mongoose');
const joi = require('@hapi/joi');


let microphoneModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'accessories'
        },

    Model:{
        brand:String,
        series:String,
        model:String,
    },
    Details:{
        Type:String,
        specification:String,
        
    },
    Dimension:{
        dimension:String,
        weight:String,

    },
    image:{
        thumbnail:String,
    gallery: Array,
    },
    
 });
 let microphoneModel = mongoose.model('microphone',microphoneModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,

   
            type:joi.string().required() ,
            specification:joi.string().required() ,
          
     
            dimension:joi.string().required() ,
            weight:joi.string().required() ,
          
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};

    module.exports.microphone= microphoneModel;
    module.exports.validationMicrophone = validation;