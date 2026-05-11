import React from 'react';
import { tokens } from '../Token';

export interface InputProps {
  className?: string;
  alert?: boolean;
  icon?: React.ReactNode;
  labelText?: string;
  multilineText?: string;
  placeholder?: string;
  required?: boolean;
  state?: 'enable' | 'selected' | 'error';
  type?: 'textfield' | 'multiline';
  value?: string;
  onChange?: (value: string) => void;
  alertMessage?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  alert = false,
  icon,
  labelText = 'Label',
  multilineText = '',
  placeholder = 'Value',
  required = true,
  state = 'enable',
  type = 'textfield',
  value = '',
  onChange,
  alertMessage = 'Participación diferente de lo esperado'
}) => {
  const getInputStyles = () => {
    switch (state) {
      case 'selected':
        return {
          border: `2px solid ${tokens.colors.primary}`,
          backgroundColor: tokens.colors.white,
          color: tokens.colors.primary
        };
      case 'error':
        return {
          border: `2px solid ${tokens.colors.error}`,
          backgroundColor: tokens.colors.white,
          color: tokens.colors.error
        };
      default:
        return {
          border: `1px solid ${tokens.colors.gray200}`,
          backgroundColor: tokens.colors.white,
          color: '#99b3da'
        };
    }
  };

  const inputStyles = getInputStyles();
  const isMultiline = type === 'multiline';

  return (
    <div className={className} style={{ width: '339px' }}>
      {/* Label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: tokens.spacing.xs,
          marginBottom: tokens.spacing.xs,
          color: tokens.colors.primary,
          fontFamily: '"Solomon Sans SemiBold", sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          whiteSpace: 'nowrap'
        }}
      >
        <span>{labelText}</span>
        {required && <span>*</span>}
      </div>

      {/* Input Field */}
      <div
        style={{
          border: inputStyles.border,
          backgroundColor: inputStyles.backgroundColor,
          borderRadius: tokens.radius.sm,
          padding: tokens.spacing.sm,
          display: 'flex',
          alignItems: isMultiline ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          height: isMultiline ? '70px' : 'auto',
          minHeight: isMultiline ? '70px' : '44px'
        }}
      >
        {isMultiline ? (
          <textarea
            value={value || multilineText}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'none',
              resize: 'none',
              fontFamily: '"Solomon Sans Normal", sans-serif',
              fontSize: '14px',
              color: inputStyles.color,
              lineHeight: 'normal',
              minHeight: '54px'
            }}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'none',
              fontFamily: '"Solomon Sans Normal", sans-serif',
              fontSize: '14px',
              color: inputStyles.color,
              lineHeight: 'normal'
            }}
          />
        )}
        
        {icon && !isMultiline && (
          <div style={{ flexShrink: 0, marginLeft: tokens.spacing.sm }}>
            {icon}
          </div>
        )}
      </div>

      {/* Error Message */}
      {state === 'error' && (
        <div
          style={{
            marginTop: tokens.spacing.xs,
            fontFamily: '"Solomon Sans Normal", sans-serif',
            fontSize: '12px',
            color: tokens.colors.error,
            lineHeight: '17px'
          }}
        >
          Datos incorrectos
        </div>
      )}

      {/* Alert Message */}
      {alert && (
        <div
          style={{
            marginTop: tokens.spacing.xs,
            backgroundColor: '#ffcd00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
            borderRadius: '2px',
            height: '25px',
            width: state === 'error' ? '100%' : '336px'
          }}
        >
          <span
            style={{
              fontFamily: '"Solomon Sans Book", sans-serif',
              fontSize: '12px',
              color: tokens.colors.primary,
              lineHeight: '17px',
              width: '214px'
            }}
          >
            {alertMessage}
          </span>
          <button
            style={{
              width: '8px',
              height: '8px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  width: '100%',
                  height: '1px',
                  backgroundColor: tokens.colors.primary,
                  transform: 'rotate(45deg)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  width: '100%',
                  height: '1px',
                  backgroundColor: tokens.colors.primary,
                  transform: 'rotate(-45deg)'
                }}
              />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;
