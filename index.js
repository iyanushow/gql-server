const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = process.env.PORT || 4040;
const RootSchema = require("./schema/schema");

const cors = require("cors");

// app.use(cors());

// app.use(
//   "/",
//   graphqlHTTP(() => ({
//     schema: RootSchema,
//     graphiql: true,
//   }))
// );

app.use("/gql", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(
  "/gql",
  graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log("GQL server live"));
