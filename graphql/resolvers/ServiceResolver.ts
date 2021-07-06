import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Service, ServiceInput } from "../schemas/Service";
import ServiceModel from "../../models/service";

import createBaseResolver from "./BaseResolver";

const ServiceBaseResolver = createBaseResolver(
  "Service",
  Service,
  ServiceModel,
  ServiceInput
);
@Resolver((of) => Service)
export class ServiceResolver extends ServiceBaseResolver {}
