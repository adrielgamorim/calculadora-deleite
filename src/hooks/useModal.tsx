import { useState } from "react";

/**
 * Custom hook to manage modal open/close state.
 * 
 * @returns Object with modal state and control functions
 * 
 * @example
 * const confirmDelete = useModal();
 * 
 * <button onClick={confirmDelete.open}>Delete</button>
 * <ConfirmDialog isOpen={confirmDelete.isOpen} onCancel={confirmDelete.close} />
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    open,
    close,
    toggle
  };
}
