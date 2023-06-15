const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require('./products.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression(
  'categoryNameType',
  /^[a-zA-Z0-9]{3,8}$/
);

const resolvers = {
  Query: {
    hello: () => 'Hola mundillo',
    getPerson: (_, args) =>
      `Hello, my name is ${args.name}, I'm ${args.age} yold`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => 'qwerty',
    getBoolean: () => true,
    getID: () => '123456',
    getNumers: (_, args) => args.numbers,
    // Products
    product: getProduct,
    allProducts: getProducts,
    category: getCategory,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory,
  },
};
module.exports = resolvers;
