const path=require('path');
const  express=require("express");
const  bodyparser=require("body-parser");
const  route  = require("./routes/admin"); // ***
const  adminData  = require("./routes/admin"); // ** **
const  routershop =require("./routes/shop");
const  index =require("./routes/index");
//const  signin =require("./routes/signin");
const controller_proc=require('./controller/productController');
const signin_cotroller=require('./controller/signin')
const error404Controller=require('./controller/erorr404');
var text="";
const app=express();
 
 /////////////
 app.set('view engine','ejs');
 app.set('views','views');
  ////////////// /////////////

app.use(express.static(path.join(__dirname,'public')));
 
app.use(bodyparser.urlencoded({extended:false}));//used ony with from no json or files
app.use('/node_admin',controller_proc.index); //localhost:3000/node_admin
/*  app.use(signin); */ 
app.get('/',signin_cotroller.sign_in); // localhost:3000

 app.use(routershop);

app.use('/admin',adminData.routes); // ** ** {localhost:3000/admin/home  ,localhost:3000/admin/

app.use(error404Controller.get404);
// app.listen();  // online
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
}); 