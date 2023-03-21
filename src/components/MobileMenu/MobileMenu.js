import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Header";
export default function MobileMenu({toggleMenu, showMenu}){
    return(
        <div className={`fixed mobile-menu inset-0 flex flex-col w-full mx-auto min-h-full z-30 bg-orange-four rounded ${showMenu ? "" : "expanded"}`}>
            <button onClick={toggleMenu} className=" text-orange-one p-4">
                <FaTimes/>
            </button>
            <div className="justify-end flex flex-col text-center">
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
            <Link to="unete">
              <Button variant="primary">¡Únete!</Button>
            </Link>
            <Link to="ingresa">
              <Button variant="secondary">Ingresa</Button>
            </Link>
        </div>
        </div>
    )
}