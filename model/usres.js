const Sequelize=require('sequelize');
const sequelize=require('./Singlton'); 

const userController=require('../controller/userController'); 

const user=sequelize.sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    username:{
        type:Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING,
    },
    level:{type:Sequelize.STRING,},
    flag:{type:Sequelize.INTEGER,},
    permission:{type:Sequelize.STRING,},

});


exports.user=user;
