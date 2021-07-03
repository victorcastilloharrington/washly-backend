import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class Booking {
  @Field((type) => ID)
  _id: string;

  @Field((type) => ID)
  locationId: string;

  @Field((type) => ID)
  userId: string;

  @Field((type) => [ID])
  price: number;

  @Field()
  services: string[];

  @Field()
  status: string;

  @Field()
  dateCompleted?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
