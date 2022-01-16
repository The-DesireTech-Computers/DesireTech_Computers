const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let FansSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
        category1: { type: String, default: "fans" },
    Model:{
        brand:String,
        series:String,
        model:String,
        Type:String,
    },
  Block:{
      Block_Compatability:String,
      Block_Dim:String,
      Block_Material:String,
  },
  Radiator:{
      Radiator_Dim:String,
      Radiator_Material:String,
  },
  Fan:{
      Fan_Size:Number,
      Fan_Dim:String,
      Bearing_Type:String,
      Fan_RPM:String,
      Fan_Air_Flow:String,
      Fan_Noise:String,
      Fan_Connector:String,
      color:String,
  },
  Tube:{
      Tube_Dim:String,
      Tube_Material:String,
  },
   Features:String,
   Power_Consumption:Number,


    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let FansModel = mongoose.model('fans',FansSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,
        type:joi.string().required() ,

      Block_Compatability:joi.string().required() ,
      Block_Dim:joi.string().required() ,
      Block_Material:joi.string().required() ,

      Radiator_Dim:joi.string().required() ,
      Radiator_Material:joi.string().required() ,

      Fan_Size:joi.number().required() ,
      Fan_Dim:joi.string().required() ,
      Bearing_Type:joi.string().required() ,
      Fan_RPM:joi.string().required() ,
      Fan_Air_Flow:joi.string().required() ,
      Fan_Noise:joi.string().required() ,
      Fan_Connector:joi.string().required() ,
      color:joi.string().required() ,

      Tube_Dim:joi.string().required() ,
      Tube_Material:joi.string().required() ,

   Features:joi.string().required() ,
   Power_Consumption:joi.number().required() ,

     
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.Fans= FansModel;
module.exports.validationFans = validation;