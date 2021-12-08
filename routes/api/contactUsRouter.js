var express = require('express');
var router = express.Router();
let {ContactUs} = require('../../model/contactUsModel');
let {validation} = require('../../middleWares/validation/validateContactUs');


/* GET contactUs. */
router.get('/', async function(req, res, next) {
  let contactUs = await ContactUs.find();
  return res.send(contactUs);
});

//get singel contactUs
router.get('/:id', async function(req, res, next) {
    let contactUs = await ContactUs.findById(req.params.id);
    if (!contactUs) return res.status(404).send('contactUs on this given id not found');
    return res.send(contactUs);
  });


  //post a contactUs
  router.post('/',validation ,async function(req, res, next) {
    let contactUs = new ContactUs();
    contactUs.name = req.body.name; 
    contactUs.email = req.body.email; 
    contactUs.message = req.body.message; 

    await contactUs.save();

    return res.send(contactUs);

  });



  // update contactUs

  router.put('/:id',validation,async function(req, res, next) {
    
    let contactUs = await ContactUs.findById(req.params.id);

    contactUs.name = req.body.name; 
    contactUs.email = req.body.email; 
    contactUs.message = req.body.description; 

    await contactUs.save();

    return res.send(contactUs);

  });


  //delete contactUs

  router.delete('/:id', async function(req, res, next) {
    
    let contactUs = ContactUs.findByIdAndDelete(req.params.id);

    if (!contactUs) return res.status(404).send('Feedback on this given id not found');

    return res.send(contactUs);
  });




module.exports = router;
