import { IoMdInformationCircleOutline } from "react-icons/io";

export function InformationSpan({ message }: { message: string }) {
  return (
    <span title={message}>
      <IoMdInformationCircleOutline />
    </span>
  );
}
