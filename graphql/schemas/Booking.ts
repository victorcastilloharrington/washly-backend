import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class Booking {
  @Field((type) => ID)
  _id?: string;

  @Field((type) => ID)
  locationId: string;

  @Field((type) => ID)
  userId: string;

  @Field((type) => [ID])
  services: string[];

  @Field()
  price: number;

  @Field()
  status?: string;

  @Field()
  dateCompleted?: Date;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class BookingInput implements Partial<Booking> {
  @Field((type) => ID)
  locationId: string;

  @Field((type) => ID)
  userId: string;

  @Field((type) => [ID])
  services: string[];

  @Field()
  price: number;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  dateCompleted?: Date;
}
