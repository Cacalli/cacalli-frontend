import { useState } from "react";
import {
  Link,
  useOutletContext,
} from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import Button from "../Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscriptionPlanCard from "./SubscriptionPlanCard";

export default function SubscriptionPlan() {
  const {
    cartItems: [cartItems, setCartItems],
    token: [token, setToken],
  } = useOutletContext();

  const onAddToCartClick = (size, price, inscriptionPrice) => {
    if (!token) {
      toast.info(
        <div>
          <span>Para adquirir un paquete es necesario</span>{" "}
          <Link
            className="text-orange-one font-bold hover:underline"
            to="/ingresa"
          >
            iniciar sesión
          </Link>
        </div>,
        { position: toast.POSITION.TOP_RIGHT }
      );
      return;
    }
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
    toast.success("¡Paquete añadido a tu carrito!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [plan, setPlan] = useState("Semanal");

  return (
    <div>
      <div className="flex justify-center my-10 items-center">
        <h2 className="rubik text-2xl md:text-5xl text-green-one font-semibold pr-4">
          PLANES DE SUSCRIPCIÓN
        </h2>
        <img className="h-8 md:h-10" src="/assets/buckets.png" />
      </div>

      <div className="flex-col text-center md:space-y-0 space-y-4 items-center space-x-3 md:flex md:flex-row gap-6 justify-center mb-6 text-base md:text-lg">
        <p className=" text-neutral-gray-one font-semibold text-lg">
          Selecciona tu tipo de plan
        </p>
        <Button
          onClick={() => setPlan("Semanal")}
          className="text-neutral-gray-three font-semibold "
          inverse
          variant={plan === "Semanal" ? "primary" : ""}
        >
          Semanal
        </Button>
        <Button
          className="text-neutral-gray-three font-semibold"
          onClick={() => setPlan("Quincenal")}
          variant={plan === "Quincenal" ? "primary" : ""}
        >
          Quincenal
        </Button>
      </div>

      <div className="grid w-10/12 mx-auto card-wrapper gap-12 mb-14">
        {plan === "Semanal" ? (
        <>
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="200"
          image="/assets/dog-poop.png"
          price={230}
          size="CHICO"
          packageDescription={
            "Recomendado para un perro talla mediana, por ejemplo un Beagle, o para un gato"
          }
          descriptionList={[
            "6 litros de capacidad",
            "3 litros de mezcla secante",
            "La inscripción tiene un costo de $200 MXN",
          ]}
        />
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="250"
          image="/assets/standing-dog-poop.png"
          price={300}
          size="MEDIANO"
          packageDescription={
            "Recomendado para un perro talla grande o gigante, por ejemplo un gran danés, o para dos o tres gatos"
          }
          descriptionList={[
            "10 litros de capacidad",
            "6 litros de mezcla secante",
            "La inscripción tiene un costo de $250 MXN",
          ]}
        />
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="375"
          image="/assets/sit-dog-poop.png"
          price={400}
          size="GRANDE"
          packageDescription={
            "Recomendado para dos perros de talla grande o gitante, por ejemplo dos Berneses de la montaña, o para cuatro o cinco gatos"
          }
          descriptionList={[
            "19 litros de capacidad",
            "10 litros de mezcla secante",
            "La inscripción tiene un costo de $375 MXN",
          ]}
        />
        </>
        ) : (
          <>
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="200"
          image="/assets/dog-poop.png"
          price={175}
          size="CHICO"
          packageDescription={
            "Recomendado para un perro talla chica, por ejemplo un Shiba Inu"
          }
          descriptionList={[
            "6 litros de capacidad",
            "3 litros de mezcla secante",
            "La inscripción tiene un costo de $200 MXN",
          ]}
        />
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="250"
          image="/assets/standing-dog-poop.png"
          price={210}
          size="MEDIANO"
          packageDescription={
            "Recomendado para un perro talla mediana a grande, por ejemplo un Labrador, o para un gato"
          }
          descriptionList={[
            "10 litros de capacidad",
            "6 litros de mezcla secante",
            "La inscripción tiene un costo de $250 MXN",
          ]}
        />
        <SubscriptionPlanCard
          onAddToCartClick={onAddToCartClick}
          inscriptionPrice="375"
          image="/assets/sit-dog-poop.png"
          price={300}
          size="GRANDE"
          packageDescription={
            "Recomendado para un perro talla grande a gitante, por ejemplo un Gran danés, o para  dos o tres gatos"
          }
          descriptionList={[
            "19 litros de capacidad",
            "10 litros de mezcla secante",
            "La inscripción tiene un costo de $375 MXN",
          ]}
        />
        </>)}
      </div>
      {/* <div className="text-sm font-bold md:text-xl flex justify-center mb-8 md:mb-6">
        <p className="text-neutral-gray-two">¿Aún no sabes cuál seleccionar?</p>
        <Link to="/calcula-plan">
          <p className="text-green-one pl-2">Calcula tu KKPAK ideal</p>
        </Link>
      </div> */}
      <div className="flex flex-col mb-10 px-10 text-xs space-y-1 text-neutral-gray-two text-center">
        <p>
          Cada kkpak incluye 2 contenedores, del cual, uno se entrega
          acondicionado para recolectar heces, el otro está lleno de la mezcla
          secante que ayuda a evitar olores.
        </p>

        <p>
          El costo de la mensualidad del primer kkpak contratado incluye la
          visita a casa del usuario, si se contrata más de un kkpak los
          siguientes tienen un costo menor (kkpak extra).
        </p>

        <p>
          Los kkpaks se contratan con un periodo de recolección semanal o
          quincenal.
        </p>

        {/* <div>
          <p>
            Solo es posible contratar kkpaks de un mismo periodo de recolección.
          </p>
        </div> */}

        {/* <p className=" text-center mb-10">
          *Todos los planes tienen un costo único de inscripción de $100 MXN
          adicionales al costo de cada plan
        </p> */}
      </div>
      <ToastContainer />
    </div>
  );
}
