
const {validationCasefan,CaseFan} = require('../../../model/accessories/caseFanModel');


let validateCaseFan = (req,res,next)=>{
console.log(req.body)

    req.body.thumbnail= req.files.thumbnail[0].filename;
    req.body.gallery= req.files.gallery;


     let {error} = validationCasefan(req.body);

    if(error){
        console.log(error.details[0].message);
        return res.status(400).send(error.details[0].message);
       
    }

   

    next();

};



let validateUpdatedCaseFan= async (req,res,next)=>{
    
    let product = await CaseFan.findById(req.params.id);
console.log(req.files);
    if(req.files.thumbnail && req.files.gallery){
        console.log(req.files);
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
    


     let {error} = validationCasefan(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    next();

};







module.exports.validationCaseFan = validateCaseFan;
module.exports.validationUpdatedCaseFan = validateUpdatedCaseFan;