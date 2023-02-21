import classNames from "classnames";

const Button=({children, variant, inverse=false, isFull=false, className, ...restProps})=>{
    const classes= classNames(className,"py-3 px-5 rounded",{
        "w-full": isFull,
        "bg-orange-one text-neutral-white": variant=="primary" && !inverse,
        "bg-green-one text-neutral-white": variant=="primary" && inverse,
        "text-orange-one": variant=="secondary" && !inverse,
        "text-green-one": variant=="secondary" && inverse,
        "text-orange-one border border-orange-one": variant=="tertiary",
        "text-neutral-white border border-neutral-white py-1.5 px-4": variant=="neutral",
        // "text-neutral-white bg-toggle-plan px-4 py-1": variant=="toggler-plan",
        
    })
    return(
        
        <button {...restProps} className={classes}>{children}</button>

    )
}

export default Button;