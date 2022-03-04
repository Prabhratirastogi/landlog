import { MouseEventHandler } from 'react';
import create from 'zustand';
import { persist , devtools } from "zustand/middleware"

export type states_type = 'all' | 'bh' | 'jh' | 'wb' | 'up' | 'od';

export interface UserState {
  isDrawerOpen: boolean,
  toggleDrawer: MouseEventHandler,
  stateFilter: states_type,
  setStateFilter: (filter: states_type) => any
  isDetailsOpen: boolean,
  toggleDetails: () => any
};

let store: any = (set: any) => ({
    isDrawerOpen: true,
    toggleDrawer: () => set(state => ({ isDrawerOpen: !state.isDrawerOpen })),
    stateFilter: 'all',
    setStateFilter: (filter: states_type) => set(state => ({stateFilter: filter})),
    isDetailsOpen: false,
    toggleDetails: () => set(state => ({ isDetailsOpen: !state.isDetailsOpen }))
  });

store = devtools(store);

export const useStore = create<UserState>(
  persist(store, {
    name: "landlog-store",
    getStorage: () => localStorage  
  })
  // store
  );