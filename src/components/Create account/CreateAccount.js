import Button from "../Button/Button";
import Input from "../Input/Input";
import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';

export default function CreateAccount() {
    const createAccountSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    return (
    <div className="flex justify-center gap-28">
      <img className="h-auto" src="/assets/landscape-login.png" />

      <div className="ml-8">
        <p className="font-bold text-2xl mb-6">Crea tu cuenta</p>
        <Formik
         initialValues={{name:'', email: '', phone:'', password: '', confirmPassword:'' }}
         validationSchema={createAccountSchema}
          onSubmit={(values) => console.log(values)}
          className="grid gap-4 mb-6"
        >
          {({values, errors, handleChange, handleSubmit}) => (
            <form noValidate onSubmit={handleSubmit}>
              <Input name="name" helperText={errors.name} variant={errors.name ? "destructive" : undefined} required value={values.name} onChange={handleChange} placeholder="Nombre" />
              <Input name="email" helperText={errors.email} variant={errors.email ? "destructive" : undefined} required type="email" value={values.email} onChange={handleChange} placeholder="Email" />
              <Input name="phone" required value={values.phone} onChange={handleChange} placeholder="Teléfono celular" />
              <Input name="password" required type="password" value={values.password} onChange={handleChange} placeholder="Crear contraseña" />
              <Input name="confirmPassword" required type="password" value={values.confirmPassword} onChange={handleChange} placeholder="Confirmar contraseña" />
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
