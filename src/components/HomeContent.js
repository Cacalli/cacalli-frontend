import Button from "./Button/Button";

export default function HomeContent() {
  return (
    <div className="mt-14 relative ">
      <div
        className="h-screen"
        style={{
          backgroundImage: "url(/assets/front-view-cute-dogs-in-costumes.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="absolute ml-36 inset-y-0 left-0 mt-52">
        <div className="gap-9  flex mb-8">
          <img className="w-52 h-60" src="/assets/logoCacalli.png" />
          <h1 className="font-bold text-7xl text-green-one">
            REINVENTANDO <span className="flex">CICLOS</span>
          </h1>
        </div>

        <div className="w-1/2">
          <p className=" text-2xl mb-8 text-neutral-gray-two flex">
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
