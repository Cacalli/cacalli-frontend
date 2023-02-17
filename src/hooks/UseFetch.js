import { useState, useEffect } from "react"

export default function useFetch(url){

    const [load, setLoad] = useState(null)

        useEffect( () => {
            fetch(url)
            .then(data=>data.json())
            .then(data=>setLoad(data))
        },[])
    
    return{load}
}