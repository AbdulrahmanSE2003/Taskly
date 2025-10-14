import React from "react";

const Button = ({ children, onClick, className, bg }) => {
  return (
    <button
      onClick={onClick}
      className={` px-4 py-2 text-sm font-medium text-white ${bg || "bg-red-600"} rounded-lg hover:bg-red-700 transition-colors capitalize cursor-pointer ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
