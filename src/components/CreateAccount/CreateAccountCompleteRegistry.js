import { Formik, Form } from "formik";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

//http://ec2-34-227-93-62.compute-1.amazonaws.com

export default function CreateAccountCompleteRegistry({ firstName }) {
  const [availableDays, setAvailableDays] = useState([]);
  const completeRegistrySchema = Yup.object().shape({
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits"),
    street: Yup.string().max(20),
    town: Yup.string().max(20),
    recolectionDay: Yup.number(),
    recolectionHour: Yup.number(),
    instructions: Yup.string().max(200),
  });

  //const url = "localhost:8001/zone/checkZipcode?" + New
  const handleCompleteRegistry = ({
    city,
    state,
    zipCode,
    street,
    town,
    recolectionDay,
    recolectionHour,
    instructions,
  }) => {
    fetch(`http://localhost:8001/zone/checkZipcode/${zipCode}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        const days = data.payload[0].schedules.map((item) => {
          return item.day;
        });
        setAvailableDays(days);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("No podemos crear tu cuenta por ahora :(");
      });
  };

  const handleChange = () => {
    console.log("handle change");
  };
  const handleOptions = (e) => {
    console.log(e.target.value);
  };
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
      <Formik
        initialValues={{
          city: "",
          state: "",
          zipCode: "",
          street: "",
          town: "",
          recolectionDay: 0,
          recolectionHour: 0,
          instructions: "",
        }}
        validationSchema={completeRegistrySchema}
        onSubmit={handleCompleteRegistry}
        className="grid gap-4 mb-6"
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form>
            <div className="mb-2">
              <p className="font-bold text-neutral-gray-two">Dirección</p>
              <div className="grid grid-cols-3 gap-6 mt-4">
                <Input
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Ciudad"
                />
                <Input
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Estado"
                />
                <Input
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Código postal"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-3 gap-6">
              <Input
                name="street"
                value={values.street}
                onChange={handleChange}
                className="w-full"
                placeholder="Calle"
              />
              <Input
                name="town"
                value={values.town}
                onChange={handleChange}
                className="w-full"
                placeholder="Municipio/alcaldía"
              />
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <p className="font-bold text-neutral-gray-two">
                  Información de recolección
                </p>
                <p className="text-neutral-gray-three">
                  Selecciona el día y hora en el que podríamos{" "}
                </p>
                <div className="grid grid-cols-3 gap-6 mt-4">
                  <Input
                    name="recolectionDay"
                    value={values.recolectionDay}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Día"
                  />
                  <Dropdown
                    options={availableDays}
                    defaultText="Elige el dia"
                    name="Dia"
                    onChange={handleOptions}
                  />
                  <Input
                    name="recolectionHour"
                    value={values.recolectionHour}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Hora"
                  />
                </div>
              </div>
              <textarea
                name="instructions"
                value={values.instructions}
                onChange={handleChange}
                className="p-3 border border-neutral-gray-two rounded w-full h-52"
                placeholder="Instrucciones de recolección"
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Finalizar registro
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
