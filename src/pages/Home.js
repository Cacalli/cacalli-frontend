import Button from "../components/Button/Button";
import Coverage from "../components/Coverage/Coverage";
import HomeContent from "../components/HomeContent";
import SubscriptionPlan from "../components/Subscription plan/SubscriptionPlan";
import About from "./About";

export default function Home(){
    return(
        <div>
           
            <HomeContent/>
            <Coverage/>
            <About/>
        </div>
    )
}