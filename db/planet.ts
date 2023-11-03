import mongoose from "npm:mongoose@8.0.0";
import { Planet, Person } from "../types.ts";

const Schema : typeof mongoose.Schema = mongoose.Schema;

const planetSchema = new Schema({
    persons : {type : Array<Person>, required : true}
},
{ timestamps : true},   
);

export type PlanetModelType = mongoose.Document & Planet;
export const PlanetModel = mongoose.model<PlanetModelType>("Planet",planetSchema);