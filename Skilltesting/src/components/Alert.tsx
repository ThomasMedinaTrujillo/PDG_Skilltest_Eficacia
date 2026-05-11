import React from 'react';
import { tokens } from '../Token';

export interface AlertProps {
  className?: string;
  showIcon?: boolean;
  style?: 'default' | 'success' | 'warning' | 'pending';
  textAlert?: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  className,
  showIcon = true,
  style = 'default',
  textAlert = 'Estado',
  onClose
}) => {
  const getAlertStyles = () => {
    switch (style) {
      case 'success':
        return {
          backgroundColor: '#3bd4ae',
          color: tokens.colors.white,
          borderColor: '#3bd4ae'
        };
      case 'warning':
        return {
          backgroundColor: '#ca4949',
          color: tokens.colors.white,
          borderColor: '#ca4949'
        };
      case 'pending':
        return {
          backgroundColor: '#ffcd00',
          color: tokens.colors.primary,
          borderColor: '#ffcd00'
        };
      default:
        return {
          backgroundColor: tokens.colors.white,
          color: tokens.colors.gray200,
          borderColor: tokens.colors.divider
        };
    }
  };

  const alertStyles = getAlertStyles();

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.sm,
        padding: `${tokens.spacing.paddingMd} ${tokens.spacing.paddingLg}`,
        borderRadius: tokens.radius.sm,
        backgroundColor: alertStyles.backgroundColor,
        boxShadow: tokens.shadows.component,
        minHeight: '44px',
        width: '339px'
      }}
    >
      {showIcon && (
        <div
          style={{
            width: '18px',
            height: '18px',
            borderRadius: tokens.radius.sm,
            backgroundColor: style === 'default' ? tokens.colors.gray200 : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {style !== 'default' && (
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: alertStyles.color
              }}
            />
          )}
        </div>
      )}
      
      <div
        style={{
          flex: 1,
          padding: tokens.spacing.xs,
          minWidth: 0
        }}
      >
        <p
          style={{
            ...tokens.typography.textXs,
            color: alertStyles.color,
            margin: 0,
            fontFamily: '"Nunito Sans", sans-serif'
          }}
        >
          {textAlert}
        </p>
      </div>

      {(style === 'success' || style === 'warning' || style === 'pending') && (
        <button
          onClick={onClose}
          style={{
            width: '18px',
            height: '18px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            padding: 0
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: alertStyles.color,
                transform: 'rotate(45deg)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: alertStyles.color,
                transform: 'rotate(-45deg)'
              }}
            />
          </div>
        </button>
      )}

      {style === 'default' && (
        <div
          style={{
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: tokens.colors.gray200,
                transform: 'rotate(45deg)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '2px',
                backgroundColor: tokens.colors.gray200,
                transform: 'rotate(-45deg)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
