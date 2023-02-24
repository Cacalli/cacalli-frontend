import { Outlet } from "react-router-dom";
import UserDashboardContent from "../components/UserDashboardContent/UserDashboardContent";

  /* Token: {localStorage.getItem("token")} */


const UserDashboard = () => {
  return (
    <Outlet/>
  );
};

export default UserDashboard;
