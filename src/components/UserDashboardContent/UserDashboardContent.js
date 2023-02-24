import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
export default function UserDashboardContent() {
  return (
    <div className="flex pt-6 h-full">
      <div className="flex flex-col p-16 rounded-md  bg-orange-one text-neutral-white font-inter ">
        <div className="w-52">
          <img className="h-52 w-52 mb-6" src="assets/user-profile.png" />
          <div className="flex flex-col space-y-4">

           <Link to="completa-registro">
           <Button className="mt-6" variant="neutral">Completa tu registro</Button>
           </Link>
            {/* <p> <strong>Diego Doe</strong> </p> 
            <p>55555</p>
            <p> Av. México 45, Hipódromo 56789, CDMX</p>
            <p> diego@user.com</p> */}
            {/* <p> {packageSize}</p>
            <p> {subscriptionPlan}</p> */}
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
