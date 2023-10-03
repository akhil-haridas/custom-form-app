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
  title,
  required
}) => {
  return (
    <div className="mb-6">
      <label
        for="username-error"
        class="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-500"
      >
        <p className="inline">{title}</p>
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
    </div>
  );
};

export default SelectInput;
