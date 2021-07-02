import { Schema, model, Types } from "mongoose";

interface Booking {
  locationId: Types.ObjectId;
  userId: Types.ObjectId;
  price: number;
  services: [Types.ObjectId];
  status: string;
  dateCompleted?: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Booking>(
  {
    locationId: { type: Types.ObjectId, required: true },
    userId: { type: Types.ObjectId, required: true },
    price: { type: Number, required: true },
    services: [{ type: Types.ObjectId, required: true }],
    status: { type: String, default: "pending" },
    completedAt: Date,
  },
  { timestamps: true }
);

const BookingModel = model<Booking>("Booking", schema);

export default BookingModel;
