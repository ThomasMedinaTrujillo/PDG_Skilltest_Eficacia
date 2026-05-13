import React from "react"
import { cn } from "../lib/cn"
import { tokens } from "../Token"

export interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large"
  states?: "default" | "pressed" | "disabled"
  placeholder?: string
}

export const Buttons = React.forwardRef<HTMLButtonElement, ButtonsProps>(
  ({ className, size = "small", states = "disabled", placeholder = "Button", ...props }, ref) => {
    const isSmall = size === "small"
    const isLarge = size === "large"
    
    // Resolve colors from tokens
    let bgColor: string = tokens.colors.neutralBbvaBlack400
    let textColor: string = tokens.colors.neutralBbvaBlack600
    
    if (states === "default") {
      bgColor = tokens.colors.brandPrimaryCoreBlue200
      textColor = tokens.colors.neutralBbvaBlack100
    } else if (states === "pressed") {
      bgColor = tokens.colors.brandPrimaryCoreBlue400
      textColor = tokens.colors.neutralBbvaBlack200
    }   

    // Resolve spacing from tokens
    const paddingY = tokens.spacing.md // 16px
    const paddingX = isSmall ? tokens.spacing.md : isLarge ? tokens.spacing.xl : tokens.spacing.lg
    const width = isSmall ? "130px" : isLarge ? "358px" : "180px"

    return (
      <button
        ref={ref}
        disabled={states === "disabled"}
        className={cn(
          "flex items-center justify-center border-none outline-none",
          states !== "disabled" ? "cursor-pointer" : "opacity-80 cursor-not-allowed",
          className
        )}
        style={{
          backgroundColor: bgColor,
          border: "none",
          borderRadius: tokens.radius.sm,
          width,
          padding: `${paddingY} ${paddingX}`,
        }}
        {...props}
      >
        <span
          className="text-center flex-1"
          style={{
            color: textColor,
            fontFamily: tokens.typography.subtitle1Medium.family,
            fontSize: tokens.typography.subtitle1Medium.size,
            fontWeight: tokens.typography.subtitle1Medium.weight,
          }}
        >
          {placeholder}
        </span>
      </button>
    )
  }
)
Buttons.displayName = "Buttons"
