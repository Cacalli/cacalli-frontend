export default function Testimony({iconImage, name, testimonyText}){
    return( 
        <div className="flex justify-center gap-7 text-lg">
        
          <img className="h-20 w-20 rounded-full object-cover" src={iconImage}/> 
            
            <div className="align-middle text-neutral-gray-two">
                <p className="font-bold ">{name}</p>
                <p>{testimonyText}</p>
            </div>
        </div>
    )
}