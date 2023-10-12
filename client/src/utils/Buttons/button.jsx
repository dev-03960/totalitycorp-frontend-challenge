import React from "react";
import "./button.scss";
const Button = ({
  label = "Button",
  type = "button",
  className = "",
 disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;