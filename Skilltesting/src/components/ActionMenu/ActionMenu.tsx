import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

const ICON_EDIT = arrowRightIcon;
const ICON_DELETE = arrowRightIcon;

export interface ActionMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  onEdit?: () => void;
  onDelete?: () => void;
  editLabel?: string;
  deleteLabel?: string;
}

export const ActionMenu = React.forwardRef<HTMLDivElement, ActionMenuProps>(
  ({ className, onEdit, onDelete, editLabel = "Editar", deleteLabel = "Eliminar", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("ds-action-menu", className)}
        style={{
          background: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadows.card,
          padding: tokens.spacing.xs,
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.xs,
        }}
        {...props}
      >
        <button
          type="button"
          onClick={onEdit}
          className={cn("ds-action-menu__item", "ds-action-menu__item--edit")}
          style={{
            border: "none",
            background: "transparent",
            padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.xs,
            cursor: "pointer",
            color: tokens.colors.textPrimary,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            lineHeight: "1.4",
          }}
        >
          <img src={ICON_EDIT} alt="" style={{ width: "18px", height: "18px" }} />
          <span>{editLabel}</span>
        </button>

        <button
          type="button"
          onClick={onDelete}
          className={cn("ds-action-menu__item", "ds-action-menu__item--delete")}
          style={{
            border: "none",
            background: "transparent",
            padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.xs,
            cursor: "pointer",
            color: tokens.colors.textPrimary,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            lineHeight: "1.4",
          }}
        >
          <img src={ICON_DELETE} alt="" style={{ width: "18px", height: "18px" }} />
          <span>{deleteLabel}</span>
        </button>
      </div>
    );
  }
);

ActionMenu.displayName = "ActionMenu";
