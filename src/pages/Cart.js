import { useOutletContext, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import baseUrl from "../utils/baseUrls";

export default function Cart() {
  const {
    cartItems: [cartItems, setCartItems],
    token: [token, setToken],
  } = useOutletContext();

  let navigate = useNavigate();

  const modifyQuantity = (action, item) => {
    const newCartItems = [...cartItems];

    const index = cartItems.findIndex((pack) => pack.price === item.price);
    if (action === "substract" && newCartItems[index].quantity >= 2) {
      newCartItems[index].quantity = newCartItems[index].quantity - 1;
    } else if (action === "substract" && newCartItems[index].quantity < 2) {
      newCartItems.splice(index, 1);
    } else {
      newCartItems[index].quantity = newCartItems[index].quantity + 1;
    }
    setCartItems(newCartItems);
  };

  const getTotal = () => {
    const sumWithInitial = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );

    return sumWithInitial;
  };
  const completePayment = () => {
    const body = cartItems.map((item) => {
      return { ...item, period: 1 };
    });

    fetch(`${baseUrl}/user/subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.replace(data.payload);
      })
      .catch((error) => {
        throw new Error("Hay un problema para completar el pago D:");
      });
  };
  return (
    <div className="py-8 w-8/12 mx-auto">
      <h2 className="font-bold text-orange-one text-2xl text-center mb-6">
        Mi carrito
      </h2>
      {cartItems &&
        cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex space-x-10 place-content-evenly border-b-2 border-neutral-gray-three text-neutral-black font-semibold"
            >
              <div className="flex  place-content-evenly space-x-20 my-6">
                <div className="">
                  <p className="pb-6 text-green-one">Tamaño:</p>
                  <p className="text-neutral-gray-two"> {item.size}</p>
                </div>
                <div>
                  <p className="pb-6 text-green-one">Precio de inscripción:</p>
                  <p className="text-neutral-gray-two">
                    {" "}
                    {item.inscritpionPrice}
                  </p>
                </div>
              </div>
              <div className="flex place-content-evenly space-x-24 my-6">
                <div>
                  <p className="pb-6 text-green-one">Cantidad:</p>
                  <p className="text-neutral-gray-two">
                    <Button
                      onClick={() => {
                        modifyQuantity("substract", item);
                      }}
                    >
                      -
                    </Button>
                    {item.quantity}
                    <Button
                      onClick={() => {
                        modifyQuantity("add", item);
                      }}
                    >
                      +
                    </Button>
                  </p>
                </div>
                <div>
                  <p className="pb-6 text-green-one">Precio: </p>
                  <p className="text-neutral-gray-two">{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      <div className="flex justify-end space-x-24 items-center text-orange-one font-bold mt-6 text-xl">
        <p>Total: {getTotal()}</p>
        <Button
          onClick={() => {
            completePayment();
          }}
          variant="primary"
          inverse
        >
          Pagar
        </Button>
      </div>
    </div>
  );
}
