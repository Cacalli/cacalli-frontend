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
    <div className="mt-10 mb-44">
      <h2 className="text-green-one font-semibold text-5xl text-center mb-20">
        CALCULA TU PLAN IDEAL
      </h2>

      <div className="pl-64 text-neutral-gray-two mb-9">
        <p>
          Te haremos algunas preguntas generales sobre tus mascotas para
          sugerirte la mejor opción de contratación.
        </p>
        <p className="font-bold">
          El tamaño de los gatos generalmente está en la categoría chica
        </p>
      </div>

      <div className="flex gap-16 pl-64 mb-9">
        <div>
          <p className=" text-icon-hover text-base mb-2.5">Nombre</p>
          <input
            type="text"
            value={petName}
            className="border border-orange-two px-3 py-2 w-60 rounded"
            placeholder="¿Cómo se llama tu mascota?"
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div>
          <p className=" text-icon-hover mb-2.5">Tipo de mascota</p>
          <Button
            onClick={() => {
              setPet("Perro");
            }}
            className="py-1 px-2 mx-2"
            variant={pet === "Perro" ? "primary" : ""}
          >
            Perro
          </Button>
          <Button
            onClick={() => {
              setPet("Gato");
            }}
            className="py-1 px-2"
            variant={pet === "Gato" ? "primary" : ""}
          >
            Gato
          </Button>
        </div>
      </div>
      <p className="text-icon-hover pl-64 mb-10">
        ¿De qué tamaño es tu mascota?
      </p>

      <div className="flex pl-64 mb-16 items-end space-x-5 text-center text-neutral-gray-three">
        <Button
          onClick={() => {
            setSize("Muy chico");
          }}
          variant={size === "Muy chico" ? "tertiary" : ""}
          className="flex flex-col items-center space-y-2 border border-solid border-transparent rounded p-1"
        >
          <img className="h-20" src="/assets/xsmall-dog-icon.png" />
          <p>Muy chico</p>
        </Button>

        <Button
          onClick={() => {
            setSize("Chico");
          }}
          variant={size === "Chico" ? "tertiary" : ""}
          className="flex flex-col items-center space-y-2 border border-solid border-transparent rounded p-1"
        >
          <img className="" src="/assets/small-dog-icon.png" />
          <p>Chico</p>
        </Button>

        <Button
          onClick={() => {
            setSize("Mediano");
          }}
          variant={size === "Mediano" ? "tertiary" : ""}
          className="flex flex-col items-center space-y-2 border border-solid rounded p-1"
        >
          <img className="" src="/assets/medium-dog-icon.png" />
          <p>Mediano</p>
        </Button>
        <Button
          onClick={() => {
            setSize("Grande");
          }}
          variant={size === "Grande" ? "tertiary" : ""}
          className="flex flex-col items-center space-y-2 border border-solid rounded p-1 "
        >
          <img className="" src="/assets/large-dog-icon.png" />
          <p>Grande</p>
        </Button>
        <Button
          onClick={() => {
            setSize("Muy grande");
          }}
          variant={size === "Muy grande" ? "tertiary" : ""}
          className="flex flex-col items-center space-y-2 border border-solid rounded p-1"
        >
          <img src="/assets/xlarge-dog-icon.png" />
          <p>Muy grande</p>
        </Button>
      </div>
      <div className="pl-64 space-x-5">
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
          variant="primary"
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
}
