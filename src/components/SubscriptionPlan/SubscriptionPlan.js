import { FaPoop } from "react-icons/fa";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Counter from "../Counter/Counter";
import Toggle from "../Toggle/Toggle";

export default function SubscriptionPlan(){
    return(
        <div>
            <div className="flex justify-center mb-4">
                <h2 className="text-5xl text-green-one font-semibold pr-4">PLANES DE SUSCRIPCIÓN</h2>
                <img className="h-14" src="/assets/buckets.png"/>
            </div>
            <p className="text-neutral-gray-two text-center mb-10">*Todos los planes tienen un costo único de inscripción de $100 MXN adicionales al costo de cada plan</p>

            <div className="flex gap-6 justify-center mb-4">
                <p className="self-center text-neutral-gray-one text-lg"> Selecciona tu tipo de plan</p>
                <Toggle variant="toggle-plan">Semanal</Toggle>
            </div>

            <div className="flex grid-cols-3 gap-12 place-content-center mb-6">
            <Card className="px-12 py-6">
                <div className="grid justify-items-center my-6">
                    <img className="h-24" src="/assets/dog-poop.png"/>
                </div>

                <div className="relative mb-4">
                <p className="text-neutral-black font-bold text-6xl">$100</p>
                <p className="text-lg text-neutral-gray-three absolute bottom-0 right-20">pesos mensuales</p>
                </div>
                <p className="text-orange-one text-5xl font-bold mb-10">CHICO</p>

              <div  className="my-6 text-lg">
              <ul>
                <div className="flex">
                    <img className="w-10 h-8" src="/assets/caquita.png"/>
                    <li > Capacidad total de 9 litros</li>
                </div>
                <p className="mb-4 pl-10 text-neutral-gray-two">(6 de heces y 3 de mezcla)</p>
                    
                    <div className="flex">
                    <img className="w-10 h-8" src="/assets/caquita.png"/>
                    <li className="mb-4">Rinde para un perro pequeño (Chihuahua)</li>
                    </div>
                   
                   <div className="flex">
                   <img className="w-10 h-8" src="/assets/caquita.png"/>
                   <li className="mb-4">Dos contenedores</li>
                   </div>

                   <div className="flex mb-10">
                   <img className="w-10 h-8" src="/assets/caquita.png"/>
                   <li className="mb-4">KKPAK extra $85 mxn</li>
                   </div>
                </ul>
              </div>
                
              <div className="mb-8 flex justify-items-stretch space-x-36">
                    <p className="text-neutral-gray-two self-center text-lg">Número de paquetes</p>
                    <Counter/>
                </div>

                <div>
                <Button variant="primary" isFull>Añadir al carrito</Button>
                <p className="text-center text-orange-one mt-4">Más información</p>
                </div>
                
            </Card>

            <Card className="px-12 py-6">
            <div className="grid justify-items-center my-6">
                    <img className="h-24" src="/assets/standing-dog-poop.png"/>
                </div>
                <div className="relative mb-4">
                <p className="text-neutral-black font-bold text-6xl">$200</p>
                <p className="text-lg text-neutral-gray-three absolute bottom-0 right-24">pesos mensuales</p>
                </div>
                <p className="text-orange-one text-5xl font-bold mb-10">MEDIANO</p>

              <div  className="my-6 text-lg">
              <ul>
                <div className="flex">
                    <img className="w-10 h-8" src="/assets/caquita.png"/>
                    <li > Capacidad total de 16 litros</li>
                </div>
                <p className="mb-4 pl-10 text-neutral-gray-two">(10 de heces y 6 de mezcla)</p>
                    
                    <div className="flex">
                    <img className="w-10 h-8" src="/assets/caquita.png"/>
                    <li className="mb-4">Rinde para un perro mediano (Beagle, pitbull)</li>
                    </div>
                   
                   <div className="flex">
                   <img className="w-10 h-8" src="/assets/caquita.png"/>
                   <li className="mb-4">Tres contenedores</li>
                   </div>

                   <div className="flex mb-10">
                   <img className="w-10 h-8" src="/assets/caquita.png"/>
                   <li className="mb-4">KKPAK extra $85 mxn</li>
                   </div>
                </ul>
              </div>
                
              <div className="mb-8 flex justify-items-stretch space-x-36">
                    <p className="text-neutral-gray-two self-center text-lg">Número de paquetes</p>
                    <Counter/>
                </div>

                <div>
                <Button variant="primary" isFull>Añadir al carrito</Button>
                <p className="text-center text-orange-one mt-4">Más información</p>
                </div>
            </Card>

            <Card className="px-12 py-6">
            <div className="grid justify-items-center my-6">
                    <img className="h-24" src="/assets/sit-dog-poop.png"/>
                </div>
                <div className="relative mb-4">
                <p className="text-neutral-black font-bold text-6xl">$300</p>
                <p className="text-lg text-neutral-gray-three absolute bottom-0 right-28">pesos mensuales</p>
                </div>
                <p className="text-orange-one text-5xl font-bold mb-10">GRANDE</p>

              <div  className="my-6 text-lg">
              <ul>
                <div className="flex">
                    <img className="w-10 h-8" src="/assets/caquita.png"/>
                    <li > Capacidad total de 30 litros</li>
                </div>
                <p className="mb-4 pl-10 text-neutral-gray-two">(20 de heces y 10 de mezcla)</p>
                    
                    <div className="flex">
                    <img className="w-10 h-8" src="/assets/caquita.png"/>
                    <li className="mb-4">Rinde para un perro grande (Labrador, pastor)</li>
                    </div>
                   
                   <div className="flex">
                   <img className="w-10 h-8" src="/assets/caquita.png"/>
                   <li className="mb-4">Tres contenedores</li>
                   </div>

                   <div className="flex mb-10">
                   <img className="w-10 h-8" src="/assets/caquita.png"/>
                   <li className="mb-4">KKPAK extra $85 mxn</li>
                   </div>
                </ul>
              </div>
                
                <div className="mb-8 flex justify-items-stretch space-x-36">
                    <p className="text-neutral-gray-two self-center text-lg">Número de paquetes</p>
                    <Counter/>
                </div>

                <div>
                <Button variant="primary" isFull>Añadir al carrito</Button>
                <p className="text-center text-orange-one mt-4">Más información</p>
                </div>
            </Card>
            </div>
        
        <div className="text-xl flex justify-center">
            <p className="text-neutral-gray-two">¿Aún no sabes cuál seleccionar?</p>
            <p className="text-green-one pl-2">Calcula tu KKPAK ideal</p>
        </div>
       
        </div>
    )
} 