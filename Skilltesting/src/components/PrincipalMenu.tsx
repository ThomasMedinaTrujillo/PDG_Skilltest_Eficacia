import React from 'react';
import { tokens } from '../Token';

export interface AvatarProps {
  className?: string;
  showBadge?: boolean;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  showBadge = true,
  size = 32
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0
      }}
    >
      {/* Avatar Image */}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: tokens.colors.gray200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <span style={{ fontSize: size * 0.6, color: tokens.colors.gray400 }}>
          👤
        </span>
      </div>

      {/* Badge */}
      {showBadge && (
        <div
          style={{
            position: 'absolute',
            bottom: '-1px',
            right: '-2px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ffcd00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: tokens.colors.white,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontSize: '8px', lineHeight: 1 }}>⭐</span>
          </div>
        </div>
      )}
    </div>
  );
};

export interface PrincipalMenuProps {
  className?: string;
  variant?: 'header' | 'floating';
  showItems?: boolean;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
  onItemClick?: (item: string) => void;
}

const PrincipalMenu: React.FC<PrincipalMenuProps> = ({
  className,
  variant = 'header',
  showItems = true,
  onMenuClick,
  onCloseClick,
  onItemClick
}) => {
  const menuItems = [
    'Configuración',
    'Documentos',
    'Reportes',
    'Notificaciones',
    'Configuración avanzada',
    'Preferencias',
    'Seguridad',
    'Ayuda',
    'Cerrar sesión',
    'Acerca de'
  ];

  if (variant === 'floating') {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadows.component,
          width: '375px',
          height: '810px',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${tokens.spacing.lg} ${tokens.spacing.md}`,
            borderBottom: `0.5px solid #99b3da`,
            backgroundColor: tokens.colors.primary
          }}
        >
          {/* Logo */}
          <div
            style={{
              height: '32px',
              width: '129px',
              display: 'flex',
              alignItems: 'center',
              color: tokens.colors.white,
              fontWeight: 'bold',
              fontSize: '18px'
            }}
          >
            EFICACIA
          </div>

          {/* Close Button */}
          <button
            onClick={onCloseClick}
            style={{
              width: '20px',
              height: '20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: tokens.radius.sm,
              color: tokens.colors.white
            }}
          >
            <span style={{ fontSize: '16px' }}>×</span>
          </button>
        </div>

        {/* Menu Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.lg,
            padding: tokens.spacing.md,
            flex: 1
          }}
        >
          {menuItems.slice(0, showItems ? 8 : 4).map((item, index) => (
            <button
              key={item}
              onClick={() => onItemClick?.(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '12px',
                backgroundColor: tokens.colors.white,
                border: 'none',
                borderRadius: tokens.radius.sm,
                cursor: 'pointer',
                width: '342px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = tokens.colors.bgGray;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = tokens.colors.white;
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: tokens.colors.primary
                }}
              >
                <span style={{ fontSize: '16px' }}>
                  {index % 3 === 0 ? '⚙️' : index % 3 === 1 ? '📄' : '📊'}
                </span>
              </div>

              {/* Text */}
              <span
                style={{
                  fontFamily: '"Solomon Sans SemiBold", sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: tokens.colors.primary,
                  lineHeight: 'normal',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: tokens.spacing.md,
            gap: tokens.spacing.sm
          }}
        >
          {menuItems.slice(-2).map((item) => (
            <button
              key={item}
              onClick={() => onItemClick?.(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '12px',
                backgroundColor: tokens.colors.white,
                border: 'none',
                borderRadius: tokens.radius.sm,
                cursor: 'pointer',
                width: '100%',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = tokens.colors.bgGray;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = tokens.colors.white;
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: tokens.colors.primary
                }}
              >
                <span style={{ fontSize: '16px' }}>
                  {item === 'Cerrar sesión' ? '🚪' : 'ℹ️'}
                </span>
              </div>

              {/* Text */}
              <span
                style={{
                  fontFamily: '"Solomon Sans SemiBold", sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: tokens.colors.primary,
                  lineHeight: 'normal',
                  flex: 1,
                  textAlign: 'left'
                }}
              >
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Header variant
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.md,
        padding: tokens.spacing.md,
        backgroundColor: tokens.colors.primary,
        width: '375px'
      }}
    >
      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        style={{
          width: '24px',
          height: '24px',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: tokens.radius.sm,
          color: tokens.colors.white
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ width: '16px', height: '2px', backgroundColor: tokens.colors.white }} />
          <div style={{ width: '16px', height: '2px', backgroundColor: tokens.colors.white }} />
          <div style={{ width: '16px', height: '2px', backgroundColor: tokens.colors.white }} />
        </div>
      </button>

      {/* Search Bar */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: tokens.spacing.sm,
          padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
          backgroundColor: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          minWidth: 0
        }}
      >
        {/* Search Icon */}
        <div
          style={{
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#70777b'
          }}
        >
          <span style={{ fontSize: '14px' }}>🔍</span>
        </div>

        {/* Search Text */}
        <span
          style={{
            fontFamily: '"Solomon Sans Normal", sans-serif',
            fontSize: '14px',
            color: '#70777b',
            whiteSpace: 'nowrap'
          }}
        >
          Buscar
        </span>
      </div>

      {/* User Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: tokens.spacing.md
        }}
      >
        {/* Notification Icon */}
        <button
          style={{
            width: '24px',
            height: '24px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: tokens.radius.sm,
            color: tokens.colors.white
          }}
        >
          <span style={{ fontSize: '16px' }}>🔔</span>
        </button>

        {/* Avatar */}
        <Avatar showBadge={true} size={32} />
      </div>
    </div>
  );
};

export default PrincipalMenu;
