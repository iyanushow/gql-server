const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const RootSchema = require("./schema/schema");

const PORT = process.env.PORT || 4040;

const app = express();

app.use(
  "/",
  graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log("GQL server live"));
