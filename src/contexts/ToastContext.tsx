import { createContext, type ReactNode } from "react";
import { useToast } from "@hooks/useToast";
import { ToastContainer } from "@components/ToastContainer";

interface ToastContextType {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const toast = useToast();

  const value: ToastContextType = {
    success: toast.success,
    error: toast.error,
    info: toast.info
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toast.toasts} onClose={toast.remove} />
    </ToastContext.Provider>
  );
}
