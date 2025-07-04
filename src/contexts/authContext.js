import { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}