var express = require('express');
var router = express.Router();
let {Order} = require('../../model/ordersModel');

/* GET order. */
router.get('/', async function(req, res, next) {
  let order = await Order.find();
  return res.send(order);
});

//get singel order
router.get('/:id', async function(req, res, next) {
    let order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('order on this given id not found');
    return res.send(order);
  });


  //post a order
  router.post('/',async function(req, res, next) {
    let order = new Order();
    order.products = req.body.products; 
    order.user.userName = req.body.userName; 
    order.user.user_id = req.body.user_id; 
    order.user.user_PhoneNumber = req.body.user_PhoneNumber; 
    order.Shipping_Info.address = req.body.address; 
    order.Shipping_Info.street = req.body.street; 
    order.Shipping_Info.city = req.body.city; 
    order.Shipping_Info.state = req.body.state; 
    order.Shipping_Info.country = req.body.country; 

    await order.save();

    return res.send(order);

  });



  // update order

  router.put('/:id',async function(req, res, next) {
    
    let order = await Order.findById(req.params.id);

    order.products = req.body.products; 
    order.user.userName = req.body.userName; 
    order.user.user_id = req.body.user_id; 
    order.user.user_PhoneNumber = req.body.user_PhoneNumber; 
    order.Shipping_Info.address = req.body.address; 
    order.Shipping_Info.street = req.body.street; 
    order.Shipping_Info.city = req.body.city; 
    order.Shipping_Info.state = req.body.state; 
    order.Shipping_Info.country = req.body.country; 

    await order.save();

    return res.send(order);

  });


  //delete order

  router.delete('/:id', async function(req, res, next) {
    
    let order = await Order.findByIdAndDelete(req.params.id);

    if (!order) return res.status(404).send('Feedback on this given id not found');

    return res.send(order);
  });




module.exports = router;
