const { json } = require('body-parser');
const fs= require('fs');
const path=require('path');
const rootDir=require('../util/path');

const products=[];
module.exports=class product{

    constructor(t){
        this.title=t;
    }

    save(){
        const p=path.join(
            rootDir,
            'data',
            'products.json'
            );
            console.log(p)
        //products.push(this);
    fs.readFile(p,(error,content)=>{
        let products=[];
        if(!error && content.length>0){
             products=JSON.parse(content);
        } 
            products.push(this);
             fs.writeFile(p,JSON.stringify(products),(error)=>{
                console.log(error);
            });


        });
    }

    static getAll(callback_function){
      
        const p=path.join(
            rootDir,
            'data',
            'products.json'
            );
        fs.readFile(p,(error,content)=>{
            if(!error && !content.length>0){
                console.log('error'+ content.length);
                    return callback_function([]);
            }

        return callback_function (JSON.parse(content));


        });

       // return    callback (JSON.parse(content));
    }
}