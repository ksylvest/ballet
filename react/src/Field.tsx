import { type HTMLAttributes, forwardRef } from "react";

export type FieldElement = HTMLDivElement;
export type FieldProps = HTMLAttributes<FieldElement>;

const FIELD_CLASS = "ballet__field";

export const Field = forwardRef<FieldElement, FieldProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={FIELD_CLASS} {...props} />
  ),
);
