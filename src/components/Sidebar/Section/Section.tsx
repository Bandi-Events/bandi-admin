import { useLocation } from 'react-router-dom';

import Item from '../Item';

interface SectionProps {
  items: Array<Record<string, string>>;
}

const Section: React.FC<SectionProps> = ({ items }) => {
  const location = useLocation();

  return (
    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
      {items.map((item) => (
        <Item isCurrentRoute={location.pathname.indexOf(item.link) !== -1} label={item.label} link={item.link} />
      ))}
    </ul>
  );
};

export default Section;
