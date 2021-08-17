const path=require('path');
const rootDire=require('../util/path');
const express= require('express');
const router=express.Router();
const controller_proc=require('../controller/productController');

//const products=[];
router.get('/add-product', controller_proc.addProducts);


/*    router.post('/add-product',function (request,response,next){ 
        //response.setHeader('Content-Type','text/html charset=utf-8');
        products.push({title:request.body.title,path:'/admin/add-product'});
        console.log('nono')
         response.redirect('/read');
        });    */
  
       router.post('/add-product',controller_proc.addpostproduct);  

    router.get('/home',controller_proc.index); //localhost:3000/admin/home
      

//module.exports=router; //*** 
exports.routes=router; // ** **
//  exports.products=products; // ** ****

/* NB
module.exports does not work with exports.

*/