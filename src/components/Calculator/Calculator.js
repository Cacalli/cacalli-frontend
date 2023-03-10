import { useState } from "react";
import { redirect } from "react-router-dom";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const [pet, setPet] = useState("Perro");

  const [petName, setPetName] = useState("");
  const [size, setSize] = useState("");
  const [addAnotherPet, setAddAnotherPet] = useState("");
  let navigate = useNavigate();
  return (
    <div className="mt-10 mb-16 w-11/12 mx-auto">
      <h2 className="text-green-one font-semibold text-3xl md:text-5xl text-center mb-20">
        CALCULA TU PLAN IDEAL
      </h2>

      <div className="text-sm md:text-base text-neutral-gray-two mb-9">
        <p>
          Te haremos algunas preguntas generales sobre tus mascotas para
          sugerirte la mejor opción de contratación.
        </p>
        <p className="font-bold">
          El tamaño de los gatos generalmente está en la categoría chica
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-16 mb-9">
        <div>
          <p className=" text-icon-hover text-sm md:text-base mb-2.5">Nombre</p>
          <input
            type="text"
            value={petName}
            className="border border-orange-two px-3 py-2 md:w-60 w-full text-sm md:text-bas rounded"
            placeholder="¿Cómo se llama tu mascota?"
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-sm md:text-base text-icon-hover mb-2.5">
            Tipo de mascota
          </p>
          <Button
            onClick={() => {
              setPet("Perro");
            }}
            className="py-1 px-1 text-neutral-gray-two text-xs md:text-base"
            variant={pet === "Perro" ? "primary" : ""}
          >
            Perro
          </Button>
          <Button
            onClick={() => {
              setPet("Gato");
            }}
            className="py-1 px-2 text-neutral-gray-two text-xs md:text-base"
            variant={pet === "Gato" ? "primary" : ""}
          >
            Gato
          </Button>
        </div>
      </div>
      <p className=" text-sm md:text-base text-icon-hover mb-2.5">
        ¿De qué tamaño es tu mascota?
      </p>

      <div className="flex flex-wrap gap-2 md:flex-row mb-16 md:gap-5  text-center text-neutral-gray-three">
    <div>
    <Button
          onClick={() => {
            setSize("Muy chico");
          }}
          variant={size === "Muy chico" ? "tertiary" : ""}
          className="text-center space-y-1 text-xs md:text-base p-2 md:px-0 w-32 border md:border md:border-solid rounded"
        >
         <div>
         <img className="h-8 md:h-14 mx-auto" src="/assets/dog-xs.png" />
          <p>Muy chico</p>
         </div>
        </Button>
    </div>

        <div>
        <Button
          onClick={() => {
            setSize("Chico");
          }}
          variant={size === "Chico" ? "tertiary" : ""}
          className="text-center space-y-1 text-xs md:text-base p-2 md:px-0 w-32 border md:border md:border-solid rounded"
        >
         <div >
       <img className="h-8 md:h-14 mx-auto" src="/assets/dog-sm.png" />
          <p>Chico</p>
         </div>
        </Button>
        </div>

       <div>
       <Button
          onClick={() => {
            setSize("Mediano");
          }}
          variant={size === "Mediano" ? "tertiary" : ""}
          className="text-center space-y-1 text-xs md:text-base p-2 md:px-0 w-32 border md:border md:border-solid rounded"
        >
         <div >
         <img  className="h-8 md:h-14 mx-auto" src="/assets/dog-md.png" />
          <p>Mediano</p>
         </div>
        </Button>
       </div>
       <div>
       <Button
          onClick={() => {
            setSize("Grande");
          }}
          variant={size === "Grande" ? "tertiary" : ""}
          className="text-center space-y-1 text-xs md:text-base p-2 md:px-0 w-32 border md:border md:border-solid rounded"
        >
          <div>
          <img className="h-8 md:h-14 mx-auto" src="/assets/dog-l.png" />
          <p>Grande</p>
          </div>
         
        </Button>
       </div>
       <div>
       <Button
          onClick={() => {
            setSize("Muy grande");
          }}
          variant={size === "Muy grande" ? "tertiary" : ""}
          className="text-center space-y-1 text-xs md:text-base p-2 md:px-0 w-32 border md:border md:border-solid rounded"
        >
          <div>
          <img className="h-8 md:h-14 mx-auto" src="/assets/dog-xl.png" />
          <p>Muy grande</p>
          </div>
          
        </Button>
       </div>
      </div>
      <div className="flex md:flex space-x-5 text-xs md:text-base">
        <Button
          onClick={() => {
            setAddAnotherPet("Mascota añadida");
          }}
          variant={addAnotherPet === "Mascota añadida" ? "tertiary" : "primary"}
        >
          Agregar otra mascota
        </Button>
        <Button
          onClick={() => {
            return navigate("/plan-suscripcion");
          }}
          variant="primary" inverse
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
}
