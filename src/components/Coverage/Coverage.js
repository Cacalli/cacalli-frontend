import { useState } from "react";
import Button from "../Button/Button";

export default function Coverage() {
  const [location, setLocation] = useState("");
  const handleSearchClick = () => {
 
  };
 
  return (
    <div className="bg-orange-one py-20 md:py-40">
      <div className="w-10/12 flex mx-auto">
        <div className="md:flex w-full items-center">
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-5xl md:text-7xl  text-neutral-white font-lovelo">
                COBERTURA
              </p>
              <p className="text-neutral-white py-4 text-xl">
                Descubre qué tan cerca estamos de ti
              </p>
            </div>
            <div className="flex mb-6 md:mb-0  space-x-6 w-8/12">
              <input
                type="text"
                value={location}
                //undefined... why?
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 outline-none rounded p-2 "
                placeholder="Ubicación"
              />
              <Button
                onClick={handleSearchClick}
                className="flex-none"
                variant="neutral"
              >
                Buscar
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="w-auto m-auto h-[600px] rounded"
              src="/assets/availability-zone.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
