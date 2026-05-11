import React from 'react';
import { tokens } from '../Token';

export interface MenuBarProps {
  className?: string;
  items?: 3 | 4 | 5;
  onItemClick?: (item: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({
  className,
  items = 5,
  onItemClick
}) => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'agenda', label: 'Agenda', icon: '📖' },
    { id: 'gestion', label: 'Gestión', icon: '➕' },
    { id: 'portafolio', label: 'Portafolio', icon: '👜' },
    { id: 'perfil', label: 'Perfil', icon: '👤' }
  ].slice(0, items);

  const getGap = () => {
    switch (items) {
      case 3: return tokens.spacing.xl;
      case 4: return tokens.spacing.md;
      default: return tokens.spacing.sm;
    }
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: getGap(),
        padding: tokens.spacing.sm,
        backgroundColor: tokens.colors.white,
        borderRadius: tokens.radius.sm,
        boxShadow: tokens.shadows.component,
        height: items === 5 ? '58px' : 'auto',
        width: items === 5 ? '283px' : 'auto'
      }}
    >
      {menuItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onItemClick?.(item.id)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
            borderRadius: tokens.radius.sm,
            backgroundColor: index === 0 ? 'rgba(153, 179, 218, 0.3)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: '47px',
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            if (index !== 0) {
              e.currentTarget.style.backgroundColor = 'rgba(153, 179, 218, 0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (index !== 0) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: tokens.spacing.xs,
              flexShrink: 0
            }}
          >
            <span style={{ fontSize: '16px', lineHeight: 1 }}>
              {item.icon}
            </span>
          </div>

          {/* Label */}
          <div
            style={{
              fontFamily: '"Solomon Sans Normal", sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              color: tokens.colors.primary,
              textAlign: 'center',
              whiteSpace: 'nowrap',
              lineHeight: 'normal',
              width: '100%'
            }}
          >
            {item.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default MenuBar;
