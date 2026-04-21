import * as React from "react";
import { Button, Modal as HeroModal, ScrollShadow } from "@heroui/react";

import { cn } from "components/lib/utils";

const ModalCompatContext = React.createContext(null);

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

function useModalCompatContext() {
  const context = React.useContext(ModalCompatContext);

  if (!context) {
    throw new Error("Modal compatibility components must be used inside <Modal>.");
  }

  return context;
}

function createCloseHandler(setOpen, onClose) {
  return () => {
    setOpen(false);
    onClose?.();
  };
}

export function useDisclosure(options = {}) {
  const controlled = typeof options.isOpen === "boolean";
  const [internalOpen, setInternalOpen] = React.useState(
    Boolean(options.defaultOpen ?? options.isOpen)
  );

  const isOpen = controlled ? Boolean(options.isOpen) : internalOpen;

  const setOpen = React.useCallback(
    (nextValue) => {
      const nextOpen =
        typeof nextValue === "boolean" ? nextValue : !isOpen;

      if (!controlled) {
        setInternalOpen(nextOpen);
      }

      options.onChange?.(nextOpen);

      if (nextOpen) {
        options.onOpen?.();
      } else {
        options.onClose?.();
      }
    },
    [controlled, isOpen, options]
  );

  return {
    isOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onOpenChange: setOpen,
  };
}

export function Modal({
  children,
  className,
  classNames,
  hideCloseButton = false,
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  isOpen = false,
  onClose,
  onOpenChange,
  backdrop = "opaque",
  placement = "center",
  radius = "md",
  scrollBehavior = "inside",
  size = "md",
}) {
  const setOpen = React.useCallback(
    (nextOpen) => {
      onOpenChange?.(nextOpen);

      if (!nextOpen) {
        onClose?.();
      }
    },
    [onClose, onOpenChange]
  );

  const contextValue = React.useMemo(
    () => ({
      backdrop,
      className,
      classNames,
      hideCloseButton,
      isDismissable,
      isKeyboardDismissDisabled,
      isOpen,
      onClose,
      placement,
      radius,
      scrollBehavior,
      setOpen,
      size,
    }),
    [
      backdrop,
      className,
      classNames,
      hideCloseButton,
      isDismissable,
      isKeyboardDismissDisabled,
      isOpen,
      onClose,
      placement,
      radius,
      scrollBehavior,
      setOpen,
      size,
    ]
  );

  return (
    <ModalCompatContext.Provider value={contextValue}>
      <HeroModal>{children}</HeroModal>
    </ModalCompatContext.Provider>
  );
}

export function ModalContent({ children, className }) {
  const context = useModalCompatContext();
  const close = createCloseHandler(context.setOpen, context.onClose);

  return (
    <HeroModal.Backdrop
      variant={context.backdrop}
      isDismissable={context.isDismissable}
      isKeyboardDismissDisabled={context.isKeyboardDismissDisabled}
      isOpen={context.isOpen}
      onOpenChange={context.setOpen}
      className={cn(context.classNames?.backdrop)}
    >
      <HeroModal.Container
        placement={context.placement}
        scroll={context.scrollBehavior === "outside" ? "outside" : "inside"}
        size={context.size}
      >
        <HeroModal.Dialog
          className={cn(
            context.className,
            radiusClasses[context.radius],
            className
          )}
        >
          {!context.hideCloseButton ? <HeroModal.CloseTrigger /> : null}
          {typeof children === "function" ? children(close) : children}
        </HeroModal.Dialog>
      </HeroModal.Container>
    </HeroModal.Backdrop>
  );
}

export function ModalHeader({ children, className, ...props }) {
  const context = useModalCompatContext();

  return (
    <HeroModal.Header
      className={cn(context.classNames?.header, className)}
      {...props}
    >
      {children}
    </HeroModal.Header>
  );
}

export function ModalBody({ children, className, ...props }) {
  const context = useModalCompatContext();

  return (
    <HeroModal.Body
      className={cn(context.classNames?.body, className)}
      {...props}
    >
      {children}
    </HeroModal.Body>
  );
}

export function ModalFooter({ children, className, ...props }) {
  const context = useModalCompatContext();

  return (
    <HeroModal.Footer
      className={cn(context.classNames?.footer, className)}
      {...props}
    >
      {children}
    </HeroModal.Footer>
  );
}

export { Button, ScrollShadow };
