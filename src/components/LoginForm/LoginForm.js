import { useState, useEffect } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    token: [token, setToken],
  } = useOutletContext();

  let navigate = useNavigate();

  const handleLoginClick = () => {
    const body = { email: email, password: password };
    fetch("http://localhost:8001/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.ok === true && data.payload != null) {
        
          setToken(data.payload)
          setTimeout(() => {
            if (data.role === "admin") {
              navigate("/admin")
            }else{
              navigate("/dashboard")
            }
          }, 1000);
          window.localStorage.setItem("cacalliToken", data.payload);
        }
      })
    }
  // 'primera@kkli.com' 'etss'

  return (
    <div className="flex justify-center gap-28">
      <img className="h-auto" src="/assets/landscape-login.png" />

      <div className="ml-8 pt-24">
        <p className="font-bold text-2xl mb-6 text-neutral-gray-two">
          Inicia sesión en tu cuenta Cacalli
        </p>
        <form className="grid gap-4 mb-6">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="w-96 mb-6 border border-neutral-gray-four rounded px-2 py-2"
            placeholder="email"
            type="email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="w-96 mb-6 border border-neutral-gray-four rounded px-2 py-2"
            placeholder="contraseña"
            type="password"
          />
        </form>
        <Link to="/dashboard">
          <Button onClick={handleLoginClick} variant="primary" isFull>
            Inicia sesión
          </Button>
        </Link>
        <div className="flex mt-6 justify-center">
          <p className="text-neutral-gray-three">¿Aún no estás registrado?</p>
          <Link to="/unete">
            <p className="pl-4 text-orange-one">Crea una cuenta</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
