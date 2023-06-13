const getProduct = (_, { id }) => {
  return {
    id,
    name: 'product 1',
    price: 123,
    description: 'tool',
    image: 'qweergdrg.com',
    createdAt: new Date().toISOString(),
  };
};

const getProducts = () => {
  return [];
};

const addProduct = () => {
  //code
};
module.exports = { getProduct, getProducts };
