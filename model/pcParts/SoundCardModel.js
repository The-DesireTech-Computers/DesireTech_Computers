const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let SoundCardSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
        category1: { type: String, default: "soundcard" },
    Model:{
        brand:String,
        series:String,
        model:String,
        part:String,
    },
  Audio_Core:{
      Audio_Chipset:String,
      Sample_Rate:String,
      Digital_Audio:String,
      SNR:String,
      Encode:String,
  },
  Ports:{
      Line_In:String,
      Line_Out:String,
      SPDIF_Out:String,
      Other_Ports:String,
  },
  Details:{
      Interface:String,
      Operating_System_Supported:String,
      System_Requirments:String,
  },
Package_Contents:String,
   Dimentions:String,



    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let SoundCardModel = mongoose.model('soundcard',SoundCardSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,
        part:joi.string().required() ,

      Audio_Chipset:joi.string().required() ,
      Sample_Rate:joi.string().required() ,
      Digital_Audio:joi.string().required() ,
      SNR:joi.string().required() ,
      Encode:joi.string().required() ,

      Line_In:joi.string().required() ,
      Line_Out:joi.string().required() ,
      SPDIF_Out:joi.string().required() ,
      Other_Ports:joi.string().required() ,

      Interface:joi.string().required() ,
      Operating_System_Supported:joi.string().required() ,
      System_Requirments:joi.string().required() ,

Package_Contents:joi.string().required() ,
   Dimentions:joi.string().required() ,
     
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.SoundCard= SoundCardModel;
module.exports.validationSoundCard = validation;