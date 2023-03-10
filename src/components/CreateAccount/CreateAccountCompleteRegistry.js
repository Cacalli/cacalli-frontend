import { useFormik } from "formik";
import { useState, useCallback, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import completeRegistrySchema from "../../schemas/completeRegistry";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";

//http://ec2-34-227-93-62.compute-1.amazonaws.com

export default function CreateAccountCompleteRegistry({ firstName }) {
  const [availableDays, setAvailableDays] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);
  
  const {
    token: [token, setToken],
  } = useOutletContext();
  let navigate = useNavigate();
  //const url = "localhost:8001/zone/checkZipcode?" + New
  const handleOnSubmit = () => {
    console.log(formik.values)
    fetch(
      `http://localhost:8001/user/complete`,
      {
        method: "PUT",
          headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + token,
      },
        body: JSON.stringify(formik.values),
        // {...formik.values, formik.values.number: parseInt(formik.values.number)}
      }
    )
    // .then( console.log(JSON.stringify(formik.values)))
      .then((response) => response.json())
      .then((data) => {

        if (formik.values) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
        throw new Error(
          "No se pudo actualizar tu información por ahora"
        );
      });
  };

  const validateZipCode = () => {
    if (formik.values.zipcode.length === 5) {
      fetch(
        `http://localhost:8001/zone/checkZipcode/${formik.values.zipcode}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.payload.available) {
            validateAvailableDays();
          }
        })
        .catch((error) => {
          console.error(error);
          throw new Error(
            "Tu código postal no está dentro del área de servicio"
          );
        });
    }
  };

  const validateAvailableDays = () => {
    fetch(`http://localhost:8001/zone/daysAvailable/${formik.values.zipcode}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Estos son los días disponibles", data.payload);
       setAvailableDays(data.payload);
       validateAvailableHours()
      })
      .catch((error) => {
        console.error(error);
        throw new Error("No hay días disponibles por ahora");
      });
  };

  const validateAvailableHours = () => {
    // setAvailableHours(hours);
    fetch(
        `http://localhost:8001/zone/schedulesAvailable/${formik.values.zipcode}/Lunes`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
         setAvailableHours(data.payload);
        })
        .catch((error) => {
          console.error(error);
          throw new Error("No hay horas disponibles por ahora");
        });
  };
  const formik = useFormik({
    initialValues: initialValues,
  //validationSchema: completeRegistrySchema,
    onSubmit: handleOnSubmit,
  });

  const handleDropDown = (value, name) => {
    formik.setValues({ ...formik.values, [name]: value });
    // console.log(value, name);
    if (name === "day") {
      validateAvailableHours();
    }
  };

  useEffect(() => {
    validateZipCode();
    // validateAvailableDays();
  }, [formik.values.zipcode]);

  const setInputValue = useCallback(
    (key, value) => {
      formik.setValues({
        ...formik.values,
        [key]: value,
      });
    },
    [formik]
  );

  return (
    <div className="flex flex-col mx-auto py-6  w-8/12">
      <div className="text-2xl mb-6">
        <p className="font-bold text-neutral-gray-two">
          ¡Bienvenido a Cacalli, {firstName}!
        </p>
        <p className="text-neutral-gray-three">
          Te invitamos a completar tu registro para poder brindarte servicio
        </p>
      </div>
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="mb-2">
          <p className="font-bold text-neutral-gray-two">Dirección</p>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {/* <Input
              name="city"
              value={formik.values.city}
              onChange={(e) => setInputValue("city", e.target.value)}
              className="w-full"
              placeholder="Ciudad"
            /> */}
            <Input

              name="state"
              value={formik.values.state}
              onChange={(e) => setInputValue("state", e.target.value)}
              className="w-full"
              placeholder="Estado"
            />
            <Input
              maxLength="5"
              name="zipcode"
              value={formik.values.zipcode}
              onChange={(e) => setInputValue("zipcode", e.target.value)}
              className="w-full"
              placeholder="Código postal"
            />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-6">
          <Input

            name="street"
            value={formik.values.street}
            onChange={(e) => setInputValue("street", e.target.value)}
            className="w-full"
            placeholder="Calle"
          />
          <Input

            name="neighborhood"
            value={formik.values.neighborhood}
            onChange={(e) => setInputValue("neighborhood", e.target.value)}
            className="w-full"
            placeholder="Colonia"
          />
          <Input

            name="number"
            value={formik.values.number}
            onChange={(e) => setInputValue("number", e.target.value)}
            className="w-full"
            placeholder="Número"
          />
          <Input

            name="interior"
            value={formik.values.interior}
            onChange={(e) => setInputValue("interior", e.target.value)}
            className="w-full"
            placeholder="Número interior"
          />
          <Input

            name="municipality"
            value={formik.values.municipality}
            onChange={(e) => setInputValue("municipality", e.target.value)}
            className="w-full"
            placeholder="Municipio/alcaldía"
          />
        </div>
        <div className="mb-6">
          <div className="mb-4">
            <p className="font-bold text-neutral-gray-two">
              Información de recolección
            </p>
            <p className="text-neutral-gray-three mb-6">
              Selecciona el día y hora en el que podríamos pasar a tu domicilio
            </p>
            <div className="grid grid-cols-3 gap-6 my-6">
              <Dropdown
                className="border py-1 rounded px-1"
                options={availableDays}
                defaultText="Elige el dia"
                name="day"
                onChange={(e) =>
                  handleDropDown(e.target.value, "day")
                }
              />
              <Dropdown
                className="border py-1 rounded px-1"
                options={availableHours}
                defaultText="Elige la hora"
                name="time"
                onChange={(e) =>
                  handleDropDown(e.target.value, "time")
                }
              />
            </div>
          </div>
          <textarea
            name="instructions"
            value={formik.values.instructions}
            className="p-3 border border-neutral-gray-two rounded w-full h-52"
            placeholder="Instrucciones de recolección"
            onChange={(e) => handleDropDown(e.target.value, "instructions")}
          ></textarea>
        </div>
        <div className=" flex space-x-10 text-neutral-white">
        <button className="bg-green-one px-2 py-1 rounded" type="submit">Finalizar registro</button>
        <button className="bg-red-destructive px-2 py-1 rounded" > Cancelar</button>
        </div>
      </form>
    </div>
  );
}
const initialValues = {
"street": "",
"number": "",
"interior": "",
"neighborhood": "",
"municipality": "",
"state": "",
"zipcode": "",
"time": "",
"day":  ""
};
