import { Schema, model, Types } from "mongoose";

interface Schedule {
  day: number;
  startTime: number;
  endTime: number;
  locationId: Types.ObjectId;
}

interface Pickup {
  time: number;
  price: number;
  radius: number;
}

const schema = new Schema<Schedule>(
  {
    day: Number,
    startTime: Number,
    endTime: Number,
    locationId: Types.ObjectId,
  },
  { timestamps: true }
);

const modelFromSchema = model<Schedule>("Schedule", schema);

export default modelFromSchema;
