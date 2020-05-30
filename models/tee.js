const mongoose = require("mongoose");
const { itemSchema } = require("./item")

const Tee = mongoose.model("tee", itemSchema);

module.exports.Tee = Tee;
