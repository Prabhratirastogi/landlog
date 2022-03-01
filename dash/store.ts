import { MouseEventHandler } from 'react';
import create from 'zustand';
import { persist } from "zustand/middleware"

export interface UserState {
  isDrawerOpen: boolean,
  toggleDrawer: MouseEventHandler
};

export const useStore = create<UserState>(persist(
  (set, get) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set(state => ({ isDrawerOpen: !state.isDrawerOpen }))
}),
  {
    name: "landlog-store",
    getStorage: () => localStorage,
    // version: 
  }
));