import mongoose from "npm:mongoose@8.0.0";
import { Dimension } from "../types.ts";
import { PlanetModel } from "./planet.ts";

const Schema : typeof mongoose.Schema = mongoose.Schema;

const dimensionSchema = new Schema({
    name : {type : String, required : true},    
    planets : [{type : mongoose.Schema.Types.ObjectId, ref : PlanetModel}],
},
{ timestamps : true },   
);

export type DimensionModelType = mongoose.Document & Dimension;
export const DimensionModel = mongoose.model<DimensionModelType>("Dimension",dimensionSchema);

