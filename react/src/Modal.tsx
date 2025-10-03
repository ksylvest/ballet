import {
  type FC,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import { JSX } from "react/jsx-runtime";

import { clsx } from "clsx";

export type ModalContainerElement = HTMLDivElement;
export type ModalContainerProps = HTMLAttributes<ModalContainerElement>;
export type ModalDialogElement = HTMLDivElement;
export type ModalDialogProps = HTMLAttributes<ModalDialogElement>;
export type ModalVignetteElement = HTMLDivElement;
export type ModalVignetteProps = HTMLAttributes<ModalVignetteElement>;
export type ModalHeaderElement = HTMLDivElement;
export type ModalHeaderProps = HTMLAttributes<ModalHeaderElement>;
export type ModalContentElement = HTMLDivElement;
export type ModalContentProps = HTMLAttributes<ModalContentElement>;
export type ModalFooterElement = HTMLDivElement;
export type ModalFooterProps = HTMLAttributes<ModalFooterElement>;

const MODAL_CONTAINER_CLASS = "ballet__modal__container";
const MODAL_VIGNETTE_CLASS = "ballet__modal__vignette";
const MODAL_DIALOG_CLASS = "ballet__modal__dialog";
const MODAL_HEADER_CLASS = "ballet__modal__header";
const MODAL_CONTENT_CLASS = "ballet__modal__content";
const MODAL_FOOTER_CLASS = "ballet__modal__footer";

export const Modal: FC<{
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}> = ({ header, content, footer }) => (
  <ModalVignette>
    <ModalContainer>
      <ModalDialog>
        {header && <ModalHeader>{header}</ModalHeader>}
        {content && <ModalContent>{content}</ModalContent>}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalDialog>
    </ModalContainer>
  </ModalVignette>
);

export const ModalContainer = forwardRef<
  ModalContainerElement,
  ModalContainerProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(MODAL_CONTAINER_CLASS, className)}
    {...props}
  />
));

export const ModalVignette = forwardRef<
  ModalVignetteElement,
  ModalVignetteProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(MODAL_VIGNETTE_CLASS, className)} {...props} />
));

export const ModalDialog = forwardRef<
  ModalContainerElement,
  ModalContainerProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(MODAL_DIALOG_CLASS, className)} {...props} />
));

export const ModalHeader = forwardRef<
  ModalContainerElement,
  ModalContainerProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(MODAL_HEADER_CLASS, className)} {...props} />
));

export const ModalContent = forwardRef<
  ModalContainerElement,
  ModalContainerProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(MODAL_CONTENT_CLASS, className)} {...props} />
));

export const ModalFooter = forwardRef<
  ModalContainerElement,
  ModalContainerProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(MODAL_FOOTER_CLASS, className)} {...props} />
));
function FC<T>(
  arg0: ({
    header,
    content,
    footer,
  }: {
    header: any;
    content: any;
    footer: any;
  }) => JSX.Element,
) {
  throw new Error("Function not implemented.");
}
