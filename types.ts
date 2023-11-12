import mongoose from "npm:mongoose@8.0.0";

export type Tardis = {
    dimensions : mongoose.Schema.Types.ObjectId[],
    camouflage : string,
    regenerationNumber : number,
    currentYear : number
}

export type Dimension = {
    name : string,
    planets : mongoose.Schema.Types.ObjectId[]
}

export type Planet = {
    name : string,
    people : mongoose.Schema.Types.ObjectId[]
}

export type Person = {
    name : string,
}