import { MouseEventHandler } from 'react';
import create from 'zustand';
import { persist } from "zustand/middleware"

export interface UserState {
  isDrawerOpen: boolean,
  openDrawer: MouseEventHandler,
  closeDrawer: MouseEventHandler,
  toggleDrawer: MouseEventHandler
};

export const useStore = create<UserState>(persist(
  (set, get) => ({
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  toggleDrawer: () => set(state => ({ isDrawerOpen: !state.isDrawerOpen }))
}),
  {
    name: "landlog-store",
    getStorage: () => localStorage,
    // version: 
  }
));