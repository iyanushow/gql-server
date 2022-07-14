const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = process.env.PORT || 4040;
const RootSchema = require("./schema/schema");

const cors = require("cors");

app.use(cors());

app.use(
  "/",
  graphqlHTTP(() => ({
    schema: RootSchema,
    graphiql: true,
  }))
);

app.listen(PORT, () => console.log("GQL server live"));
