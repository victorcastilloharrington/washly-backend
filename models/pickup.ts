import { Schema, model, Types } from "mongoose";

interface Pickup {
  time: number;
  price: number;
  radius: number;
  locationId: Types.ObjectId;
}

const schema = new Schema<Pickup>(
  {
    time: Number,
    price: Number,
    radius: Number,
    locationId: Types.ObjectId,
  },
  { timestamps: true }
);

const modelFromSchema = model<Pickup>("Pickup", schema);

export default modelFromSchema;
