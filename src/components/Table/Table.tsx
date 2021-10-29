interface TableProps {
  children?: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ children, className = '' }): JSX.Element => {
  return <table className={`items-center w-full bg-transparent border-collapse ${className}`}>{children}</table>;
};

export default Table;
