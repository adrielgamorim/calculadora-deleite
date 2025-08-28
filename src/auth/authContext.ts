import { createContext } from "react";
import type { User } from "firebase/auth";

export type AuthContextShape = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextShape | undefined>(undefined);
