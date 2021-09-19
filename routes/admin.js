const path=require('path');
const rootDire=require('../util/path');
const express= require('express');
const router=express.Router();
const controller_proc=require('../controller/productController');
const signin_cotroller=require('../controller/signin.js');
const item_controller=require('../controller/itemController');

/* i will get method it name is check and i will ude it as middleware */
const {check}=require('express-validator/check'); /* is middleware for validation */
const { auth } = require('../util/auth'); /* is middleware for authrization */

//const products=[];
router.get('/add-product', auth,controller_proc.addProducts);
router.post('/add-product',auth,controller_proc.addpostproduct);  

router.get('/home',auth,controller_proc.index); //localhost:3000/admin/home     // in auth we found    if(request.session.loggedin==true){} 
      /* i need to check before render /home user name if it in sessoin  */
router.post('/login',check('login').not().isEmpty().isString(),check('password').not().isEmpty().isString(),signin_cotroller.login); //localhost:3000/admin/home   // if(request.session.loggedin==true){}
router.get('/logout',signin_cotroller.logout)    


router.get('/addItem',item_controller.addItem);

router.post('/updateItem',item_controller.updateItem);
router.post('/delete_item',item_controller.delete_item);

router.post('/addItem',item_controller.save);

//module.exports=router; //*** 
exports.routes=router; // ** **
//  exports.products=products; // ** ****

/* NB
module.exports does not work with exports.

*/