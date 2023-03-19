import Button from "./Button/Button";
import { Link, NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const isLoggedIn = window.localStorage.getItem("cacalliToken");
  let navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  const adminLoggedIn = window.localStorage.getItem("cacalliRole") === "admin"
  return (
    <header className="flex flex-none justify-between mt-5">
      <div className="px-14 md:flex-none flex-1">
        <Link to="/">
          <img
            className="w-30 h-14 py-2 md:mx-0 mx-auto"
            src="/assets/cacalliName.png"
          />
        </Link>
      </div>

      {!adminLoggedIn ? <>
        <Link to="quienes-somos">
          <Button variant="secondary" inverse>
            Quiénes somos
          </Button>
        </Link>
        <Link to="calcula-plan">
          <Button variant="secondary" inverse>
            Calcula tu plan
          </Button>
        </Link>
        <Link to="plan-suscripcion">
          <Button variant="secondary" inverse>
            Precios
          </Button>
        </Link>
        <Link to="contacto">
          <Button variant="secondary" inverse>
            Contacto
          </Button>
        </Link>
      </> : null}
      <nav className="md:flex hidden mx-8 items-center">
        {!isLoggedIn ? (
          <>
            <NavLink to="unete">
              <Button variant="primary">¡Únete!</Button>
            </NavLink>
            <NavLink to="ingresa">
              <Button variant="secondary">Ingresa</Button>
            </NavLink>
          </>
        ) : null}

        {isLoggedIn ? (
          <div className="flex space-x-3 items-center">
            {!adminLoggedIn ? <>
              <NavLink to="carrito"> 
              <Button variant="secondary">
                <AiOutlineShoppingCart size="1.5em" />
              </Button>
            </NavLink>
            <Link className="text-orange-one" to="/dashboard">
              Perfil
            </Link>
            </> : null}
            <button
              className="flex text-orange-one space-x-2"
              onClick={handleLogout}
            >
              <FaSignOutAlt size="1.25em" />
              <span>Salir</span>
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
