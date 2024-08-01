import { ComponentProps } from "react";

export const Input = ({ className, ...props }: ComponentProps<"input">) => {
  return <input {...props} />;
};

export default Input;
