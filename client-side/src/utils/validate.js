import { createResponse } from "./axios";

// Validate a single field
export const validateField = (formData, fieldId, value, fieldErrors, setFieldErrors) => {
  const errors = { ...fieldErrors };

  if (formData) {
    const field = formData.fields.find((field) => field._id === fieldId);

    if (field && field.isRequired && !value) {
      errors[fieldId] = "This field is required.";
    } else {
      delete errors[fieldId];
    }
  }

  setFieldErrors(errors);
};


// Validate all fields
export const validateFields = (formData, formValues, setFieldErrors) => {
  const errors = {};

  formData.fields.forEach((field) => {
    const fieldId = field._id;
    const value = formValues[fieldId];

    if (field.isRequired && !value) {
      errors[fieldId] = "This field is required.";
    }
  });

  setFieldErrors(errors);

  return Object.keys(errors).length === 0;
};

// Utility function for API calls
export const submitForm = async (formData, formValues, navigate) => {
  try {
    const response = await createResponse({
      formId: formData._id,
      fields: Object.keys(formValues).map((fieldId) => ({
        fieldType: formData.fields.find((field) => field._id === fieldId)
          .fieldType,
        label: formData.fields.find((field) => field._id === fieldId).question,
        response: formValues[fieldId],
      })),
    });
    console.log("Server Response:", response);
    navigate("/");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
