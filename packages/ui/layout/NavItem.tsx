import { MouseEventHandler, ReactFragment } from 'react';
import { useRouter } from 'next/router';
import { classNames } from 'utils/classNames';

interface NavItemProps {
  children?: ReactFragment;
  onclick?: MouseEventHandler;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ children, onclick, active }) => {
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
