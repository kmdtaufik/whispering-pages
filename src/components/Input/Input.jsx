import React from "react";
import clsx from "clsx";
// import PropTypes from "prop-types";

const variantClasses = {
  default: "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
  error: "border-red-500 focus:ring-red-500 focus:border-red-500",
  success: "border-green-500 focus:ring-green-500 focus:border-green-500",
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const Input = ({
  label,
  name,
  type = "text",
  variant = "default",
  size = "md",
  fullWidth = false,
  errorMessage = "",
  className = "",
  ...props
}) => {
  return (
    <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        className={clsx(
          "outline-none transition-all",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
      {variant === "error" && errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

// Input.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   variant: PropTypes.oneOf(["default", "error", "success"]),
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   fullWidth: PropTypes.bool,
//   errorMessage: PropTypes.string,
//   className: PropTypes.string,
// };

export default Input;
