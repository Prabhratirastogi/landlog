import { MouseEventHandler, ReactNode } from 'react';
import Image from 'next/image';
import { useStore } from '../../store';
import { classNames } from '../../utilities/classNames';
import { useRouter } from 'next/router';

interface NavItemProps {
  children: ReactNode;
  onclick?: MouseEventHandler;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, onclick, active }) => {
  const router = useRouter();

  return (
    <li
      className={classNames(
        active && router.pathname == '/' ? 'bg-sky-300 shadow-inner' : '',
        'px-4 py-1 m-2 rounded-lg hover:bg-sky-300/50 cursor-default hover:shadow-inner hover:transition-colors transition duration-50 ease-in',
      )}
    >
      <div className="text-sky-600 flex" onClick={onclick}>
        {children}
      </div>
    </li>
  );
};

const NavBar: React.FC = () => {
  const [toggleDrawer, isDrawerOpen] = useStore((state) => [
    state.toggleDrawer,
    state.isDrawerOpen,
  ]);
  const router = useRouter();

  return (
    <ul className="flex px-2 pr-4 bg-gradient-to-r from-blue-100 to-sky-100 ring-1 ring-blue-200 backdrop-blur mb-0 shadow-lg select-none">
      <NavItem
        onclick={router.pathname === '/' ? toggleDrawer : () => router.push('/')}
        active={isDrawerOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 place-self-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <span className="pl-2">Lands</span>
      </NavItem>

      <NavItem onclick={() => router.push('/dashboard')}>
        <Image src="/favicon.ico" alt="" width={20} height={20} />
        <span className="pl-2">LandLog</span>
        <span className="pl-2 text-slate-800">| Technoculture</span>
      </NavItem>

      <span className="grow" />
      <div className="mx-4 place-self-center place-content-center relative flex">
        <input
          className="pl-10 h-7 bg-blue-50 text-slate-500 placeholder:italic placeholder:font-normal placeholder:text-blue-300 focus:outline-none rounded-lg inset-2 caret-blue-400 focus:ring-1 ring-blue-200 hover:shadow-inner selection:bg-blue-300"
          placeholder="Search..."
          name="search"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 absolute left-0 place-self-center pl-2 ml-1 text-blue-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </ul>
  );
};

export default NavBar;
