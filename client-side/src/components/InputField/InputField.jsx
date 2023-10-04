import React from "react";

const InputField = ({
  id,
  label,
  placeholder,
  value,
  message,
  required,
  onChange,
}) => {
  const color = message ? "red" : "blue";
  const inputClasses = `border border-${color}-500 text-${color}-900 placeholder-${color}-700 text-sm rounded-lg focus:ring-${color}-500 focus:border-${color}-500 block w-full p-2.5 dark:bg-${color}-100 dark:border-${color}-400`;

  const handleInputChange = (event) => {
    event.preventDefault()
    onChange(event.target.value);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-${color}-700 dark:text-${color}-500`}
      >
        <p className="inline">{label}</p>
        {required && <p className="inline text-red-600">*</p>}
      </label>
      <input
        type="text"
        id={id}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange} 
      />
      {message && (
        <p className={`mt-2 text-sm text-${color}-600 dark:text-${color}-500`}>
          <span className="font-medium">{message}</span>
        </p>
      )}
    </div>
  );
};

export default InputField;
