interface TableDataCellProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableDataCell: React.FC<TableDataCellProps> = ({ children, className = '' }): JSX.Element => {
  return (
    <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ${className}`}>
      {children}
    </td>
  );
};

export default TableDataCell;
