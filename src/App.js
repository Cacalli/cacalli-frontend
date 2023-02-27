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
import NotFound from "./pages/NotFound";
import JoinUs from "./pages/JoinUs";
import Login from "./pages/Login";
import Calculator from "./components/Calculator/Calculator";
import Cart from "./pages/Cart";
import UserDashboard from "./pages/UserDashboard";
import CreateAccountCompleteRegistry from "./components/Create account/CreateAccountCompleteRegistry";
import UserDashboardContent from "./components/UserDashboardContent/UserDashboardContent";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import SuccessPayment from "./pages/SucessPayment";
import DeclinePayment from "./pages/DeclinePayment";

function App() {
  window.localStorage.clear();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="quienes-somos" element={<About />} />
        <Route path="plan-suscripcion" element={<Prices />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="unete" element={<JoinUs />} />
        <Route path="ingresa" element={<Login />} />
        <Route path="calcula-plan" element={<Calculator />} />
        <Route path="carrito" element={<Cart />} />
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route index element={<UserDashboardContent />} />
          <Route
            path="completa-registro"
            element={<CreateAccountCompleteRegistry />}
          />
        </Route>
        <Route path="pago-exitoso" element={<SuccessPayment />} />
        <Route path="pago-fallido" element={<DeclinePayment />} />
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="*" element={<NotFound />} />
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
