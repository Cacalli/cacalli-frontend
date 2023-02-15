import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Coverage from "../components/Coverage/Coverage"
import About from "../pages/About"
import Prices from "../pages/Prices"
import SubscriptionPlan from "../components/Subscription plan/SubscriptionPlan"


export default function Root(){
    return(
        <div>
            <Header/>
                <main>
                <Outlet/>
                
                </main>
               
            <Footer/>
        </div>
       
    )
}