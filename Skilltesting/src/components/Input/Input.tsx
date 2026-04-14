import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'enable' | 'selected' | 'error'
  type?: 'textField' | 'multiline'
  label?: string
  required?: boolean
  valueText?: string
  multilineText?: string
  rightIcon?: React.ReactNode
  showAlert?: boolean
  alertText?: string
  errorText?: string
}

function getFieldColors(state: NonNullable<InputProps['state']>): React.CSSProperties {
  if (state === 'selected') {
    return {
      borderColor: tokens.colors.primary,
      color: tokens.colors.primary,
    }
  }

  if (state === 'error') {
    return {
      borderColor: tokens.colors.warning,
      color: tokens.colors.warning,
    }
  }

  return {
    borderColor: tokens.colors.buttonDisabled,
    color: tokens.colors.ns400,
  }
}

export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  (
    {
      className,
      state = 'enable',
      type = 'textField',
      label = 'Label',
      required = true,
      valueText = 'Value',
      multilineText =
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      rightIcon,
      showAlert = false,
      alertText = 'Participacion diferente de lo esperado',
      errorText = 'Datos incorrectos',
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const colors = getFieldColors(state)
    const isMultiline = type === 'multiline'
    const displayText = isMultiline ? multilineText : valueText

    return (
      <div
        ref={ref}
        className={cn('ds-input', `ds-input--${state}`, `ds-input--${type}`, className)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.xs,
          width: '100%',
          ...style,
        }}
        {...props}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: tokens.spacing.xs,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            fontWeight: 600,
            lineHeight: `${tokens.typography.body.lineHeight}%`,
            color: tokens.colors.primary,
          }}
        >
          <span>{label}</span>
          {required && <span>*</span>}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: isMultiline ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: tokens.spacing.sm,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: tokens.radius.xs,
            backgroundColor: tokens.colors.white,
            padding: tokens.spacing.sm,
            color: colors.color,
            minHeight: isMultiline ? '70px' : '40px',
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            lineHeight: `${tokens.typography.body.lineHeight}%`,
          }}
        >
          <span style={{ flex: 1 }}>{displayText}</span>
          {rightIcon}
        </div>

        {state === 'error' && (
          <span
            style={{
              color: tokens.colors.warning,
              fontFamily: tokens.typography.caption.fontFamily,
              fontSize: tokens.typography.caption.fontSize,
              lineHeight: `${tokens.typography.caption.lineHeight}%`,
            }}
          >
            {errorText}
          </span>
        )}

        {showAlert && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '2px',
              backgroundColor: tokens.colors.pending,
              color: tokens.colors.primary,
              padding: `0 ${tokens.spacing.sm}`,
              minHeight: '25px',
              fontFamily: tokens.typography.caption.fontFamily,
              fontSize: tokens.typography.caption.fontSize,
              lineHeight: `${tokens.typography.caption.lineHeight}%`,
            }}
          >
            <span>{alertText}</span>
            <span aria-hidden>x</span>
          </div>
        )}

        {children}
      </div>
    )
  },
)

Input.displayName = 'Input'
