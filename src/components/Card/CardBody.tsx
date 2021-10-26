interface CardBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }): JSX.Element => {
  return <div className={`flex-auto p-4 ${className}`}>{children}</div>;
};

export default CardBody;
