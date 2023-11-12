import mongoose from "npm:mongoose@8.0.0";
import { Tardis } from "../types.ts";
import { DimensionModel } from "./dimension.ts";

const Schema: typeof mongoose.Schema = mongoose.Schema;

const tardisSchema = new Schema({
    dimensions: [{ type: mongoose.Schema.Types.ObjectId, ref: DimensionModel }],
    camouflage: { type: String, required: true },
    regenerationNumber: { type: Number, required: true },
    currentYear: { type: Number, required: true }
}, { timestamps: true });

export type TardisModelType = mongoose.Document & Tardis;
export const TardisModel = mongoose.model<TardisModelType>("Tardis", tardisSchema);
