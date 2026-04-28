import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import alertIcon from "../../assets/icons/alert.svg";

const PHOTO_40 = "http://localhost:3845/assets/76968f9d7d897431c4ace3d4f1989e04d1b9c6b3.png";
const PHOTO_32 = "http://localhost:3845/assets/fa682a78fd57f4872faa35ec7177e57f75647e78.png";
const PHOTO_24 = "http://localhost:3845/assets/017ceb1dfb19c687bf7ae9ac54b74dd22721847b.png";
const PHOTO_18 = "http://localhost:3845/assets/183f930aa14855c98923f935a37d7f0286bf5bfd.png";
const PHOTO_92 = "http://localhost:3845/assets/28d4d09f955b7fa3bc10392e4f625607d752e255.png";
const BADGE_ICON = alertIcon;
const BADGE_ICON_LG = alertIcon;

type AvatarSize = "92" | "40" | "32" | "24" | "18";
type AvatarContent = "image" | "text";

export interface AvatarMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarText?: string;
  content?: AvatarContent;
  showBadge?: boolean;
  size?: AvatarSize;
}

const avatarSizeMap: Record<AvatarSize, string> = {
  "92": "92px",
  "40": "40px",
  "32": "32px",
  "24": "24px",
  "18": "18px",
};

const textStyleBySize: Record<AvatarSize, React.CSSProperties> = {
  "92": {
    fontFamily: tokens.typography.heading1.fontFamily,
    fontSize: "48px",
    fontWeight: tokens.typography.heading1.fontWeight,
    lineHeight: "1",
  },
  "40": {
    fontFamily: tokens.typography.heading1.fontFamily,
    fontSize: "20px",
    fontWeight: tokens.typography.heading1.fontWeight,
    lineHeight: "1",
  },
  "32": {
    fontFamily: tokens.typography.body.fontFamily,
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "1",
  },
  "24": {
    fontFamily: tokens.typography.body.fontFamily,
    fontSize: tokens.typography.caption.fontSize,
    fontWeight: tokens.typography.body.fontWeight,
    lineHeight: "1",
  },
  "18": {
    fontFamily: tokens.typography.body.fontFamily,
    fontSize: tokens.typography.caption.fontSize,
    fontWeight: tokens.typography.body.fontWeight,
    lineHeight: "1",
  },
};

const imageBySize: Record<AvatarSize, string> = {
  "92": PHOTO_92,
  "40": PHOTO_40,
  "32": PHOTO_32,
  "24": PHOTO_24,
  "18": PHOTO_18,
};

export const AvatarMobile = React.forwardRef<HTMLDivElement, AvatarMobileProps>(
  ({ className, avatarText = "AA", content = "image", showBadge = true, size = "92", ...props }, ref) => {
    const avatarSize = avatarSizeMap[size];
    const isText = content === "text";

    return (
      <div
        ref={ref}
        className={cn("ds-avatar-mobile", className)}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: avatarSize,
          height: avatarSize,
        }}
        {...props}
      >
        {isText ? (
          <span
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "9999px",
              background: tokens.colors.neutral300,
              color: tokens.colors.white,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              ...textStyleBySize[size],
            }}
          >
            {avatarText}
          </span>
        ) : (
          <img src={imageBySize[size]} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "9999px", objectFit: "cover" }} />
        )}

        {showBadge ? (
          <span
            style={{
              position: "absolute",
              right: size === "18" ? "-4px" : size === "24" ? "-2px" : size === "32" ? "-2px" : size === "40" ? "0" : "0",
              bottom: size === "18" ? "-4px" : size === "24" ? "-3px" : size === "32" ? "-1px" : size === "40" ? "0" : "0",
              width: size === "92" ? "34px" : "12px",
              height: size === "92" ? "34px" : "12px",
              borderRadius: "9999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: size === "92" ? "transparent" : tokens.colors.pending,
              padding: size === "92" ? tokens.spacing.none : "1px",
            }}
          >
            <img
              src={size === "92" ? BADGE_ICON_LG : BADGE_ICON}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        ) : null}
      </div>
    );
  }
);

AvatarMobile.displayName = "AvatarMobile";
