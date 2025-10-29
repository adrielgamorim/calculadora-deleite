import packageJson from '@package';

export function Footer() {
  return (
    <footer style={{ fontSize: "0.7rem" }}>
      <p>&copy; 2025 Calculadora D'Leite. Todos os direitos reservados.</p>
      <p>Versão {packageJson.version}</p>
    </footer>
  );
}
