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
export class LocationResolver extends LocationBaseResolver {}
