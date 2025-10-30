import { Toast } from "@components/Toast";
import type { ToastType } from "@components/Toast";
import "@styles/Toast.css";

interface ToastContainerProps {
  toasts: ToastType[];
  onClose: (id: number) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
