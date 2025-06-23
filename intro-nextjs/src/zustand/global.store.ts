import { create } from 'zustand';

export interface IGlobalStoreStateProps {
  counter: number;
}

export const globalStore = create((set) => ({
  counter: 0,
  increment: () =>
    set((state: IGlobalStoreStateProps) => ({ counter: state.counter + 1 })),
  decrement: () =>
    set((state: IGlobalStoreStateProps) => ({ counter: state.counter - 1 })),
}));
