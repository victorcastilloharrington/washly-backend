import { Schema, model, Types } from "mongoose";

interface Schedule {
  day: [number];
  startTime: number;
  endTime: number;
}

interface Pickup {
  time: number;
  price: number;
  radius: number;
}

interface Location {
  userId: Types.ObjectId;
  name: string;
  address?: string;
  telephone?: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  schedule: Schedule;
  pickup: Pickup;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Location>(
  {
    userId: Types.ObjectId,
    name: { type: String, required: true },
    address: String,
    telephone: String,
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    schedule: [
      {
        day: { type: Number, required: true },
        startTime: { type: Number, required: true },
        endTime: { type: Number, required: true },
      },
    ],
    pickup: [
      {
        time: Number,
        price: Number,
        radius: Number,
      },
    ],
  },
  { timestamps: true }
);

const locationModel = model<Location>("Location", schema);

export default locationModel;
