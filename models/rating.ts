import { Schema, model, Types } from "mongoose";

interface Rating {
  locationId: Types.ObjectId;
  userId: Types.ObjectId;
  value: number;
  createdAt: string;
  updatedAt: string;
}

const schema = new Schema<Rating>({
  userId: { type: Types.ObjectId, required: true },
  locationId: { type: Types.ObjectId, required: true },
  value: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const RatingModel = model<Rating>("Rating", schema);

export default RatingModel;
