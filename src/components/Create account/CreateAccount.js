import Button from "../Button/Button";

export default function CreateAccount(){
    return(
        <div className="flex justify-center gap-28">
            <img className="h-auto" src="/assets/landscape-login.png"/>

            <div className="ml-8">
            <p className="font-bold text-2xl mb-6">Crea tu cuenta</p>
            <form className="grid gap-4 mb-6">
                <input className="w-96 mb-6 border border-neutral-gray-two rounded px-2 py-2" placeholder="Nombre"/>
                <input className="w-96 mb-6 border border-neutral-gray-two rounded px-2 py-2" placeholder="Email"/>
                <input className="w-96 mb-6 border border-neutral-gray-two rounded px-2 py-2" placeholder="Teléfono celular"/> 
                <input className="w-96 mb-6 border border-neutral-gray-two rounded px-2 py-2" placeholder="Crear contraseña"/>  
                <input className="w-96 mb-6 border border-neutral-gray-two rounded px-2 py-2" placeholder="Confirmar contraseña"/> 
            </form>
            <Button variant="primary" isFull>Crear cuenta</Button>
            </div> 

                    
        </div>
    )
}