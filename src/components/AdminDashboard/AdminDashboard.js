import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../Button/Button";
import baseUrl from "../../utils/baseUrls";
import AdminFilter from "../AdminFilters/AdminFilters";

export default function AdminDashboard() {
  const [filter, setFilter] = useState("Usuario");
  const token = window.localStorage.getItem("cacalliToken");

  const [users, setUsers] = useState([]);
  const [backupUsers, setBackupUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.payload);
        setBackupUsers(data.payload);
      })
      .catch((error) => {
        throw new Error("Hay un problema para completar el pago D:");
      });
  }, []);

  const setUserStatus = (user) => {
    const body = { email: user.email };
    fetch(`${baseUrl}/admin/pickup/complete`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        throw new Error("No podemos actualizar tu estatus");
      });
  };

  const filterByName = (event) => {
    //setFilterUsers(event.target.value);
    const stringUser = event.target.value.toLowerCase();
    if (event.target.value.length > 0) {
      const filteredUsers = backupUsers.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(stringUser) ||
          user.email.toLowerCase().includes(stringUser)
        );
      });
      setUsers(filteredUsers);
    }
  };

  return (
    <div className="flex flex-1 mt-10 mx-10 ">
      <div className="flex flex-col pr-6 space-y-8">
        <input
          className="mt-4 border border-neutral-gray-two rounded px-4"
          placeholder="Buscar"
          onChange={filterByName}
        />

        <AdminFilter token={token} />
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
              users.map((user) => {
                return (
                  <tr
                    key={user.id}
                    className="border-b border-b-orange-two text-green-two"
                  >
                    <td className="p-3">{user.firstName}</td>
                    {/* <td className="p-3">
                      {user.address.street} {user.address.zipCode}
                    </td> */}
                    <td className="p-3">{user.phone}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">3/03/23</td>
                    <td className="p-3">M</td>
                    <td className="p-3">Semanal</td>
                    <td className="p-3">No</td>
                    <td className="p-3">31/31/31</td>
                    <td>
                      <button
                        onClick={() => {
                          setUserStatus(user);
                        }}
                      >
                        atrasado
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
