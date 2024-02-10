const { DataTypes, Model } = require('sequelize'); 
const sequelize = require('../config/connection'); 

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: 'Category',
    timestamps: false,
    underscored: true,
    
    define: {
      underscored: true, 
      freezeTableName: true, 
    },
  }
);

module.exports = Category;
