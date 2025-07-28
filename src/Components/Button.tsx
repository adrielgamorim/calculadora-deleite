export function Button(props: { label?: string, onClick?: () => void }) {
  return (
    <button className="custom-button" onClick={props.onClick}>
      <p>{props.label || "Click"}</p>
    </button>
  );
}