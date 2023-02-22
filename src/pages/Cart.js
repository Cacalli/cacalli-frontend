import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../components/Button/Button";


export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext();
  const [counter, setCounter]= useState(0)
  const substract = () => {
    setCounter(counter - 1)
}

  const getTotal = () => {
    const sumWithInitial = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );

    return sumWithInitial;
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
                    <Button disabled={counter <= 0} onClick={substract}>-</Button>
                    {item.quantity} 
                    <Button onClick={()=>{setCounter({counter} + 1)}}>+</Button>
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
        <Button onClick={()=>{alert("pagar")}} variant="primary" inverse>Pagar</Button>
      </div>
    </div>
  );
}
