var express = require('express');
var router = express.Router();
let {User} = require('../../model/userModel');
let bcrypt = require('bcryptjs');
let config = require('config');
let jwt = require('jsonwebtoken');
let {auth} = require('../../middleWares/authentication/auth');
let adminAuth = require('../../middleWares/authentication/adminAuth');

/* GET users listing. */
router.get('/', auth, adminAuth, function(req, res, next) {
  res.send('respond with a resource');
});


// get singel user
router.get('/:id', auth, adminAuth, async function(req, res, next) {
  
  let user = await User.findById(req.params.id);

  res.send(user);
});



//update user
router.put('/:id',auth , adminAuth,async (req,res,next)=>{

  

  let user = await User.findById(req.params.id);

  if(req.body.password === user.password){
    user.name = req.body.name;
  user.password = user.password;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.role = user.role;
  }
  else{
    user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.role = user.role;
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(req.body.password, salt);
  user.password = hashedPassword;
  }
  
  await user.save();
  return res.send('User Updated');

});




// signup
router.post('/register', async function(req, res) {

  

let user = await User.findOne({email:req.body.email});

  if(user) return res.status(400).send('A user with this email already exists');

  user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(req.body.password, salt);
  user.password = hashedPassword;

  await user.save();

  return res.send(user);
});




//login


router.post('/login', async (req,res)=>{

  let user = await User.findOne({email:req.body.email});

  if(!user) return res.status(404).send('user with given Email does not exist');

  let passwordComparison = await bcrypt.compare(req.body.password, user.password );

  if(!passwordComparison) return res.status(403).send('Invalid Password');


  let tokken = jwt.sign({userId:user._id,userName:user.name}, config.get("JWT_SECRET") );

  let data = {
    tokken:tokken,
    user: user,
  }

  return res.send(data);

});


module.exports = router;
