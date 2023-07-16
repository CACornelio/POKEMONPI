const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
      ////validate:{ validacion:{ }} /// investigar validate de sequelize, no necesita instalar dependencies. "validacion"es placeholder, se utilizaria isEmail/lens,args/msg etc... investigar mas las opciones // 
    },
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
     },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      },
    hp:{
      type:DataTypes.INTEGER,
      allowNull: false,

        },
    attack:{
      type:DataTypes.INTEGER,
      allowNull: false,
     },
    defense:{
      type:DataTypes.INTEGER,
      allowNull: false,
      },
    speed:{
      type:DataTypes.INTEGER,
      allowNull: false,
      },
    height:{
      type:DataTypes.FLOAT,
      allowNull: false,
      },
     weight:
     {
      type:DataTypes.FLOAT,
      allowNull: false,
      },
      DataBase:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
      }
  },
  {freezeTableName:true, timestamps:false},
  // para freezar el nombre de la tabla, si es singular puede que seq uelize lo cambie a plural.//
  );
};
