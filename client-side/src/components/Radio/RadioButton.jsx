import React from "react";

const RadioButton = ({
  id,
  name,
  labels,
  checkedValue,
  onChange,
  message,
  required,
  title,
}) => {
  const color = message ? "red" : "blue";

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-${color}-700 dark:text-${color}-500`}
      >
        <p className="inline">{title}</p>
        {required && <p className="inline text-red-600">*</p>}
      </label>
      {labels.map((label, index) => (
        <div className="flex items-center mb-1 pt-2" key={index}>
          <input
            id={`radio-${index}`}
            type="radio"
            name={name}
            value={label}
            className={`w-4 h-4 border-2 border-gray-400 focus:ring-2 focus:ring-${color}-300 dark:focus:ring-${color}-600 dark:focus:bg-${color}-600 dark:bg-gray-700 dark:border-gray-600`}
            checked={checkedValue === label}
            onChange={() => onChange(label)}
          />
          <label
            htmlFor={`radio-${index}`}
            className={`block ml-2 text-sm pt-2 font-medium text-${color}-900 dark:text-${color}-300`}
          >
            {label}
          </label>
        </div>
      ))}
      {message && (
        <p className={`mt-2 text-sm text-${color}-600 dark:text-${color}-500`}>
          <span className="font-medium">{message}</span>
        </p>
      )}
    </div>
  );
};

export default RadioButton;
