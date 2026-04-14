import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'

const enabledIconA = 'http://localhost:3845/assets/172fb3f0da39b2e319540672632d196a455abe6e.svg'
const enabledIconB = 'http://localhost:3845/assets/9fdca7a630696a1af4526bdca61cee5e7482f4b4.svg'
const enabledIconC = 'http://localhost:3845/assets/f820e167747b2dbd95ebc52bf88e2191e97d2f8d.svg'
const enabledIconD = 'http://localhost:3845/assets/9e498722d8b7b6a4fde41c332131ab285aa5e3ce.svg'
const disabledIconA = 'http://localhost:3845/assets/8d9da7568ec82d42586970d46322771c32d475af.svg'
const disabledIconB = 'http://localhost:3845/assets/34188cfe4d16c0ec05c2bb1771a5a8a047deaf51.svg'
const disabledIconC = 'http://localhost:3845/assets/c66ff95ca5efde5986f1934de9ee1f629c59d6e2.svg'
const disabledIconD = 'http://localhost:3845/assets/e7d248cf505dceb1ff0665b55fe5bc96524ccc9f.svg'
const errorIconA = 'http://localhost:3845/assets/12fab362454690abf5dec2750b51ed1679f14a73.svg'
const errorIconB = 'http://localhost:3845/assets/699ff7e444d9681e34243dd60ec16094c1c44fa4.svg'
const errorIconC = 'http://localhost:3845/assets/2e768609c0595c013716c86942603d2bbfc38729.svg'
const errorIconD = 'http://localhost:3845/assets/158bec8ff20d2b6d25dd915ea9c211ad5948ead7.svg'
const arrowEnabled = 'http://localhost:3845/assets/1c6fa4b1a5d2a0d8fd7461854a849b5bb0d72b95.svg'
const arrowDisabled = 'http://localhost:3845/assets/f394be806ed83e0d0e6375322771f1129a5923be.svg'

