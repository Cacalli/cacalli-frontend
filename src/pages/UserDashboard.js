import UserDashboardContent from "../components/UserDashboardContent/UserDashboardContent";

  /* Token: {localStorage.getItem("token")} */


const UserDashboard = () => {
  return (
    <UserDashboardContent
      image="assets/user-profile.png"
      userName="Diego Doe"
      phone="55555"
      address="Av. México 45, Hipódromo
56789, CDMX"
      email="diego@user.co"
    />
  );
};

export default UserDashboard;
