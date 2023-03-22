import { InlineWidget } from "react-calendly";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function CalendlyContent() {
  return (
    <div className="">
      <InlineWidget url="https://calendly.com/cacalli/10min" />
      <Link to="/dashboard">
        <Button variant="primary" className="ml-8">
        Volver al dashboard
        </Button>
      </Link>
    </div>
  );
}
