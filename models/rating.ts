import { Schema, model, Types } from "mongoose";

interface Rating {
  locationId: Types.ObjectId;
  userId: Types.ObjectId;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Rating>(
  {
    userId: { type: Types.ObjectId, required: true },
    locationId: { type: Types.ObjectId, required: true },
    value: { type: Number, required: true },
  },
  { timestamps: true }
);

const RatingModel = model<Rating>("Rating", schema);

export default RatingModel;
