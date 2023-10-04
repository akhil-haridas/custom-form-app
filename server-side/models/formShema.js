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
  placeHolder: {
    type: String,
  },
  options: {
    type: [String],
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});

const formSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    fields: [formFieldSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Form", formSchema);
