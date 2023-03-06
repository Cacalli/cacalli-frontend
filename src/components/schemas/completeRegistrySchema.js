import * as Yup from "yup";

const completeRegistrySchema = Yup.object().shape({
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string(),
    street: Yup.string(),
    neighborhood: Yup.string(),
    recolectionDay: Yup.string(),
    recolectionHour: Yup.string(),
    instructions: Yup.string(),
    number: Yup.string(),
    interiorNumber:  Yup.string(),
    municipality:  Yup.string(),
  });

  export default completeRegistrySchema