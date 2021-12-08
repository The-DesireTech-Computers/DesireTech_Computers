const mongoose = require('mongoose');
const joi = require('@hapi/joi');


let CasefanSchema = mongoose.Schema({

    title:String,
    price: Number,
    quantity:Number,

    Model:{
        brand:String,
        series:String,
        model:String,
    },
    Details:{
        Type:String,
        Compatability:String,
        Size:Number,
        BearingType:String,
        RPM:String,
        AirFlow:String,
        NoiseLvel:String,
        PowerConnector:String,
        Color:String,
        LED:String
    },
    features:{
        feature:String

    },

    Dimentions:{
        Dimension:String
    },

    image:{
        thumbnail:String,
    gallery: Array,
    },
    
    
 });
 let CasefanModel = mongoose.model('casefan',CasefanSchema);

 let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,

   
            type:joi.string().required() ,
            Compatability:joi.string().required() ,
            Size:joi.Number().required() ,
            BearingType:joi.string().required() ,
            RPM:joi.string().required() ,
            AirFlow:joi.string().required() ,
            NoiseLvel:joi.string().required() ,
            PowerConnector:joi.string().required() ,
            Color:joi.string().required() ,
            LED:joi.string().required() ,
     
            feature:joi.string().required() ,
          
            Dimentions:joi.string().required() ,
    
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



   
    module.exports.CaseFan= CasefanModel;
    module.exports.validationCasefan = validation;