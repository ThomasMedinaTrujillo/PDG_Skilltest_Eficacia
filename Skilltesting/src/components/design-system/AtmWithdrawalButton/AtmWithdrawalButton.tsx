import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type AtmWithdrawalButtonState = "default" | "pressed";

export interface AtmWithdrawalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  amount?: string;
  defaultPressed?: boolean;
  pressed?: boolean;
  state?: AtmWithdrawalButtonState;
  onPressedChange?: (pressed: boolean) => void;
}

export const AtmWithdrawalButton = React.forwardRef<HTMLButtonElement, AtmWithdrawalButtonProps>(
  (
    {
      amount = "$ 20.000",
      children,
      className,
      defaultPressed = false,
      onClick,
      onPressedChange,
      pressed,
      state,
      ...props
    },
    ref,
  ) => {
    const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
    const isPressed = state ? state === "pressed" : pressed ?? internalPressed;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextPressed = !isPressed;
      if (pressed === undefined && state === undefined) {
        setInternalPressed(nextPressed);
      }
      onPressedChange?.(nextPressed);
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "ds-component ds-atm-withdrawal-button",
          isPressed && "ds-atm-withdrawal-button--pressed",
          className,
        )}
        aria-pressed={isPressed}
        data-state={isPressed ? "pressed" : "default"}
        onClick={handleClick}
        {...props}
      >
        {children ?? amount}
      </button>
    );
  },
);

AtmWithdrawalButton.displayName = "AtmWithdrawalButton";
