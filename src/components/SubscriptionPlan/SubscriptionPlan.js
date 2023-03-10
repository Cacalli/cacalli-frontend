import { useState } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import Button from "../Button/Button";
import Toggle from "../Toggle/Toggle";
import SubscriptionPlanCard from "./SubscriptionPlanCard";

export default function SubscriptionPlan() {
  // const {content} =useFetch("https://rickandmortyapi.com/api/character/?page=19")
  // console.log(content)
  const {
    cartItems: [cartItems, setCartItems],
    token: [token, setToken],
  } = useOutletContext();

  const [showFlag, setShowFlag] = useState(false);
  const onAddToCartClick = (size, price, inscriptionPrice) => {
    const tempArray = [...cartItems];
    if (!tempArray.find((item) => item.price === price)) {
      tempArray.push({
        quantity: 1,
        size: size,
        price: price,
        inscriptionPrice: inscriptionPrice,
      });
    } else {
      const index = tempArray.findIndex((item) => item.price === price);
      tempArray[index] = {
        ...tempArray[index],
        quantity: tempArray[index].quantity + 1,
      };
    }

    setCartItems(tempArray);
    setShowFlag(true);
    setTimeout(function () {
      setShowFlag(false);
    }, 5000);
  };

  return (
    <div>
      <div className="flex justify-center my-10">
        <h2 className="text-5xl text-green-one font-semibold pr-4">
          PLANES DE SUSCRIPCIÓN
        </h2>
        <img className="h-10" src="/assets/buckets.png" />
      </div>

      <div className="flex gap-6 justify-center mb-4">
        <p className="self-center text-neutral-gray-one text-lg font-semibold">
          Selecciona tu tipo de plan
        </p>
        <button  className="text-neutral-white py-1 px-2 rounded bg-green-three font-semibold" variant="primary" inverse>Semanal</button>
        <button  className="text-neutral-gray-one  font-semibold">Quincenal</button>
      </div>

      <div className="grid w-10/12 mx-auto card-wrapper gap-12 mb-14">
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="100"
          image="/assets/dog-poop.png"
          price={100}
          size="CHICO"
          packageDescription={
            "Recomendado para un perro talla chica, por ejemplo un Chihuahua"
          }
          descriptionList={[
            "6 litros de...",
            "3 litros de mezcla secante",
            "La inscripción tiene un costo de $200 MXN",
            "KKPAK extra $85 mxn",
          ]}
        />
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="200"
          image="/assets/standing-dog-poop.png"
          price={200}
          size="MEDIANO"
          packageDescription={
            "Recomendado para un perro talla mediana, por ejemplo un Poodle"
          }
          descriptionList={[
            "10 litros de...",
            "6 litros de mezcla secante",
            "La inscripción tiene un costo de $100 MXN",
            "KKPAK extra $85 mxn",
          ]}
        />
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="300"
          image="/assets/sit-dog-poop.png"
          price={300}
          size="GRANDE"
          packageDescription={
            "Recomendado para un perro talla grande, por ejemplo un Doberman"
          }
          descriptionList={[
            "20 litros de...",
            "10 litros de mezcla secante",
            "La inscripción tiene un costo de $100 MXN",
            "KKPAK extra $85 mxn",
          ]}
        />
      </div>
      <div className="text-xl flex justify-center mb-6">
        <p className="text-neutral-gray-two">¿Aún no sabes cuál seleccionar?</p>
        <Link to="/calcula-plan">
          <p className="text-green-one pl-2">Calcula tu KKPAK ideal</p>
        </Link>
      </div>
      <div className="flex flex-col mb-10 px-10 text-xs space-y-1 text-neutral-gray-two text-center">
        <p>
          Cada kkpak incluye 2 contenedores, del cual, uno se entrega
          acondicionado para recolectar heces, el otro está lleno de la mezcla
          secante que ayuda a evitar olores.
        </p>

        <p >
          El costo de la mensualidad del primer kkpak contratado incluye la
          visita a casa del usuario, si se contrata más de un kkpak los
          siguientes tienen un costo menor (kkpak extra).
        </p>

        <p >
          Los kkpaks se contratan con un periodo de recolección semanal o
          quincenal.
        </p>

        <div>
          <p >
            Solo es posible contratar kkpaks de un mismo periodo de recolección.
          </p>
        </div>

        <p className=" text-center mb-10">
          *Todos los planes tienen un costo único de inscripción de $100 MXN
          adicionales al costo de cada plan
        </p>
      </div>
      <div className="fixed top-0 right-0">
        {showFlag ? <div className="fixed top-0 right-0">FLAG</div> : null}
      </div>
    </div>
  );
}
