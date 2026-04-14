import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

const alertIcon = 'http://localhost:3845/assets/97f7b7c79aa9c48cceff5d0facb20a262fb1236b.svg'
const chevronIcon = 'http://localhost:3845/assets/d1a4cdd8bfb67290af798d097536b84106393c05.svg'
const dividerIcon = 'http://localhost:3845/assets/82ad3b6b135df6a98d729599a03be9fd94061885.svg'

function AlertIcon() {
  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 20, height: 20, flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset: '8.33%' }}>
        <img alt="" src={alertIcon} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

function ChevronRight() {
  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 16, height: 16, flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset: '8.33%' }}>
        <img alt="" src={chevronIcon} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

export interface DropdownCardProps extends React.HTMLAttributes<HTMLDivElement> {
  body?: string
  caption?: string
  header?: string
  iconEnd?: React.ReactNode | null
  iconStart?: React.ReactNode | null
  showCaption?: boolean
  showIconEnd?: boolean
  showState?: boolean
  state?: 'Card open' | 'Card close'
  subtitle?: string
  textState?: string
  title?: string
}

export const DropdownCard = React.forwardRef<HTMLDivElement, DropdownCardProps>(
  (
    {
      className,
      body =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu blandit diam amet, ac commodo blandit facilisis. Tincidunt ultricies congue cras habitasse sem eu. Ut rutrum non malesuada est. Augue egestas vestibulum dolor, lectus mauris, odio ut.',
      caption = 'Única ejecución',
      header = 'Verificación de limpieza en góndola',
      iconEnd = null,
      iconStart = null,
      showCaption = true,
      showIconEnd = true,
      showState = true,
      state = 'Card close',
      subtitle = 'Visita comercial completa',
      textState = 'Text state',
      title = 'Detalle',
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const isCardOpen = state === 'Card open'

    return (
      <div
        ref={ref}
        className={cn('ds-dropdown-card', className)}
        style={{
          display: 'flex',
          width: 339,
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: isCardOpen ? 8 : 0,
          padding: 12,
          borderRadius: tokens.radius.sm,
          backgroundColor: tokens.colors.white,
          boxShadow: tokens.shadows.card,
          fontFamily: tokens.typography.body.fontFamily,
          ...style,
        }}
        {...props}
      >
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 16 }}>
          {iconStart || <AlertIcon />}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ color: tokens.colors.buttonBackground, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 600, lineHeight: '100%' }}>{header}</div>
            {showCaption && <div style={{ color: tokens.colors.textSecondary, fontFamily: tokens.typography.caption.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%' }}>{caption}</div>}
          </div>
          {showIconEnd && (iconEnd || <ChevronRight />)}
        </div>

        {isCardOpen && <img alt="" src={dividerIcon} style={{ display: 'block', width: '100%', height: 1, maxWidth: 'none' }} />}

        {isCardOpen && showState && (
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', whiteSpace: 'nowrap' }}>
            <div style={{ color: tokens.colors.textSecondary, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 600, lineHeight: '100%' }}>Estado</div>
            <div style={{ color: tokens.colors.success, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 700, lineHeight: '100%', textAlign: 'right' }}>{textState}</div>
          </div>
        )}

        {isCardOpen && (
          <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <div style={{ color: tokens.colors.textSecondary, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 600, lineHeight: '100%' }}>{title}</div>
              <div style={{ color: tokens.colors.buttonDisabled, fontFamily: tokens.typography.body.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%' }}>{subtitle}</div>
            </div>
            <div style={{ color: tokens.colors.textSecondary, fontFamily: tokens.typography.body.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%' }}>{body}</div>
          </div>
        )}

        {children}
      </div>
    )
  },
)

DropdownCard.displayName = 'DropdownCard'
