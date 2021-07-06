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
@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => [User], { nullable: true })
  async users(): Promise<User[]> {
    return await UserModel.find({}).lean();
  }

  @Query((returns) => User)
  async user(@Arg("id") id: string): Promise<User> {
    return await UserModel.findById(id).lean();
  }

  @Mutation((returns) => User)
  async addUser(
    @Arg("userInput") { name, email, password }: UserInput
  ): Promise<User> {
    const user = await UserModel.create({ name, email, password });
    return user;
  }

  @FieldResolver((returns) => [Location])
  async locations(@Root() user: User): Promise<Location[]> {
    const location = await LocationModel.find({ userId: user._id });
    return location;
  }
}
