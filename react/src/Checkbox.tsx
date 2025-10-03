import { type InputHTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type CheckboxState = "valid" | "error";
export type CheckboxElement = HTMLInputElement;
export type CheckboxProps = Omit<InputHTMLAttributes<CheckboxElement>, "type">;

const CHECKBOX_CLASS = "ballet__checkbox";

export const Checkbox = forwardRef<CheckboxElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      ref={ref}
      className={clsx(CHECKBOX_CLASS, className)}
      {...props}
    />
  ),
);
