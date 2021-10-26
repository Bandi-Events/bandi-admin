interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }): JSX.Element => {
  return (
    <div className={`relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
