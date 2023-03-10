import { Formik, useFormik } from "formik";
import { useOutletContext } from "react-router-dom";

export default function CompletedRegistry() {
  const {
    token: [token, setToken],
  } = useOutletContext();

  const formik = useFormik({
    // initialValues: initialValues,
    onSubmit: handleInfo,
  });

  const handleInfo = () => {
    fetch(
      `http://localhost:8001/user/complete`,
      {
        method: "GET",
          headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + token,
      },
        body: JSON.stringify(formik.values),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error(
          "No se mostrar tu información por ahora"
        );
      });
  };

  return (
    <div className="flex">
    <p>

    </p>
    </div>
  );
}
