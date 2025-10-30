import { useEffect } from "react";
import "@styles/Toast.css";

export interface ToastType {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastProps extends ToastType {
  onClose: (id: number) => void;
  duration?: number;
}

export function Toast({ id, message, type, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };

  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-icon">{icons[type]}</span>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={() => onClose(id)} aria-label="Fechar">
        ×
      </button>
    </div>
  );
}
