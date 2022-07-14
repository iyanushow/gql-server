const cors = require("cors");
const express = require("express");

const RootSchema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");

const PORT = process.env.PORT || 4040;

const app = express();

const corsOptions = {
  origin: "https://shady-heli.netlify.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
// app.options("*", cors());

// app.use(
//   "/gql",
//   graphqlHTTP({
//     schema: RootSchema,
//     graphiql: true,
//   })
// );

app.get("/", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for an allowed domain." });
});

app.listen(PORT, () => console.log("GQL server live"));
