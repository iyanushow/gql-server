const cors = require("cors");
const express = require("express");

const RootSchema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");

const PORT = process.env.PORT || 4040;

const app = express();

app.use(cors());
app.options("*", cors());

app.use(
  "/",
  graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log("GQL server live"));
