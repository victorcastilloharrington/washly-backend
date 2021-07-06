import { Field, ObjectType, InputType, ID, Int } from "type-graphql";
import { Types } from "mongoose";

@ObjectType()
export class Location {
  @Field((type) => ID)
  _id?: string;

  @Field()
  name: string;

  @Field()
  status?: string;

  @Field()
  address?: string;

  @Field()
  telephone?: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field((type) => ID)
  userId: Types.ObjectId;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class LocationInput implements Partial<Location> {
  @Field()
  name: string;

  @Field({ nullable: true })
  status?: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  telephone?: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field((type) => ID)
  userId: Types.ObjectId;
}
