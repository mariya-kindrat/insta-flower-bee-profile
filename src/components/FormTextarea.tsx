import React from "react";
import { FormTextareaProps } from "@/types";

const FormTextarea = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows = 6,
}: FormTextareaProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
        {required && (
          <span className="text-red-600" aria-label="required">
            {" "}*
          </span>
        )}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
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

export default FormTextarea;