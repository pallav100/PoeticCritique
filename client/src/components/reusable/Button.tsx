import React from "react";

interface ButtonProps {
  handleButtonClick?: any;
  disabled: boolean
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className="bg-blue-500 rounded-md px-3 py-1 text-white disabled:opacity-40"
      onClick={props.handleButtonClick}
    >
      Send
    </button>
  );
};
export default Button;