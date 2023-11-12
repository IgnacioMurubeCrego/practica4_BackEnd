import mongoose from "npm:mongoose@8.0.0";
import { Planet } from "../types.ts";
import { PersonModel } from "./person.ts";
import { DimensionModel } from "./dimension.ts";

const Schema : typeof mongoose.Schema = mongoose.Schema;

const planetSchema = new Schema({
    name : {type : String, required : true},
    people : [{type : mongoose.Schema.Types.ObjectId, ref : PersonModel, required : true}]
},
{ timestamps : true },   
);

export type PlanetModelType = mongoose.Document & Planet;
export const PlanetModel = mongoose.model<PlanetModelType>("Planet",planetSchema);