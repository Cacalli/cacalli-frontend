import Testimony from "../Testimony/Testimony";

export default function AboutSection() {
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 ">
        <div>
          <p className="text-green-one font-bold text-6xl my-8 font-lovelo">
            ¿QUIÉNES SOMOS?
          </p>
          <p className="text-xl text-neutral-gray-two">
            Cacalli es un proyecto que hace composta con desechos de nuestros
            animales domésticos.
          </p>
        </div>
        <img className=" rounded-xl" src="/assets/cacalliMembers.jpg" />
      </div>

      <div className="grid grid-cols-3">
        <Testimony/>
        <Testimony/>
        <Testimony/>
      </div>
      <img className="mt-8" src="/assets/cicloCacalli3.png" />
    </div>
  );
}
