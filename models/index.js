const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {};
models.Category = require('./Category')(sequelize, DataTypes);
models.Product = require('./Product')(sequelize, DataTypes);
models.Tag = require('./Tag')(sequelize, DataTypes);
models.ProductTag = require('./ProductTag')(sequelize, DataTypes);


Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

const syncModels = async () => {
  try {
    await sequelize.sync(); 
    console.log('\n----- DATABASE SYNCED -----\n');
    process.exit(0);
  } catch (error) {
    console.error('Error syncing models:', error);
    process.exit(1);
  }
};

syncModels();

module.exports = {
  ...models,
  sequelize,
};
