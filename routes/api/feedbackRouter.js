var express = require('express');
var router = express.Router();
let {Feedback} = require('../../model/feedback/feedbackModel');
let {validation} = require('../../middleWares/validation/validateFeedback');
let {auth} = require('../../middleWares/authentication/auth');
let adminAuth = require('../../middleWares/authentication/adminAuth');


/* GET feedbacks. */
router.get('/', async function(req, res, next) {
  let feedbacks = await Feedback.find().populate("user");
  return res.send(feedbacks);
});

//get singel feedback
router.get('/:id', async function(req, res, next) {
    let feedback = await Feedback.findById(req.params.id).populate("user product_id");
    if (!feedback) return res.status(404).send('feedback on this given id not found');
    return res.send(feedback);
  });


  //post a feedback
  router.post('/',auth, validation ,async function(req, res, next) {
    let feedback = new Feedback();
    feedback.user = req.body.user; 
    feedback.product_id = req.body.product_id; 
    feedback.description = req.body.description; 
    feedback.title = req.body.title; 

    await feedback.save();

    return res.send(feedback);

  });



  // approve feedback

  router.put('/approve/:id' ,async function(req, res, next) {
    
    let feedback = await Feedback.findById(req.params.id);

    feedback.user = feedback.user;
    feedback.product_id = feedback.product_id;
    feedback.description   = feedback.description;
    feedback.title   = feedback.title;
    feedback.approved = true;

    await feedback.save();

    return  res.send(feedback);

  });


  //delete feedback

  router.delete('/:id',auth,adminAuth, async function(req, res, next) {
    
    let feedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!feedback) return res.status(404).send('Feedback on this given id not found');

    return res.send(feedback);
  });




module.exports = router;
