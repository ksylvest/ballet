import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type WellElement = HTMLDivElement;
export type WellProps = HTMLAttributes<WellElement>;

const WELL_CLASS = "ballet__well";

export const Well = forwardRef<WellElement, WellProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(WELL_CLASS, className)} {...props} />
  ),
);
