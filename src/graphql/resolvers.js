const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./products.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory } = require('./category.resolvers');
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
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
  CategoryNameType,
};
module.exports = resolvers;
