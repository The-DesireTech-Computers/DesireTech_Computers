let mongoose = require('mongoose');
let joi = require('@hapi/joi');
const { array } = require('@hapi/joi');


let feedbackSchema = mongoose.Schema({
 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' , required:true},
    product_id:{ type: mongoose.Schema.Types.ObjectId, required:true},
   description:String,
   title:String,
   approved:{
       type:Boolean,
       default:true
   }
});


let feedbackModel = mongoose.model('feedback',feedbackSchema);


let validation = (data)=>{
    const schema = joi.object({

        user: joi.string().required(),
        product_id: joi.string().required(),
        description: joi.string().required(),
        title: joi.string().required(),
        approved: joi.boolean(),

        
    })


    return schema.validate(data,{abortEarly:false});
};



module.exports.Feedback = feedbackModel;
module.exports.validationFeedback = validation;