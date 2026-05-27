import * as React from "react";
import { cn } from "@/lib/cn";

export type PopoverPlacement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "leftTop"
  | "leftBottom"
  | "right"
  | "rightTop"
  | "rightBottom";

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content" | "title"> {
  placement?: PopoverPlacement;
  title?: React.ReactNode;
  content?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      className,
      placement = "top",
      title = "Title",
      content = "Content",
      open,
      defaultOpen = true,
      trigger,
      onOpenChange,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : internalOpen;

    const handleTriggerClick = () => {
      const nextOpen = !isOpen;
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    };

    return (
      <div
        ref={ref}
        className={cn("ds-popover", `ds-popover--${placement}`, className)}
        data-node-id="1001:4452"
        {...props}
      >
        <button className="ds-popover__trigger" type="button" aria-expanded={isOpen} onClick={handleTriggerClick}>
          {trigger ?? "Popover"}
        </button>
        {isOpen ? (
          <div className="ds-popover__overlay" role="dialog">
            <span className="ds-popover__arrow" aria-hidden="true" />
            <div className="ds-popover__inner">
              {title ? <div className="ds-popover__title">{title}</div> : null}
              <div className="ds-popover__content">{children ?? content}</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  },
);

Popover.displayName = "Popover";
