import Button from "./Button"
import {Link, NavLink} from "react-router-dom"

export default function Header(){
    return(
        <header className="flex justify-between mt-8">
            <Link to="/"> Logo Home</Link>
                <nav className="flex justify-center mx-8">
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