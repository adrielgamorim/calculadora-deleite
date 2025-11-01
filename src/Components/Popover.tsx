import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./Popover.styled";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
}

export function Popover({ isOpen, onClose, title, children, anchorEl }: PopoverProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && anchorEl && contentRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      
      // Position to the right of the button, centered vertically
      let top = anchorRect.top + (anchorRect.height / 2) - (contentRect.height / 2);
      let left = anchorRect.right + 24; // 8px gap

      // Check if it goes off the right edge
      if (left + contentRect.width > window.innerWidth - 8) {
        // Position to the left instead
        left = anchorRect.left - contentRect.width - 8;
      }

      // Check if it goes off the left edge
      if (left < 8) {
        // Position to the right of the button
        left = anchorRect.right + 8;
      }

      // Check if it goes off the bottom
      if (top + contentRect.height > window.innerHeight - 8) {
        top = window.innerHeight - contentRect.height - 8;
      }

      // Check if it goes off the top
      if (top < 8) {
        top = 8;
      }

      setPosition({ top, left });
    }
  }, [isOpen, anchorEl]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.Content 
        ref={contentRef}
        $top={position.top}
        $left={position.left}
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
      </S.Content>
    </S.Overlay>,
    document.body
  );
}
