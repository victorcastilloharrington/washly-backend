import "reflect-metadata";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./graphql/resolvers/UserResolver";
import { LocationResolver } from "./graphql/resolvers/LocationResolver";
import { BookingResolver } from "./graphql/resolvers/BookingResolver";
import { PickupResolver } from "./graphql/resolvers/PickupResolver";
import { ScheduleResolver } from "./graphql/resolvers/ScheduleResolver";
import { FavoriteResolver } from "./graphql/resolvers/FavoriteResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      LocationResolver,
      BookingResolver,
      PickupResolver,
      ScheduleResolver,
      FavoriteResolver,
    ],
    emitSchemaFile: true,
  });
  const PORT = 8000;
  const app = express();

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });

  app.use(cors());

  mongoose
    .connect("mongodb://localhost:27017/washly", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"))
    .catch((err: any) => console.error("DB connection failed" + err));

  // rest of the code remains same

  app.get("/", (req, res) => res.send("Express + TypeScript Server"));
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
}
main();
