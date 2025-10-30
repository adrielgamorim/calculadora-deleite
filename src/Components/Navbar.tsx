import useAuth from "@auth/useAuth";
import { Button } from "@components/Button";
import { ConfigModal } from "@components/ConfigModal";
import { useModal } from "@hooks/useModal";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { signOut } = useAuth();
  const location = useLocation();
  const configModal = useModal();

  return (
    <nav>
      {/* Dashboard with sub-pages */}
      <div className="dropdown">
        <Button
          label={"Dashboard"}
          className={location.pathname === "/" || location.pathname === "/calculadora" ? "active" : ""}
        />

        <div className="dropdown-content">
          <Link to="/">
            <Button
              label={"Visão Geral"}
              className={location.pathname === "/" ? "active" : ""}
            />
          </Link>
          <Link to="/calculadora">
            <Button
              label={"Calculadora"}
              className={location.pathname === "/calculadora" ? "active" : ""}
            />
          </Link>
        </div>
      </div>

      {/* Other Pages */}
      <Link to="/ingredientes">
        <Button
          label={"Ingredientes"}
          className={location.pathname === "/ingredientes" ? "active" : ""}
        />
      </Link>
      <Link to="/conjuntos">
        <Button
          label={"Conjuntos"}
          className={location.pathname === "/conjuntos" ? "active" : ""}
        />
      </Link>
      <Link to="/bolos">
        <Button
          label={"Bolos"}
          className={location.pathname === "/bolos" ? "active" : ""}
        />
      </Link>
      
      <Button
        label={"Configurações"}
        onClick={configModal.open}
      />

      <Button label={"Sair"} onClick={() => signOut(true)} />

      <ConfigModal isOpen={configModal.isOpen} onClose={configModal.close} />
    </nav>
  );
}