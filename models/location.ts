import { Schema, model, Types } from "mongoose";
interface Location {
  userId: Types.ObjectId;
  name: string;
  status?: string;
  address?: string;
  telephone?: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Location>(
  {
    userId: Types.ObjectId,
    name: { type: String, required: true },
    status: { type: String, default: "inactive" },
    address: String,
    telephone: String,
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

const locationModel = model<Location>("Location", schema);

export default locationModel;
