import { useState, useEffect } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import baseUrl from "../../utils/baseUrls";
import Input from "../Input/Input";
import Header from "../Header";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    token: [token, setToken],
  } = useOutletContext();

  let navigate = useNavigate();

  const redirect = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "client") {
      navigate("/dashboard");
    }
  };

  const handleLoginClick = () => {
    const body = { email: email, password: password };
    fetch(`${baseUrl}/user/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok === true && data.payload != null) {
          setToken(data.payload);
          window.localStorage.setItem("cacalliToken", data.payload);
          window.localStorage.setItem("cacalliRole", data.role);
          redirect(data.role);
        }
      });
  };

  return (
    <div className="flex md:flex-row flex-col md:w-11/12 lg:w-8/12 mx-auto justify-center gap-10 md:gap-14 mt-6">
      <div className="md:w-1/2">
        <img
          className="md:h-full h-60 md:w-auto w-full object-cover md:rounded-lg"
          style={{ objectPosition: "top -30px right 0" }}
          src="/assets/landscape-login.png"
        />
      </div>
      <div className="md:w-1/2 p-10">
        <p className="font-bold text-neutral-gray-two text-lg md:text-2xl mb-6">
          Inicia sesión en tu cuenta Cacalli
        </p>
        <form className="grid gap-4 mb-6 pt-4">
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
            type="email"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Contraseña"
            type="password"
          />
        </form>
        <Button
          onClick={handleLoginClick}
          type="submit"
          variant="primary"
          isFull
        >
          Inicia sesión
        </Button>
        <div className="flex flex-wrap mt-6 justify-center">
          <p className="text-neutral-gray-three">¿Aún no estás registrado?</p>
          <Link to="/unete">
            <p className="pl-4 text-orange-one">Crea una cuenta</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
