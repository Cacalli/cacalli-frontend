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
  const [pickupInfo, setPickupInfo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [payments, setPayments] = useState([]);
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

          if (payload.pickupInfo) {
            setPickupInfo(payload.pickupInfo);
          }

          if (payload.subscription) {
            setStartDate(payload.subscription.startDate);
          }
          if (payload.payments) {
            console.log("PAGOS", payload.payments);
            setPayments(payload.payments);
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
          <div>
            <div className="flex space-x-6 h-full">
              <Card className=" space-y-4 text-neutral-gray-one w-8/12 ">
                {startDate ? (
                  <div>
                    <p className="text-neutral-gray-one font-bold text-lg">
                      Datos de tu plan de contratación
                    </p>
                    <p className="text-sm text-neutral-gray-two">
                      Miembro desde {info.subscription.startDate}
                    </p>
                  </div>
                ) : null}

                <p className="font-bold text-2xl text-orange-one">
                  {info.firstName}
                </p>
                <p></p>
                <p>
                  {" "}
                  {packageInfo.map(
                    (item) =>
                      `${item.quantity} paquete ${item.packageName} contratados`
                  )}
                </p>
              </Card>

              {pickupInfo ? (
                <Card className="flex space-x-6 font-bold">
                  <div>
                    <p className="text-neutral-gray-one">
                      {/* //delete or not? */}
                      Tu KKPAK se renovará el {info.pickupInfo.day} a las{" "}
                      {info.pickupInfo.time}
                    </p>
                    <div className="flex mt-2 space-x-3">
                      <img
                        src="/assets/sit-dog-poop.png"
                        className="h-24 w-30 mb-6"
                      />
                      <p className="text-green-two">
                        Tu próxima recolección es el{" "}
                        {info.pickupInfo.nextPickup}
                      </p>
                    </div>
                  </div>
                </Card>
              ) : null}
            </div>
            {payments ? (
              <div>
                <Card>
                  <p className="mt-4 text-orange-one">Historial de pagos</p>

                  <div className="bg-orange-three">
                    {payments.map((item) => {
                      return (
                        <tr className="border-b border-b-orange-two text-neutral-gray-two">
                          <td className="p-1">{item.fecha}</td>
                          <td className="p-1">{item.monto}</td>
                          <td className="p-1">{item.estado}</td>
                        </tr>
                      );
                    })}
                  </div>
                </Card>
              </div>
            ) : null}
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
