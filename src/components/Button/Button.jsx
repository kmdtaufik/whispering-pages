import React from "react";
import clsx from "clsx";
import Iconify from "../Iconify/Iconify";
// import PropTypes from "prop-types";

const variantClasses = {
  primary: "py-4 px-5 bg-primary text-white",
  secondary: "py-4 px-5 bg-secondary text-white",
  outline: "py-4 px-5 bg-transparent text-primary border-primary border-2",
  navItem: "py-4 px-5 bg-transparent text-secondary font-semibold",

  //   danger: "py-4 px-5 ",
};

const sizeClasses = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  className = "",
  leftIcon = "",
  rightIcon = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={clsx(
        "transition-all duration-200 cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        {
          "opacity-50 cursor-not-allowed": disabled || isLoading,
        },
        className
      )}
      {...props}
    >
      {leftIcon && <Iconify icon={leftIcon} />}
      {isLoading ? "Loading..." : children}
      {rightIcon && <Iconify icon={rightIcon} />}
    </button>
  );
};

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   type: PropTypes.oneOf(["button", "submit", "reset"]),
//   variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   disabled: PropTypes.bool,
//   isLoading: PropTypes.bool,
//   className: PropTypes.string,
// };

export default Button;
