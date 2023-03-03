import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function SuccessPayment() {
  return (
    <div className="mt-6">
      <div
        className="flex flex-col items-center"
        style={{ backgroundColor: "#93CBDF" }}
      >
        <img className="w-96" src="/assets/perro-lentes.jpg" />
      </div>
      <div className="mt-8 text-center space-y-4">
        <p className="font-bold text-orange-one text-2xl">
          ¡Tu pago se realizó con éxito!
        </p>
      
      </div>

      <div className="flex place-content-center align-middle justify-center mt-16 text-xl">
      <p className="text-green-one">Agenda tu cita para la entrega de tu kkpak <Link className="text-orange-one font-bold" to="/agenda-entrega">
         aquí
        </Link> </p>

         
        
         
      </div>
    </div>
  )
}
