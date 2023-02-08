import classNames from "classnames";

const Button=({children, variant, inverse=false})=>{
    const classes= classNames("py-3 px-5 rounded w-max",{
        "bg-orange-one text-neutral-white": variant=="primary",
        "bg-green-one text-neutral-white": variant=="primary" && inverse,
        "text-orange-one": variant=="secondary",
        "text-green-one": variant=="secondary" && inverse,
        
    })
    return(
        
        <button className={classes}>{children}</button>

    )
}

export default Button;