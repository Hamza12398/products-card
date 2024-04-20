import React from "react";
import { ReactNode } from "react";

interface IProps {
  className: string;
  children: ReactNode;
  onClick?: () => void;
  width?: "w-full" | "w-fit";
}

function Button({ children, className, width, ...rest }: IProps) {
  return (
    <button className={`${className} ${width} rounded-md text-white p-2 duration-200`}{...rest}>
      {children}
    </button>
  );
}

export default Button;