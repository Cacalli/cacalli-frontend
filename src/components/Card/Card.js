import classNames from "classnames";
import Button from "../Button/Button";

export default function Card({children,className}){
    return(
        
            <div className={classNames(className,"h-auto rounded-xl py-3.5 px-7 shadow-lg")}>
                {children}
            </div>
      
    )
}