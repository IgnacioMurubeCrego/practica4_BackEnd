import mongoose from "npm:mongoose@8.0.0";
import { Dimension } from "../types.ts";

const Schema : typeof mongoose.Schema = mongoose.Schema;

const tardisSchema = new Schema({
    dimensions : {type : Array<Dimension>, required : true},
    camuflage : {type : String, required : true},
    year : {type : String, required : true}
},
{ timestamps : true},   
);

export type TardisModelType = mongoose.Document & Dimension;
export const TardisModel = mongoose.model<TardisModelType>("TARDIS",tardisSchema);

