import type { ReactNode } from "react";

export function Button(props: { className?: string, label?: ReactNode, onClick?: () => void }) {
  let className = "custom-button";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <button className={className} onClick={props.onClick}>
      <p>{props.label || "Click"}</p>
    </button>
  );
}