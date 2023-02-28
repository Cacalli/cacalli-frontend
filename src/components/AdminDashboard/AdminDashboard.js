import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../Button/Button";

export default function AdminDashboard() {
  const [filter, setFilter] = useState("Usuario");
  const {
    token: [token, setToken],
  } = useOutletContext();

  const [users, setUsers] = useState([])
useEffect(()=>{
  fetch("https://cacalli.mx/user/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.table(data.payload)
      setUsers(data.payload);
    })
    .catch((error) => {
      throw new Error("Hay un problema para completar el pago D:");
    });
}, [])

  return (
    <div className="flex flex-1 mt-10 mx-10 ">
      <div className="flex flex-col pr-6 space-y-8">
        <input
          className="mt-4 border border-neutral-gray-two rounded px-4"
          placeholder="Buscar"
        />
        <Button
          onClick={() => {
            setFilter("Usuario");
          }}
          variant={filter === "Usuario" ? "primary" : ""}
        >
          Usuarios
        </Button>
        <Button
          onClick={() => {
            setFilter("Zona");
          }}
          className="py-1 px-2 mx-2"
          variant={filter === "Zona" ? "primary" : ""}
        >
          Zonas
        </Button>
        <select className="text-neutral-gray-two" value="" onChange={()=>{console.log("change")}}>
          <option>Elige una opción</option>
          <option>Nombre</option>
          <option>Dirección</option>
          <option>Teléfono</option>
          <option>Email</option>
          <option>Día de recolección</option>
          <option>Tamaño</option>
          <option>Plan</option>
          <option>Extra</option>
          <option>Renovación</option>
        </select>
      </div>
      <div>
        <table className="table-fixed text-left border-collapse w-full shadow-md rounded-lg overflow-hidden">
          <thead className=" bg-orange-one ">
            <tr className="text-neutral-white p-3 bg">
              <th className="p-3">Nombre</th>
              <th className="p-3">Dirección</th>
              <th className="p-3">Teléfono</th>
              <th className="p-3">Email</th>
              <th className="p-3">Día de recolección</th>
              <th className="p-3">Tamaño</th>
              <th className="p-3">Plan</th>
              <th className="p-3">Extra</th>
              <th className="p-3">Renovación</th>
            </tr>
          </thead>
          <tbody>
              {users && 
           users.map(user => {
            return   <tr key={user.id} className="border-b border-b-orange-two text-green-two">
            <td className="p-3">{user.firstName}</td>
            <td className="p-3">{user.address.street} {user.address.zipCode}</td>
            <td className="p-3">{user.phone}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">3/03/23</td>
            <td className="p-3">M</td>
            <td className="p-3">Semanal</td>
            <td className="p-3">No</td>
            <td className="p-3">31/31/31</td>
            </tr>
           })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
