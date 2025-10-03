import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type ProgressElement = HTMLDivElement;
export type ProgressProps = HTMLAttributes<ProgressElement>;
export type ProgressBarColor = "slate" | "indigo" | "red" | "green" | "blue";
export type ProgressBarElement = HTMLDivElement;
export type ProgressBarProps = HTMLAttributes<ProgressBarElement> & {
  color?: ProgressBarColor;
  value: number;
};

const PROGRESS_CLASS = "ballet__progress";
const PROGRESS_BAR_CLASS = "ballet__progress__bar";
const PROGRESS_BAR_COLOR_CLASS: Record<ProgressBarColor, string> = {
  slate: "ballet__progress__bar--slate",
  indigo: "ballet__progress__bar--indigo",
  red: "ballet__progress__bar--red",
  green: "ballet__progress__bar--green",
  blue: "ballet__progress__bar--blue",
};

export const Progress = forwardRef<ProgressElement, ProgressProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(PROGRESS_CLASS, className)} {...props} />
  ),
);

export const ProgressBar = forwardRef<ProgressBarElement, ProgressBarProps>(
  ({ className, style, value, color = "slate", ...props }, ref) => (
    <div
      ref={ref}
      style={{ ...(style ?? {}), width: `${value * 100}%` }}
      className={clsx(
        PROGRESS_BAR_CLASS,
        PROGRESS_BAR_COLOR_CLASS[color],
        className,
      )}
      {...props}
    />
  ),
);
