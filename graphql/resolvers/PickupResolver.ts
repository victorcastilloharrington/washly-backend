import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Pickup, PickupInput } from "../schemas/Pickup";
import PickupModel from "../../models/pickup";

import createBaseResolver from "./BaseResolver";

const PickupBaseResolver = createBaseResolver(
  "Pickup",
  Pickup,
  PickupModel,
  PickupInput
);
@Resolver((of) => Pickup)
export class PickupResolver extends PickupBaseResolver {}
