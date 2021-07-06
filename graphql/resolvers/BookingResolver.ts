import { Query, Resolver, Mutation, Arg } from "type-graphql";

import { Booking, BookingInput } from "../schemas/Booking";
import BookingModel from "../../models/booking";
import createBaseResolver from "./BaseResolver";

const BookingBaseResolver = createBaseResolver(
  "Booking",
  Booking,
  BookingModel,
  BookingInput
);
@Resolver((of) => Booking)
export class BookingResolver extends BookingBaseResolver {}
