exports.sign_in =function (request,response,next){ 
    //response.setHeader('Content-Type','text/html charset=utf-8');
    //const product=adminData.products;
    response.render('signin'/*name of file at view folder*/,
        {
            pageTitle:'Sign_in'
        }
    );    
     
    };
  