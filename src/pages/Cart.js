import { useOutletContext } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  const getTotal = () => {
    const sumWithInitial = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );

    return sumWithInitial;
  };

  return (
    <div>
      <h2 className="font-bold">Mi carrito</h2>
      {cartItems &&
        cartItems.map((item, index) => {
          return (
            <div key={index} className="flex gap-5">
              <p>
                Cantidad: <Button>-</Button>
                {item.quantity}
                <Button>+</Button>
              </p>
              <p>Tamaño: {item.price}</p>
              <p>Precio: {item.size}</p>
              <p>Precio de inscripción: {item.inscritpionPrice}</p>
            </div>
          );
        })}
      <div>
        <p>Total: {getTotal()}</p>
      </div>
    </div>
  );
}
