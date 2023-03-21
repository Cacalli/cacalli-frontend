import Button from "./Button/Button";
import { Link, NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";

export default function Header() {
  const isLoggedIn = window.localStorage.getItem("cacalliToken");
  const [showMenu, setShowMenu] = useState(false);
  let navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const adminLoggedIn = window.localStorage.getItem("cacalliRole") === "admin";
  return (
    <>
    <header className="flex flex-none justify-end mt-5 items-center">
      <div className="px-14 md:flex-none flex-1 mr-auto">
        <Link to="/">
          <img
            className="w-30 h-14 py-2 md:mx-0 mx-auto"
            src="/assets/cacalliName.png"
          />
        </Link>
      </div>

      {!adminLoggedIn ? (
        <div className="justify-end hidden md:flex">
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
        </div>
      ) : null}
      <nav className="md:flex hidden mr-6 items-center">
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
          <div className="flex space-x-4 items-center">
            {!adminLoggedIn ? (
              <>
                <NavLink to="carrito">
                  <button className="text-orange-one items-center flex">
                    <AiOutlineShoppingCart size="1.5em" />
                  </button>
                </NavLink>
                <Link className="text-orange-one" to="/dashboard">
                  Perfil
                </Link>
              </>
            ) : null}
            <button
              className="flex text-orange-one space-x-2 items-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt size="1.25em" />
              <span>Salir</span>
            </button>
          </div>
        ) : null}
      </nav>
      <button onClick={toggleMenu} className="md:hidden flex p-4">
        <FaBars className="text-orange-one" size="1.5em" />
      </button>
    </header>
   <MobileMenu toggleMenu={toggleMenu} showMenu={showMenu}/>
    </>
  );
}
