const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let motherBoardSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
        category1: { type: String, default: "motherboard" },
    Model:{
        brand:String,
        model:String,
    },
    Supported_CPU:{
        CPU_Socket_Type:String,
        CPU_Type:String,
    },
    Chipset:String,
    Onboard_Video_Chipset:String,
    Memory:{
        Memory_Pins: Number,
        Number_Of_Memory_Slots:String,
        Memory_Standard:String,
        Maximum_Memory_Supported:String,
        Channel_Supported:String,
    },
    Expansion_Slots:{
        PCI_Express:String,
    },
    Storage_Device:{
        SATA_6GBs:Number,
        M2:String,
    },
    Onboard_Audio:{
        Audio_Chipset:String,
        Audio_Channels:String,
    },
    Onboard_LAN:{
        LAN_Chipset:String,
        Max_LAN_Speed:String,
        Wireless_LAN:String,
        Bluetooth:String,
    },
    Rear_Panel_Ports:String,
    Internal_IO_Connectors:{
        Onboard_USB:String,
        Other_Connectors:String,
    },
    Physical_Spec:{
        Form_Factor:String,
        LED_Lighting:String,
        Dimentions:String,
        Power_Pin:String,
    },
    Windows:String,
    Features:String,
    Power_Consumption: Number,
    company: String,

    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let MotherBoardModel = mongoose.model('motherboard',motherBoardSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        model:joi.string().required() ,

        CPU_Socket_Type:joi.string().required() ,
        CPU_Type:joi.string().required() ,
    
        Chipset:joi.string().required() ,
        Onboard_Video_Chipset:joi.string().required() ,
    
        Memory_Pins:joi.number().required() ,
        Number_Of_Memory_Slots:joi.string().required() ,
        Memory_Standard:joi.string().required() ,
        Maximum_Memory_Supported:joi.string().required() ,
        Channel_Supported:joi.string().required() ,
        
        PCI_Express:joi.string().required() ,
       
        SATA_6GBs:joi.number().required() ,
        M2:joi.string().required() ,
   
        Audio_Chipset:joi.string().required() ,
        Audio_Channels:joi.string().required() ,
      
         LAN_Chipset:joi.string().required() ,
        Max_LAN_Speed:joi.string().required() ,
        Wireless_LAN:joi.string().required() ,
        Bluetooth:joi.string().required() ,

        Rear_Panel_Ports:joi.string().required() ,
      
        Onboard_USB:joi.string().required() ,
        Other_Connectors:joi.string().required() ,
       
        Form_Factor:joi.string().required() ,
        LED_Lighting:joi.string().required() ,
        Dimentions:joi.string().required() ,
        Power_Pin:joi.string().required() ,
       
        Windows:joi.string().required() ,
        Features:joi.string().required() ,
        Power_Consumption:joi.number().required() ,
        company:joi.string().required() ,
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.MotherBoard = MotherBoardModel;
module.exports.validationMotherBoard = validation;