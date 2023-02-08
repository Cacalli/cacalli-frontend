import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Coverage from "../components/Coverage/Coverage"
import About from "../pages/About"
import Prices from "../pages/Prices"


export default function Root(){
    return(
        <div>
            <Header/>
                <main>
                <Outlet/>
                <Coverage/>
                <Prices/>
                <About/>
                </main>
               
            <Footer/>
        </div>
       
    )
}