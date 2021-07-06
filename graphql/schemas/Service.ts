import { Field, ObjectType, InputType, ID } from "type-graphql";
import { Types } from "mongoose";

@ObjectType()
export class Service {
  @Field((type) => ID)
  _id?: Types.ObjectId;

  @Field((type) => ID)
  locationId: Types.ObjectId;

  @Field()
  price: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class ServiceInput implements Partial<Service> {
  @Field((type) => ID)
  locationId: Types.ObjectId;

  @Field()
  price: number;

  @Field()
  name: string;

  @Field()
  description: string;
}
