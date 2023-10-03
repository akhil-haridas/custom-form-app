import React, { useEffect, useState } from "react";
import CancelSave from "../../components/CancelSave/CancelSave";
import SelectInput from "../../components/Select/SelectInput";
import InputField from "../../components/InputField/InputField";
import RadioButton from "../../components/Radio/RadioButton";
import CheckBox from "../../components/CheckBox/CheckBox";
import { getFormDetails } from "../../utils/axios";

const roleOptions = [
  { value: "fullstack", label: "Full-stack Developer" },
  { value: "uiux", label: "UI/UX Designer" },
  { value: "dataanalyst", label: "Data Analyst" },
  { value: "softwareengineer", label: "Software Engineer" },
  { value: "productmanager", label: "Product Manager" },
];

const FormPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState(null); // State to hold form data

  const fetchFormData = async () => {
    try {
      const formId = "651c36e0ace8450160e3ae9e"; // Replace with the actual form ID you want to fetch
      const formDetails = await getFormDetails(formId);
      setFormData(formDetails); 
    } catch (error) {
      console.error("Error fetching form details:", error);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  const renderFormField = (field) => {
    switch (field.fieldType) {
      case "text":
        return (
          <InputField
            key={field._id}
            id={`field-${field._id}`}
            label={field.question}
            placeholder={`Enter ${field.question}`}
            required={field.required}
            message="Oops!"
            success={false}
            error={false}
          />
        );

      case "radio":
        return (
          <RadioButton
            key={field._id}
            id={`field-${field._id}`}
            name={`field-${field._id}`}
            value=""
            labels={field.options}
            checked={false}
            title={field.question}
            required={field.required}
          />
        );

      case "checkbox":
        return (
          <CheckBox
            key={field._id}
            id={`field-${field._id}`}
            labels={field.options}
            checked={false} 
            title={field.question}
            required={field.required}
          />
        );

      case "select":
        return (
          <SelectInput
            key={field._id}
            label={field.question}
            placeholder={`Select ${field.question}`}
            options={field.options.map((option) => ({
              value: option,
              label: option,
            }))}
            isSearchable={true}
            title={field.question}
            required={field.required}
            id={`field-${field._id}`}
            name={`field-${field._id}`}
            value={selectedOption}
            onChange={(selectedOption) => setSelectedOption(selectedOption)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
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
                      {formData ? formData.title : "Candidate Interview Form"}
                    </h4>
                    <p className="font sans text-[15px] py-3">
                      {formData
                        ? formData.description
                        : "Please fill the form carefully."}
                    </p>
                  </div>
                </div>

                {formData && formData.fields.map(renderFormField)}

                <CancelSave
                  onCancel={() => console.log("")}
                  onSave={() => console.log("")}
                  cancelLabel="Cancel"
                  saveLabel="Save"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
