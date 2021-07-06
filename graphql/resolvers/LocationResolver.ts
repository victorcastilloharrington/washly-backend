import { Query, Resolver, Mutation, Arg } from "type-graphql";
import {
  Location,
  LocationInput,
  ScheduleInput,
  PickupInput,
} from "../schemas/Location";
import LocationModel from "../../models/location";

@Resolver((of) => Location)
export class LocationResolver {
  @Query((returns) => [Location], { nullable: true })
  async locations(): Promise<Location[]> {
    return await LocationModel.find({}).lean();
  }

  @Query((returns) => Location)
  async location(@Arg("id") id: string): Promise<Location> {
    return await LocationModel.findById(id).lean();
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

  @Mutation((returns) => Location)
  async addPickup(
    @Arg("pickupInput") { time, price, radius, locationId }: PickupInput
  ): Promise<Location | null> {
    const location = await LocationModel.findOneAndUpdate(
      locationId,
      {
        $push: { pickup: { time, price, radius } },
      },
      { new: true }
    );

    return location;
  }
}
