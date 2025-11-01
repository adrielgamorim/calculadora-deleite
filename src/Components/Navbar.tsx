import useAuth from "@auth/useAuth";
import { Button } from "@components/atoms/Button";
import { ConfigModal } from "@components/ConfigModal";
import { ThemeToggle } from "@components/ThemeToggle";
import { useModal } from "@hooks/useModal";
import { Link, useLocation } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import * as S from "./Navbar.styled";

export function Navbar() {
  const { signOut } = useAuth();
  const location = useLocation();
  const configModal = useModal();

  return (
    <S.Nav>
      {/* Dashboard with sub-pages */}
      <S.DropdownContainer>
        <Button
          variant="ghost"
          className={location.pathname === "/" || location.pathname === "/calculadora" ? "active" : ""}
        >
          Dashboard
        </Button>

        <S.DropdownContent>
          <Link to="/">
            <Button
              variant="ghost"
              className={location.pathname === "/" ? "active" : ""}
            >
              Visão Geral
            </Button>
          </Link>
          <Link to="/calculadora">
            <Button
              variant="ghost"
              className={location.pathname === "/calculadora" ? "active" : ""}
            >
              Calculadora
            </Button>
          </Link>
        </S.DropdownContent>
      </S.DropdownContainer>

      {/* Other Pages */}
      <Link to="/ingredientes">
        <Button
          variant="ghost"
          className={location.pathname === "/ingredientes" ? "active" : ""}
        >
          Ingredientes
        </Button>
      </Link>
      <Link to="/conjuntos">
        <Button
          variant="ghost"
          className={location.pathname === "/conjuntos" ? "active" : ""}
        >
          Conjuntos
        </Button>
      </Link>
      <Link to="/bolos">
        <Button
          variant="ghost"
          className={location.pathname === "/bolos" ? "active" : ""}
        >
          Bolos
        </Button>
      </Link>
      

      <S.NavActions>
        <ThemeToggle />
        <S.IconButton
          onClick={configModal.open}
          aria-label="Configuração"
          title="Configuração"
        >
          <FiSettings size={32} />
        </S.IconButton>
        <S.IconButton
          onClick={() => signOut(true)}
          aria-label="Sair"
          title="Sair"
        >
          <RiLogoutBoxLine size={24} />
        </S.IconButton>
      </S.NavActions>

      <ConfigModal isOpen={configModal.isOpen} onClose={configModal.close} />
    </S.Nav>
  );
}