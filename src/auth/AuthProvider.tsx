import { useEffect, useMemo, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle as svcSignInWithGoogle, logout as svcLogout } from "@helpers/service";
import { AuthContext, type AuthContextShape } from "@auth/authContext";
import type { User } from "firebase/auth";
import { useModal } from "@hooks/useModal";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const confirmLogoutModal = useModal();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    await svcSignInWithGoogle();
  }, []);

  const signOut = useCallback(async (confirm = false) => {
    if (confirm) {
      confirmLogoutModal.open();
    } else {
      await svcLogout();
    }
  }, [confirmLogoutModal]);

  const handleConfirmLogout = useCallback(async () => {
    await svcLogout();
    confirmLogoutModal.close();
  }, [confirmLogoutModal]);

  const value: AuthContextShape = useMemo(
    () => ({ user, loading, signInWithGoogle, signOut, confirmLogoutModal, handleConfirmLogout }),
    [user, loading, signInWithGoogle, signOut, confirmLogoutModal, handleConfirmLogout]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
