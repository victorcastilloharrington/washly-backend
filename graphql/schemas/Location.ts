import {
  Field,
  ObjectType,
  InterfaceType,
  InputType,
  ID,
  Int,
} from "type-graphql";
import { Types } from "mongoose";
import { User } from "./User";

@ObjectType()
export class Schedule {
  @Field((type) => Int)
  day: number;

  @Field()
  startTime: number;

  @Field()
  endTime: number;
}
@ObjectType()
export class Pickup {
  @Field()
  time: number;
  @Field()
  price: number;
  @Field()
  radius: number;
}

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

  @Field((type) => [Schedule])
  schedule?: Schedule[];

  @Field((type) => [Pickup])
  pickup?: Pickup[];

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

@InputType()
export class ScheduleInput implements Partial<Schedule> {
  @Field((type) => Int)
  day: number;

  @Field()
  startTime: number;

  @Field()
  endTime: number;

  @Field((type) => ID)
  locationId: Types.ObjectId;
}
