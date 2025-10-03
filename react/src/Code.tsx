import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type CodeElement = HTMLDivElement;
export type CodeProps = HTMLAttributes<CodeElement>;

const CODE_CLASS = "ballet__code";

export const Code = forwardRef<CodeElement, CodeProps>(
  ({ color = "slate", className, ...props }, ref) => (
    <div ref={ref} className={clsx(CODE_CLASS, className)} {...props} />
  ),
);
