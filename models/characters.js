const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterShema = new Schema({
  name: String,
  age: Number
});

const Character = mongoose.model("character", characterShema);

module.exports = Character;
