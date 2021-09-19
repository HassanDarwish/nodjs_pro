const Sequelize=require('sequelize');
const sequelize=require('../model/Singlton'); 
const item=require('../model/item');


exports.delete_item=function(request,response,next){
 
    if(request.session.loggedin==true){
        console.log(request.body.id_s);
        list_item=request.body.id_s;
         try {
            list_item.forEach(function(value){
            delete_item(value);
               });
        }catch (e) {
            delete_item(list_item);
        }
         
        
    }
}


delete_item=function(id){
      item.item.findByPk(id).then(pro=>pro.destroy()).catch(err=>console.log(err));
}



exports.updateItem=function(request,response,next){
    console.log(request.body);
    if(request.session.loggedin==true){
        title=request.body.item_title;
    
        description=request.body.item_description;
        item_id=request.body.item_id;
 
        this.update_item(item_id,title,description,(retaned_value)=>{
                console.log(retaned_value);
        });
     
    }
} 
update_item=function(id,title,description,callback){
    console.log(title);
    item.item.findByPk(id).then(item=>{
        item.title=title,
        item.description=description,
        item.save();
        callback('done');
    }).catch(err=>console.log(err))
}


exports.addItem= function(request,response,next){ 
      
  
    if(request.session.loggedin==true){

        all_item((items)=>{
            items.reverse();
            response.render('addItem'/*name of file in folder views*/,
            {
                pageTitle:'Item',
                pageSubTitle:'Add Item',
                username:request.session.username,
                csrfToken: request.csrfToken(),
                items:items,
            }); 

        });
    
}else{
    response.redirect("/");
}
    };

    exports.save= function(request,response,next){ 
        
        title=request.body.title;
        description=request.body.Decscription;
        
        total_amount=request.body.amount;
        delete_flag=1;
        this.create_item(title,description,total_amount,delete_flag,(value)=>{
                console.log(value);
                response.redirect('addItem'); 
         
            });
           
        };


create_item =function ( title,description,total_amount,delete_flag,callback){ 
    var return_value;
  
  item.item.create({title:title,description:description,total_amount:total_amount,delete_flag:delete_flag})
     .then(result=>{
          return_value="inserted";
         callback(return_value);
     })
     .catch(err=>{
         callback(err);
      
     });
      
     }; //end item.create

     exports.create_item =create_item;

    all_item=function (callback){
     
     
        item.item.findAll().
        then(items=>{
            callback(items); // returning all users
          }
        ).
        catch(err=>{
             callback(null,0);
            console.log(err);
        });
    }
    exports.all_item=all_item;