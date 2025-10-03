import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type BadgeColor = "slate" | "indigo" | "red" | "green" | "blue";
export type BadgeElement = HTMLDivElement;
export type BadgeProps = HTMLAttributes<BadgeElement> & {
  color?: BadgeColor;
};

const BADGE_CLASS = "ballet__badge";

const BADGE_COLOR_CLASS: Record<BadgeColor, string> = {
  slate: "ballet__badge--slate",
  indigo: "ballet__badge--indigo",
  red: "ballet__badge--red",
  green: "ballet__badge--green",
  blue: "ballet__badge--blue",
};

export const Badge = forwardRef<BadgeElement, BadgeProps>(
  ({ color = "slate", className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(BADGE_CLASS, BADGE_COLOR_CLASS[color], className)}
      {...props}
    />
  ),
);
