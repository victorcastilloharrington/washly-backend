import { Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  pass: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  pass: { type: String, required: true },
  type: { type: String, default: "user" },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = model<User>("User", schema);

export default UserModel;
