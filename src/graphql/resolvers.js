const { getProduct, getProducts } = require('./products.resolvers');

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
};
module.exports = resolvers;
