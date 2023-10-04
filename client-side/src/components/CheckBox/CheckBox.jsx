import React from "react";

const CheckBox = ({
  labels,
  selectedValues,
  onChange,
  title,
  required,
  message,
}) => {
  const color = message ? "red" : "blue";

  return (
    <div className="mb-6">
      <label
        htmlFor="username-error"
        className={`block mb-2 text-sm font-medium text-${color}-700 dark:text-${color}-500`}
      >
        <p className="inline">{title}</p>
        {required && <p className="inline text-red-600">*</p>}
      </label>
      <div className="flex flex-wrap max-w-full">
        {labels.map((label, index) => (
          <div
            className="flex items-center mb-1 pt-2 ml-[-15px] px-4"
            key={index}
          >
            <input
              id={`checkbox-${index}`}
              type="checkbox"
              value={label}
              className={`w-4 h-4 text-green-600 bg-gray-300 border-gray-600 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
              checked={selectedValues.includes(label)}
              onChange={(e) => onChange(label, e.target.checked)}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className={`ml-2 pt-2 text-sm font-medium text-${color}-900 dark:text-${color}-300`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      {message && (
        <p className={`mt-2 text-sm text-${color}-600 dark:text-${color}-500`}>
          <span className="font-medium">{message}</span>
        </p>
      )}
    </div>
  );
};

export default CheckBox;
