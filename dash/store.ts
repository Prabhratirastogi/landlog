import { MouseEventHandler } from 'react';
import create from 'zustand';

export interface UserState {
  signedIn: boolean,
  signIn: MouseEventHandler,
  signOut: MouseEventHandler
};

export const useStore = create<UserState>(set => ({
  signedIn: false,
  signIn: () => set({ signedIn: true }),
  signOut: () => set({ signedIn: false })
}));