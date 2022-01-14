let mongoose = require('mongoose');
let joi = require('@hapi/joi');
const { array } = require('@hapi/joi');


let preBuiltDesktopSchema = mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    category:{type:String,
        default:'prebuilt'
        },
    Model:{
        brand:String,
        series:String,
        model: String,
    },
    information:{
        Type:String,
        formFactor: String,
        usage: String,
        processor:String,
        processorMainFeatures:String,
        cachePerProcessor:String,
        memory:String,
        storage: String,
        graphics: String,
        powerSupply: String,
        case:String,
        coolingSystem: String,
        operatingSystem: String,
        windows: String,
    },
    MotherBoard:{
        chipset: String,
        motherBoardName: String,
    },
    CPU:{
        CPU_Type: String,
        CPU_Speed: String,
        L3_Cache_Per_CPU: String,
        CPU_MainFeatures: String,
    },
    Graphics:{
        GPU_Type: String,
        VideoMemory: String,
        VR_Ready: String,
    },
    Memory:{
        capacity:String,
        speed:String,
        spec:String,
    },
    Storage:{
        SSD: String,
        HDD: String,
    },
    Optical_Drive:{
        Type:String,
    },
    Communication:{
        LAN_Speed: String,
        WLAN:String,
    },
    Audio:{
        WIFI_Generation: String,
    },
    FrontPanelPorts:{
        Front_USB: String,
        FrontAudioPorts: String,
    },
    BackPanelPorts:{
        PS_2: String,
        videoPort: String,
        Rear_USB: String,
        Rj45: Number,
        RearAudioPorts: Number,
        SP_DIF: Number,
    },
    image:{
        thumbnail: String,
        gallery: Array,
    }
});


let preBuiltDesktopModel = mongoose.model('prebuiltdesktops',preBuiltDesktopSchema);


let validation = (data)=>{
    const schema = joi.object({
        title: joi.string().required()  ,
        price: joi.number().min(0).required(),
        quantity: joi.number().min(0).required(),

        brand:joi.string().required() ,
        series:joi.string().required() ,
        model: joi.string().required() ,

            type:joi.string().required() ,
            formFactor:joi.string().required() ,
            usage: joi.string().required() ,
            processor:joi.string().required() ,
            processorMainFeatures:joi.string().required() ,
            cachePerProcessor:joi.string().required() ,
            memory:joi.string().required() ,
            storage: joi.string().required() ,
            graphics: joi.string().required() ,
            powerSupply: joi.string().required() ,
            case:joi.string().required() ,
            coolingsystem: joi.string().required() ,
            operatingSystem: joi.string().required() ,
            windows: joi.string().required() ,
       
        
            MotherBoard_Chipset: joi.string().required() ,
            MotherBoard_Name: joi.string().required() ,

            CPU_Type: joi.string().required() ,
            CPU_Speed: joi.string().required() ,
            L3_Cache_Per_CPU: joi.string().required() ,
            CPU_MainFeatures: joi.string().required() ,

            GPU_Type: joi.string().required() ,
            VideoMemory: joi.string().required() ,
            VR_Ready: joi.string().required() ,


            Memory_Capacity:joi.string().required() ,
            Memory_Speed:joi.string().required() ,
            Memory_Spec:joi.string().required() ,

            SSD: joi.string().required() ,
            HDD: joi.string().required() ,

        
            OpticalDrive_Type: joi.string().required() ,
        
            LAN_Speed: joi.string().required() ,
            WLAN:joi.string().required() ,

            WIFI_Generation: joi.string().required() ,

            FrontPanel_Front_USB: joi.string().required() ,
            FrontPanel_FrontAudioPorts: joi.string().required() ,

            BackPanel_PS_2: joi.string().required() ,
            BackPanel_VideoPort: joi.string().required() ,
            BackPanel_Rear_USB: joi.string().required() ,
            BackPanel_Rj45: joi.number().required() ,
            BackPanel_RearAudioPorts: joi.number().required() ,
            BackPanel_SP_DIF: joi.number().required() ,
       


        thumbnail: joi.string().required(),
        gallery: joi.array().required(),
    })


    return schema.validate(data,{abortEarly:false});
};



module.exports.PreBuiltDesktop = preBuiltDesktopModel;
module.exports.validationPreBuilt = validation;