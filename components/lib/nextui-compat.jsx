import * as React from "react";
import { Button, Modal as HeroModal, ScrollShadow } from "@heroui/react";

import { cn } from "components/lib/utils";

const ModalCompatContext = React.createContext(null);
const heroSupportedSizes = new Set(["xs", "sm", "md", "lg", "full", "cover"]);

const radiusClasses = {
  none: "!rounded-none",
  sm: "!rounded-xl",
  md: "!rounded-2xl",
  lg: "!rounded-3xl",
  full: "!rounded-full",
};

const legacySizeClasses = {
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

function getNormalizedSize(size) {
  if (!size) {
    return "md";
  }

  if (heroSupportedSizes.has(size)) {
    return size;
  }

  if (Object.hasOwn(legacySizeClasses, size)) {
    return "lg";
  }

  return "md";
}

function getLegacySizeClass(size) {
  return legacySizeClasses[size] ?? "";
}

function extractTextContent(node) {
  if (node == null || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).filter(Boolean).join(" ");
  }

  if (React.isValidElement(node)) {
    return extractTextContent(node.props.children);
  }

  return "";
}

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
  ...dialogProps
}) {
  const normalizedSize = getNormalizedSize(size);

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
      normalizedSize,
      dialogProps,
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
      normalizedSize,
      dialogProps,
    ]
  );

  return <ModalCompatContext.Provider value={contextValue}>{children}</ModalCompatContext.Provider>;
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
        size={context.normalizedSize}
        className={cn(context.classNames?.wrapper)}
      >
        <HeroModal.Dialog
          {...context.dialogProps}
          className={cn(
            "w-full bg-white !p-0 !shadow-2xl",
            getLegacySizeClass(context.size),
            context.classNames?.base,
            radiusClasses[context.radius],
            context.className,
            className
          )}
        >
          {!context.hideCloseButton ? (
            <HeroModal.CloseTrigger
              className={cn(
                "absolute right-4 top-4 z-10 rounded-full bg-white/90 text-slate-500 shadow-sm hover:bg-white",
                context.classNames?.closeButton
              )}
            />
          ) : null}
          {typeof children === "function" ? children(close) : children}
        </HeroModal.Dialog>
      </HeroModal.Container>
    </HeroModal.Backdrop>
  );
}

export function ModalHeader({ children, className, ...props }) {
  const context = useModalCompatContext();
  const accessibleTitle = React.useMemo(
    () => extractTextContent(children).replace(/\s+/g, " ").trim(),
    [children]
  );

  return (
    <HeroModal.Header
      className={cn(
        "!mb-0 flex w-full flex-row flex-initial items-center gap-0 px-6 pt-6",
        context.classNames?.header,
        className
      )}
      {...props}
    >
      {accessibleTitle ? (
        <HeroModal.Heading className="sr-only">{accessibleTitle}</HeroModal.Heading>
      ) : null}
      {children}
    </HeroModal.Header>
  );
}

export function ModalBody({ children, className, ...props }) {
  const context = useModalCompatContext();

  return (
    <HeroModal.Body
      className={cn(
        "!mt-0 min-h-0 flex flex-1 flex-col gap-3 px-6 py-4",
        context.classNames?.body,
        className
      )}
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
      className={cn(
        "!mt-0 flex flex-row items-center justify-end gap-2 px-6 pb-6 pt-2",
        context.classNames?.footer,
        className
      )}
      {...props}
    >
      {children}
    </HeroModal.Footer>
  );
}

export { Button, ScrollShadow };
