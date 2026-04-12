import * as React from 'react'
import styles from './ProgressCard.module.css'

export interface ProgressCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  percentage?: number
  color?: 'primary' | 'success' | 'warning'
}

export const ProgressCard = React.forwardRef<HTMLDivElement, ProgressCardProps>(
  (
    {
      className = '',
      title = 'Progress Title',
      subtitle = 'Subtitle',
      percentage = 65,
      color = 'primary',
      ...props
    },
    ref
  ) => {
    const colorClass = styles[`progress${color.charAt(0).toUpperCase() + color.slice(1)}`] || styles.progressPrimary

    return (
      <div
        ref={ref}
        className={`${styles.progressCard} ${className}`}
        {...props}
      >
        <div className={styles.header}>
          <div className={styles.textHeader}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <span className={styles.percentage}>{percentage}%</span>
        </div>

        <div className={`${styles.progressBar} ${colorClass}`}>
          <div
            className={styles.progressFill}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>
    )
  }
)

ProgressCard.displayName = 'ProgressCard'

export default ProgressCard
