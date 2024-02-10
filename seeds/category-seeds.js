const seedCategories = async (Category) => {
  const categoryData = [
    {
      category_name: 'Shirts',
    },
    {
      category_name: 'Shorts',
    },
    {
      category_name: 'Music',
    },
    {
      category_name: 'Hats',
    },
    {
      category_name: 'Shoes',
    },
  ];

  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;

