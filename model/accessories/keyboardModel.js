const mongoose = require('mongoose');
const joi = require('@hapi/joi');


let keyboardModelSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,

    Model:{
        brand:String,
        name:String,
        model:String,
    },
    Details:{
        keyboardInterface:String,
        designStyle:String,
        palmRest:Number,
        mechanicalKeyboard:String,
        keyswitchtype:String,
        keyboardcolor:String,
        dimension:String,
        backlit:String,
        Type:String,
    },
    features:{
        feature:String

    },
    image:{
        thumbnail:String,
    gallery: Array,
    },
    
 });
 let keyboardModel = mongoose.model('keyboard',keyboardModelSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   
        brand:joi.string().required() ,
        name:joi.string().required() ,
        model:joi.string().required() ,

   
            keyboardInterface:joi.string().required() ,
            designStyle:joi.string().required() ,
            palmRest:joi.String().required() ,
            mechanicalKeyboard:joi.string().required() ,
            keyswitchtype:joi.string().required() ,
            keyboardcolor:joi.string().required() ,
            dimension:joi.string().required() ,
            backlit:joi.string().required() ,
            type:joi.string().required() ,
     
            feature:joi.string().required() ,
          
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};


    module.exports.keyboard= keyboardModel;
    module.exports.validationKeyboard = validation;