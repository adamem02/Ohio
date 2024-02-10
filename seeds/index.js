const { Category, Product, Tag, ProductTag } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories(Category);
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts(Product);
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags(Tag);
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags(ProductTag);
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();



