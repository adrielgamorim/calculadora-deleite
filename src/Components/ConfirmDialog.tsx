import { Modal } from "@components/Modal";
import * as S from "./ConfirmDialog.styled";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  variant?: 'danger' | 'warning' | 'info';
}

export function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
  variant = 'info'
}: ConfirmDialogProps) {
  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel} title={title} size="small">
      <S.Dialog>
        <S.Message>{message}</S.Message>
        <S.Actions>
          <S.CancelButton onClick={onCancel}>
            {cancelText}
          </S.CancelButton>
          <S.ConfirmButton $variant={variant} onClick={handleConfirm}>
            {confirmText}
          </S.ConfirmButton>
        </S.Actions>
      </S.Dialog>
    </Modal>
  );
}
