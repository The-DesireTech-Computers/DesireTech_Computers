
const { validationMicrophone,microphone} = require('../../../model/accessories/microphoneModel');


let validateMicrophone = (req,res,next)=>{


    req.body.thumbnail= req.files.thumbnail[0].filename;
    req.body.gallery= req.files.gallery;


     let {error} = validationMicrophone(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

   

    next();

};



let validateUpdatedMicrophone= async (req,res,next)=>{
    
    let product = await microphone.findById(req.params.id);
console.log(req.files);
    if(req.files.thumbnail && req.files.gallery){
        req.body.thumbnail= req.files.thumbnail[0].filename;
        req.body.gallery= req.files.gallery;
    }
    else if(req.files.thumbnail || req.files.gallery ){
        if(req.files.thumbnail){

            req.body.thumbnail= req.files.thumbnail[0].filename;
            req.body.gallery = product.image.gallery;
        }
        else if(req.files.gallery){

            req.body.thumbnail = product.image.thumbnail;
            req.body.gallery= req.files.gallery;
        }
        
    }
    else{

        req.body.thumbnail = product.image.thumbnail;
        req.body.gallery = product.image.gallery;
    }
    


     let {error} = validationMicrophone(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    next();

};







module.exports.validationMicrophone = validateMicrophone;
module.exports.validationUpdatedMicrophone = validateUpdatedMicrophone;