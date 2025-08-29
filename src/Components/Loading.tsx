export function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="#fff" strokeWidth="6" fill="none" />
        <circle cx="50" cy="5" r="7" fill="#000">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}