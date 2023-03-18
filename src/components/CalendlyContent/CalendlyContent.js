import { InlineWidget } from "react-calendly";
import { Link } from "react-router-dom";
export default function CalendlyContent() {
  return (
    <div>
      <InlineWidget url="https://calendly.com/cacalli/10min" />
      <Link to="/dashboad">Volver al dashboard</Link>
    </div>
  );
}
