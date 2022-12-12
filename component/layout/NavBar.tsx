import { MouseEventHandler, ReactFragment } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

interface NavBarProps {
  children: ReactFragment;
  toggleDrawer: MouseEventHandler;
  isDrawerOpen: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ children, toggleDrawer, isDrawerOpen }) => {
  return (
    <ul className="flex flex-row sm:px-2 sm:pr-4 bg-gradient-to-r from-blue-100 to-sky-100 ring-1 ring-blue-200 backdrop-blur mb-0 shadow-lg select-none">
      {children}

      <span className="sm:grow" />
      <div className="hidden sm:flex sm:mx-4 place-self-center place-content-center relative">
        <input
          className="pl-10 h-7 bg-blue-50 text-slate-500 placeholder:italic placeholder:font-normal placeholder:text-blue-300 focus:outline-none rounded-lg inset-2 caret-blue-400 focus:ring-1 ring-blue-200 hover:shadow-inner selection:bg-blue-300"
          placeholder="Search..."
          name="search"
          type="text"
        />
        <SearchIcon className="w-6 absolute left-0 place-self-center pl-2 ml-1 text-blue-400 pointer-events-none" />
      </div>
    </ul>
  );
};
