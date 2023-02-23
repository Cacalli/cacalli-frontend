import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../components/Button/Button";


export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext([]);
  console.log(cartItems.length)
const modifyQuantity=(action, item)=>{


  const cartItems = [
    {size: "Chico", price: "100", inscritpionPrice:"100", quantity:1 },
    {size: "Mediano", price: "200", inscritpionPrice:"200", quantity:1},
    {size: "Grande", price: "300", inscritpionPrice:"300", quantity:1 },
  ]

  const newCartItems= cartItems.map((quantity) => {
    if(cartItems.price == 200){
      item.quantity+= 1
      return quantity
    }
    return newCartItems()
  })

  const total = cartItems.reduce((acum,current) => { 
    return current.quantity + acum
  },0)

  total()
//   const index= cartItems.find((pack) => pack.price=== item.price)
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
