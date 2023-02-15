import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

export default function LoginForm(){
    return(
        <div className="flex justify-center gap-28">
        <img className="h-auto" src="/assets/landscape-login.png"/>

        <div className="ml-8 pt-24">
        <p className="font-bold text-2xl mb-6 text-neutral-gray-two">Inicia sesión en tu cuenta Cacalli</p>
        <form className="grid gap-4 mb-6">
            <input className="w-96 mb-6 border border-neutral-gray-four rounded px-2 py-2" placeholder="Nombre"/>
            <input className="w-96 mb-6 border border-neutral-gray-four rounded px-2 py-2" placeholder="Email"/>
        </form>
        <Button variant="primary" isFull>Inicia sesión</Button>

            <div className="flex mt-6 justify-center">
                <p className="text-neutral-gray-three">¿Aún no estás registrado?</p>
                <Link to="/unete">
                <p className="pl-4 text-orange-one">Crea una cuenta</p>
                </Link>
               
            </div>
        </div> 

    </div>
    )
}