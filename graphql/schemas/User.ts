import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  type: string;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
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
