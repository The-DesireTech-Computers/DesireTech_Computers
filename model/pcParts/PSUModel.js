const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let PSUSchema = mongoose.Schema({
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
       Type:String,
       Maximum_Power:Number,
       Fans:String,
       PFC:String,
       Main_Connectors:String,
       Rails:String,
       PCI_Express_Connector:String,
       SATA_Power_Connector:String,
       SLI:String,
       Haswell_Support:String,
       CrossFire:String,
       Modular:String,
       Energy_Efficent:String,
       Input_Voltage:String,
       Input_Frequency_Range:String,
       Input_Current:String,
       Output:String,
       Dimentions:String,
       Max_PSU_Length:Number,
       Weight:String,
   },
   Features:{
       Connectors:String,
       Features:String,
   },



    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let PSUModel = mongoose.model('psu',PSUSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        series:joi.string().required() ,
        model:joi.string().required() ,

   

            type:joi.string().required(),
            Maximum_Power:joi.number().required(),
            Fans:joi.string().required(),
            PFC:joi.string().required(),
            Main_Connectors:joi.string().required(),
            Rails:joi.string().required(),
            PCI_Express_Connector:joi.string().required(),
            SATA_Power_Connector:joi.string().required(),
            SLI:joi.string().required(),
            Haswell_Support:joi.string().required(),
            CrossFire:joi.string().required(),
            Modular:joi.string().required(),
            Energy_Efficent:joi.string().required(),
            Input_Voltage:joi.string().required(),
            Input_Frequency_Range:joi.string().required(),
            Input_Current:joi.string().required(),
            Output:joi.string().required(),
            Dimentions:joi.string().required(),
            Max_PSU_Length:joi.number().required(),
            Weight:joi.string().required(),
     
            Connectors:joi.string().required(),
            Features:joi.string().required(),
     
   
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.PSU= PSUModel;
module.exports.validationPSU = validation;