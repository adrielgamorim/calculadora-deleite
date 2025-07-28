import { Link } from "react-router-dom";
import { Button } from "@components/Button";

export function Navbar() {
  return (
    <div>
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
    </div>
  );
}