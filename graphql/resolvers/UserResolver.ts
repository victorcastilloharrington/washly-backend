import {
  Query,
  Resolver,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { User, UserInput } from "../schemas/User";
import UserModel from "../../models/user";
import { Location } from "../schemas/Location";
import LocationModel from "../../models/location";

import createBaseResolver from "./BaseResolver";

const UserBaseResolver = createBaseResolver("User", User, UserModel, UserInput);
@Resolver((of) => User)
export class UserResolver extends UserBaseResolver {
  @FieldResolver((returns) => [Location])
  async locations(@Root() user: User): Promise<Location[]> {
    const location = await LocationModel.find({ userId: user._id });
    return location;
  }
}
