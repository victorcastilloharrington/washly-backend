import { Schema, model, Types } from "mongoose";

interface Booking {
  locationId: Types.ObjectId;
  userId: Types.ObjectId;
  price: number;
  services: [Types.ObjectId];
  status: string;
  dateCompleted?: string;
  createdAt: string;
  updatedAt: string;
}

const schema = new Schema<Booking>({
  locationId: { type: Types.ObjectId, required: true },
  userId: { type: Types.ObjectId, required: true },
  price: { type: Number, required: true },
  services: [{ type: Types.ObjectId, required: true }],
  status: { type: String, default: "pending" },
  completedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const BookingModel = model<Booking>("Booking", schema);

export default BookingModel;
