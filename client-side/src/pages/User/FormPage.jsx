import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createResponse, getForm } from "../../utils/axios";
import CancelSave from "../../components/CancelSave/CancelSave";
import SelectInput from "../../components/Select/SelectInput";
import InputField from "../../components/InputField/InputField";
import RadioButton from "../../components/Radio/RadioButton";
import CheckBox from "../../components/CheckBox/CheckBox";
import Spinner from "../../components/Fallback/Spinner";

const FormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null);
  const [formValues, setFormValues] = useState({}); 

  useEffect(() => {
    async function fetchFormData() {
      try {
        const response = await getForm(id);
        setFormData(response);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    }

    fetchFormData();
  }, [id]);

  const handleInputChange = (fieldId, value) => {
    setFormValues({
      ...formValues,
      [fieldId]: value,
    });
  };

  const handleCheckBoxChange = (fieldId, selectedValue, isChecked) => {
    const currentSelectedValues = formValues[fieldId] || [];

    let newSelectedValues;
    if (isChecked) {
      newSelectedValues = [...currentSelectedValues, selectedValue];
    } else {
      newSelectedValues = currentSelectedValues.filter(
        (value) => value !== selectedValue
      );
    }
    setFormValues({
      ...formValues,
      [fieldId]: newSelectedValues,
    });
  };

  const renderFormField = (field) => {
    const fieldId = field._id;

    switch (field.fieldType) {
      case "text":
        return (
          <InputField
            key={fieldId}
            id={fieldId}
            label={field.question}
            placeholder={field.placeHolder || ""}
            value={formValues[fieldId] || ""}
            required={field.isRequired}
            message=""
            onChange={(value) => handleInputChange(fieldId, value)}
          />
        );
      case "radio":
        return (
          <RadioButton
            key={fieldId}
            id={fieldId}
            name={fieldId}
            labels={field.options}
            checkedValue={formValues[fieldId]}
            title={field.question}
            required={field.isRequired}
            onChange={(selectedValue) =>
              handleInputChange(fieldId, selectedValue)
            }
          />
        );
      case "select":
        return (
          <SelectInput
            key={fieldId}
            label={field.question}
            placeholder="Select an option"
            options={field.options.map((option, index) => ({
              value: index.toString(),
              label: option,
            }))}
            isSearchable={false}
            required={field.isRequired}
            id={fieldId}
            name={fieldId}
            value={formValues[fieldId] || ""}
            onChange={(value) => handleInputChange(fieldId, value)}
          />
        );
      case "checkbox":
        return (
          <CheckBox
            id={fieldId}
            labels={field.options}
            selectedValues={formValues[fieldId] || []}
            title={field.question}
            required={field.isRequired}
            onChange={(selectedValue, isChecked) =>
              handleCheckBoxChange(fieldId, selectedValue, isChecked)
            }
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createResponse({
        formId: formData._id, 
        fields: Object.keys(formValues).map((fieldId) => ({
          fieldType: formData.fields.find((field) => field._id === fieldId)
            .fieldType,
          label: formData.fields.find((field) => field._id === fieldId)
            .question,
          response: formValues[fieldId],
        })),
      });
      console.log("Server Response:", response);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  const handleCancel = (e) => {
    e.preventDefault()
    navigate('/forms')
  }
  return (
    <div>
      {formData ? (
        <div className="flex flex-col bg-gray-300">
          <div className="h-72 bg-teal-500 sm:h-[122px]" />
          <div className="mx-auto w-[700px] sm:w-[90%]">
            <div className="ctrlqFormCard mt-[-180px]">
              <div className="bg-teal-200 h-2 mx-auto w-2/3" />
              <div className="text-black p-5">
                <form className="px-[3rem] sm:px-[2px]">
                  <div className="row">
                    <div className="input-field col s12">
                      <h4 className="font-sans font-bold text-4xl sm:text-2xl">
                        {formData.title}
                      </h4>
                      <p className="font sans text-[15px] py-3">
                        {formData.description}
                      </p>
                    </div>
                  </div>

                  {formData.fields.map((field) => renderFormField(field))}

                  <CancelSave
                    onCancel={handleCancel}
                    onSave={handleSubmit} 
                    cancelLabel="Cancel"
                    saveLabel="Save"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FormPage;
