import { Link } from "react-router-dom";
import { Button } from "@components/Button";
import useAuth from "@auth/useAuth";

export function Navbar() {
  const { signOut } = useAuth();

  return (
    <nav>
      {/* Dashboard with sub-pages */}
      <div className="dropdown">
        <Button label={"Dashboard"} />

        <div className="dropdown-content">
          <Link to="/">
            <Button label={"Visão Geral"} />
          </Link>
          <Link to="/calculadora">
            <Button label={"Calculadora"} />
          </Link>
        </div>
      </div>

      <Link to="/ingredientes">
        <Button label={"Ingredientes"} />
      </Link>
      <Link to="/conjuntos">
        <Button label={"Conjuntos"} />
      </Link>
      <Link to="/bolos">
        <Button label={"Bolos"} />
      </Link>
      <Link to="/config">
        <Button label={"Configurações"} />
      </Link>

      <Button label={"Sair"} onClick={() => signOut(true)} />
    </nav>
  );
}