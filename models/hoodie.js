const mongoose = require("mongoose");
const { itemSchema } = require("./item")

const Hoodie = mongoose.model("hoodie", itemSchema);

module.exports.Hoodie = Hoodie;
