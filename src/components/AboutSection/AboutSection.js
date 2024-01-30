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
              Quiénes somos
            </p>
            <p className="text-base text-justify lg:text-base md:text-sm text-neutral-gray-two">
            Cacalli es un proyecto para la gestión  de residuos domésticos actualmente concentrado en la recolección, manejo y tratamiento de heces de mascotas. El tratamiento que da Cacalli a las heces está basado en el sanitario ecológico seco, que asegura un producto seguro y nutritivo para las plantas.
Cacalli fue fundada por Diego y Pablo Vignau Manjarrez en 2020. Después de más de 10 años de intentar, como familia, reducir el impacto de nuestros hábitos en el ambiente, intentando cambiar la manera de consumir y desechar, sabemos lo difícil que esto es. La dificultad para implementar esos cambios en nuestra vida no viene solamente de la ignorancia o el desinterés, incluso con conocimientos e interés, existen pocas opciones.
Para consumir productos que tengan un bajo impacto ambiental y un impacto social positivo se necesita investigar cada uno de los productos que consumimos y buscar tiendas que los vendan, y la oferta de productos de este tipo no suele ser muy grande.
Reciclar por completo los productos que consumimos y sus empaques requiere tener espacio para almacenarlos y tiempo para llevarlos a los distintos centros de acopio donde reciben cada tipo de reciclable, aún así en muchos casos no se reciclan en México o en absoluto.
Compostar los residuos orgánicos que producimos también toma tiempo y espacio, además necesitas conocer las técnicas adecuadas para tener una buena composta. 
Por último, compostar excretas es aún más difícil que compostar los residuos orgánicos que producimos cotidianamente.
Aunque cada vez existen más iniciativas para consumir de una forma un poco más responsable y también para desechar de manera más responsable, es necesario que sigan surgiendo proyectos que permitan un cambio que tenga un impacto real. 
En Cacalli, después de mucho aprendizaje hemos logrado facilitar algunas de estas tareas y ahora buscamos una forma de compartirlas a todas aquellas personas que tienen este mismo interés para poder ayudarlas a cambiar hábitos e incorporarlos a su vida cotidiana. 
Creemos que entre más personas con estas inquietudes tengan soluciones prácticas, otras personas apreciarán el valor de adoptar estos cambios también.

            </p>
          </div>
          <div>
            <p className="rubik text-green-one font-bold text-4xl md:text-3xl lg:text-5xl font-josefin-sans mb-6">
              Cómo funciona
            </p>
            <p className="text-base text-justify lg:text-base md:text-sm text-neutral-gray-two">
            Cacalli te entrega un kit de recolección (kkpack) para las heces de tus mascotas. El kkpack puede ser chico, mediano o grande, dependiendo del tamaño de tus mascotas y podemos pasar a cambiarlo cada semana o dos semanas. Dependiendo de tu zona tenemos días y horarios disponibles. Eliges un horario de recolección que permanecerá fijo para facilitar la planeación para ti y para Cacalli. El día antes de la recolección te escribiremos para recordarte que te visitaremos y garantizar la continuidad de tu servicio. 
La gran ventaja del kkpack es que te permite recolectar las heces de tus mascotas por varios días o semanas sin que generen olores incómodos o sean posibles focos de infección. El kkpack incluye dos contenedores, uno vacío donde se van a recolectar las heces y otro lleno de una mezcla secante con la que se cubren las heces que se almacenan y evitan olores. 
Para recibir el servicio de Cacalli se paga una inscripción para cubrir el costo del kkpack y depende del tamaño de éste y también se paga una mensualidad por el servicio de recolección, limpieza del kkpack y gestión de los residuos que depende del tamaño del kkpack y la frecuencia con la que hagamos una renovación del kkpack.

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
