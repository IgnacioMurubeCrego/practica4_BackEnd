import mongoose from "npm:mongoose@8.0.0";
import { Dimension, Planet } from "../types.ts";

const Schema : typeof mongoose.Schema = mongoose.Schema;

const dimensionSchema = new Schema({
    planets : {type : Array<Planet>, required : true}
},
{ timestamps : true},   
);

export type DimensionModelType = mongoose.Document & Dimension;
export const DimensionModel = mongoose.model<DimensionModelType>("Dimension",dimensionSchema);

