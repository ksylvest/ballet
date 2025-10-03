import { type HTMLAttributes, forwardRef } from "react";

export type FieldElement = HTMLTableElement;
export type FieldProps = HTMLAttributes<FieldElement>;

const TABLE_CLASS = "ballet__table";

export const Table = forwardRef<FieldElement, FieldProps>(
  ({ className, ...props }, ref) => (
    <div className={TABLE_CLASS}>
      <table ref={ref} {...props} />
    </div>
  ),
);
