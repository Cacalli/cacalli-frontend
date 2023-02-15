import { Link } from "react-router-dom"
import {FaInstagram, FaWhatsapp} from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-blue-200 text-black justify-center py-14">
      <div className="mb-6 grid grid-cols-4 gap-4 px-32 ">
        <Link className="">
          <img className="w-58 h-48" src="/assets/logoCacalli.png" />
        </Link>

        <div className="text-neutral-gray-two align-start">
          <p className="font-bold ">Acerca de</p>
          <Link className="my-2 block">¿Quiénes somos?</Link>
          <Link className="my-2 block">¿Qué hacemos?</Link>
          <Link className="my-2 block">¿Por qué Cacalli?</Link>
          <Link className="my-2 block">Quiero contratar</Link>
        </div>

        <div className="  text-neutral-gray-two ">
          <p className="font-bold ">Contacto</p>
          <Link className="my-2 block">Términos y condiciones</Link>
          <Link className="my-2 block">Política de privacidad</Link>
        </div>

        <div className="text-neutral-gray-two ">
          <p className="font-bold">Redes sociales</p>
          <div className="flex mt-6 px-42 text-green-three">
            <FaInstagram size="1.5em" />
            <FaWhatsapp className="mx-3" size="1.5em" />
          </div>
        </div>
      </div>
    </footer>
  );
}