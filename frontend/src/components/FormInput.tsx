import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text", // Default to text if type isn't provided
  ...rest
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="inline-flex justify-between w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        style={{
          height: "2.5rem",
          // backgroundColor: "#e2e8f0", // A darker shade for the background
          borderRadius: "0.25rem", // Less rounded corners
        }}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
