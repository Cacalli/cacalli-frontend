import { useState } from "react";
import baseUrl from "../../utils/baseUrls";
import Button from "../Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Coverage() {
  const [location, setLocation] = useState("");
  const handleSearchClick = () => {
    fetch(`${baseUrl}/zone/checkZipcode/${location}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        const isAvailable = data.payload.available;
        if (isAvailable) {
          toast.info(
            <div>
              <span>Damos servicio en tu zona, te recomendamos</span>{" "}
              <Link
                className="text-orange-one font-bold hover:underline"
                to="/ingresa"
              >
                iniciar sesión
              </Link>
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          toast.info("Por el momento no estamos disponibles en tu zona", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <div className="bg-orange-one py-20 md:py-40">
      <div className="w-10/12 flex mx-auto">
        <div className="md:flex w-full items-center">
          <div className="flex-1">
            <div className="mb-6">
              <p className=" rubik text-4xl md:text-6xl  text-neutral-white font-lovelo">
                COBERTURA
              </p>
              <p className="text-neutral-white py-4 text-xl">
                Descubre qué tan cerca estamos de ti
              </p>
            </div>
            <div className="flex mb-6 md:mb-0  space-x-6 w-8/12">
              <input
                type="text"
                value={location}
                //undefined... why?
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 outline-none rounded p-2 "
                placeholder="Inserta tu código postal"
              />
              <Button
                onClick={handleSearchClick}
                className="flex-none"
                variant="neutral"
              >
                Buscar
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="w-auto m-auto md:h-[600px] rounded"
              src="/assets/availability-zone.png"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
