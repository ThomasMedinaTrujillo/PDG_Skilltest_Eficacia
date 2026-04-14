import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

export interface AlertsStateProps extends React.HTMLAttributes<HTMLDivElement> {
  styleType?: 'default' | 'success' | 'pending' | 'warning'
  textAlert?: string
  showIcon?: boolean
}

function getAlertStyle(styleType: NonNullable<AlertsStateProps['styleType']>): React.CSSProperties {
  if (styleType === 'success') {
    return {
      backgroundColor: tokens.colors.success,
      color: tokens.colors.white,
    }
  }

  if (styleType === 'pending') {
    return {
      backgroundColor: tokens.colors.pending,
      color: tokens.colors.white,
    }
  }

  if (styleType === 'warning') {
    return {
      backgroundColor: tokens.colors.warning,
      color: tokens.colors.white,
    }
  }

  return {
    backgroundColor: tokens.colors.backgroundSecondary,
    color: tokens.colors.textCaption,
  }
}

export const AlertsState = React.forwardRef<HTMLDivElement, AlertsStateProps>(
  ({ className, styleType = 'default', textAlert = 'Estado', showIcon = true, children, style, ...props }, ref) => {
    const isDefault = styleType === 'default'

    return (
      <div
        ref={ref}
        className={cn('ds-alerts-state', `ds-alerts-state--${styleType}`, className)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: tokens.spacing.sm,
          borderRadius: tokens.radius.sm,
          padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
          boxShadow: tokens.shadows.card,
          ...getAlertStyle(styleType),
          ...style,
        }}
        {...props}
      >
        {showIcon && (
          <span aria-hidden style={{ fontSize: tokens.spacing.md, lineHeight: `${tokens.typography.body.lineHeight}%` }}>
            {isDefault ? 'i' : 'o'}
          </span>
        )}

        <span
          style={{
            flex: 1,
            fontFamily: tokens.typography.caption.fontFamily,
            fontSize: tokens.typography.caption.fontSize,
            fontWeight: tokens.typography.caption.fontWeight,
            lineHeight: `${tokens.typography.caption.lineHeight}%`,
          }}
        >
          {textAlert}
        </span>

        <span aria-hidden style={{ fontSize: tokens.spacing.md, lineHeight: `${tokens.typography.body.lineHeight}%` }}>
          x
        </span>
        {children}
      </div>
    )
  },
)

AlertsState.displayName = 'AlertsState'
