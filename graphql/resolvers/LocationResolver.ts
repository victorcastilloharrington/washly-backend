import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Location, LocationInput } from "../schemas/Location";
import LocationModel from "../../models/location";

import createBaseResolver from "./BaseResolver";

const LocationBaseResolver = createBaseResolver(
  "Location",
  Location,
  LocationModel,
  LocationInput
);
@Resolver((of) => Location)
export class LocationResolver extends LocationBaseResolver {
  // @Query((returns) => [Location], { nullable: true })
  // async locations(): Promise<Location[]> {
  //   return await LocationModel.find({}).lean();
  // }
  // @Query((returns) => Location)
  // async location(@Arg("id") id: string): Promise<Location> {
  //   return await LocationModel.findById(id).lean();
  // }
  // @Mutation((returns) => Location)
  // async addLocation(
  //   @Arg("locationInput")
  //   {
  //     name,
  //     status,
  //     address,
  //     telephone,
  //     latitude,
  //     longitude,
  //     city,
  //     country,
  //     userId,
  //   }: LocationInput
  // ): Promise<Location> {
  //   const location = await LocationModel.create({
  //     name,
  //     status,
  //     address,
  //     telephone,
  //     latitude,
  //     longitude,
  //     city,
  //     country,
  //     userId,
  //   });
  //   return location;
  // }
}
