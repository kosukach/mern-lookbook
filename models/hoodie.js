import mongoose from "mongoose";
import { itemSchema } from "./item.js";

const Hoodie = mongoose.model("hoodie", itemSchema);

export default Hoodie;
