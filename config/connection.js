const { DataTypes, Model } = require('sequelize');
const { Sequelize } = require('../config/connection');
console.log(Sequelize.Utils.globalOptions);
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
  }
);

module.exports = Category;
