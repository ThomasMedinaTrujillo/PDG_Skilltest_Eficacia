import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

const addIcon = 'http://localhost:3845/assets/ae50abf1ed3a7f8b2535055340e6e7ed7d2d03f8.svg'
const removeIcon = 'http://localhost:3845/assets/809cc1d49086e1feaabcdf11ef85e0b351dcf9de.svg'

export interface CheckBoxStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'Add' | 'Remove'
}

export const CheckBoxStatus = React.forwardRef<HTMLDivElement, CheckBoxStatusProps>(
  ({ className, status = 'Add', children, style, ...props }, ref) => {
    const isRemove = status === 'Remove'

    return (
      <div
        ref={ref}
        className={cn('ds-checkbox-status', className)}
        style={{
          position: 'relative',
          width: 18.547,
          height: 17.773,
          flexShrink: 0,
          fontFamily: tokens.typography.body.fontFamily,
          ...style,
        }}
        {...props}
      >
        <div style={{ position: 'absolute', inset: 0, borderRadius: 3, backgroundColor: tokens.colors.buttonBackground }} />
        <span
          aria-hidden
          style={{
            position: 'absolute',
            width: 10.667,
            height: 10.667,
            left: isRemove ? 4.33 : 'calc(50% + 0.39px)',
            top: isRemove ? 4.33 : 'calc(50% + 0.78px)',
            transform: isRemove ? undefined : 'translate(-50%, -50%)',
          }}
        >
          <img alt="" src={isRemove ? removeIcon : addIcon} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </span>
        {children}
      </div>
    )
  },
)

CheckBoxStatus.displayName = 'CheckBoxStatus'
