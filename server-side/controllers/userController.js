const Response = require("../models/responseShema");
const Form = require("../models/formShema");

// Get a single form by ID
exports.getForm = async (req, res) => {
  try {
    const formId = req.params.id;
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.status(200).json(form);
  } catch (error) {
    console.error("Error fetching form details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new response
exports.createResponse = async (req, res) => {
  try {
    const responseData = req.body;
    const userResponse = new Response(responseData);
    const savedResponse = await userResponse.save();

    res.status(201).json(savedResponse);
  } catch (error) {
    console.error("Error creating user response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
