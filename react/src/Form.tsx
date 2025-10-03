import { HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type FormElement = HTMLFormElement;
export type FormProps = HTMLAttributes<FormElement>;

const FORM_CLASS = "ballet__form";

export const Form = forwardRef<FormElement, FormProps>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={clsx(FORM_CLASS, className)} {...props} />
  ),
);
