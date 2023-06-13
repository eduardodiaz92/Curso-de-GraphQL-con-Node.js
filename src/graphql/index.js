// Dependencia que crea un servidor
const { ApolloServer } = require('@apollo/server');
// Playground incluido en @apollo/server
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require('@apollo/server/plugin/landingPage/default');
// Middleware de Express también en @apollo/server
const { expressMiddleware } = require('@apollo/server/express4');

const { loadFiles } = require('@graphql-tools/load-files');

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
    getProduct: () => {
      return {
        id: '123',
        name: 'product 1',
        price: 123,
        description: 'tool',
        image: 'qweergdrg.com',
        createdAt: new Date().toISOString(),
      };
    },
  },
};
const useGraphQL = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });
  await server.start();

  // Uso del middleware en Express
  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
      }),
    })
  );
};

module.exports = useGraphQL;
