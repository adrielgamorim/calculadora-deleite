import { Button } from "@components/Button";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiMenuUnfold3Line } from "react-icons/ri";
import "@styles/ActionsMenu.css";

type ActionProps = {
    handleEdit?: () => Promise<void>;
    handleDelete?: () => Promise<void>;
};

export function Actions({ handleEdit, handleDelete }: ActionProps) {
    return (
        <td className="actions">
            <span>{<RiMenuUnfold3Line size={24} />}</span>
            <div className="actions-menu">
                <Button label={<MdEdit />} onClick={handleEdit} />
                <Button label={<RiDeleteBin2Line />} onClick={handleDelete} />
            </div>
        </td>
    );
}