import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    createdBy: { type: String, required: true }, // ID do usuário que criou o evento
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);