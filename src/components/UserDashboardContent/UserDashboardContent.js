import Button from "../Button/Button";
import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrls";
import Card from "../Card/Card";
export default function UserDashboardContent() {
  const {
    token: [token, setToken],
  } = useOutletContext();
  const [info, setInfo] = useState([]);
  const [hasAddress, setHasAddress] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  const [packageInfo, setPackageInfo] = useState([])
  // const [hasPackage, setHasPackage] = useState(false)
  useEffect(() => {
    if (token && token.length) {
      fetch(`${baseUrl}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const {payload} = data 
          const {address} = payload
          const {street, neighborhood, state} = address
          setInfo(payload);
          if (Object.keys(address).length != 0) {
            setHasAddress(true);
            setFullAddress(
              `${street}, ${neighborhood}, ${state}`
            );
          }
           if (payload.subscription.packages.length != null) {
            // setHasPackage(true)
            setPackageInfo(payload.subscription.packages) 
           }
          //  {
          //   setPackageInfo(payload.subscription.packages)
          // }
         
        });
    }
  }, [token]);

  return (
    <div className="flex pt-6 h-full">
      <div className="flex flex-col p-16 rounded-md  bg-orange-one text-neutral-white font-inter ">
        <div className="w-52">
          <img
            className="h-52 w-52 mb-6"
            src="assets/user-profile.png"
            alt="user"
          />
          <div className="flex flex-col space-y-4">
            {info ? (
              <div className="space-y-2 pt-6">
                <p>
                  <strong>{info.firstName}</strong>
                </p>
                <p>{info.phone}</p>
                <p> {fullAddress}</p>
              </div>
            ) : null}

            {hasAddress ? (
              <Link to="completa-registro">
                <Button className="mt-6" variant="neutral">
                  Modificar datos
                </Button>
              </Link>
            ) : (
              <Link to="completa-registro">
                <Button className="mt-6" variant="neutral">
                  Completa tu registro
                </Button>
              </Link>
            )}
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
{packageInfo ? <Card>
        <p> {packageInfo.map((item)=>(`EL ID ES: ${item._id}`))}</p>
          </Card>
         : null}

{/* {packageInfo != null ?  <div>
          <p className="">¡Aún no tienes algún plan contratado!</p>
          <Link to="/plan-suscripcion">
            <Button variant="primary" inverse>
              Seleccionar un plan
            </Button>
          </Link>
        </div> : <Card>
        <p> {packageInfo.map((item)=>(`EL ID ES: ${item._id}`))}</p>
          </Card>
        } */}
      </div>
    </div>
  );
}
