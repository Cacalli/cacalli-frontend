import { Outlet, useOutletContext } from "react-router-dom";
import UserDashboardContent from "../components/UserDashboardContent/UserDashboardContent";

/* Token: {localStorage.getItem("token")} */

const fakeUser = {
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, trim: true },
  phone: { type: String, required: true, trim: true, unique: true },
  address: {
    street: { type: String, required: true, trim: true },
    number: { type: Number, required: true },
    interior: Number,
    neighborhood: { type: String, required: true },
    municipality: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: Number, required: true },
  },
};

const getUserInfo = ({ firstName, email, password, phone, address }, token) => {
  const body = { firstName, email, phone, password, address };
  fetch("http://ec2-34-227-93-62.compute-1.amazonaws.com/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    Authorization: `Bearer` + token,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
