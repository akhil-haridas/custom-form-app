const Form = require("../models/formShema");
const Response = require("../models/responseShema");

// Get a single form by ID
exports.getForm = async (req, res) => {
  try {
    const formId = req.params.id;
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    const responses = await Response.find({ formId }, "fields").lean();

    res.status(200).json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a list of forms with response count
exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find({}, "title description _id").lean();

    const formsWithResponses = await Promise.all(
      forms.map(async (form) => {
        const responseCount = await Response.countDocuments({
          formId: form._id,
        });
        return {
          _id: form._id,
          title: form.title,
          description: form.description,
          responseCount,
        };
      })
    );

    res.status(200).json(formsWithResponses);
  } catch (error) {
    console.error("Error fetching form details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new form
exports.createForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new Form(formData);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error("Error creating form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
