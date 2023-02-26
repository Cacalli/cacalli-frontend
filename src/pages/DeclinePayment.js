import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function DeclinePayment(){
    return(
        <div className="mt-6">
        <div
          className="flex flex-col items-center"
          style={{ backgroundColor: "#EDEEF2" }}
        >
          <img className="max-w-2xl" src="/assets/perro-ojos.jpg" />
        </div>
        <div className="mt-8 text-center space-y-4">
          <p className="font-bold text-orange-one text-2xl">
            ¡Tuvimos un problema con tu pago!
          </p>
        </div>
  
        <div className="flex place-content-center mt-16 space-x-6 mb-6">
       <Link to="/carrito">
       <Button variant="primary" inverse>
            Intenta de nuevo
          </Button>
          </Link>
         <Link to="/dashboard">
         <Button variant="primary">
            Volver al menú principal
          </Button>
          </Link>
        </div>
      </div>
    )
}