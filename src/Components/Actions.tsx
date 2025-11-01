import { useState, useRef } from "react";
import { RiMoreFill } from "react-icons/ri";
import { ActionsDialog } from "@components/ActionsDialog";
import * as S from "./Actions.styled";

type ActionProps = {
    handleEdit?: () => void | Promise<void>;
    handleDelete?: () => void | Promise<void>;
    itemName?: string;
};

export function Actions({ handleEdit, handleDelete, itemName }: ActionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    function openDialog() {
        setIsOpen(true);
    }

    function closeDialog() {
        setIsOpen(false);
    }

    return (
        <>
            <S.ActionsCell>
                <S.ActionButton ref={buttonRef} onClick={openDialog}>
                    <RiMoreFill size={24} />
                </S.ActionButton>
            </S.ActionsCell>

            <ActionsDialog
                isOpen={isOpen}
                onClose={closeDialog}
                onEdit={handleEdit || (() => {})}
                onDelete={handleDelete || (() => {})}
                itemName={itemName}
                anchorEl={buttonRef.current}
            />
        </>
    );
}