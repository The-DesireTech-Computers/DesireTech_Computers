
const { validationSpeaker,speaker} = require('../../../model/accessories/speakerModel');


let validateSpeaker = (req,res,next)=>{


    req.body.thumbnail= req.files.thumbnail[0].filename;
    req.body.gallery= req.files.gallery;


     let {error} = validationSpeaker(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

   

    next();

};



let validateUpdatedSpeaker= async (req,res,next)=>{
    
    let product = await speaker.findById(req.params.id);
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
    


     let {error} = validationSpeaker(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    next();

};







module.exports.validationSpeaker = validateSpeaker;
module.exports.validationUpdatedSpeaker = validateUpdatedSpeaker;