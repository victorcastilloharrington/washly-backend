import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Schedule, ScheduleInput } from "../schemas/Schedule";
import ScheduleModel from "../../models/schedule";

import createBaseResolver from "./BaseResolver";

const ScheduleBaseResolver = createBaseResolver(
  "Schedule",
  Schedule,
  ScheduleModel,
  ScheduleInput
);
@Resolver((of) => Schedule)
export class ScheduleResolver extends ScheduleBaseResolver {}
