const express= require('express');
const path=require('path');
const rootDir=require('../util/path');
const routershop=express.Router();
const adminData=require('./admin');

const controller_proc=require('../controller/productController');

var text="";

 
 
       routershop.get('/product',function (request,response,next){ 
 
          response.sendFile(path.join(rootDir,'views','shop.html'));
          }); 
    
          routershop.get('/read',controller_proc.product_list);
    
        module.exports=routershop;