import Button from "../Button/Button";
import Input from "../Input/Input";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const createAccountSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const [login, setLogin] = useState("");

  let navigate = useNavigate();

  const handleCreateAccount = ({name, email, phone, password}) => {
    const body = {firstName: name, email, phone, password };
    fetch("http://ec2-34-227-93-62.compute-1.amazonaws.com/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if (data.ok === true && data.payload != null) {
        //   localStorage.setItem("token", data.payload);
        //   console.log("creaste tu cuenta");
        //   navigate("/dashboard-usuario");
        // }
      })
      .catch((error) => {
        throw new Error("No podemos crear tu cuenta por ahora :(")
      });
  };

  // {
  //   "email": "dos@kkli.com", 
  //   "password": "etss", 
  //   "firstName": "persona",
  //   "phone": "5555555555",
  // }

  return (
    <div className="flex justify-center gap-28">
      <img className="h-auto" src="/assets/landscape-login.png" />

      <div className="ml-8">
        <p className="font-bold text-2xl mb-6">Crea tu cuenta</p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={createAccountSchema}
          onSubmit={(values) => handleCreateAccount(values)}
          className="grid gap-4 mb-6"
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form noValidate onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={values.phone}
                placeholder="Teléfono celular"
              />
              <Input
                name="password"
                required
                type="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Crear contraseña"
              />
              <Input
                name="confirmPassword"
                required
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmar contraseña"
              />
              <Button type="submit" variant="primary" isFull>
                Crear cuenta
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
