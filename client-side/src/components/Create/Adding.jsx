import React, { useState } from "react";
import Select from "react-select";

const fieldTypeOptions = [
  { value: "text", label: "Text" },
  { value: "radio", label: "Radio" },
  { value: "checkbox", label: "Checkbox" },
  { value: "select", label: "Select" },
];

const Adding = ({ onAddDocument }) => {
  const [selectedFieldType, setSelectedFieldType] = useState("text");
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState("");
  const [isRequired, setIsRequired] = useState(false);

  const handleFieldTypeChange = (selectedOption) => {
    setSelectedFieldType(selectedOption.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleSave = () => {
    const document = {
      question,
      fieldType: selectedFieldType,
      options,
      isRequired,
      };
      onAddDocument(document);
      setSelectedFieldType("text");
      setOptions([]);
      setQuestion("");
      setIsRequired(false);
  };
  return (
    <div className="mt-5 bg-white rounded-lg shadow">
      <div className="flex">
        <div className="flex-1 pt-4 pl-5 overflow-hidden">
          <h1 className="inline text-2xl font-semibold leading-none">
            Add Field
          </h1>
        </div>
      </div>
      <div className="px-5 pb-1">
        <input
          placeholder="Question"
          value={question}
          onChange={handleQuestionChange}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
        <div className="py-3">
          <Select
            options={fieldTypeOptions}
            placeholder="Select a Field Type"
            className="w-full"
            onChange={handleFieldTypeChange}
          />
        </div>

        {selectedFieldType !== "text" ? (
          <div className="flex">
            <div className="flex-grow">
              {options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                  <div className="flex-none pt-2.5 pr-2.5 pl-1">
                    <button
                      type="button"
                      className="hover:text-red-400 px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
                      onClick={() => handleRemoveOption(index)}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-none pt-2.5 pr-2.5 pl-1">
              <button
                type="button"
                className="hover:text-green-400 px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
                onClick={handleAddOption}
              >
                <i className="fas fa-plus-circle">Add option</i>
              </button>
            </div>
          </div>
        ) : null}

        <div className="flex items-center pt-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
            checked={isRequired}
            onChange={() => setIsRequired(!isRequired)}
          />
          <label
            htmlFor="safeAddress"
            className="block ml-2 text-sm text-gray-900"
          >
            Click this if this is required?
          </label>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex flex-row-reverse p-3">
        <div className="flex-initial pl-3">
          <button
            type="button"
            className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
            onClick={handleSave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                opacity=".3"
              />
              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34-3-3-1.34-3-3-3zM6 6h9v4H6z" />
            </svg>
            <span className="pl-2 mx-1">Save</span>
          </button>
        </div>
        <div className="flex-initial">
          <button
            type="button"
            className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M8 9h8v10H8z" opacity=".3" />
              <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
            </svg>
            <span className="pl-2 mx-1">Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adding;
