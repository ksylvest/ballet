import { type ButtonHTMLAttributes, forwardRef } from "react";

import clsx from "clsx";

export type ButtonColor = "slate" | "indigo" | "red" | "green" | "blue";
export type ButtonElement = HTMLButtonElement;
export type ButtonProps = ButtonHTMLAttributes<ButtonElement> & {
  color?: ButtonColor;
};

const BUTTON_CLASS = "ballet__button";
const BUTTON_COLOR_CLASS: Record<ButtonColor, string> = {
  slate: "ballet__button--slate",
  indigo: "ballet__badge--indigo",
  red: "ballet__badge--red",
  green: "ballet__badge--green",
  blue: "ballet__badge--blue",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "slate", className, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(BUTTON_CLASS, BUTTON_COLOR_CLASS[color], className)}
      {...props}
    />
  ),
);
