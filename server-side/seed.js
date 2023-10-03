// seed.js
const mongoose = require("mongoose");
const Form = require("./models/formShema");

mongoose.connect("mongodb://127.0.0.1:27017/custom-form-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const formData = [
  {
    textBox: "Sample Text 1",
    radioButton: "Option A",
    checkBox: ["Option A", "Option C"],
    dropdown: "Option 2",
  },
  // Add more data here as needed
];

async function seed() {
  try {
    await Form.deleteMany({});
    await Form.insertMany(formData);
    console.log("Data seeded successfully");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
