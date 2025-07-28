export function Button(props: { label?: string }) {
  return (
    <button className="custom-button">
      <p>{props.label || "Click"}</p>
    </button>
  );
}