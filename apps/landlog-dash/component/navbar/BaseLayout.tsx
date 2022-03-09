import { MouseEventHandler, ReactFragment } from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex place-items-center absolute bottom-0 w-full pointer-events-none">
      <span className="font-mono text-xs grow text-center text-sky-600">
        Technoculture Research ©2022 Created by TCR
      </span>
    </div>
  );
};

interface BaseLayoutProps {
  children: ReactFragment,
  toggleDrawer?: MouseEventHandler,
  isDrawerOpen?: boolean
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, toggleDrawer = () => {}, isDrawerOpen = false }) => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
