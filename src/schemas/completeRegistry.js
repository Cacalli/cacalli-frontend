import * as Yup from "yup";

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

export default completeRegistrySchema;
