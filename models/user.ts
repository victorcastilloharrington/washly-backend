import { Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
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
