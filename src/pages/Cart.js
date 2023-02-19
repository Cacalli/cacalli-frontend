import { useOutletContext } from "react-router-dom"

export default function Cart(){
    const [cartItems, setCartItems]=useOutletContext();
    return(
        <div>
            {cartItems && cartItems.map(item => <p>{item.price}</p>)}
            {cartItems && cartItems.map(item => <p>{item.size}</p>)}
            {cartItems && cartItems.map(item => <p>{item.inscriptionPrice}</p>)}
        </div>
    )
}