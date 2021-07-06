import { Query, Resolver, Mutation, Arg } from "type-graphql";
import {
  Location,
  LocationInput,
  Schedule,
  ScheduleInput,
} from "../schemas/Location";
import LocationModel from "../../models/location";

@Resolver((of) => Location)
export class LocationResolver {
  @Query((returns) => [Location], { nullable: true })
  async locations(): Promise<Location[]> {
    return await LocationModel.find({});
  }

  @Mutation((returns) => Location)
  async addLocation(
    @Arg("locationInput")
    {
      name,
      status,
      address,
      telephone,
      latitude,
      longitude,
      city,
      country,
      // schedule,
      // pickup,
      userId,
    }: LocationInput
  ): Promise<Location> {
    const location = await LocationModel.create({
      name,
      status,
      address,
      telephone,
      latitude,
      longitude,
      city,
      country,
      // schedule,
      // pickup,
      userId,
    });

    return location;
  }

  @Mutation((returns) => Location)
  async addSchedule(
    @Arg("scheduleInput") { day, startTime, endTime, locationId }: ScheduleInput
  ): Promise<Location | null> {
    const location = await LocationModel.findOneAndUpdate(
      locationId,
      {
        $push: { schedule: { day, startTime, endTime } },
      },
      { new: true }
    );

    return location;
  }
}
