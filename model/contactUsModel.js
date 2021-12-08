let mongoose = require('mongoose');
let joi = require('@hapi/joi');
const { array } = require('@hapi/joi');


let contactUsSchema = mongoose.Schema({
   name: String,
   email: String,
   message:String,
});


let contactUsModel = mongoose.model('contactus',contactUsSchema);


let validation = (data)=>{
    const schema = joi.object({

        name: joi.string().min(3).max(15).required(),
        email: joi.string().required(),
        message: joi.string().required(),

        
    })


    return schema.validate(data,{abortEarly:false});
};



module.exports.ContactUs = contactUsModel;
module.exports.validationContactUs = validation;