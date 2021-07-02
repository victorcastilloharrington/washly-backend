import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User, UserInput } from "../schemas/User";

@Resolver((of) => User)
export class UserResolver {
  private users: User[] = [];

  @Query((returns) => [User], { nullable: true })
  async getUsers(): Promise<User[]> {
    return await this.users;
  }

  @Mutation((returns) => User)
  async addUser(
    @Arg("userInput") { name, email, password }: UserInput
  ): Promise<User> {
    const user = {
      _id: Math.random() + "asdf",
      name,
      email,
      password,
      type: "userql",
    };

    await this.users.push(user);
    return user;
  }
}
