import { Schema, model, Types } from "mongoose";

interface Service {
  locationId: Types.ObjectId;
  price: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Service>(
  {
    locationId: { type: Types.ObjectId, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const ServiceModel = model<Service>("Service", schema);

export default ServiceModel;
