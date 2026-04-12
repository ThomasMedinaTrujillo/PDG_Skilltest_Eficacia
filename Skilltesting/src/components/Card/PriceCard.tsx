import * as React from 'react'
import styles from './PriceCard.module.css'

export interface PriceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  price?: string
  icon?: React.ReactNode
}

export const PriceCard = React.forwardRef<HTMLDivElement, PriceCardProps>(
  (
    {
      className = '',
      title = 'Adhesivo Aquence',
      price = '$120.000',
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.priceCard} ${className}`}
        {...props}
      >
        <div className={styles.content}>
          <div className={styles.header}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <span className={styles.title}>{title}</span>
          </div>
        </div>
        <div className={styles.priceSection}>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    )
  }
)

PriceCard.displayName = 'PriceCard'

export default PriceCard
