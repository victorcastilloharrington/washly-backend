import { Field, ObjectType, InputType, ID, Int } from "type-graphql";
import { Types } from "mongoose";

@ObjectType()
export class Schedule {
  @Field((type) => ID)
  _id?: string;

  @Field((type) => Int)
  day: number;

  @Field()
  startTime: number;

  @Field()
  endTime: number;
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
