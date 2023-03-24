import Testimony from "../Testimony/Testimony";
import iconImage from "../Testimony/Testimony";
export default function AboutSection() {
  return (
    <div>
      <img className="w-full mt-3" src="/assets/landscape.png" />
      <div className=" w-10/12 mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-14 align-middle my-8">
          <div className="lg:w-auto">
            <img className="rounded-xl " src="/assets/cacalliMembers.jpg" />
          </div>
          <div>
            <p className="rubik text-green-one font-bold text-4xl md:text-3xl lg:text-5xl font-josefin-sans mb-6">
              ¿QUIÉNES SOMOS?
            </p>
            <p className="text-base text-justify lg:text-base md:text-sm text-neutral-gray-two">
              <b>Cacalli</b> es un proyecto de manejo de residuos domésticos,
              actualmente concentrado en la recoleccción, manejo y tratamiento
              de heces de mascotas. El tratamiento que da Cacalli a las heces,
              está basado en el sanitario ecológico ya que este método asegura
              que el producto obtenido sea seguro y nutritivo para las plantas.{" "}
              <br /> <b>Cacalli</b> fue fundado por Diego Vignau Manjarrez y
              Pablo Vignau Manjarrez en el 2020 pero{" "}
              <b>tiene origen en Oaxaca en 1989</b>, cuando nuestros papás se
              mudaron para trabajar en proyectos de impacto social y ambiental
              donde aprendieron formas alternativas de consumo y tratamiento de
              residuos. <br />
              Aquí surge en ellos una conciencia de hacer las cosas de una mejor
              manera que en principio parecían bastente obvias. Esa conciencia
              nos la han transimitido desde hace más de <b>15 años</b>, por lo
              que, hoy en día intentamos formas amigables con el ambiente entre
              el consumo y disposición de residuos. <br /> Después de mucho
              aprendizaje hemos logrado facilitar estas tareas y ahora buscamos
              una forma de compartirlas a todas aquellas personas que tienen
              este mismo interés para{" "}
              <b>
                poder ayudarlos a cambiar hábitos y que puedan incorporarlos a
                su cotidiana.
              </b>
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="rubik text-4xl md:text-4xl font-bold text-green-one ">
            <p>Testimonios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-16">
            <Testimony
              iconImage="/assets/user-example.jpg"
              name="Gabriela Rosas"
              testimonyText="Desde que empecé a usar el método Cacalli, esto es un párrafo de texto ejemplo Eelerisque in pharetra vulputate tristique et sed tortor. Feugiat a lectus quis a."
            ></Testimony>
            <Testimony
              iconImage="/assets/user-example.jpg"
              name="Vane"
              testimonyText="Desde que empecé a usar el método Cacalli, esto es un párrafo de texto ejemplo Eelerisque in pharetra vulputate tristique et sed tortor. Feugiat a lectus quis a. "
            />
            <Testimony
              iconImage="/assets/user-example.jpg"
              name="Diego"
              testimonyText="Desde que empecé a usar el método Cacalli, esto es un párrafo de texto ejemplo Eelerisque in pharetra vulputate tristique et sed tortor. Feugiat a lectus quis a. "
            />
          </div>
        </div>
      </div>

      <div className="w-auto md:p-16">
        <img className="mt-8" src="/assets/cicloCacalli3.png" />
      </div>
    </div>
  );
}
