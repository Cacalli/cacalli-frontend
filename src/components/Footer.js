import { Link } from "react-router-dom"
import {FaInstagram, FaWhatsapp} from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="flex-none bg-blue-200 text-black justify-center py-14">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 md:px-32 align-center  gap-4  ">
        <Link className="">
          <img className="w-58 h-48 md:mx-0 mx-auto" src="/assets/logoCacalli.png" />
        </Link>

        <div className="text-neutral-gray-two align-start md:text-left text-center">
          <p className="font-bold ">Acerca de</p>
          <Link to="quienes-somos" className="my-2 block">¿Quiénes somos?</Link>
          <Link to="/" className="my-2 block">¿Qué hacemos?</Link>
          <Link className="my-2 block">¿Por qué Cacalli?</Link>
          <Link to="plan-suscripcion" className="my-2 block">Quiero contratar</Link>
        </div>

        <div className="  text-neutral-gray-two md:text-left text-center">
          <p className="font-bold">Aviso de privacidad</p>
          <Link className="my-2 block">Términos y condiciones</Link>
          <Link className="my-2 block">Política de privacidad</Link>
        </div>

        <div className="text-neutral-gray-two md:text-left text-center">
          <p className="font-bold">Redes sociales</p>
          <div className="flex mt-6  text-green-three md:justify-start justify-center">
           <a href="https://www.instagram.com/cacalli.mx/"> <FaInstagram size="1.5em" /></a>
           <a href="http://wa.me/525514803532"> <FaWhatsapp className="mx-3" size="1.5em" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}