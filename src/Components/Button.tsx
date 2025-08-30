import type { ReactNode } from "react";

export function Button(props: { className?: string, label?: ReactNode, icon?: ReactNode, onClick?: () => void }) {
  let className = "custom-button";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <button className={className} onClick={props.onClick}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <span>{props.label || "Click"}</span>
        {props.icon && <span style={{ height: "20px" }}>{props.icon}</span>}
      </div>
    </button>
  );
}
