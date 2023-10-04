import React from "react";

const CheckBox = ({ labels, selectedValues, onChange, title, required }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="username-error"
        className="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-500"
      >
        <p className="inline">{title}</p>
        {required && <p className="inline text-red-600">*</p>}
      </label>
      {labels.map((label, index) => (
        <div className="flex items-center mb-4 pt-3" key={index}>
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            value={label}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={selectedValues.includes(label)}
            onChange={(e) => onChange(label, e.target.checked)}
          />
          <label
            htmlFor={`checkbox-${index}`}
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
