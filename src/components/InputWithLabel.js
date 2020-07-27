import React from "react";

const InputWithLabel = ({id, type, label, placeholder, testId, onChange, value}) => {
  return (
    <span>
      <label htmlFor={id} className="p-3">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        data-testid={testId}
        onChange={onChange}
      />
    </span>
  );
};

export default InputWithLabel;
