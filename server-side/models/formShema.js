const mongoose = require("mongoose");

const formFieldSchema = new mongoose.Schema({
  fieldType: {
    type: String,
    required: true,
    enum: ["text", "radio", "checkbox", "select"],
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  fields: [formFieldSchema],
});

module.exports = mongoose.model("Form", formSchema);
