const mongoose = require('mongoose');
const joi = require('@hapi/joi');



let processorSchema = mongoose.Schema({
    title:String,
    price: Number,
    quantity:Number,
    category:{type:String,
        default:'pcParts'
        },
        category1: { type: String, default: "processor" },
    Model:{
        brand:String,
        processorType:String,
        series:String,
        name:String,
        model:String,
    },
    Details:{
        CPU_Socket_Type:String,
        CoreName:String,
        NumberOfCores:Number,
        NumberOfThreads:Number,
        OperatingFrequency:Number,
        MaxFrequency:Number,
        BusSpeed:String,
        L3_Cache:String,
        ManufacturingTech:String,
        bit_Support:String,
        Hyper_Threading_Support:String,
        MemoryType:String,
        MemoryChannel:String,
        Virtualization_Tech_Support:String,
        IntegratedGraphics:String,
        Graphics_Base_Frequency:String,
        Graphics_Max_Dynamic_Frequency:String,
        PCI_Express_Revision:String,
        Max_Number_PCI_Express_Lane:String,
        Thermal_Design_Power:String,
        CoolingDevice:String,
    },
    Power_Consumption: Number,



    image:{
        thumbnail:String,
        gallery: Array,
    },

});





let ProcessorModel = mongoose.model('processor',processorSchema);


let validation = (data)=>{
    const schema = joi.object({
    title: joi.string().required() ,
    price: joi.number().required(),
    quantity:joi.number().required(),
   

 
        brand:joi.string().required() ,
        processorType:joi.string().required() ,
        series:joi.string().required() ,
        name:joi.string().required() ,
        model:joi.string().required() ,

   
        CPU_Socket_Type:joi.string().required() ,
        CoreName:joi.string().required() ,
        NumberOfCores:joi.number().required() ,
        NumberOfThreads:joi.number().required() ,
        OperatingFrequency:joi.number().required() ,
        MaxFrequency:joi.number().required() ,
        BusSpeed:joi.string().required() ,
        L3_Cache:joi.string().required() ,
        ManufacturingTech:joi.string().required() ,
        bit_Support:joi.string().required() ,
        Hyper_Threading_Support:joi.string().required() ,
        MemoryType:joi.string().required() ,
        MemoryChannel:joi.string().required() ,
        Virtualization_Tech_Support:joi.string().required() ,
        IntegratedGraphics:joi.string().required() ,
        Graphics_Base_Frequency:joi.string().required() ,
        Graphics_Max_Dynamic_Frequency:joi.string().required() ,
        PCI_Express_Revision:joi.string().required() ,
        Max_Number_PCI_Express_Lane:joi.string().required() ,
        Thermal_Design_Power:joi.string().required() ,
        CoolingDevice:joi.string().required() ,
        
        
        
        
        Power_Consumption:joi.number().required() ,



        
 
    
    thumbnail:joi.string().required(),
    gallery: joi.array().required(),
    });


    return schema.validate(data,{abortEarly:false});
};



module.exports.Processor = ProcessorModel;
module.exports.validationProcessor = validation;