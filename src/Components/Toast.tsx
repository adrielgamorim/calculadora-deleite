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

export function Toast({ id, message, type, onClose, duration }: ToastProps) {
  // Default durations based on type if not provided
  const defaultDuration = duration || (type === 'error' ? 5000 : 3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, defaultDuration);

    return () => clearTimeout(timer);
  }, [id, defaultDuration, onClose]);

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
