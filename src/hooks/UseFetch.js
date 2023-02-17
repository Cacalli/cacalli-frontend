import { useState, useEffect } from "react"

export default function useFetch(url){

    const [content, setContent] = useState(null)

        useEffect( () => {
            fetch(url)
            .then(data=>data.json())
            .then(data=>setContent(data))
        },[])
    
    return{content}
}