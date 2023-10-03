import React, { useState } from "react";
import CancelSave from "../components/CancelSave/CancelSave";
import SelectInput from "../components/Select/SelectInput";
import InputField from "../components/InputField/InputField";
import RadioButton from "../components/Radio/RadioButton";
import CheckBox from "../components/CheckBox/CheckBox";

const roleOptions = [
  { value: "fullstack", label: "Full-stack Developer" },
  { value: "uiux", label: "UI/UX Designer" },
  { value: "dataanalyst", label: "Data Analyst" },
  { value: "softwareengineer", label: "Software Engineer" },
  { value: "productmanager", label: "Product Manager" },
];

const FormPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
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
                      Candidate Interview Form
                    </h4>
                    <p className="font sans text-[15px] py-3">
                      Please fill the form carefully.
                    </p>
                  </div>
                </div>

                <InputField
                  id="username-success"
                  label="Your name"
                  placeholder="Bonnie Green"
                  value=""
                  required={false}
                  message="success"
                />
                <InputField
                  id="username-error"
                  label="Your name"
                  placeholder="Bonnie Green"
                  value=""
                  required={true}
                  message="Oops!"
                />

                <SelectInput
                  label="Employee Role"
                  placeholder="Select a role"
                  options={roleOptions}
                  isSearchable={true}
                  title={"Slectdjdj"}
                  required={true}
                  id="roleSelect"
                  name="roleSelect"
                  value={selectedOption}
                  onChange={(selectedOption) =>
                    setSelectedOption(selectedOption)
                  }
                />
                <RadioButton
                  id="country-option-1"
                  name="countries"
                  value="USA"
                  labels={[
                    "I want to get promotional offers",
                    "I want to get promotional offers",
                    "I want to get promotional offers",
                  ]}
                  checked={true}
                  title={"Countires"}
                  required={true}
                />

                <CheckBox
                  id="checkbox-2"
                  labels={[
                    "I want to get promotional offers",
                    "I want to get promotional offers",
                    "I want to get promotional offers",
                  ]}
                  checked={true}
                  title={"Check"}
                  required={true}
                />
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
