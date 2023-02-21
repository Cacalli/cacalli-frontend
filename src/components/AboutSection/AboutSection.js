import Testimony from "../Testimony/Testimony";
import iconImage from "../Testimony/Testimony";
export default function AboutSection() {
  return (
    <div>
      <img className="w-full mt-3" src="/assets/landscape.png"/>
      <div className=" w-10/12 mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <p className="text-green-one font-bold text-6xl my-8 font-lovelo">
            ¿QUIÉNES SOMOS?
          </p>
          <p className="text-xl text-neutral-gray-two">
            Cacalli es un proyecto que hace composta con desechos de nuestros
            animales domésticos.
          </p>
        </div>
        <img className="rounded-xl" src="/assets/cacalliMembers.jpg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
        <Testimony iconImage="/assets/user-example.jpg" name="Jessica" testimonyText="Desde que empecé a usar el método Cacalli, esto es un párrafo de texto ejemplo Eelerisque in pharetra vulputate tristique et sed tortor. Feugiat a lectus quis a."></Testimony>
        <Testimony iconImage="/assets/user-example.jpg" name="Vane" testimonyText="Desde que empecé a usar el método Cacalli, esto es un párrafo de texto ejemplo Eelerisque in pharetra vulputate tristique et sed tortor. Feugiat a lectus quis a. "/>
        <Testimony iconImage="/assets/user-example.jpg" name="Diego" testimonyText="Desde que empecé a usar el método Cacalli, esto es un párrafo de texto ejemplo Eelerisque in pharetra vulputate tristique et sed tortor. Feugiat a lectus quis a. "/>
      </div>
      </div>
      
      <div className="w-auto md:p-16">
      <img className="mt-8" src="/assets/cicloCacalli3.png" />
      </div>
    </div>
  );
}
