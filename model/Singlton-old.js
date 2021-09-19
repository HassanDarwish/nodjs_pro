 
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alizidan',
    connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
    multipleStatements : true  
});

class DatabaseConnection { 
     constructor() {
      this.databaseConnection = 'dummytext';
    }
  
    getNewDBConnection(username,password) {
        console(username);

        console.log(username);
          console.log(password);

    }
  }
  
  class Singleton {
      
    constructor() {
      throw new Error('Use the getInstance() method on the Singleton object!');
    }
  
      static getInstance(username,password) {
        var stuff_i_want = '';
     
    
         
          this.getlogin(username,password,(x)=>{
        stuff_i_want= x;
    
      
         });
         console.log(stuff_i_want+"Hassan");
         return true;
        
    }
    
     static  getlogin(username,password,callback) {
           console.log(username);
          console.log(password);
            let mm=false;
          con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });
          var countt=0;
          let sql = "CALL login(?,?,@countt); select @countt; "; 
          
          con.query(sql, [username, password, countt], function(err,rows){
            if(err) throw err;
            console.log(rows[0]);
            console.log(rows[0][0].countt);
            Promise.resolve(callback(rows[0][0].countt));
 
} ); 
        
  
     }
  }
  
  exports.Singleton=Singleton;
   