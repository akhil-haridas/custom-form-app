const Response = require("../models/responseShema");
const Form = require("../models/formShema")

exports.getForms = async (req, res) => {
  try {
    // Find all forms and project only the "title" and "description" fields
    const forms = await Form.find({}, "title description").lean();

    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching form details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getForm = async (req, res) => {
  try {
    const formId = req.params.id;

    // Find the form by its ID
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
 console.log(form)
    res.status(200).json(form);
  } catch (error) {
    console.error("Error fetching form details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createResponse = async (req, res) => {

  try {
    // Extract response data from the request body
    const responseData = req.body;

    // Create a new user response using the received data
    const userResponse = new Response(responseData);

    // Save the new user response to the database
    const savedResponse = await userResponse.save();

    res.status(201).json(savedResponse);
  } catch (error) {
    console.error("Error creating user response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
