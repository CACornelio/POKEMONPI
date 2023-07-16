const {DataTypes} = require ('sequelize')

module.exports = (sequelize)=>{
     sequelize.define('User',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        nickname:{
           type: DataTypes.STRING,
           allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },

     },{timestamps:false})
}