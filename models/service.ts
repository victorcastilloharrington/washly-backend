import { Schema, model, Types } from "mongoose";

interface Service {
  locationId: Types.ObjectId;
  price: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const schema = new Schema<Service>({
  locationId: { type: Types.ObjectId, required: true },
  price: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const ServiceModel = model<Service>("Service", schema);

export default ServiceModel;
