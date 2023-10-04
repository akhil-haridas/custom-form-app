import React from "react";

const RadioButton = ({
  id,
  name,
  value,
  labels,
  checkedValue,
  onChange,
  required,
  title,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-500"
      >
        <p className="inline">{title}</p>
        {required && <p className="inline text-red-600">*</p>}
      </label>
      {labels.map((label, index) => (
        <div className="flex items-center mb-4 pt-3" key={index}>
          <input
            id={`radio-${index}`}
            type="radio"
            name={name}
            value={label}
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            checked={checkedValue === label}
            onChange={() => onChange(label)} 
          />
          <label
            htmlFor={`radio-${index}`}
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
