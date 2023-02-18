import Button from "../Button/Button";

export default function Calculator() {
  return (
    <div className="mt-3 mb-44">
      <p className="text-green-one font-bold text-7xl text-center mb-20">
        CALCULA TU PLAN IDEAL
      </p>

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
            value=""
            className="border border-orange-two px-3 py-2 w-60 rounded"
            placeholder="¿Cómo se llama tu mascota?"
          />
        </div>

        <div>
          <p className=" text-icon-hover mb-2.5">Tipo de mascota</p>
          <Button className="py-1 px-2" variant="primary">
            Perro
          </Button>
          <Button>Gato</Button>
        </div>
      </div>
      <p className="text-icon-hover pl-64 mb-10">
        ¿De qué tamaño es tu mascota?
      </p>

      <div className="flex pl-64 mb-16 items-end space-x-5 text-center text-neutral-gray-three">
        <button className="flex flex-col items-center space-y-2">
          <img src="/assets/xsmall-dog-icon.png" />
          <p>Muy chico</p>
        </button>

        <button className="flex flex-col items-center space-y-2">
          <img className="" src="/assets/small-dog-icon.png" />
          <p>Chico</p>
        </button>

        <button className="flex flex-col items-center space-y-2">
          <img className="" src="/assets/medium-dog-icon.png" />
          <p>Mediano</p>
        </button>
        <button className="flex flex-col items-center space-y-2 drop-shadow-lg">
          <img className="" src="/assets/large-dog-icon.png" />
          <p>Grande</p>
        </button>
        <button className="flex flex-col items-center space-y-2">
          <img src="/assets/xlarge-dog-icon.png" />
          <p>Muy grande</p>
        </button>
      </div>
      <div className="pl-64 space-x-5">
        <Button variant="tertiary">Agregar otra mascota</Button>
        <Button variant="primary">Confirmar</Button>
      </div>
    </div>
  );
}
