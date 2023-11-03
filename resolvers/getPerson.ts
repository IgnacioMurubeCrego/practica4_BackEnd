// @ts-ignore : import error
import {Request, Response} from "npm:express@4.18.2";
import { Person } from "../types.ts";
import { PersonModel } from "../db/person.ts";

const getPerson = async ( req : Request, res : Response) => {
    try{
        const id = req.params.id;
        const person : Person | null = await PersonModel.findById({id}); 
        if(person){
            res.status(200)
            .send(person);
        }
        else{
            res.status(404)
            .send("No person with id " + id.toString() + " found in database.");
        }
    } catch(e){
        console.log(e);
    }
}

export default getPerson;