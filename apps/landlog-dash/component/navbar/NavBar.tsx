import { MouseEventHandler, ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { classNames } from 'utils/classNames';
import { useStore } from '../../store';
import { ChevronRightIcon, ChevronDownIcon, CollectionIcon, SearchIcon } from '@heroicons/react/outline';

const navItemData: NavItemProps[] = [{}];

interface NavItemProps {
  // children: ReactNode;
  onclick?: MouseEventHandler;
  active?: boolean;
}

type NavItem = ReactNode & NavItemProps;

const NavItem: React.FC<NavItem> = ({ children, onclick, active }) => {
  const router = useRouter();

  return (
    <div
      className={classNames(
        active && router.pathname == '/' ? 'bg-sky-300 shadow-inner' : '',
        'px-3 py-1 mx-1 my-2 rounded-lg hover:bg-sky-300/50 cursor-default hover:shadow-inner hover:transition-colors transition duration-50 ease-in',
      )}
    >
      <div className="text-sky-600 flex" onClick={onclick}>
        {children}
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  const [toggleDrawer, isDrawerOpen] = useStore((state) => [
    state.toggleDrawer,
    state.isDrawerOpen,
  ]);
  const router = useRouter();

  return (
    <ul className="flex flex-row sm:px-2 sm:pr-4 bg-gradient-to-r from-blue-100 to-sky-100 ring-1 ring-blue-200 backdrop-blur mb-0 shadow-lg select-none">
      <NavItem
        onclick={router.pathname === '/' ? toggleDrawer : () => router.push('/')}
        active={isDrawerOpen}
      >
        <CollectionIcon className='h-4 place-self-center'/>
        <span className="pl-2">Lands</span>
        <div className='ml-2 place-self-center'>{ isDrawerOpen ? <ChevronDownIcon className='h-4' /> : <ChevronRightIcon className='h-4' />}</div>
      </NavItem>

      <span className="grow sm:hidden" />

      <NavItem onclick={() => router.push('/dashboard')}>
        <Image src="/favicon.ico" alt="" width={20} height={20} />
        <span className="pl-2">LandLog</span>
        <span className="hidden sm:inline pl-2 text-slate-800">| Technoculture</span>
      </NavItem>

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

export default NavBar;
