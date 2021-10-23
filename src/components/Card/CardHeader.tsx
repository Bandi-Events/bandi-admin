interface CardHeaderProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  iconColour?: string;
  iconName?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  title,
  subtitle,
  iconColour,
  iconName,
  className = '',
}): JSX.Element => {
  return (
    <>
      <div className={`flex flex-wrap ${className}`}>
        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h6 className="text-blueGray-400 uppercase font-bold text-xs">{subtitle}</h6>
          <h2 className="font-semibold text-xl text-blueGray-700">{title}</h2>
        </div>
        {!!iconName && !!iconColour && (
          <div className="relative w-auto pl-4 flex-initial">
            <div
              className={
                'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                iconColour
              }
            >
              <i className={iconName}></i>
            </div>
          </div>
        )}

        {children}
      </div>
    </>
  );
};

export default CardHeader;
