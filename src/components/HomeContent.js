import Button from "./Button/Button";

export default function HomeContent() {
  return (
    <div className="mt-14 relative md:py-52 md:block flex flex-col md:min-h-screen">
      <div
        className="md:absolute w-full md:h-full md:top-0 md:left-0 md:z-0 h-60 order-last"
        style={{
          backgroundImage: "url(/assets/front-view-cute-dogs-in-costumes.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative w-11/12 mx-auto">
        <div className="gap-9 flex flex-col md:flex-row items-center mb-8">
          <img className="w-40 mb-6 md:w-52" src="/assets/logoCacalli.png" />
          <h1 className="rubik font-bold text-4xl md:text-6xl  text-green-one">
            REINVENTANDO <span className="flex rubik">CICLOS</span>
          </h1>
        </div>

        <div className="md:w-1/2">
          <p className="text-xl md:text-2xl mb-8 text-neutral-gray-two flex text-justify">
           En Cacalli hacemos composta con las heces caninas para reintegrarlas
            a los suelos de forma segura y sanitaria.
          </p>
          <Button className="" variant="primary">
            ¡Quiero unirme!
          </Button>
        </div>
      </div>
    </div>
  );
}
