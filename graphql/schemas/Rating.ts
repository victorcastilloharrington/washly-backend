import { Field, ObjectType, InputType, ID, Int } from "type-graphql";
import { Types } from "mongoose";

@ObjectType()
export class Rating {
  @Field((type) => ID)
  _id?: Types.ObjectId;

  @Field((type) => ID)
  userId: Types.ObjectId;

  @Field((type) => ID)
  locationId: Types.ObjectId;

  @Field()
  value: number;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class RatingInput implements Partial<Rating> {
  @Field((type) => ID)
  userId: Types.ObjectId;

  @Field((type) => ID)
  locationId: Types.ObjectId;

  @Field()
  value: number;
}
