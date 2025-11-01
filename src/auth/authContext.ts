import { createContext } from "react";
import type { User } from "firebase/auth";

export type AuthContextShape = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: (confirm?: boolean) => Promise<void>;
  confirmLogoutModal: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
  };
  handleConfirmLogout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextShape | undefined>(undefined);
