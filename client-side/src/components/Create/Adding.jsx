import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addDocument } from "../../redux/slices/documentSlice";
import { Toast, fieldTypeOptions } from "../../utils/admin";
import { nanoid } from "nanoid";

const Adding = () => {
  const dispatch = useDispatch();

  const initialState = {
    id: nanoid(),
    fieldType: "text",
    options: [],
    question: "",
    isRequired: false,
    placeHolder: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleAddOption = () => {
    setFormState({ ...formState, options: [...formState.options, ""] });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formState.options];
    updatedOptions[index] = value;
    setFormState({ ...formState, options: updatedOptions });
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...formState.options];
    updatedOptions.splice(index, 1);
    setFormState({ ...formState, options: updatedOptions });
  };

  const handleSave = () => {
    if (!formState.question || !formState.fieldType) {
      
      Toast.fire({
        icon: "warning",
        title: "Please fill the label and select field",
      });
      return;
    }
    const newDocument = { ...formState };
    dispatch(addDocument(newDocument));
    setFormState({ ...initialState, id: nanoid() });
  };

  return (
    <div className="mt-5 bg-white rounded-lg shadow">
      <div className="flex">
        <div className="flex-1 pt-4 pl-5 overflow-hidden">
          <h1 className="inline text-2xl font-semibold leading-none">
            Add Fields
          </h1>
        </div>
      </div>
      <div className="px-5 pb-1">
        <input
          placeholder="Enter label name or question"
          value={formState.question}
          onChange={(e) => handleChange("question", e.target.value)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
        <div className="flex pt-3 pb-1">
          <div className="flex-grow w-1/4 pr-2">
            <input
              value={formState.placeHolder}
              onChange={(e) => handleChange("placeHolder", e.target.value)}
              placeholder="Enter placeholder"
              className="text-black placeholder-gray-600 w-full px-4 py-2.5 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
          </div>
          <div className="flex-grow">
            <Select
              options={fieldTypeOptions}
              placeholder="Select a Field Type"
              className="w-full"
              onChange={(selectedOption) =>
                handleChange("fieldType", selectedOption.value)
              }
              isSearchable={false}
            />
          </div>
        </div>
        {formState.fieldType !== "text" && (
          <div className="flex">
            <div className="flex-grow">
              {formState.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    value={option}
                    placeholder={`Option - ${index + 1}`}
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
          </div>
        )}

        <div className="flex items-center pt-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
            checked={formState.isRequired}
            onChange={() => handleChange("isRequired", !formState.isRequired)}
          />
          <label
            htmlFor="safeAddress"
            className="block ml-2 text-sm text-gray-900 pt-2"
          >
            Click this if this is a mandatory field?
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
              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.10 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34-3-3-1.34-3-3-3zM6 6h9v4H6z" />
            </svg>
            <span className="pl-2 mx-1">Save</span>
          </button>
        </div>
        <div className="flex-initial">
          <button
            type="button"
            className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
            onClick={() => setFormState(initialState)}
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
