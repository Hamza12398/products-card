import React from "react";
import { ReactNode } from "react";

interface IProps {
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, className, ...rest }: IProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;