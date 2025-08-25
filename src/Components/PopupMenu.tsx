import type { PopupListItem } from "@models/PopupListItem";

export function PopupMenu(props: { options: PopupListItem[] }) {
  return (
    <ul className="popup-menu">
      {props.options.map((item, idx) => (
        <li key={idx} className="popup-menu-item">
          {item.elements.map((element, index) => (
            <span key={index} className="popup-menu-element">
              {element}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
