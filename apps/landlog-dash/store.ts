import { MouseEventHandler } from 'react';
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type states_type = 'all' | 'bh' | 'jh' | 'wb' | 'up' | 'od';

export interface LandMenuState {
  isDrawerOpen: boolean;
  toggleDrawer: MouseEventHandler;
  stateFilter: states_type;
  setStateFilter: (filter: states_type) => any;
  isDetailsOpen: boolean;
  toggleDetails: () => any;
}

let LandMenuStore: any = (set: any) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state: LandMenuState) => ({ isDrawerOpen: !state.isDrawerOpen })),
  stateFilter: 'all',
  setStateFilter: (filter: states_type) =>
    set((state: LandMenuState) => ({ stateFilter: filter })),
  isDetailsOpen: false,
  toggleDetails: () => set((state: LandMenuState) => ({ isDetailsOpen: !state.isDetailsOpen })),
});

LandMenuStore = devtools(LandMenuStore);

export const useStore = create<LandMenuState>(
  // persist(
    LandMenuStore, 
  //   {
  //   name: 'landlog-store',
  //   getStorage: () => localStorage,
  // }
  // ),
  // store
);
