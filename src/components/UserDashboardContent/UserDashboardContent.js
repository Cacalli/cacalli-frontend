import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

export default function UserDashboardContent({
  image,
  userName,
  phone,
  address,
  email,
  packageSize,
  subscriptionPlan,
}) {
  return (
    <div className="flex pt-6 h-full">
      <div className="flex flex-col p-16 rounded-md  bg-orange-one text-neutral-white font-inter ">
        <div className="w-52">
          <img className="h-52 w-52 mb-6" src={image} />
          <div className="flex flex-col space-y-4">
            <p> <strong>{userName}</strong> </p> 
            <p>{phone}</p>
            <p> {address}</p>
            <p> {email}</p>
            <p> {packageSize}</p>
            <p> {subscriptionPlan}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex text-center justify-center items-center h-full">
       <div>
       <p className="">¡Aún no tienes algún plan contratado!</p>
     <Link to="/plan-suscripcion">
     <Button variant="primary" inverse>
          Seleccionar un plan
        </Button>
     </Link>
       </div>
      </div>
    </div>
  );
}
