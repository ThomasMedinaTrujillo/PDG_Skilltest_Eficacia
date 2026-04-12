import * as React from 'react'
import styles from './Calendar.module.css'

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'Closed' | 'Opened'
  label?: string
  titleLabel?: string
  selectedDate?: Date | null
  onDateSelect?: (date: Date) => void
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      className = '',
      state = 'Closed',
      label = 'Select date',
      titleLabel = 'Calendar',
      selectedDate,
      onDateSelect,
      ...props
    },
    ref
  ) => {
    const [date, setDate] = React.useState(selectedDate || new Date(2025, 2, 16)) // March 16, 2025
    
    const isOpened = state === 'Opened'
    const isClosed = state === 'Closed'
    
    const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom']
    const monthName = date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }).charAt(0).toUpperCase() +
                      date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }).slice(1)
    
    // Generate calendar dates
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const datesArray = []
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
      datesArray.push(i)
    }
    
    const handleDateClick = (dayNum: number) => {
      const selectedDay = new Date(date.getFullYear(), date.getMonth(), dayNum)
      setDate(selectedDay)
      if (onDateSelect) {
        onDateSelect(selectedDay)
      }
    }

    return (
      <div
        ref={ref}
        className={`${styles.calendar} ${isClosed ? styles.stateClosed : styles.stateOpened} ${className}`}
        {...props}
      >
        {/* Title when opened */}
        {isOpened && (
          <>
            <div className={styles.titleSection}>
              <label className={styles.titleLabel}>{titleLabel}</label>
            </div>

            {/* Dropdown header */}
            <div className={styles.dropdownHeader}>
              <input
                type="text"
                className={styles.dropdownInput}
                value={label}
                readOnly
              />
              <div className={styles.dropdownIcon}>📅</div>
            </div>

            {/* Calendar body */}
            <div className={styles.calendarBody}>
              {/* Month navigation */}
              <div className={styles.monthHeader}>
                <button className={styles.monthNav} type="button">←</button>
                <span className={styles.monthTitle}>{monthName}</span>
                <button className={styles.monthNav} type="button">→</button>
              </div>

              {/* Day headers */}
              <div className={styles.daysHeader}>
                {days.map((day) => (
                  <div key={day} className={styles.dayHeader}>
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className={styles.datesGrid}>
                {datesArray.map((dayNum) => (
                  <button
                    key={dayNum}
                    className={`${styles.dateCell} ${dayNum === date.getDate() ? styles.selectedDate : ''}`}
                    onClick={() => handleDateClick(dayNum)}
                    type="button"
                  >
                    {String(dayNum).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Closed state - just show button */}
        {isClosed && (
          <div className={styles.closedState}>
            <label className={styles.closedLabel}>{titleLabel}</label>
            <div className={styles.dropdownHeaderClosed}>
              <span className={styles.dropdownInputClosed}>{label}</span>
              <div className={styles.dropdownIcon}>📅</div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

Calendar.displayName = 'Calendar'

export default Calendar
