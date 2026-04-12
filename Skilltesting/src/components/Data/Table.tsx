import * as React from 'react'
import styles from './Table.module.css'

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  isHeader?: boolean
  textAlign?: 'left' | 'center' | 'right'
  children?: React.ReactNode
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className = '', isHeader = false, textAlign = 'left', children, ...props }, ref) => {
    const Element = isHeader ? 'th' : 'td'
    return (
      <Element
        ref={ref as any}
        className={`${styles.cell} ${styles[textAlign]} ${isHeader ? styles.headerCell : ''} ${className}`}
        {...props}
      >
        {children}
      </Element>
    )
  }
)

TableCell.displayName = 'TableCell'

export interface TableRowProps extends React.TrHTMLAttributes<HTMLTableRowElement> {
  isHeader?: boolean
  hovered?: boolean
  children?: React.ReactNode
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className = '', isHeader = false, hovered = false, children, ...props }, ref) => (
    <tr
      ref={ref}
      className={`${styles.row} ${isHeader ? styles.headerRow : ''} ${hovered ? styles.rowHovered : ''} ${className}`}
      {...props}
    >
      {children}
    </tr>
  )
)

TableRow.displayName = 'TableRow'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean
  bordered?: boolean
  compact?: boolean
  children?: React.ReactNode
}

const TableComponent = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { className = '', striped = false, bordered = false, compact = false, children, ...props },
    ref
  ) => (
    <table
      ref={ref}
      className={`${styles.table} ${striped ? styles.striped : ''} ${bordered ? styles.bordered : ''} ${compact ? styles.compact : ''} ${className}`}
      {...props}
    >
      {children}
    </table>
  )
)

TableComponent.displayName = 'Table'

interface TableComponent extends React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>> {
  Cell: typeof TableCell
  Row: typeof TableRow
}

const Table = TableComponent as TableComponent
Table.Cell = TableCell
Table.Row = TableRow

export { Table }
export default Table
