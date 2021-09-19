const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alizidan',
    connectionLimit : 20,               // this is the max number of connections before your pool starts waiting for a release
    multipleStatements : true  
}); 

exports.pool=pool.promise();

exports.login= (username,password,callback)=>{
    var countt=0;
   let sql = "CALL login(?,?,@countt); select @countt; "; 
   
   pool.getConnection(function(err, connection) {
    if (err) throw err; 
 
    connection.query(sql, [username, password, countt], function(err,rows){
     if(err) throw err;
       callback(rows[0][0].countt);
       /*   result[0][0]['username'] */
        connection.release();
    });   
});
}
 /*************************
  * sequelize
  */
 const Sequelize=require('sequelize');
 const sequelize=new Sequelize('alizidan','root','',{dialect:'mysql',host:'localhost' ,"define": {
    "timestamps": false
  }})

 exports.sequelize=sequelize;