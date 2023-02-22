import React, {useState} from "react";

export default function Counter(){
    const [counter, setCounter]= useState(0)
    const substract = () => {
        setCounter(counter - 1)
    }
    
 
    return(
        <div className="flex gap-4 font-bold text-xl">
        <button disabled={counter <= 0} onClick={substract} className="text-neutral-gray-two">-</button>
        <p className="text-orange-one">{counter}</p>
        <button onClick={()=>{setCounter(counter + 1)}} className="text-neutral-gray-two">+</button>
        </div>
      
    )
}