import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

import Prices from "./pages/Prices";
import ReinventingCycles from "./pages/ReinventingCycles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Root from "./layouts/Root";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path='Quienes-somos' element= {<About/>} />
        <Route path='reinventando-ciclos' element={<ReinventingCycles/>} />
        <Route path='precios' element={<Prices/>} />
        <Route path='contact' element={<Contact/>} />
        {/* <Route path='*' element={<NotFound/>}/> */}
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
