import { Query, Resolver, Mutation, Arg, Int, ClassType } from "type-graphql";

function createBaseResolver<T extends ClassType>(
  suffix: string,
  objectTypeCls: T,
  model: any,
  inputTypeCls: T
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Query((type) => [objectTypeCls], {
      name: `getAll${suffix}`,
      nullable: true,
    })
    async getAll(): Promise<T[]> {
      return await model.find({}).lean();
    }

    @Query((type) => [objectTypeCls], { name: `get${suffix}`, nullable: true })
    async get(@Arg("id") id: string): Promise<T> {
      return await model.findById(id).lean();
    }

    @Mutation((type) => objectTypeCls, { name: `add${suffix}` })
    async add(@Arg("data", (type) => inputTypeCls) data: T): Promise<T> {
      return await model.create(data);
    }
  }

  return BaseResolver;
}

export default createBaseResolver;
