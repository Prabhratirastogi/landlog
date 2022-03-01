import { MouseEventHandler } from 'react';
import create from 'zustand';
import { persist } from "zustand/middleware"
import { states_type } from './Components/state_types';

export interface UserState {
  isDrawerOpen: boolean,
  toggleDrawer: MouseEventHandler,
  stateFilter: states_type,
  setStateFilter: (filter: states_type) => any
};

export const useStore = create<UserState>(persist(
  (set, get) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set(state => ({ isDrawerOpen: !state.isDrawerOpen })),
  stateFilter: 'all',
  setStateFilter: (filter: states_type) => 
    set(state => ({ 
      stateFilter: filter 
    })),
}),
  {
    name: "landlog-store",
    getStorage: () => localStorage,
    version: 1
  }
));