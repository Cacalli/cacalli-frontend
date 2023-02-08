import Button from "./Button/Button"
import {Link, NavLink} from "react-router-dom"

export default function Header(){
    return(
        <header className="flex justify-between mt-5">
            <div className="px-14 ">
            <Link to="/"> 
            <img className="w-30 h-14 py-2" src="/assets/cacalliName.png"/>
            </Link>
            </div>
          
                <nav className="flex mx-8">

                    <Link to="quienes-somos">
                    <Button variant="secondary" inverse>Quienes somos</Button>
                    </Link>
                    <Link to="reinventando-ciclos">
                    <Button variant="secondary" inverse>Reinventando ciclos</Button>
                    </Link>
                    <Link to="precios">
                    <Button variant="secondary" inverse>Precios</Button>
                    </Link>
                    <Link to="contacto">
                    <Button variant="secondary" inverse>Contacto</Button>
                    </Link>
                    <Button variant="primary">¡Únete!</Button>
                    <Button variant="secondary">Ingresa</Button>
                </nav>
           
        </header>
    )
}