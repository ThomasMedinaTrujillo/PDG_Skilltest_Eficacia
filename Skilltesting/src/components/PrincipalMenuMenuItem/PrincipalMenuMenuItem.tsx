import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

const logoutIconPrimary = 'http://localhost:3845/assets/9147d6353275fa6f778bfdb6c0b69bb55002d1cd.svg'
const logoutIconSecondary = 'http://localhost:3845/assets/a3a6d19c0f5431d7c44517968f5ae333d4601e35.svg'

function LogoutIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn('ds-principal-menu-item__icon', className)}
      aria-hidden
      style={{ display: 'block', position: 'relative', width: 24, height: 24, flexShrink: 0 }}
    >
      <span style={{ position: 'absolute', inset: '8.33% 8.33% 8.33% 37.5%' }}>
        <img alt="" src={logoutIconPrimary} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
      <span style={{ position: 'absolute', inset: '32.93% 62.49% 32.93% 8.33%' }}>
        <img alt="" src={logoutIconSecondary} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

export interface PrincipalMenuMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode | null
  itemMenuText?: string
}

export const PrincipalMenuMenuItem = React.forwardRef<HTMLDivElement, PrincipalMenuMenuItemProps>(
  ({ className, icon = null, itemMenuText = 'Text', children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ds-principal-menu-item', className)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          width: 342,
          padding: 12,
          backgroundColor: tokens.colors.white,
          fontFamily: tokens.typography.body.fontFamily,
          ...style,
        }}
        {...props}
      >
        {icon || <LogoutIcon />}
        <div
          style={{
            color: tokens.colors.buttonBackground,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '100%',
            fontStyle: 'normal',
          }}
        >
          {itemMenuText}
        </div>
        {children}
      </div>
    )
  },
)

PrincipalMenuMenuItem.displayName = 'PrincipalMenuMenuItem'
