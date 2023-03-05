import { useFormik } from "formik";
import { useState, useCallback, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import completeRegistrySchema from "../../schemas/completeRegistry";

//http://ec2-34-227-93-62.compute-1.amazonaws.com

export default function CreateAccountCompleteRegistry({ firstName }) {
  const [availableDays, setAvailableDays] = useState([]);
  const [currentField, setCurrentField] = useState("");
  const [currentFieldName, setCurrentFieldName] = useState("");

  //const url = "localhost:8001/zone/checkZipcode?" + New
  const handleCompleteRegistry = () => {};

  const validateZipCode = () => {
    if (formik.values.zipCode.length === 5) {
      fetch(
        `http://localhost:8001/zone/checkZipcode/${formik.values.zipCode}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          //body: JSON.stringify(body),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // const days = data.payload[0].schedules.map((item) => {
          //   return item.day;
          // });
          // setAvailableDays(days);
        })
        .catch((error) => {
          console.error(error);
          throw new Error("No podemos crear tu cuenta por ahora :(");
        });
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: completeRegistrySchema,
    onSubmit: handleCompleteRegistry,
  });

  const handleDaysDropdown = (event) => {
    formik.setValues({ ...formik.values, day: event.target.value });
  };

  useEffect(() => {
    validateZipCode();
  }, [formik.values.zipCode]);

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
      <form>
        <div className="mb-2">
          <p className="font-bold text-neutral-gray-two">Dirección</p>
          <div className="grid grid-cols-3 gap-6 mt-4">
            <Input
              name="city"
              value={formik.values.city}
              onChange={(e) => setInputValue("city", e.target.value)}
              className="w-full"
              placeholder="Ciudad"
            />
            <Input
              name="state"
              value={formik.values.state}
              onChange={(e) => setInputValue("state", e.target.value)}
              className="w-full"
              placeholder="Estado"
            />
            <Input
              name="zipCode"
              value={formik.values.zipCode}
              onChange={(e) => setInputValue("zipCode", e.target.value)}
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
            name="town"
            value={formik.values.town}
            onChange={(e) => setInputValue("town", e.target.value)}
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
                value={formik.values.recolectionDay}
                onChange={(e) =>
                  setInputValue("recolectionDay", e.target.value)
                }
                className="w-full"
                placeholder="Día"
              />
              <Dropdown
                options={availableDays}
                defaultText="Elige el dia"
                name="Dia"
              />
              <Input
                name="recolectionHour"
                value={formik.values.recolectionHour}
                onChange={(e) =>
                  setInputValue("recolectionHour", e.target.value)
                }
                className="w-full"
                placeholder="Hora"
              />
            </div>
          </div>
          <textarea
            name="instructions"
            value={formik.values.instructions}
            className="p-3 border border-neutral-gray-two rounded w-full h-52"
            placeholder="Instrucciones de recolección"
          ></textarea>
        </div>
        <Button type="submit" variant="primary">
          Finalizar registro
        </Button>
      </form>
    </div>
  );
}
const initialValues = {
  city: "",
  state: "",
  zipCode: "",
  street: "",
  town: "",
  recolectionDay: 0,
  recolectionHour: 0,
  instructions: "",
};
