import "./App.css";

import Prices from "./pages/Prices";
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
