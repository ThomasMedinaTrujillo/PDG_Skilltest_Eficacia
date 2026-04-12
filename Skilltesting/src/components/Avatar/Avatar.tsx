import * as React from 'react'
import styles from './Avatar.module.css'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: '18px' | '24px' | '32px' | '40px' | '92px'
  content?: 'Image' | 'Text'
  avatarText?: string
  imageUrl?: string
  showBadge?: boolean
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className = '',
      size = '40px',
      content = 'Image',
      avatarText = 'AA',
      imageUrl,
      showBadge = true,
      ...props
    },
    ref
  ) => {
    const sizeClass = styles[`size${size.replace('px', '')}`] || styles.size40
    const contentClass = styles[`content${content}`] || styles.contentImage
    const badgeClass = showBadge ? styles.withBadge : ''

    return (
      <div
        ref={ref}
        className={`${styles.avatar} ${sizeClass} ${contentClass} ${badgeClass} ${className}`}
        role="img"
        aria-label={avatarText}
        {...props}
      >
        {content === 'Image' && (
          <img
            className={styles.image}
            src={imageUrl || 'https://via.placeholder.com/40'}
            alt={avatarText}
          />
        )}

        {content === 'Text' && (
          <span className={styles.text}>{avatarText}</span>
        )}

        {showBadge && (
          <div className={styles.badge} aria-hidden="true" />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export default Avatar
