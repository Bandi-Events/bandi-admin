import { ProgressBar } from './ProgressBar';

interface ProgressProps {
  value: number;
  colour: string;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, colour, className = '' }): JSX.Element => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="mr-2">{value}%</span>
      <ProgressBar value={value} colour={colour} />
    </div>
  );
};

export default Progress;
