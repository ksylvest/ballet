import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type SwitchElement = HTMLDivElement;
export type SwitchProps = HTMLAttributes<SwitchElement>;

const SWITCH_CLASS = "ballet__switch";

export const Switch = forwardRef<SwitchElement, SwitchProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(SWITCH_CLASS, className)} {...props} />
  ),
);
