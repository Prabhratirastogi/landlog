import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const classNames = (...classes: [string]) => {
  return classes.filter(Boolean).join(' ')
}

interface NavItemProps {
  children: ReactNode;
  link: string;
};

const NavItem: React.FC<NavItemProps> = ({ children, link }) => {
  return (
    <li className="px-4 py-1 m-2 rounded-lg hover:bg-sky-200 cursor-default hover:shadow-inner hover:transition-colors transition duration-50 delay-100 ease-out">
      <Link href={link} passHref>
        <div className="text-sky-600 flex">
          {children}
        </div>
      </Link>
    </li>
  );
}

const NavBar: React.FC = () => {
  return (
    <ul className="flex bg-blue-100/60 px-2 pr-4 border-b-2 border-blue-100 backdrop-blur shadow-2xl">
      <NavItem link="/">
        <Image src="/favicon.ico" alt="" width={20} height={20} />
        <span className="pl-2">LandLog</span>
        <span className="pl-2 text-slate-800">| Technoculture</span>
      </NavItem>
      <NavItem link="lands">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 place-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg> 
        <span className="pl-2">Lands</span>
      </NavItem>
      <NavItem link="settings">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 place-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="pl-2">Settings</span>
      </NavItem>

      <span className="grow" />
      <div className="mx-4 place-self-center place-content-center relative flex">
        <input className="pl-10 h-7 bg-blue-50 text-slate-500 placeholder:italic placeholder:font-normal placeholder:text-blue-300 focus:outline-none rounded-lg inset-2 caret-blue-400 focus:ring-1 ring-blue-200 hover:shadow-inner" placeholder="Search..." name="search" type="text" />
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="w-6 absolute left-0 place-self-center pl-2 ml-1 text-blue-400" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </ul>
  );
}

export default NavBar;