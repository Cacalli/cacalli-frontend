import Card from "../Card/Card";
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
// import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
export default function ContactContent() {
  return (
    <div className="pt-4">
      <div className="flex h-96" style={{backgroundColor: "#ACDADE"}}>
        <img className="w-full h-full object-contain" src="/assets/vista-frontal-hermoso-perro.jpg" />
      </div>

      <div className="my-10 text-center">
      <p className="font-bold text-6xl my-4 text-green-three"> CONTÁCTANOS</p>
        <p className="text-2xl text-orange-one font-josefin-sans">
          Nos gustaría saber tus dudas
        </p>
       
      </div>

      <div className="flex gap-10 my-10 text-center mx-10 place-content-center">
        <Card className=" text-2xl text-orange-one w-96">
            <p className="mb-4">
                <FaWhatsapp className="mx-auto mb-4" size="1.5em"/>
                555-cacalli
            </p>
        </Card>
        <Card className="text-2xl text-orange-one w-96">
            <p className="mb-4">
                <FaEnvelope className="mx-auto mb-4" size="1.5em"/>
                contactocacalli@gmail.com
            </p>
        </Card>
      </div>
    </div>
  );
}
