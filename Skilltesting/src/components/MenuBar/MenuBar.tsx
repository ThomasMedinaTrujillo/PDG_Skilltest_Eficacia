import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

const homeIcon = 'http://localhost:3845/assets/085dfc6dd019b6ad3cf22df05109d07fdcadf4bc.svg'
const bookmarkIcon = 'http://localhost:3845/assets/62b9817fc64f1e630b264581f8b6330d6a5c6fd4.svg'
const addIcon = 'http://localhost:3845/assets/4a2e6d7a774ff5a92fd19a98676e7d92f3b1ad17.svg'
const bagIcon = 'http://localhost:3845/assets/b57abd38e33fe450d6ae6e61ad8d97e100ea388e.svg'
const userIcon = 'http://localhost:3845/assets/23107d83e680c13252efd19d923844916a76a83e.svg'

function NavIcon({ src }: { src: string }) {
  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 20, height: 20, flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset: '8.33%' }}>
        <img alt="" src={src} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

function NavItem({ active = false, icon, label }: { active?: boolean; icon: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 47,
        flexShrink: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        borderRadius: 4,
        padding: '4px 8px',
        backgroundColor: active ? 'rgba(153, 179, 218, 0.3)' : 'transparent',
      }}
    >
      <NavIcon src={icon} />
      <div
        style={{
          color: tokens.colors.buttonBackground,
          fontFamily: tokens.typography.body.fontFamily,
          fontSize: 12,
          fontWeight: 400,
          lineHeight: '100%',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </div>
    </div>
  )
}

export interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: '5' | '4' | '3'
}

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items = '5', children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ds-menu-bar', className)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: tokens.colors.white,
          padding: 8,
          boxShadow: tokens.shadows.card,
          gap: items === '3' ? 32 : items === '4' ? 16 : 8,
          width: items === '5' ? 283 : undefined,
          height: items === '5' ? 58 : undefined,
          fontFamily: tokens.typography.body.fontFamily,
          ...style,
        }}
        {...props}
      >
        <NavItem active icon={homeIcon} label="Inicio" />
        <NavItem icon={bookmarkIcon} label="Agenda" />
        <NavItem icon={addIcon} label="Gestión" />
        {items !== '3' && <NavItem icon={bagIcon} label="Portafolio" />}
        {items === '5' && <NavItem icon={userIcon} label="Perfil" />}
        {children}
      </div>
    )
  },
)

MenuBar.displayName = 'MenuBar'
