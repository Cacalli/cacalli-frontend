import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Coverage from "../components/Coverage/Coverage"


export default function Root(){
    return(
        <div>
            <Header/>
                <main>
                    <Outlet/>
                    <Coverage/>
                </main>

            <Footer/>
        </div>
       
    )
}