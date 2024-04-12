import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: IProps) {
  return (
    <input
      className="border-[1px] border-gray-300 shadow-md focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 rounded-md pw-3 py-3 text-md"
      {...rest}
    />
  );
}
