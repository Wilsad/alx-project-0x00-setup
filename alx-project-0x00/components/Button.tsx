import React from "react";
import { ButtonProps } from "@/interfaces"; 

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  styles = "", 
}) => {
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };
  return (
    <button
      className={`bg-blue-500 text-white font-medium ${sizeClasses[size]} ${shape} ${className} ${styles}`} // <-- Apply the styles prop here
    >
      {title}
    </button>
  );
};

export default Button;