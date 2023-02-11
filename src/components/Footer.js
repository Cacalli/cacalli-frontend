import { Link } from "react-router-dom"
import {FaInstagram, FaWhatsapp} from 'react-icons/fa';

export default function Footer(){

    return(
        <footer className="bg-blue-200 text-black h-10 flex justify-center mt-8">
            <Link className="mx-28">Logo cacalli home</Link>
                <div className="flex flex-col mx-28 text-neutral-gray-two">
                    <p className="font-bold ">Acerca de</p>
                    <Link className="my-6">¿Quiénes somos?</Link>
                    <Link className="my-6">¿Qué hacemos?</Link>
                    <Link className="my-6">¿Por qué Cacalli?</Link>
                    <Link className="my-6">Quiero contratar</Link>
                </div>

                <div className="flex flex-col mx-28 text-neutral-gray-two">
                    <p className="font-bold ">Contacto</p>
                    <Link className="my-6">Términos y condiciones</Link>
                    <Link className="my-6">Política de privacidad</Link>
                </div>

                <div className="flex flex-col mx-28 text-neutral-gray-two">
                    <p className="font-bold">Redes sociales</p>
                    <div className="flex my-6 m-0 text-green-three">
                        <FaInstagram  size="1.5em"/>
                        <FaWhatsapp className="mx-3" size="1.5em"/>
                    </div>

                </div>
        </footer>
    )
}