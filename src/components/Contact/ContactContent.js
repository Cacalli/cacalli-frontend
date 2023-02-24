import Card from "../Card/Card";
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
// import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
export default function ContactContent() {
  return (
    <div className="pt-6">
      <div className="flex h-96" style={{backgroundColor: "#ACDADE"}}>
        <img className="w-full h-full object-contain" src="/assets/vista-frontal-hermoso-perro.jpg" />
      </div>

      <div className="mt-6 text-center">
      <p className="font-bold text-6xl my-4 text-green-three"> CONTÁCTANOS</p>
        <p className="text-2xl text-orange-one font-josefin-sans">
          Nos gustaría saber tus dudas
        </p>
       
      </div>

      <div className="grid grid-cols-2 my-10 text-center place-content-between gap-6 mx-10">
        <Card>
            <p className=" text-2xl text-orange-one mb-4">
                <FaWhatsapp className="mx-auto mb-4" size="1.5em"/>
                555-cacalli
            </p>
        </Card>
        <Card className="text-2xl text-orange-one">
            <p className="mb-4">
                <FaEnvelope className="mx-auto mb-4" size="1.5em"/>
                contactocacalli@gmail.com
            </p>
        </Card>
      </div>
    </div>
  );
}
