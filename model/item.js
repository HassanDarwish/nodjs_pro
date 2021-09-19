const Sequelize=require('sequelize');
const sequelize=require('./Singlton'); 

const item = sequelize.sequelize.define('item',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    title:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    total_amount:{
        type:Sequelize.INTEGER
    },
    delete_flag:{
        type:Sequelize.INTEGER
    }
    
})
exports.item=item;
