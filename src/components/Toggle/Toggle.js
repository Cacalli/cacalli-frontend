import classNames from "classnames";

const Toggle=({children, variant}) =>{
    const classes= classNames("px-8 py-2 rounded-lg", {
        "bg-toggle-plan text-neutral-white text-semibold": variant=="toggle-plan"
    })

    return(
        <button className={classes}>{children}</button>
    )
}

export default Toggle;