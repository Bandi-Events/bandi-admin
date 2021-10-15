import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  onCollapse: (args: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onCollapse }) => {
  return (
    <>
      <ul className="md:hidden items-center flex flex-wrap list-none">
        <li className="inline-block relative">{/* put right-align dropdown here */}</li>
      </ul>

      <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
        <div className="flex flex-wrap">
          <div className="w-6/12">
            <Link
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              to="/"
            >
              Bandi
            </Link>
          </div>
          <div className="w-6/12 flex justify-end">
            <button
              type="button"
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              onClick={() => onCollapse('hidden')}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
      <form className="mt-6 mb-4 md:hidden">
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Search"
            className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
          />
        </div>
      </form>
    </>
  );
};

export default MobileMenu;
