import { Field, ObjectType, InputType, ID } from "type-graphql";
interface IUser {
  name: string;
  email: string;
  password: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
@ObjectType()
export class User {
  @Field((type) => ID)
  _id?: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  type: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  type?: string;
}
