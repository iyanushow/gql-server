const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

const { transactionData } = require("../data/data.json");

console.log(transactionData);

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    id: { type: GraphQLID },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    date: { type: GraphQLString },
    amount: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    transaction: {
      type: TransactionType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve: (source, args) => {
        // code to get data from db
        console.log(source, args);
        if (args.id) {
          return transactionData.find(data => data.id === args.id);
        } else if (args.name) {
          return transactionData.find(data => data.name === args.name);
        } else {
          return transactionData.find(data => data.id === "1");
        }
      },
    },
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve: () => transactionData,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
