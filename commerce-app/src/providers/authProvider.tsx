'use client';

import useAuthStore from '@/store/useAuthStore';
import { axiosInstance } from '@/utils/axiosInstance';
import { ReactNode, useEffect } from 'react';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { objectId, setAuthStore } = useAuthStore();

  const onGetSessionLogin = async () => {
    try {
      const response = await axiosInstance.get('api/auth/session-login', {
        headers: {
          objectId: objectId,
        },
      });

      setAuthStore({
        objectId: response?.data?.user?.objectId,
        email: response?.data?.user?.email,
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (objectId) {
      onGetSessionLogin();
    }
  }, [objectId]);

  return <>{children}</>;
}



// axios.get(url, {headers})
// axios.post(url, {req.data/req.body}, {headers})
// axios.put(url, {req.data/req.body}, {headers})
// axios.delete(url, {headers})




// Step-01: Bikin route api session login
// Step-02: Update useAuthStore (zustand)
// Step-03: Bikin AuthProvider dan import ke layout.tsx