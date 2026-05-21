const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  year: { type: String, required: true },   // "2020-21"
  class: { type: String, required: true },  // "X" or "XII"
  appeared: Number,
  passed: Number,
  first: Number,
  second: Number,
  third: Number,
  suppl: Number,
  fail: Number,
  percent: Number,
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);