import { useRouter } from 'next/router';
import { NavBar, NavItem, BaseLayout } from './layout';
import Image from 'next/image';
import { ChevronRightIcon, ChevronDownIcon, CollectionIcon } from '@heroicons/react/outline';
import { useStore } from '../store';
import React from 'react';

type ContainerProp ={
  children: React.ReactNode;
}

export const AppLayout = (props: ContainerProp) => {
  const router = useRouter();
  const [toggleDrawer, isDrawerOpen] = useStore((state) => [
    state.toggleDrawer,
    state.isDrawerOpen,
  ]);

  return (
    <BaseLayout>
      <NavBar toggleDrawer={ toggleDrawer } isDrawerOpen={ isDrawerOpen }>
        <NavItem
          onclick={ router.pathname === '/' ? toggleDrawer : () => router.push('/') }
          active={ isDrawerOpen }
        >
          <CollectionIcon className="h-4 place-self-center" />
          <span className="pl-2">Lands</span>
          <div className="ml-2 place-self-center">
            { isDrawerOpen ? (
              <ChevronDownIcon className="h-4" />
            ) : (
              <ChevronRightIcon className="h-4" />
            ) }
          </div>
        </NavItem>

        <span className="grow sm:hidden" />

        <NavItem onclick={ () => router.push('/dashboard') }>
          <Image src="/favicon.ico" alt="" width={ 20 } height={ 20 } />
          <span className="pl-2">LandLog</span>
          <span className="hidden sm:inline pl-2 text-slate-800">| Technoculture</span>
        </NavItem>
      </NavBar>

      { props.children }
    </BaseLayout>
  );
};
