import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IUseAuthStoreProps {
  email: string;
  objectId: string; 
  setAuthStore: ({email, objectId}: {email: string, objectId: string}) => void;
}

export const useAuthStore = create<IUseAuthStoreProps>()(persist((set) => ({
  email: '',
  objectId: '',

  setAuthStore: ({email, objectId}) => set(() => ({ email: email, objectId: objectId })),
}), 
{
  name: 'auth-store', 
  partialize: (state) => ({objectId: state.objectId})
}));

export default useAuthStore;



// Persistent & Partialize 