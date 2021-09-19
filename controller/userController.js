const Sequelize=require('sequelize');

const sequelize=require('../model/Singlton'); 
const user=require('../model/usres');

exports.create_user =function ( username,password,level,flag,callback){ 
   var return_value;
 
 user.user.create({username:username,password:password,level:level,flag:flag})
    .then(result=>{
         return_value="inserted";
        callback(return_value);
    })
    .catch(err=>{
        callback(err);
     
    });
     
    }; //end user.create
    exports.all_user=function (callback){
     
     
        user.user.findAll().
        then(users=>{
            callback(users); // returning all users
          }
        ).
        catch(err=>{
             callback(null,0);
            console.log(err);
        });
        
    };
    exports.findyByUsername=(user_name,callback)=>{
        user.user.findAll({where:{username:user_name}}).then(list_user=>{
            callback(list_user);
        }).catch(err=>{
            console.log(err);
        })

    };

    exports.findbyid=  function (id,callback){
        user.user.findByPk(id).then(one_user=>{
              /*  console.log(one_user.username);
                console.log(one_user.password);
                console.log(one_user.id);*/
                console.log(one_user.permission);
console.log("***************************");
                callback(one_user,1);
        }).
        catch(err=>{
            callback(null,0);
            console.log(err);
        });
        
    };
    exports.changePassword=function(id,password,callback){
        user.user.findByPk(id).then(user_to_update=>{
            user_to_update.password=password;
            user_to_update.save();
            callback("done");
        }).catch(err=>{
            console.log(error);
            callback("failed");
        })
    }

    exports.changePasswordByusername=function(user_name,password,callback){
        user.user.findAll({where:{username:user_name}}).then(users_to_update=>{
            users_to_update.forEach(user_=>{
                user_.password=password;
                user_.save();
                callback("done");
            })
        }).then(result_of_save=>{
            
        })
        .catch(err=>{
            console.log(error);
            callback("failed");
        });
    }

    exports.WhereUserAndPAssword=function (username,password,callback){
        var user_id=0;
        user.user.findAll({where:{username:username,password:password}}).
        then(users=>{
             users.forEach(user=>{
                console.log(user.username);
                console.log(user.password);
                console.log(user.id);
                user_id=user.id;
            })
            if(users.length>0){
            callback(user_id);
        }else{
            callback(user_id);
        }
        }).
        catch(err=>{
            callback(user_id);
            console.log(err);
        });

    };