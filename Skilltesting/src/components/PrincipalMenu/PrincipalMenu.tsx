import * as React from 'react'
import { tokens } from '../../Token'
import { cn } from '../../lib/cn'
import { PrincipalMenuMenuItem } from '../PrincipalMenuMenuItem/PrincipalMenuMenuItem'

const menuIcon = 'http://localhost:3845/assets/f4c91291952574360724a00ef1ab2b975b7cce1f.svg'
const searchIcon = 'http://localhost:3845/assets/05901ed26e762088192b90507da84ac4d649f421.svg'
const notificationIcon = 'http://localhost:3845/assets/3d618c1463f6a0426de7c9956b88225a9e369c2b.svg'
const closeIcon = 'http://localhost:3845/assets/8409bec3e34ff8d0a4d6352a71508682cf7d9136.svg'
const logoIconA = 'http://localhost:3845/assets/c99bf9a47f2b1e463aacb12e1ec06cf92ad58f78.svg'
const logoIconB = 'http://localhost:3845/assets/e9f07799cfe19568ae0b3300eb7a295f470150c9.svg'
const logoIconC = 'http://localhost:3845/assets/2595bf1323a45ef3a8c194927a4e85038b2e38cb.svg'
const logoIconD = 'http://localhost:3845/assets/59be138c7bdc4adf8053864f4868a95e1cb9f04c.svg'
const logoIconE = 'http://localhost:3845/assets/fadfc37bf743388413f79326cf6c1dcb714a42b2.svg'
const logoIconF = 'http://localhost:3845/assets/841c378396e045ed587ae14d2820392c4670cb01.svg'
const logoIconG = 'http://localhost:3845/assets/91b3ab31f106f8a36289c74f0e717317420b54d7.svg'
const logoIconH = 'http://localhost:3845/assets/9f0802b51bf33754e699dfe725f79b81751cb035.svg'
const logoIconI = 'http://localhost:3845/assets/6bb9b5b6fef8007f1e8528426785762b2914fd8d.svg'
const logoIconJ = 'http://localhost:3845/assets/df3490c53caaa9fc7d92c49d7a6a9ef1da072a23.svg'
const logoIconK = 'http://localhost:3845/assets/4957d249843faa3935a3f2815a6555c602f93617.svg'
const logoIconL = 'http://localhost:3845/assets/9b43fd22a4fe490a5fdc99ede8324bc8a7665273.svg'
const logoIconM = 'http://localhost:3845/assets/edcec8d9a742ba8a43ef43d35b6ff957163aab18.svg'
const logoIconN = 'http://localhost:3845/assets/93a4484bda5542585b6becdf1b55a5470311a169.svg'
const avatarImage = 'http://localhost:3845/assets/fa682a78fd57f4872faa35ec7177e57f75647e78.png'

function Glyph({ src, size, inset }: { src: string; size: number; inset: string }) {
  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: size, height: size, flexShrink: 0 }}>
      <span style={{ position: 'absolute', inset }}>
        <img alt="" src={src} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </span>
    </span>
  )
}

function MenuGlyph() {
  return <Glyph src={menuIcon} size={24} inset="16.67% 8.33% 20.83% 8.33%" />
}

function SearchField() {
  return (
    <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: 8, borderRadius: 4, backgroundColor: tokens.colors.white, padding: '0 8px' }}>
      <span aria-hidden style={{ position: 'relative', display: 'block', width: 18, height: 18, flexShrink: 0 }}>
        <span style={{ position: 'absolute', inset: '14.29%' }}>
          <img alt="" src={searchIcon} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </span>
      </span>
      <div style={{ color: tokens.colors.textSecondary, fontFamily: tokens.typography.body.fontFamily, fontSize: 14, fontWeight: 400, lineHeight: '100%', whiteSpace: 'nowrap' }}>Buscar</div>
    </div>
  )
}

function NotificationGlyph() {
  return <Glyph src={notificationIcon} size={24} inset="8.33%" />
}

function CloseGlyph() {
  return <Glyph src={closeIcon} size={20} inset="8.33%" />
}

