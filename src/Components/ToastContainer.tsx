import { Toast } from "@components/Toast";
import type { ToastType } from "@components/Toast";
import { Container } from "./Toast.styled";

interface ToastContainerProps {
  toasts: ToastType[];
  onClose: (id: number) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <Container>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </Container>
  );
}
