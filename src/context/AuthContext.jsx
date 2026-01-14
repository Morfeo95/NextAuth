"use client";

import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const session = useSession();

  return (
    <AuthContext.Provider value={session}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
