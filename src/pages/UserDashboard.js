import { Outlet, useOutletContext } from "react-router-dom";
import UserDashboardContent from "../components/UserDashboardContent/UserDashboardContent";
import baseUrl from "../utils/baseUrls";

/* Token: {localStorage.getItem("token")} */

const getUserInfo = ({ firstName, email, password, phone, address }, token) => {
  const body = { firstName, email, phone, password, address };
  fetch(`${baseUrl}/user`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    Authorization: `Bearer` + token,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      // if (data.ok === true && data.payload != null) {
      //   localStorage.setItem("token", data.payload);
      //   console.log("creaste tu cuenta");
      //   navigate("/dashboard-usuario");
      // }
    })
    .catch((error) => {
      throw new Error("No podemos crear tu cuenta por ahora :(");
    });
};

const UserDashboard = () => {
  const {
    token: [token, setToken],
  } = useOutletContext();
  return (
    <Outlet
      context={{
        token: [token, setToken],
      }}
    />
  );
};

export default UserDashboard;
