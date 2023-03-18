import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Root() {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("");
//  setToken( window.localStorage.getItem("cacalliToken"))
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet
          context={{
            cartItems: [cartItems, setCartItems],
            token: [token, setToken],
          }}
        />
      </main>

      {!token ? <Footer /> : null}
    </div>
  );
}
