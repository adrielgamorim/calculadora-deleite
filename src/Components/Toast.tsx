import { useEffect } from "react";
import * as S from "./Toast.styled";

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
    <S.ToastWrapper $variant={type}>
      <S.Icon>{icons[type]}</S.Icon>
      <S.Message>{message}</S.Message>
      <S.CloseButton onClick={() => onClose(id)} aria-label="Fechar">
        ×
      </S.CloseButton>
    </S.ToastWrapper>
  );
}
