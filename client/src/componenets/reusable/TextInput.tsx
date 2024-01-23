import React, { useRef } from "react";

interface TextInputProps {
  value: string;
  handleChange?: any;
  disabled: boolean
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <textarea
      ref={textAreaRef}
      value={props.value}
      disabled={props.disabled}
      rows={5}
      className="w-full rounded-xl resize-none bg-transparent border border-gray-500 focus:outline-none focus:ring-none  focus:shadow-lg px-4 py-2 max-h-[200px] overflow-hidden disabled:opacity-60"
      placeholder="Type a haiku you want to review..."
      onChange={props.handleChange}

    ></textarea>
  );
};
export default TextInput;
