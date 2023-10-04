import React from "react";
import Select from "react-select";

const SelectInput = ({
  label,
  placeholder,
  options,
  isSearchable,
  id,
  name,
  value,
  onChange,
  message,
  required,
}) => {
  const color = message ? "red" : "blue"; 

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-${color}-700 dark:text-${color}-500`}
      >
        <p className="inline">{label}</p>
        {required && <p className="inline text-red-600">*</p>}
      </label>
      <Select
        className="font-sans"
        options={options}
        placeholder={placeholder || "Select an option"}
        isSearchable={isSearchable || false}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {message && (
        <p className={`mt-2 text-sm text-${color}-600 dark:text-${color}-500`}>
          <span className="font-medium">{message}</span>
        </p>
      )}
    </div>
  );
};

export default SelectInput;
