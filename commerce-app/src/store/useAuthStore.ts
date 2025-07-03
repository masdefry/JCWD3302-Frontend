import { create } from 'zustand';

interface IUseAuthStoreProps {
  email: string;
  setAuthStore: (email: string) => void;
}

export const useAuthStore = create<IUseAuthStoreProps>()((set) => ({
  email: '',

  setAuthStore: (email) => set(() => ({ email: email })),
}));

export default useAuthStore;
