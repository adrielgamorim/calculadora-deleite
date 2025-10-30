import { useState, useCallback } from "react";
import type { ToastType } from "@components/Toast";

/**
 * Custom hook to manage toast notifications.
 * 
 * @returns Object with toasts array and functions to show toasts
 * 
 * @example
 * const toast = useToast();
 * 
 * toast.success("Item salvo com sucesso!");
 * toast.error("Erro ao deletar item");
 * 
 * <ToastContainer toasts={toast.toasts} onClose={toast.remove} />
 */
export function useToast() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const remove = useCallback((id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const show = useCallback((message: string, type: ToastType['type']) => {
    const id = Date.now() + Math.random(); // Unique ID
    const newToast: ToastType = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
  }, []);

  const success = useCallback((message: string) => {
    show(message, 'success');
  }, [show]);

  const error = useCallback((message: string) => {
    show(message, 'error');
  }, [show]);

  const info = useCallback((message: string) => {
    show(message, 'info');
  }, [show]);

  return {
    toasts,
    remove,
    success,
    error,
    info
  };
}
