import { useOutletContext } from "react-router-dom";
import Button from "../components/Button/Button";
import Coverage from "../components/Coverage/Coverage";
import HomeContent from "../components/HomeContent";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import About from "./About";

export default function Home(){
    // const {token: [token, setToken]}=useOutletContext()
    // const cacalliToken = window.localStorage.getItem("cacalliToken")
    // if (cacalliToken) {
    //     setToken(cacalliToken)
    // }
    return(
        <div>
           
            <HomeContent/>
            <VideoContainer/>
            <Coverage/>
        </div>
    )
}