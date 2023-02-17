import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div className="flex flex-col">
            <span className="bg-red-200 flex w-64 font-bold mt-4 justify-center align-center">Error 404- Content not found</span>
            <Link className="border border-black rounded flex w-32 bg-lime-200 justify-center font-semibold mt-4" to="/">Take me home</Link>
            
        </div>
    )
}