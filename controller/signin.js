const Singlton = require('../model/Singlton');
const user = require('../model/usres');
const csrf = require('csurf');

var csrfProtection = csrf()
const { validationResult } = require('express-validator/check');

const userController = require('../controller/userController');

exports.listAllUsers = function (request, response, next) {
    userController.all_user((users) => {
        users.forEach(user => {

            console.log(user.username);
            console.log(user.password);
            console.log(user.id);
        })

    })

    response.render('signin'/*name of file at view folder need to change to list*/,
        {
            pageTitle: 'Sign_in'
        }
    );

};



exports.sign_in = function (request, response, next) {
    //response.setHeader('Content-Type','text/html charset=utf-8');
    //const product=adminData.products;


    //userController.all_user();
    /*  userController.findbyid(2, (user,y)=>{
          if(y==1){ 
              console.log(y ,"Hassan Ali Hassan");
              console.log(user.username);
              
             
          }
      });
      
      userController.changePassword(2,"Ali123",(result)=>{
          console.log(result);
      })*/

    /*    userController.changePasswordByusername("admin","Mideo",(result)=>{
            console.log(result);
        });*/

    console.log(request.path);
    response.render('signin'/*name of file at view folder*/,
        {
            pageTitle: 'Sign_in',

        }
    );

};

exports.logout = (request, response, next) => {
    request.session.destroy(err => {
        response.redirect("/");

    });

};

exports.login = (request, response, next) => {


    var username = request.body.login; var countt = 0;
    var password = request.body.password;

    var errors = validationResult(request);

    //console.log(errors.isEmpty);
    console.log(errors);
    if (!errors.isEmpty()) {

        response.redirect("/");

    } else {
        userController.WhereUserAndPAssword(username, password,  (x) => {
                var permission="";
            if (x > 0) {
                request.session.loggedin = true;
                request.session.username = username;
            
              
                      userController.findbyid(x,  (result) => {

                        console.log(result.permission, 'mmmmmm')
                        request.session.newPerm =  result.permission, 
                        request.session.level=result.level,
                        
                        response.render('index'   /* name of file in folder views */,
                    {
                        pageTitle: 'HomePage',
                        pageSubTitle:'Index',
                        username: username,
                        csrfToken: request.csrfToken(),

                    });

                    }
                    ) 
                
            } else {
                response.redirect("/");
            }

        });
    
    }


    /*
            Singlton.pool.execute("select * from users").then(result=>{
                    console.log(result[0][0]['']);
            }).catch(err=>{
                console.log(err);
            });
                */

    /* Singlton.login(username,password,(x)=>{
      stuff_i_want= x;
  
      if(stuff_i_want>0)       
          {    response.render('index'    name of file in folder views   ,
              {
                  pageTitle:'HomePage',
                  username:username,
              });
                  
      }else{
          response.redirect("/");
       }
          }); */

};
