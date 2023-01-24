import Button from "./Button/Button"
import {Link, NavLink} from "react-router-dom"

export default function Header(){
    return(
        <header className="flex justify-between mt-5">
            <div className="px-14 ">
            <Link to="/"> 
            <img className="w-24 h-12 py-2" src="/assets/cacalliName.png"/>
            </Link>
            </div>
          
                <nav className="flex mx-8">
                    <Button variant="secondary" inverse>Quienes somos</Button>
                    <Button variant="secondary" inverse>Reinventando ciclos</Button>
                    <Button variant="secondary" inverse>Precios</Button>
                    <Button variant="secondary" inverse>Contacto</Button>
                    <Button variant="primary">¡Únete!</Button>
                    <Button variant="secondary">Ingresa</Button>
                </nav>
           
        </header>
    )
}