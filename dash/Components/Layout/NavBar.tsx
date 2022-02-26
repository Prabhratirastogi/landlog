import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import Emoji from "../Emoji";

const classNames = (...classes: [string]) => {
  return classes.filter(Boolean).join(' ')
}

interface NavItemProps {
  children: ReactNode;
  link: string;
};

const NavItem: React.FC<NavItemProps> = ({ children, link }) => {
  return (
    <li className="px-4 py-1 m-2 rounded-lg hover:bg-sky-200 focus:ring-2 ring-blue-600">
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
    <ul className="flex bg-blue-100/60 px-2 pr-4 shadow-sm backdrop-blur-sm">
      <NavItem link="/">
        <Image src="/favicon.ico" alt="" width={20} height={20} />
        <span className="pl-2">LandLog</span>
        <span className="pl-2 text-slate-800">| Technoculture</span>
      </NavItem>
      <NavItem link="about">
        About
      </NavItem>
      <NavItem link="settings">Settings</NavItem>

      <span className="grow" />
      <div className="mx-4 place-self-center place-content-center relative flex">
        <input className="pl-10 h-7 bg-blue-50 text-slate-500 placeholder:italic placeholder:font-normal placeholder:text-blue-300 focus:outline-none rounded-lg inset-2 caret-blue-400 focus:bg-sky-100 focus:ring-1 ring-blue-200" placeholder="Search..." name="search" type="text" />
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