/*  NB USE FUICTION BEEFORE (req,res,next) or => after it
function  (request,response,next)
 (request,response,next)=>
*/ 
//const products=[];
const Product=require('../model/product');
 

exports.addProducts= (request,response,next)=>{ 
    //response.setHeader('Content-Type','text/html charset=utf-8');
    //response.sendFile(path.join(rootDire,'views','add-product.html'));
 
    response.render('add-product',{

        pageTitle:'add product',
        path:'/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true
    })
    };

    exports.index= function(request,response,next){ 
      
        response.render('index'/*name of file in folder views*/,
        {
            pageTitle:'HomePage',
            username:request.session.username,
        });    
           
        };

        exports.addpostproduct= (request,response,next)=>{ 
            //products.push({title: request.body.title});
            const product=new Product(request.body.title);
                product.save();

            response.redirect('/read');
        };

        exports.product_list=(request,response,next)=>{

                const products=Product.getAll((returned_product)=>{
                    response.render('shop'/*name of file*/,{
                        prods:returned_product,
                        pageTitle:'Shop',
                        activeShop:true,
                        productCSS:true,
                        path:'/read',hasProds:returned_product.length >0
                    })

                });


           /* response.render('shop'/name of file/,{
                prods:products,
                pageTitle:'Shop',
                activeShop:true,
                productCSS:true,
                path:'/read',hasProds:products.length >0
            })*/
        };