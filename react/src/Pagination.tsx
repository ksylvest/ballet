import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type PaginationElement = HTMLDivElement;
export type PaginationProps = HTMLAttributes<PaginationElement>;
export type PaginationLinksElement = HTMLDivElement;
export type PaginationLinksProps = HTMLAttributes<PaginationLinksElement>;
export type PaginationSummaryElement = HTMLDivElement;
export type PaginationSummaryProps = HTMLAttributes<PaginationSummaryElement>;

const PAGINATION_CLASS = "ballet__pagination";
const PAGINATION_CONTENT_CLASS = "ballet__pagination__content";
const PAGINATION_SUMMARY_CLASS = "ballet__pagination__summary";

export const Pagination = forwardRef<PaginationElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(PAGINATION_CLASS, className)} {...props} />
  ),
);

export const PaginationContent = forwardRef<PaginationElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(PAGINATION_CONTENT_CLASS, className)}
      {...props}
    />
  ),
);

export const PaginationSummary = forwardRef<PaginationElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(PAGINATION_SUMMARY_CLASS, className)}
      {...props}
    />
  ),
);
