import Button from "../components/Button/Button";
import Coverage from "../components/Coverage/Coverage";
import HomeContent from "../components/HomeContent";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import About from "./About";

export default function Home(){
    return(
        <div>
           
            <HomeContent/>
            <VideoContainer/>
            <Coverage/>
        </div>
    )
}