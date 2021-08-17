const express= require('express');
const path=require('path');
const rootDir=require('../util/path');
const routerindex=express.Router();
//const adminData=require('./admin');



routerindex.get('/home',function (request,response,next){ 
    //response.setHeader('Content-Type','text/html charset=utf-8');
    //const product=adminData.products;
    response.render('index'/*name of file*/);    
     
    });
    routerindex.get('/',function (request,response,next){ 
        //response.setHeader('Content-Type','text/html charset=utf-8');
        //const product=adminData.products;
        response.render('index'/*name of file*/);    
         
        });

    module.exports=routerindex;