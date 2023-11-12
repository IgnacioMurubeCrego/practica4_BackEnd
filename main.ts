// @ts-ignore : import error.
import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@8.0.0";
import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import getTardis from "./resolvers/getTardis.ts";
import postTardis from "./resolvers/postTardis.ts";
import updateTardis from "./resolvers/updateTardis.ts";

const env : Record<string,string> = await load();
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");
if(!MONGO_URL){
  console.log("You need to define 'MONGO_URL' in '.env' file.");
  throw new Error("Mongo environment variable is required but not provided.");
}

try{
  await mongoose.connect(MONGO_URL);
  console.info("Connected with Mongo.");
}catch(e){
  console.log(e);
}

const app = express();
app.use(express.json());

app
.post("/api/tardis", postTardis)
.get("/api/tardis/:id", getTardis )
.put("/api/tardis/:id", updateTardis);

app.listen(3000 , () => {
  console.log("Server running in port 3000.")
});


