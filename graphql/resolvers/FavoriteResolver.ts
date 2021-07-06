import { Query, Resolver, Mutation, Arg } from "type-graphql";

import { Favorite, FavoriteInput } from "../schemas/Favorite";
import FavoriteModel from "../../models/favorite";
import createBaseResolver from "./BaseResolver";

const FavoriteBaseResolver = createBaseResolver(
  "Favorite",
  Favorite,
  FavoriteModel,
  FavoriteInput
);
@Resolver((of) => Favorite)
export class FavoriteResolver extends FavoriteBaseResolver {}
