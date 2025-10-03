import { type LabelHTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type LabelElement = HTMLLabelElement;
export type LabelProps = LabelHTMLAttributes<LabelElement>;

const LABEL_CLASS = "ballet__label";

export const Label = forwardRef<LabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={clsx(LABEL_CLASS, className)} {...props} />
  ),
);
