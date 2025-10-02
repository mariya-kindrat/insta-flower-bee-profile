import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  icon: Icon,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4" aria-hidden={true} />}
        {label}
        {required && (
          <span className="text-red-600" aria-label="required">
            *
          </span>
        )}
        {!required && (
          <span className="text-graphite/60 text-xs">(optional)</span>
        )}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 transition-colors ${error
          ? "border-red-500 focus:ring-red-500/20"
          : "border-line focus:ring-graphite/20"
          }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;