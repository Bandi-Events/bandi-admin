/*eslint-disable*/
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import CollapseButton from './CollapseButton';
import Section from './Section';
import Divider from './Divider';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState<string>('hidden');

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <CollapseButton onClick={setCollapseShow} />
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Bandi
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">{/* put right-align dropdown here */}</li>
          </ul>
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            <MobileMenu onCollapse={setCollapseShow} />
            <Divider />
            <Section
              items={[
                {
                  label: 'Dashboard',
                  link: '/dashboard',
                },
                {
                  label: 'Users',
                  link: '/users',
                },
              ]}
            />
            <Divider />
            <Section
              items={[
                {
                  label: 'Settings',
                  link: '/settings',
                },
                {
                  label: 'Log Out',
                  link: '/logout',
                },
              ]}
            />
            <Divider />
          </div>
        </div>
      </nav>
    </>
  );
}
