const mongoose = require('mongoose');
const joi = require('@hapi/joi');
const { string } = require('@hapi/joi');


let speakerModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'accessories'
        },
        category1: { type: String, default: "speaker" },
    Model:{
        brand:String,
        series:String,
        model:String,
    },
    Details:{
        Type:String,
        color:String,
        configuration:String,
        totalPower:String,
        systemRequirement:String,
        
    },
    Dimension:{
        dimension:String,
        weight:String,

    },
    features:{
        feature:String,
    },

    image:{
        thumbnail:String,
    gallery: Array,
    },
 });
 
 let speakerModel = mongoose.model('speaker',speakerModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,

   
            type:joi.string().required() ,
            color:joi.string().required() ,
            configuration:joi.string().required() ,
            totalPower:joi.string().required() ,
            systemRequirement:joi.string().required() ,
          
     
            dimension:joi.string().required() ,
            weight:joi.string().required() ,
          
            feature:joi.string().required(),
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};

    module.exports.speaker= speakerModel;
    module.exports.validationSpeaker = validation;