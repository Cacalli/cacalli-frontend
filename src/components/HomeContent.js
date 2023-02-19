import Button from "./Button/Button";

export default function HomeContent() {
  return (
    <div className="mt-14 relative md:min-h-screen md:py-52 md:block flex flex-col">
      <div className="md:absolute w-full md:h-full md:top-0 md:left-0 md:z-0 h-60 order-last" style={{
      backgroundImage: "url(/assets/front-view-cute-dogs-in-costumes.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}/>  

      <div className="relative w-10/12 mx-auto">
        <div className="gap-9 flex items-center mb-8">
          <img className="w-40 mb-6 md:w-52" src="/assets/logoCacalli.png" />
          <h1 className="font-bold text-4xl md:text-7xl text-green-one">
            REINVENTANDO <span className="flex">CICLOS</span>
          </h1>
        </div>

        <div className="md:w-1/2">
          <p className="text-xl md:text-2xl mb-8 text-neutral-gray-two flex">
            Al participar en Cacalli, además de evitar la
            contaminación del agua, suelo y aire, permitimos que los nutrientes
            se reincorporen al suelo, y así contribuyan a mejorar su fertilidad
            para regenerar el ciclo de materia orgánica.
          </p>
          <Button className="" variant="primary">
            ¡Quiero unirme!
          </Button>
        </div>
      </div>
    </div>
  );
}
