import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";

type MessageType = "normal" | "warning" | "success" | "error" | "loading";

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: MessageType;
  message?: string;
}

const messageIcons: Record<MessageType, string> = {
  normal: "src/assets/figma/f0368791938ad247642372dd3e26ba5053dc6fd0.svg",
  warning: "src/assets/figma/af1a8ed20deb234378a0344354e2e7346962bbb3.svg",
  success: "src/assets/figma/bc19af98810493a38315d913d33545cf8ebb8786.svg",
  error: "src/assets/figma/7251bfe77de606d4bf18c8a468ad1188d5970f21.svg",
  loading: "src/assets/figma/d8b7f9ca2c8f03ba5a1114f74a76a20bec9f192b.svg",
};

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, type = "normal", message, children, ...props }, ref) => {
    const label = children || message || "Normal message";

    return (
      <div
        ref={ref}
        className={cn("ds-message", `ds-message--${type}`, className)}
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: tokens.spacing.xs,
          padding: `${tokens.spacing.sm} ${tokens.spacing.sm}`,
          borderRadius: tokens.radius.lg,
          backgroundColor: tokens.colors.bgContainer,
          boxShadow: tokens.shadows.boxShadowSecondary,
        }}
        {...props}
      >
        <img
          alt=""
          src={messageIcons[type]}
          style={{ width: "16px", height: "16px" }}
        />
        <span
          style={{
            fontFamily: tokens.typography.baseNormal.fontFamily,
            fontSize: tokens.typography.baseNormal.fontSize,
            fontWeight: tokens.typography.baseNormal.fontWeight,
            lineHeight: tokens.typography.baseNormal.lineHeight,
            color: tokens.colors.text,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>
    );
  }
);

Message.displayName = "Message";
