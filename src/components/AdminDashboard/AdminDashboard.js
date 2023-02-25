import { useState } from "react";
import Button from "../Button/Button";

export default function AdminDashboard() {
  const [filter, setFilter] = useState("Usuario");

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
        <select className="">
          <option selected>Elige una opción</option>
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
        <table class="table-fixed text-left border-collapse w-full shadow-md rounded-lg overflow-hidden">
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
            <tr className="border-b border-b-orange-two text-green-two">
              <td className="p-3">Mr. Bones</td>
              <td className="p-3">Malcolm Lockyer</td>
              <td className="p-3">55555555</td>
              <td className="p-3">aaaa@kkli.com</td>
              <td className="p-3">14/02/2000</td>
              <td className="p-3">M</td>
              <td className="p-3">Semanal</td>
              <td className="p-3">No</td>
              <td className="p-3">31/31/31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
