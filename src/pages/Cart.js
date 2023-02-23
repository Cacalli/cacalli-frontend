import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../components/Button/Button";


export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext([]);

const modifyQuantity=(action, item)=>{
  
  const total = cartItems.reduce((acum,current) => { 
    return current.quantity + acum
  },0)

  const newCartItems = [...cartItems]

 const index= cartItems.findIndex((pack) => pack.price=== item.price)
 if (action === "substract") {
  //substract <0 delete element
 }else{
  newCartItems[index].quantity = newCartItems[index].quantity + 1
 }
 setCartItems(newCartItems)
// console.log("indexxxx",index)

// index.quantity +=1 
//   const newCartItems= {
//     quantity: index.quantity}

// setCartItems(newCartItems)
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
                    <Button onClick={()=>{modifyQuantity("substract", item)}}>-</Button>
                    {item.quantity} 
                    <Button onClick={()=>{modifyQuantity("add", item)}}>+</Button>
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
