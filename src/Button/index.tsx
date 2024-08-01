import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  dangerous?: boolean;
};

export const Button = ({
  className,
  dangerous = false,
  ...props
}: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