function Logo() {
  const icons = [logoIconA, logoIconB, logoIconC, logoIconD, logoIconE, logoIconF, logoIconG, logoIconH, logoIconI, logoIconJ, logoIconK, logoIconL, logoIconM, logoIconN]

  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 129, height: 32, flexShrink: 0, overflow: 'hidden' }}>
      <span style={{ position: 'absolute', inset: '9.46% 71.57% 13.77% 4.05%' }}><img alt="" src={icons[0]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', bottom: '25%', left: '8.29%', right: '75.07%', top: '20.4%' }}><img alt="" src={icons[1]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '0 67.97% 1.56% 0' }}><img alt="" src={icons[2]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '44.09% 86.84% 12.7% 2.46%' }}><img alt="" src={icons[3]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '35.91% 56.01% 24.55% 33.82%' }}><img alt="" src={icons[4]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '22.27% 46.34% 25.91% 44.95%' }}><img alt="" src={icons[5]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '22.73% 42.39% 68.18% 53.94%' }}><img alt="" src={icons[6]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '37.05% 43.29% 25.68% 51.56%' }}><img alt="" src={icons[7]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '36.14% 33.75% 24.55% 56.48%' }}><img alt="" src={icons[8]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '36.14% 23.97% 24.32% 65.75%' }}><img alt="" src={icons[9]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '35.91% 14.14% 24.77% 76.14%' }}><img alt="" src={icons[10]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '22.73% 9.06% 68.18% 87.27%' }}><img alt="" src={icons[11]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '37.05% 9.96% 25.68% 84.9%' }}><img alt="" src={icons[12]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
      <span style={{ position: 'absolute', inset: '36.14% 0.19% 24.32% 89.53%' }}><img alt="" src={icons[13]} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} /></span>
    </span>
  )
}

function AvatarMobile() {
  return (
    <span aria-hidden style={{ position: 'relative', display: 'block', width: 32, height: 32, flexShrink: 0, overflow: 'hidden', borderRadius: 9999 }}>
      <img alt="" src={avatarImage} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none', objectFit: 'cover' }} />
      <span style={{ position: 'absolute', right: -2, bottom: 0, display: 'block', width: 12, height: 12, borderRadius: 9999, backgroundColor: tokens.colors.pending }} />
    </span>
  )
}

export interface PrincipalMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  property1?: 'Header' | 'floating'
  showItem?: boolean
}

export const PrincipalMenu = React.forwardRef<HTMLDivElement, PrincipalMenuProps>(
  ({ className, property1 = 'Header', showItem = true, children, style, ...props }, ref) => {
    const isFloating = property1 === 'floating'
    const isHeader = property1 === 'Header'

    return (
      <div
        ref={ref}
        className={cn('ds-principal-menu', className)}
        style={{
          display: 'flex',
          position: 'relative',
          width: 375,
          ...(isHeader
            ? {
                alignItems: 'center',
                gap: 12,
                backgroundColor: tokens.colors.buttonBackground,
                padding: 16,
              }
            : {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                backgroundColor: tokens.colors.white,
                height: 810,
                paddingBottom: 0,
              }),
          fontFamily: tokens.typography.body.fontFamily,
          ...style,
        }}
        {...props}
      >
        {isFloating && (
          <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start', gap: 24 }}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: tokens.colors.buttonBackground,
                borderBottom: '0.5px solid #99b3da',
                padding: '24px 16px',
              }}
            >
              <Logo />
              <button type="button" style={{ display: 'block', position: 'relative', width: 20, height: 20, flexShrink: 0, border: 0, background: 'transparent', padding: 0 }}>
                <CloseGlyph />
              </button>
            </div>

            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
              <PrincipalMenuMenuItem itemMenuText="Text" />
              <PrincipalMenuMenuItem itemMenuText="Text" />
              <PrincipalMenuMenuItem itemMenuText="Text" />
              <PrincipalMenuMenuItem itemMenuText="Text" />
              {showItem && (
                <>
                  <PrincipalMenuMenuItem itemMenuText="Text" />
                  <PrincipalMenuMenuItem itemMenuText="Text" />
                  <PrincipalMenuMenuItem itemMenuText="Text" />
                  <PrincipalMenuMenuItem itemMenuText="Text" />
                </>
              )}
            </div>

            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
              <PrincipalMenuMenuItem className="w-full" itemMenuText="Text" />
              <PrincipalMenuMenuItem className="w-full" itemMenuText="Text" />
            </div>
          </div>
        )}

        {isHeader && (
          <>
            <button type="button" style={{ display: 'block', position: 'relative', width: 24, height: 24, flexShrink: 0, border: 0, background: 'transparent', padding: 0 }}>
              <MenuGlyph />
            </button>
            <SearchField />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              <NotificationGlyph />
              <AvatarMobile />
            </div>
          </>
        )}

        {children}
      </div>
    )
  },
)

PrincipalMenu.displayName = 'PrincipalMenu'
