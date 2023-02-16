import Toggle from "../Toggle/Toggle";
import SubscriptionPlanCard from "./SubscriptionPlanCard";

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

            <div className="grid grid-cols-3 w-10/12 mx-auto gap-12 mb-6">
                <SubscriptionPlanCard onAddToCartClick={() => alert("Added package S")} image="/assets/dog-poop.png"
                 price={100} size="CHICO" packageDescription={"Recomendado para un perro talla chica, por ejemplo un Chihuahua"} 
                 descriptionList={["6 litros de...", "3 litros de mezcla secante", "La inscripción tiene un costo de $200 MXN", "KKPAK extra $85 mxn"]}/>
                <SubscriptionPlanCard onAddToCartClick={() => alert("Added package M")} image="/assets/standing-dog-poop.png"
                 price={200} size="MEDIANO" packageDescription={"Recomendado para un perro talla mediana, por ejemplo un Poodle"} 
                 descriptionList={["10 litros de...", "6 litros de mezcla secante", "La inscripción tiene un costo de $100 MXN", "KKPAK extra $85 mxn"]}/>
                <SubscriptionPlanCard onAddToCartClick={() => alert("Added package L")} image="/assets/sit-dog-poop.png"
                 price={300} size="GRANDE" packageDescription={"Recomendado para un perro talla grande, por ejemplo un Doberman"}  
                 descriptionList={["20 litros de...", "10 litros de mezcla secante", "La inscripción tiene un costo de $100 MXN", "KKPAK extra $85 mxn"]}/>
            </div>
        
        <div className="text-xl flex justify-center">
            <p className="text-neutral-gray-two">¿Aún no sabes cuál seleccionar?</p>
            <p className="text-green-one pl-2">Calcula tu KKPAK ideal</p>
        </div>v
       
        </div>
    )
} 