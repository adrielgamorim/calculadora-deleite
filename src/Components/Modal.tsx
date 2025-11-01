import { useEffect } from "react";
import * as S from "./Modal.styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'xxs' | 'xs' | 'small' | 'medium' | 'large';
  minHeight?: string;
}

export function Modal({ isOpen, onClose, title, children, footer, size = 'medium', minHeight }: ModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Content 
        $size={size}
        $minHeight={minHeight}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseButton onClick={onClose} aria-label="Fechar">
              ×
            </S.CloseButton>
          </S.Header>
        )}
        <S.Body>
          {children}
        </S.Body>
        {footer && (
          <S.Footer>
            {footer}
          </S.Footer>
        )}
      </S.Content>
    </S.Overlay>
  );
}
