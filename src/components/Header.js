import Button from "./Button/Button"
import {Link, NavLink} from "react-router-dom"

export default function Header(){
    return(
        <header className="flex justify-between mt-5">
            <div className="px-14 md:flex-none flex-1">
            <Link to="/"> 
            <img className="w-30 h-14 py-2 md:mx-0 mx-auto" src="/assets/cacalliName.png"/>
            </Link>
            </div>
                <nav className="md:flex hidden mx-8">

                    <Link to="quienes-somos">
                    <Button variant="secondary" inverse>Quiénes somos</Button>
                    </Link>
                    <Link to="plan-suscripcion">
                    <Button variant="secondary" inverse>Precios</Button>
                    </Link>
                    <Link to="calcula-plan">
                    <Button variant="secondary" inverse>Calcula tu plan</Button>
                    </Link>
                    <Link to="contacto">
                    <Button variant="secondary" inverse>Contacto</Button>
                    </Link>
                    <NavLink to="unete">
                    <Button variant="primary">¡Únete!</Button>
                    </NavLink>
                    <NavLink to="ingresa">
                    <Button variant="secondary">Ingresa</Button>
                    </NavLink>
                </nav>
           
        </header>
    )
}