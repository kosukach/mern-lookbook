import mongoose from "mongoose";
import { itemSchema } from "./item.js";

const Tee = mongoose.model("tee", itemSchema);

export default Tee;
