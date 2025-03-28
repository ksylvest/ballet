import { clsx } from "clsx";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Color } from "./types/color";

export type ButtonProps = {
  full?: boolean;
  color?: Color;
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => (
  <button ref={ref} className={clsx("ballet__button", className)} {...props}>
    {children}
  </button>
));
