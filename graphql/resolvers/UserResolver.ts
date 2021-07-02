import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User, UserInput } from "../schemas/User";
import UserModel from "../../models/user";

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => [User], { nullable: true })
  async getUsers(): Promise<User[]> {
    return await UserModel.find({});
  }

  @Mutation((returns) => User)
  async addUser(
    @Arg("userInput") { name, email, password }: UserInput
  ): Promise<User> {
    const user = await UserModel.create({ name, email, password });
    return user;
  }
}
