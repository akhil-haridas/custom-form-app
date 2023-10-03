const mongoose = require("mongoose");

const responseFieldSchema = new mongoose.Schema({
  fieldType: {
    type: String,
    required: true,
    enum: ["text", "radio", "checkbox", "select"],
  },
  label: {
    type: String,
    required: true,
  },
  response: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const responseSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Form",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  fields: [responseFieldSchema],
});

module.exports = mongoose.model("Response", responseSchema);
