import { Field, ObjectType, InputType, ID } from "type-graphql";
import { Types } from "mongoose";

@ObjectType()
export class Pickup {
  @Field((type) => ID)
  _id?: string;

  @Field()
  time: number;

  @Field()
  price: number;

  @Field()
  radius: number;
}

@InputType()
export class PickupInput implements Partial<Pickup> {
  @Field()
  time: number;

  @Field()
  price: number;

  @Field()
  radius: number;

  @Field((type) => ID)
  locationId: Types.ObjectId;
}
