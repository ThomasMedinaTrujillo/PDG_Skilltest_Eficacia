import React from 'react';
import { tokens } from '../Token';

export interface MobileButtonProps {
  className?: string;
  color?: 'primary' | 'error';
  iconEnd?: React.ReactNode;
  iconStart?: React.ReactNode;
  label?: string;
  orientation?: 'left' | 'center';
  showIconEnd?: boolean;
  showIconStart?: boolean;
  size?: 'small' | 'medium';
  state?: 'active' | 'disable' | 'pressed';
  style?: 'contained' | 'outline' | 'text';
  onClick?: () => void;
}

const MobileButton: React.FC<MobileButtonProps> = ({
  className,
  color = 'primary',
  iconEnd,
  iconStart,
  label = 'button',
  orientation = 'center',
  showIconEnd = false,
  showIconStart = false,
  size = 'small',
  state = 'active',
  style = 'contained',
  onClick
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: orientation === 'center' ? 'center' : 'space-between',
      gap: tokens.spacing.sm,
      borderRadius: tokens.radius.sm,
      cursor: state === 'disable' ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: '"Solomon Sans SemiBold", sans-serif',
      fontWeight: 600,
      border: 'none',
      outline: 'none',
      width: '339px'
    };

    // Size styles
    const sizeStyles = size === 'small' 
      ? { padding: `${tokens.spacing.paddingMd} ${tokens.spacing.sm}` }
      : { padding: `${tokens.spacing.paddingLg} ${tokens.spacing.sm}` };

    // Color and style combinations
    let colorStyles = {};
    
    if (style === 'contained') {
      if (color === 'primary') {
        colorStyles = {
          backgroundColor: tokens.colors.primary,
          color: tokens.colors.white
        };
      } else if (color === 'error') {
        colorStyles = {
          backgroundColor: tokens.colors.error,
          color: tokens.colors.white
        };
      }
    } else if (style === 'outline') {
      if (color === 'primary') {
        colorStyles = {
          backgroundColor: 'transparent',
          color: tokens.colors.primary,
          border: `2px solid ${tokens.colors.primary}`
        };
      } else if (color === 'error') {
        colorStyles = {
          backgroundColor: 'transparent',
          color: tokens.colors.error,
          border: `2px solid ${tokens.colors.error}`
        };
      }
    } else if (style === 'text') {
      if (color === 'primary') {
        if (state === 'pressed') {
          colorStyles = {
            backgroundColor: 'rgba(0, 65, 163, 0.1)',
            color: tokens.colors.primary
          };
        } else {
          colorStyles = {
            backgroundColor: 'transparent',
            color: tokens.colors.primary
          };
        }
      } else if (color === 'error') {
        if (state === 'pressed') {
          colorStyles = {
            backgroundColor: 'rgba(202, 73, 73, 0.2)',
            color: tokens.colors.error
          };
        } else {
          colorStyles = {
            backgroundColor: 'transparent',
            color: tokens.colors.error
          };
        }
      }
    }

    // State styles
    let stateStyles = {};
    if (state === 'disable') {
      stateStyles = {
        opacity: 0.5,
        cursor: 'not-allowed'
      };
    } else if (state === 'pressed') {
      stateStyles = {
        transform: 'scale(0.98)'
      };
    }

    return {
      ...baseStyles,
      ...sizeStyles,
      ...colorStyles,
      ...stateStyles
    };
  };

  const getTextStyles = () => {
    return {
      fontSize: size === 'small' ? '14px' : '16px',
      lineHeight: 'normal',
      textAlign: 'center' as const,
      whiteSpace: 'nowrap' as const,
      flex: orientation === 'left' ? 1 : 'auto'
    };
  };

  const buttonStyles = getButtonStyles();
  const textStyles = getTextStyles();

  return (
    <button
      className={className}
      style={buttonStyles}
      onClick={onClick}
      disabled={state === 'disable'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm, width: '100%' }}>
        {showIconStart && (
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {iconStart || (
              <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>←</span>
              </div>
            )}
          </div>
        )}

        <span style={textStyles}>
          {label}
        </span>

        {showIconEnd && (
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {iconEnd || (
              <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>→</span>
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default MobileButton;
