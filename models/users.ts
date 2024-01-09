import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

import createSchema from "@/lib/create-schema";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
});

export const User = createSchema("User", userSchema);
