import { Schema, model, Types } from "mongoose";

interface Favorite {
  userId: Types.ObjectId;
  locationId: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Favorite>(
  {
    userId: { type: Types.ObjectId, required: true },
    locationId: { type: String, required: true },
  },
  { timestamps: true }
);

const FavoriteModel = model<Favorite>("Favorite", schema);

export default FavoriteModel;
