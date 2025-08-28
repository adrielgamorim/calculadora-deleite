import { Link } from "react-router-dom";
import { Button } from "@components/Button";
import useAuth from "@auth/useAuth";

export function Navbar() {
  const { signOut } = useAuth();

  function handleSignOut() {
    if (confirm("Tem certeza que deseja sair?")) {
      signOut();
    }
  }

  return (
    <nav>
      <Link to="/">
        <Button label={ "Home" } />
      </Link>
      <Link to="/ingredientes">
        <Button label={ "Ingredientes" } />
      </Link>
      <Link to="/conjuntos">
        <Button label={ "Conjuntos" } />
      </Link>
      <Link to="/bolos">
        <Button label={ "Bolos" } />
      </Link>
      <Link to="/dashboard">
        <Button label={ "Dashboard" } />
      </Link>
      <Link to="/config">
        <Button label={ "Configurações" } />
      </Link>

      <Button label={ "Sair" } onClick={handleSignOut} />
    </nav>
  );
}