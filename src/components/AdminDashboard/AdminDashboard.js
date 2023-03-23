import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../Button/Button";
import baseUrl from "../../utils/baseUrls";
import AdminFilter from "../AdminFilters/AdminFilters";
import { SlCheck } from "react-icons/sl";
import { FaCalendarCheck, FaExclamationCircle } from "react-icons/fa";

export default function AdminDashboard() {
  const [filter, setFilter] = useState("Usuario");
  const token = window.localStorage.getItem("cacalliToken");

  const [users, setUsers] = useState([]);
  const [backupUsers, setBackupUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const setUserStatus = (user) => {
    const body = { userEmail: user.email };
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

  const setQuery = (query) => {
    fetchUsers(query);
  };

  const fetchUsers = (param = "") => {
    fetch(`${baseUrl}/admin/users${param}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.payload);
        setBackupUsers(data.payload);
        console.log("ES ESTOOOO", data.payload);
      })
      .catch((error) => {
        throw new Error("Hay un problema para completar el pago D:");
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
          className="mt-4 border border-neutral-gray-two rounded px-4 py-1"
          placeholder="Buscar"
          onChange={filterByName}
        />

        <AdminFilter token={token} setQuery={setQuery} />
      </div>
      <div>
        <table className="table-fixed text-left border-collapse w-full shadow-md rounded-lg overflow-hidden">
          <thead className=" bg-orange-one ">
            <tr className="text-neutral-white p-3 bg">
              <th className="p-3">Nombre</th>
              <th className="p-3">Dirección</th>
              <th className="p-3">Teléfono</th>
              <th className="p-3">Tamaño</th>
              <th className="p-3">Día</th>
              <th className="p-3">Zona</th>
              <th className="p-3">Horario</th>
              <th className="p-3">Estatus</th>
              <th className="p-3">Estado de suscripción</th>
              <th className="p-3">Estado de recolección</th>
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
                    <td className="p-3">
                      {user.address.street}, {user.address.zipcode},{" "}
                      {user.address.municipality}
                    </td>
                    <td className="p-3">{user.phone}</td>
                    <td className="p-3 capitalize">
                      {user.subscription.packages[0].packageName}
                    </td>
                    <td className="p-3">{user.pickupInfo.day}</td>
                    <td className="p-3">{user.pickupInfo.zone}</td>
                    <td className="p-3">{user.pickupInfo.time}</td>
                    <td className="p-3 capitalize">{user.pickupInfo.status  === "on time" ? <FaCalendarCheck className="ml-3" size="1.5em"/> : <FaExclamationCircle/>}</td>
                    <td> empty</td>
                    <td>
                      <Button
                      className="ml-5"
                      variant="tertiary"
                      inverse
                        onClick={() => {
                          setUserStatus(user);
                        }}
                      >
                        <SlCheck size="1.25em"/>
                      </Button>
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
