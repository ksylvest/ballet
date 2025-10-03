import { type InputHTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type RadioState = "valid" | "error";
export type RadioElement = HTMLInputElement;
export type RadioProps = Omit<InputHTMLAttributes<RadioElement>, "type">;

const RADIO_CLASS = "ballet__radio";

export const Radio = forwardRef<RadioElement, RadioProps>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      ref={ref}
      className={clsx(RADIO_CLASS, className)}
      {...props}
    />
  ),
);
