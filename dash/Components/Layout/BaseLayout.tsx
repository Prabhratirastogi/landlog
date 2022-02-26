import Link from 'next/link';
import { Menu } from '@headlessui/react';
import NavBar from './NavBar';

const Footer: React.FC = () => {
  return (
      <div className='flex place-items-center absolute bottom-0 w-full'>
        <span className='font-mono text-xs grow text-center text-blue-500'>Technoculture Research ©2022 Created by TCR</span>
      </div>
  );
}

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default BaseLayout;