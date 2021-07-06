import { Query, Resolver, Mutation, Arg } from "type-graphql";

import { Rating, RatingInput } from "../schemas/Rating";
import RatingModel from "../../models/rating";
import createBaseResolver from "./BaseResolver";

const RatingBaseResolver = createBaseResolver(
  "Rating",
  Rating,
  RatingModel,
  RatingInput
);
@Resolver((of) => Rating)
export class RatingResolver extends RatingBaseResolver {}
