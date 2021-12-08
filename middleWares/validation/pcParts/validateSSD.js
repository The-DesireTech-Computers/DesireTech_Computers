
const {validationSSD,SSD} = require('../../../model/pcParts/SSDModel');


let validateSSD = (req,res,next)=>{


    req.body.thumbnail= req.files.thumbnail[0].filename;
    req.body.gallery= req.files.gallery;


     let {error} = validationSSD(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

   

    next();

};



let validateUpdatedSSD= async (req,res,next)=>{
    
    let product = await SSD.findById(req.params.id);

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
    


     let {error} = validationSSD(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    next();

};







module.exports.validationSSD = validateSSD;
module.exports.validationUpdatedSSD = validateUpdatedSSD;