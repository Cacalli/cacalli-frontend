import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Header";
export default function MobileMenu({ toggleMenu, showMenu }) {
  let navigate = useNavigate();
  const redirect = (route) => {
    toggleMenu();
    navigate(route);
  };
  return (
    <div
      className={`fixed mobile-menu inset-0 flex flex-col md:hidden w-full mx-auto min-h-full z-30 bg-orange-four rounded ${
        showMenu ? "" : "expanded"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="text-orange-one p-4 place-self-end"
      >
        <FaTimes />
      </button>
<button onClick={()=>{redirect("/")}}>
<img  src="/assets/cacalliName.png" className="w-36 h-18 py-2 md:mx-0 mx-auto mb-6"/>
</button>
      <div className="items-center flex flex-col text-center">
        <Button
          variant="secondary"
          inverse
          onClick={() => {
            redirect("/quienes-somos");
          }}
        >
          Quiénes somos
        </Button>

        {/* <Button
          variant="secondary"
          inverse
          onClick={() => {
            redirect("/calcula-plan");
          }}
        >
          Calcula tu plan
        </Button> */}

        <Button
          variant="secondary"
          inverse
          onClick={() => {
            redirect("/plan-suscripcion");
          }}
        >
          Precios
        </Button>

        <Button
          variant="secondary"
          inverse
          onClick={() => {
            redirect("/contacto");
          }}
        >
          Contacto
        </Button>

        <Button
          variant="primary"
          className=" w-max"
          onClick={() => {
            redirect("/unete");
          }}
        >
          ¡Únete!
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            redirect("ingresa");
          }}
        >
          Ingresa
        </Button>
      </div>
    </div>
  );
}
