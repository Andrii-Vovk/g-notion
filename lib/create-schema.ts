import mongoose from "mongoose";

export default function createModel<T extends mongoose.Schema>(
  name: string,
  schema: T
): mongoose.Model<mongoose.InferSchemaType<typeof schema>> {
  return (mongoose.models[name] || mongoose.model(name, schema)) as mongoose.Model<
    mongoose.InferSchemaType<typeof schema>
  >;
}
