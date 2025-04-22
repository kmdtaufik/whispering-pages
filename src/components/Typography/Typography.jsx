import React from "react";
// import PropTypes from "prop-types";
import clsx from "clsx";

const variantClasses = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base",
  small: "text-sm text-muted-foreground",
  lead: "text-xl text-muted-foreground",
  muted: "text-muted-foreground",
};

const Typography = ({ variant = "p", className = "", children, ...props }) => {
    // variant =       = p
    // variant = small = lead

  const Component = variant === "lead" ? "p" : variant; // lead uses <p> but different class = small
  return (
    <Component className={clsx(variantClasses[variant], className)} {...props} >
      {children}
    </Component>
  );
};

// Typography.propTypes = {
//   variant: PropTypes.oneOf([
//     "h1",
//     "h2",
//     "h3",
//     "h4",
//     "h5",
//     "h6",
//     "p",
//     "small",
//     "lead",
//     "muted",
//   ]),
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

export default Typography;
