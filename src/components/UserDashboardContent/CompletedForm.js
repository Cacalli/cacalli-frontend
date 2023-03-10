import { Formik, useFormik } from "formik";
import { useOutletContext } from "react-router-dom";

export default function CompletedRegistry() {
  const {
    token: [token, setToken],
  } = useOutletContext();

  const handleInfo = () => {
    fetch(`http://localhost:8001/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + token,
      },
      // body: JSON.stringify(formik.values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.payload);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("No se puede mostrar tu información por ahora");
      });
  };

  const formik = useFormik({
    // initialValues: initialValues,
    onSubmit: handleInfo,
  });

  return (
    <div className="flex bg-red-destructive">
      <p>this is your info:</p>
    </div>
  );
}
