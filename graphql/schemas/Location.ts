import { Field, ObjectType, InputType, ID } from "type-graphql";
interface Schedule {
  day: [number];
  startTime: number;
  endTime: number;
}

interface Pickup {
  time: number;
  price: number;
  radius: number;
}

@ObjectType()
export class Location {
  @Field((type) => ID)
  _id?: string;

  @Field()
  name: string;

  @Field()
  address: string;

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

  @Field()
  schedule: Schedule[];

  @Field()
  pickup: Pickup[];

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@InputType()
export class LocationInput implements Partial<Location> {
  @Field()
  name: string;

  @Field()
  address: string;

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
}
