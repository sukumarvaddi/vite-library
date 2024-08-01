import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<"button"> & {
    dangerous?: boolean;
};
export declare const Button: ({ className, dangerous, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
