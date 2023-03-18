import Button from "../Button/Button";
import Card from "../Card/Card";
import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrls";

export default function UserDashboardContent() {
  const token = window.localStorage.getItem("cacalliToken");

  const [info, setInfo] = useState([]);
  const [hasAddress, setHasAddress] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  const [packageInfo, setPackageInfo] = useState([]);
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
          const { payload } = data;
          const { address } = payload;
          const { street, neighborhood, state } = address;
          setInfo(payload);
          if (Object.keys(address).length != 0) {
            setHasAddress(true);
            setFullAddress(`${street}, ${neighborhood}, ${state}`);
          }
          if (payload.subscription.packages.length != null) {
            setPackageInfo(payload.subscription.packages);
          }
          if (payload.subscription.packages.length != null) {
            setPackageInfo(payload.subscription.packages);
          }
        });
    }
  }, [token]);

  return (
    <div className="flex pt-6 h-full">
      <div className="flex flex-col p-16 rounded-md  bg-orange-one text-neutral-white font-inter ">
        <div className="w-52">
          <img
            className="h-52 w-52 mb-6 bg-neutral-white rounded-full object-contain p-2"
            src="assets/plant-bucket.png"
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
      <div className=" justify-center m-9">
        {packageInfo ? (
          <div className="flex w-auto h-auto space-x-6 text-orange-one">
            <Card className="h-full space-y-4">
              <p className="text-neutral-gray-one font-bold">
                Datos de tu plan de contratación
              </p>
              <p className="font-bold text-2xl">{info.firstName}</p>
              <p> {packageInfo.map((item) => `EL ID ES: ${item._id}`)}</p>
            </Card>
            <Card className="flex space-x-6 font-bold">
              <div>
                <img
                  src="/assets/sit-dog-poop.png"
                  className="h-24 w-30 mb-6"
                />
              </div>
              <div>
                <p className=" text-neutral-gray-one">
                  Tu KKPAK se renovará el X de X
                </p>
                <p className="text-orange-one text-3xl">FALTAN X DÍAS</p>
              </div>
            </Card>
          </div>
        ) : (
          <div>
            <p className="">¡Aún no tienes algún plan contratado!</p>
            <Link to="/plan-suscripcion">
              <Button variant="primary" inverse>
                Seleccionar un plan
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
