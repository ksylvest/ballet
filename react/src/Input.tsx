import { type InputHTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type InputState = "valid" | "error";
export type InputElement = HTMLInputElement;
export type InputProps = InputHTMLAttributes<InputElement> & {
  state?: InputState;
};

const INPUT_CLASS = "ballet__input";

export const INPUT_STATE_CLASS: Record<InputState, string> = {
  valid: "ballet__input--valid",
  error: "ballet__input--error",
};

export const Input = forwardRef<InputElement, InputProps>(
  ({ state, className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        INPUT_CLASS,
        state && INPUT_STATE_CLASS[state],
        className,
      )}
      {...props}
    />
  ),
);
