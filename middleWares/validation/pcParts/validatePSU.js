
const {validationPSU,PSU} = require('../../../model/pcParts/PSUModel');


let validatePSU = (req,res,next)=>{


    req.body.thumbnail= req.files.thumbnail[0].filename;
    req.body.gallery= req.files.gallery;


     let {error} = validationPSU(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

   

    next();

};



let validateUpdatedPSU= async (req,res,next)=>{
    console.log(req.body);
    let product = await PSU.findById(req.params.id);

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
    


     let {error} = validationPSU(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    next();

};







module.exports.validationPSU = validatePSU;
module.exports.validationUpdatedPSU = validateUpdatedPSU;