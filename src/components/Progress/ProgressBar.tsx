interface ProgressBarProps {
  value: number;
  colour: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, colour, className = '' }): JSX.Element => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className={`overflow-hidden h-2 text-xs flex rounded bg-${colour}-200`}>
        <div
          style={{ width: `${value}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${colour}-500`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
