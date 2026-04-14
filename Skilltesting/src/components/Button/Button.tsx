import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'contained' | 'outline' | 'text'
  color?: 'primary' | 'error'
  size?: 'small' | 'medium'
  state?: 'active' | 'disable' | 'pressed'
  orientation?: 'center' | 'left'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function getButtonColors(
  appearance: NonNullable<ButtonProps['appearance']>,
  color: NonNullable<ButtonProps['color']>,
  state: NonNullable<ButtonProps['state']>,
): React.CSSProperties {
  const isDisabled = state === 'disable'
  const isPressed = state === 'pressed'

  if (appearance === 'contained') {
    if (isDisabled) {
      return {
        backgroundColor: tokens.colors.buttonDisabled,
        color: tokens.colors.textDisabled,
      }
    }

    if (color === 'error') {
      return {
        backgroundColor: isPressed ? tokens.colors.buttonBgContentPressed : tokens.colors.warning,
        color: tokens.colors.white,
      }
    }

    return {
      backgroundColor: isPressed ? tokens.colors.buttonSelected : tokens.colors.buttonBackground,
      color: tokens.colors.white,
    }
  }

  if (appearance === 'outline') {
    const activeBorder = color === 'error' ? tokens.colors.warning : tokens.colors.buttonBackground
    const activeText = color === 'error' ? tokens.colors.warning : tokens.colors.buttonBackground

    return {
      backgroundColor: isPressed
        ? color === 'error'
          ? tokens.colors.buttonBgOutlineErrorPressed
          : tokens.colors.buttonBgOutlinePressed
        : 'transparent',
      border: `1px solid ${isDisabled ? tokens.colors.neutral500 : activeBorder}`,
      color: isDisabled ? tokens.colors.textDisabled : activeText,
    }
  }

  return {
    backgroundColor: isPressed
      ? color === 'error'
        ? tokens.colors.buttonBgContentPressed
        : tokens.colors.buttonBgOutlinePressed
      : 'transparent',
    color: state === 'disable'
      ? tokens.colors.textDisabled
      : color === 'error'
        ? tokens.colors.warning
        : tokens.colors.buttonBackground,
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      appearance = 'contained',
      color = 'primary',
      size = 'small',
      state = 'active',
      orientation = 'center',
      leftIcon,
      rightIcon,
      children = 'button',
      disabled,
      style,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled ?? state === 'disable'

    const sizeStyles: React.CSSProperties = {
      fontSize: size === 'small' ? tokens.typography.body.fontSize : tokens.spacing.md,
      padding:
        size === 'small'
          ? `${tokens.spacing.sm} ${tokens.spacing.sm}`
          : `${tokens.spacing.md} ${tokens.spacing.sm}`,
      minHeight: size === 'small' ? '41px' : '51px',
    }

    const alignStyles: React.CSSProperties = {
      justifyContent: orientation === 'left' ? 'space-between' : 'center',
      gap: tokens.spacing.sm,
    }

    return (
      <button
        ref={ref}
        className={cn(
          'ds-button',
          `ds-button--${appearance}`,
          `ds-button--${color}`,
          `ds-button--${size}`,
          `ds-button--${state}`,
          `ds-button--${orientation}`,
          className,
        )}
        disabled={isDisabled}
        style={{
          width: '100%',
          borderRadius: tokens.radius.sm,
          border: 'none',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          fontFamily: tokens.typography.body.fontFamily,
          fontWeight: 600,
          lineHeight: `${tokens.typography.body.lineHeight}%`,
          ...sizeStyles,
          ...alignStyles,
          ...getButtonColors(appearance, color, state),
          ...style,
        }}
        {...props}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: tokens.spacing.sm }}>
          {leftIcon}
          <span>{children}</span>
        </span>
        {orientation === 'left' && rightIcon}
        {orientation === 'center' && rightIcon && <span style={{ marginLeft: tokens.spacing.sm }}>{rightIcon}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'
