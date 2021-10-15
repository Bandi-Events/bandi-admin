import { Link } from 'react-router-dom';

interface ItemProps {
  label: string;
  link: string;
  isCurrentRoute: boolean;
}

const Item: React.FC<ItemProps> = ({ label, link, isCurrentRoute }) => {
  return (
    <li className="items-center">
      <Link
        className={
          'text-xs uppercase py-3 font-bold block ' +
          (isCurrentRoute ? 'text-lightBlue-500 hover:text-lightBlue-600' : 'text-blueGray-700 hover:text-blueGray-500')
        }
        to={link}
      >
        <i className={'fas fa-table mr-2 text-sm ' + (isCurrentRoute ? 'opacity-75' : 'text-blueGray-300')}></i> {label}
      </Link>
    </li>
  );
};

export default Item;
