import { Field, ObjectType, InputType, ID, Int } from "type-graphql";
import { Types } from "mongoose";

@ObjectType()
export class Favorite {
  @Field((type) => ID)
  _id?: Types.ObjectId;

  @Field((type) => ID)
  userId: Types.ObjectId;

  @Field((type) => ID)
  locationId: Types.ObjectId;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class FavoriteInput implements Partial<Favorite> {
  @Field((type) => ID)
  userId: Types.ObjectId;

  @Field((type) => ID)
  locationId: Types.ObjectId;
}
