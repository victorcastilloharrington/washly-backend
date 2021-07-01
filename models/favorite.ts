import { Schema, model, Types } from "mongoose";

interface Favorite {
  userId: Types.ObjectId;
  locationId: string;
  createdAt: string;
  updatedAt: string;
}

const schema = new Schema<Favorite>({
  userId: { type: Types.ObjectId, required: true },
  locationId: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const FavoriteModel = model<Favorite>("Favorite", schema);

export default FavoriteModel;
