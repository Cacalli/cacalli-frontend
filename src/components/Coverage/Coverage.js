import Button from "../Button/Button";

export default function Coverage(){
    return(
        <div className="bg-orange-one ">

            <div className="flex flex-col ml-40 pt-40">
            <p className="text-7xl text-neutral-white">COBERTURA</p>
            <p className="text-neutral-white pt-4 text-xl">Descubre qué tan cerca estamos de ti</p>
            </div>

            <div className="ml-40 mt-14 pb-40">
            <input  className="outline-none rounded mr-14 p-2" placeholder="Ubicación"/> 
            <Button variant="neutral">Buscar</Button>
            </div>
            
           
        
        </div>
        )
}