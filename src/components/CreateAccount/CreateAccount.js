import Button from "../Button/Button";
import Input from "../Input/Input";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import baseUrl from "../../utils/baseUrls";

export default function CreateAccount() {
  const createAccountSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Campo requerido"),
    email: Yup.string().email("email inválido").required("Campo requerido"),
    phone: Yup.number("El número debe ser de 10 dígitos")
      .typeError("Esto no parece un número de teléfono")
      .positive("Tu número de teléfono no debe ser negativo")
      .integer("No incluyas puntos decimales")
      .min(10)
      .required("Ingresa tu número telefónico"),
    password: Yup.string()
      .required()
      .min(4, "La contraseña debe contener 4 caracteres mínimo.")
      .matches(
        /[a-zA-Z]/,
        "La contraseña acepta caracteres del alfabeto latino."
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Las contraseñas deben coincidir"
    ),
  });

  const {
    token: [token, setToken],
  } = useOutletContext();

  let navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [token]);

  const handleCreateAccount = ({ name, email, phone, password }) => {
    const body = { firstName: name, email, phone, password };
    fetch(`${baseUrl}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok === true && data.payload != null) {
          setToken(data.payload.token);
          localStorage.setItem("token", data.payload.token);
        }
      })
      .catch((error) => {
        throw new Error("No podemos crear tu cuenta por ahora :(");
      });
  };

  // {
  //   "email": "dos@kkli.com",
  //   "password": "etss",
  //   "firstName": "persona",
  //   "phone": "5555555555",
  // }

  return (
    <div className="flex justify-center gap-28 mt-6">
      <img className="h-auto" src="/assets/landscape-login.png" />

      <div className="ml-8 w-96">
        <p className="font-bold text-neutral-gray-two text-2xl mb-6">
          Crea tu cuenta
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={createAccountSchema}
          onSubmit={handleCreateAccount}
          className="grid gap-4 mb-6"
        >
          {({ values, errors, handleChange }) => (
            <Form noValidate>
              <Input
                name="name"
                helperText={errors.name}
                variant={errors.name ? "destructive" : undefined}
                required
                onChange={handleChange}
                value={values.name}
                placeholder="Nombre"
              />
              <Input
                name="email"
                helperText={errors.email}
                variant={errors.email ? "destructive" : undefined}
                required
                type="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
              />
              <Input
                name="phone"
                required
                variant={errors.phone ? "destructive" : undefined}
                onChange={handleChange}
                helperText={errors.phone}
                value={values.phone}
                placeholder="Teléfono celular"
              />
              <Input
                name="password"
                required
                type="password"
                helperText={errors.password}
                variant={errors.password ? "destructive" : undefined}
                onChange={handleChange}
                value={values.password}
                placeholder="Crear contraseña"
              />
              <Input
                name="confirmPassword"
                required
                type="password"
                helperText={errors.confirmPassword}
                variant={errors.confirmPassword ? "destructive" : undefined}
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmar contraseña"
              />

              <Button type="submit" variant="primary" isFull>
                Crear cuenta
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
