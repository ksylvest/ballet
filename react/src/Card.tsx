import { type HTMLAttributes, forwardRef } from "react";

import { clsx } from "clsx";

export type CardElement = HTMLDivElement;
export type CardProps = HTMLAttributes<CardElement>;
export type CardHeaderElement = HTMLDivElement;
export type CardHeaderProps = HTMLAttributes<CardHeaderElement>;
export type CardContentElement = HTMLDivElement;
export type CardContentProps = HTMLAttributes<CardContentElement>;
export type CardFooterElement = HTMLDivElement;
export type CardFooterProps = HTMLAttributes<CardFooterElement>;

const CARD_CLASS = "ballet__card";
const CARD_HEADER_CLASS = "ballet__card__header";
const CARD_CONTENT_CLASS = "ballet__card__content";
const CARD_FOOTER_CLASS = "ballet__card__footer";

export const Card = forwardRef<CardElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(CARD_CLASS, className)} {...props} />
  ),
);

export const CardHeader = forwardRef<CardElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(CARD_HEADER_CLASS, className)} {...props} />
  ),
);

export const CardContent = forwardRef<CardElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(CARD_CONTENT_CLASS, className)} {...props} />
  ),
);

export const CardFooter = forwardRef<CardElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(CARD_FOOTER_CLASS, className)} {...props} />
  ),
);
