const express= require('express');
const path=require('path');
const rootDir=require('../util/path');
const routersignin=express.Router();
//const adminData=require('./admin');



routersignin.get('/',function (request,response,next){ 
    //response.setHeader('Content-Type','text/html charset=utf-8');
    //const product=adminData.products;
    response.render('signin'/*name of file*/);    
     
    });

    module.exports=routersignin;