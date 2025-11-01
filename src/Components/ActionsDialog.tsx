import { Popover } from "@components/Popover";
import { Button } from "@components/atoms/Button";
import { FormActions } from "@components/form/FormActions";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import * as S from "./ActionsDialog.styled";

interface ActionsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  itemName?: string;
  anchorEl: HTMLElement | null;
}

export function ActionsDialog({ 
  isOpen, 
  onClose, 
  onEdit, 
  onDelete,
  itemName,
  anchorEl
}: ActionsDialogProps) {
  function handleEdit() {
    onEdit();
    onClose();
  }

  function handleDelete() {
    onDelete();
    onClose();
  }

  return (
    <Popover isOpen={isOpen} onClose={onClose} title="Ações" anchorEl={anchorEl}>
      <S.Content>
        <S.Message>
          O que você deseja fazer{itemName ? ` com "${itemName}"` : ''}?
        </S.Message>

        <FormActions align="center">
          <Button onClick={handleEdit} variant="primary">
            <RiEditLine size={20} />
            Editar
          </Button>
          <Button onClick={handleDelete} variant="danger">
            <RiDeleteBinLine size={20} />
            Deletar
          </Button>
        </FormActions>
      </S.Content>
    </Popover>
  );
}
