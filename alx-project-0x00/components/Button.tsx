import React from "react";

type Size = "small" | "medium" | "large";
type Shape = "rounded-sm" | "rounded-md" | "rounded-lg"; // Changed from rounded-full to rounded-lg

interface ButtonProps {
  title: string;
  size?: Size;
  shape?: Shape;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };
  return (
    <button
      className={`bg-blue-500 text-white font-medium ${sizeClasses[size]} ${shape} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;