import Card from "../Card/Card";
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
// import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
export default function ContactContent() {
  return (
    <div className="pt-10">
      <div className="flex h-96" style={{backgroundColor: "#ACDADE"}}>
        <img className="w-full h-full object-contain" src="/assets/vista-frontal-hermoso-perro.jpg" />
      </div>

      <div className="my-10 text-center">
      <p className="font-bold text-4xl md:text-6xl my-4 text-green-three"> CONTÁCTANOS</p>
        <p className="text-lg md:text-2xl text-orange-one font-josefin-sans">
          Nos gustaría saber tus dudas
        </p>
       
      </div>

      <div className="flex flex-wrap gap-10 my-10 text-center mx-10 place-content-center">
        <Card className="text-orange-one w-96 mb-6 max-w-full">
            <p className="mb-4 ">
                <FaWhatsapp className="mx-auto mb-2 md:mb-4 text-2xl" size="1.2em"/>
                <span className="text-base md:text-2xl">555-cacalli</span>
            </p>
        </Card>
        <Card className="text-orange-one w-96 max-w-full">
            <p className="mb-4">
                <FaEnvelope className="mx-auto mb-4 text-2xl" size="1.2em"/>
                <span className="text-base md:text-2xl">contactocacalli@gmail.com</span>
            </p>
        </Card>
      </div>
    </div>
  );
}