function CategoryIcon({ state }: { state: 'enabled' | 'disabled' | 'Prueba' }) {
  const icons =
    state === 'enabled'
      ? [enabledIconA, enabledIconB, enabledIconC, enabledIconD]
      : state === 'disabled'
        ? [disabledIconA, disabledIconB, disabledIconC, disabledIconD]
        : [errorIconA, errorIconB, errorIconC, errorIconD]

  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 24, height: 24, flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset: '4.76% 4.76% 58.85% 58.81%' }}>
        <img alt="" src={icons[0]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
      <span style={{ position: 'absolute', inset: '54.05% 4.76% 9.52% 58.81%' }}>
        <img alt="" src={icons[1]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
      <span style={{ position: 'absolute', inset: '4.76% 54.05% 58.85% 9.52%' }}>
        <img alt="" src={icons[2]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
      <span style={{ position: 'absolute', inset: '54.05% 54.05% 9.52% 9.52%' }}>
        <img alt="" src={icons[3]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

function ArrowRight({ state }: { state: 'enabled' | 'disabled' | 'Prueba' }) {
  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 24, height: 24, flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset: '14.29% 27.4% 13.65% 28.57%' }}>
        <img alt="" src={state === 'enabled' ? arrowEnabled : arrowDisabled} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

function CheckBox({ state }: { state: 'enabled' | 'disabled' | 'Prueba' }) {
  const borderColor = state === 'Prueba' ? tokens.colors.warning : tokens.colors.textSecondary
  return <div style={{ width: 18, height: 18, flexShrink: 0, borderRadius: 4, border: `1px solid ${borderColor}` }} />
}

export interface CardCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  categoryIcon?: React.ReactNode | null
  label?: string
  number?: string
  showCheckBox?: boolean
  showIconLeft?: boolean
  showIconRight?: boolean
  showLabel?: boolean
  showNumber?: boolean
  showSubTitle?: boolean
  showTitle?: boolean
  state?: 'enabled' | 'disabled' | 'Prueba'
  subTitle?: string
  title?: string
}

export const CardCheck = React.forwardRef<HTMLDivElement, CardCheckProps>(
  (
    {
      className,
      categoryIcon = null,
      label = '| TQ',
      number = '2',
      showCheckBox = true,
      showIconLeft = true,
      showIconRight = true,
      showLabel = true,
      showNumber = true,
      showSubTitle = true,
      showTitle = true,
      state = 'enabled',
      subTitle = 'label',
      title = 'Categoria 1',
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const isDisabled = state === 'disabled'
    const isEnabled = state === 'enabled'
    const isPrueba = state === 'Prueba'
    const mainColor = isPrueba ? tokens.colors.warning : isDisabled ? tokens.colors.textSecondary : tokens.colors.buttonBackground
    const secondaryColor = isPrueba ? tokens.colors.warning : tokens.colors.textSecondary

    return (
      <div
        ref={ref}
        className={cn('ds-card-check', className)}
        style={{
          display: 'flex',
          width: 339,
          alignItems: 'center',
          padding: 12,
          backgroundColor: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadows.card,
          fontFamily: tokens.typography.body.fontFamily,
          ...style,
        }}
        {...props}
      >
        <div style={{ display: 'flex', minWidth: 0, flex: '1 0 0', alignItems: 'center', gap: !['disabled', 'Prueba'].includes(state) ? 4 : 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '0 4px' }}>
            {showIconLeft && (categoryIcon || <CategoryIcon state={state} />)}

            {isEnabled && (
              <div style={{ display: 'flex', flexShrink: 0, flexDirection: 'column', justifyContent: 'center', gap: 4, padding: 4 }}>
                {showTitle && <div style={{ color: mainColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 600, lineHeight: '100%', whiteSpace: 'nowrap' }}>{title}</div>}
                {showSubTitle && <div style={{ color: secondaryColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%', whiteSpace: 'nowrap' }}>{subTitle}</div>}
              </div>
            )}

            {isDisabled && (
              <div style={{ display: 'flex', flexShrink: 0, flexDirection: 'column', justifyContent: 'center', gap: 4, padding: 4 }}>
                {showTitle && <div style={{ color: mainColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 600, lineHeight: '100%', whiteSpace: 'nowrap' }}>{title}</div>}
                {showSubTitle && <div style={{ color: secondaryColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%', whiteSpace: 'nowrap' }}>{subTitle}</div>}
              </div>
            )}

            {isPrueba && (
              <div style={{ display: 'flex', flexShrink: 0, flexDirection: 'column', justifyContent: 'center', gap: 4, padding: 4 }}>
                {showTitle && <div style={{ color: mainColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 600, lineHeight: '100%', whiteSpace: 'nowrap' }}>{title}</div>}
                {showSubTitle && <div style={{ color: mainColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%', whiteSpace: 'nowrap' }}>{subTitle}</div>}
              </div>
            )}
          </div>

          {((isEnabled || isDisabled) && showLabel) && (
            <div style={{ display: 'flex', width: 31, flexShrink: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: secondaryColor, fontFamily: tokens.typography.caption.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%', whiteSpace: 'nowrap' }}>{label}</div>
            </div>
          )}

          {isPrueba && showLabel && (
            <div style={{ display: 'flex', width: 31, flexShrink: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: mainColor, fontFamily: tokens.typography.caption.fontFamily, fontSize: 12, fontWeight: 400, lineHeight: '100%', whiteSpace: 'nowrap' }}>{label}</div>
            </div>
          )}
        </div>

        {((isEnabled || isDisabled) && showNumber) && (
          <div style={{ display: 'flex', width: 26, flexShrink: 0, flexDirection: 'column', alignItems: 'flex-start', padding: 8 }}>
            <div style={{ color: secondaryColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 16, fontWeight: 600, lineHeight: '100%', textAlign: 'right', whiteSpace: 'nowrap' }}>{number}</div>
          </div>
        )}

        {((isEnabled || isDisabled) && showCheckBox) && (
          <div style={{ display: 'flex', flexShrink: 0, alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <CheckBox state={state} />
            </div>
          </div>
        )}

        {((isEnabled || isDisabled) && showIconRight) && <ArrowRight state={state} />}

        {isPrueba && showNumber && (
          <div style={{ display: 'flex', width: 26, flexShrink: 0, flexDirection: 'column', alignItems: 'flex-start', padding: 8 }}>
            <div style={{ color: mainColor, fontFamily: tokens.typography.body.fontFamily, fontSize: 16, fontWeight: 600, lineHeight: '100%', textAlign: 'right', whiteSpace: 'nowrap' }}>{number}</div>
          </div>
        )}

        {isPrueba && showCheckBox && (
          <div style={{ display: 'flex', flexShrink: 0, alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>
              <CheckBox state={state} />
            </div>
          </div>
        )}

        {isPrueba && showIconRight && <ArrowRight state={state} />}
        {children}
      </div>
    )
  },
)

CardCheck.displayName = 'CardCheck'
