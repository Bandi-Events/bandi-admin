interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({ children, className = '' }): JSX.Element => {
  return <thead className={`thead-light ${className}`}>{children}</thead>;
};

export default TableHead;
