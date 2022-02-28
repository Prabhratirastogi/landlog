import { MouseEventHandler } from 'react';
import create from 'zustand';

export interface UserState {
  isDrawerOpen: boolean,
  openDrawer: MouseEventHandler,
  closeDrawer: MouseEventHandler,
  toggleDrawer: MouseEventHandler
};

export const useStore = create<UserState>(set => ({
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen }))
}));