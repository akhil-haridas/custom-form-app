import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getForm } from "../../utils/axios";
import CancelSave from "../../components/CancelSave/CancelSave";
import SelectInput from "../../components/Select/SelectInput";
import InputField from "../../components/InputField/InputField";
import RadioButton from "../../components/Radio/RadioButton";
import CheckBox from "../../components/CheckBox/CheckBox";
import Spinner from "../../components/Fallback/Spinner";
import {
  validateField,
  validateFields,
  submitForm,
} from "../../utils/validate";

const FormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

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
    validateField(formData, fieldId, value, fieldErrors, setFieldErrors);
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

    validateField(
      formData,
      fieldId,
      newSelectedValues,
      fieldErrors,
      setFieldErrors
    );
  };

  const renderFormField = (field) => {
    const fieldId = field._id;

    return (
      <div key={fieldId} className="mb-4">
        {field.fieldType === "text" && (
          <InputField
            id={fieldId}
            label={field.question}
            placeholder={field.placeHolder || ""}
            value={formValues[fieldId] || ""}
            required={field.isRequired}
            message={fieldErrors[fieldId]}
            onChange={(value) => handleInputChange(fieldId, value)}
          />
        )}
        {field.fieldType === "radio" && (
          <RadioButton
            id={fieldId}
            name={fieldId}
            labels={field.options}
            checkedValue={formValues[fieldId]}
            title={field.question}
            required={field.isRequired}
            onChange={(selectedValue) =>
              handleInputChange(fieldId, selectedValue)
            }
            message={fieldErrors[fieldId]}
          />
        )}
        {field.fieldType === "select" && (
          <SelectInput
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
            message={fieldErrors[fieldId]}
          />
        )}
        {field.fieldType === "checkbox" && (
          <CheckBox
            id={fieldId}
            labels={field.options}
            selectedValues={formValues[fieldId] || []}
            title={field.question}
            required={field.isRequired}
            onChange={(selectedValue, isChecked) =>
              handleCheckBoxChange(fieldId, selectedValue, isChecked)
            }
            message={fieldErrors[fieldId]}
          />
        )}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields(formData, formValues, setFieldErrors)) {
      return;
    }
    submitForm(formData, formValues, navigate);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {formData ? (
        <div className="flex flex-col bg-gray-300 h-[100vh]">
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
