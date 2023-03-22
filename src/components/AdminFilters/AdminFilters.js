import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrls";
import Button from "../Button/Button";

export default function AdminFilter({ token }) {
  const [filters, setFilters] = useState([]);
  const [selectedZone, setSelectedZone] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");


  useEffect(() => {
    let query = "";
    if(selectedDay != "all" || selectedTime != "all" || selectedZone != "all"){
      query += "?"
      query += selectedDay != "all" ? "day=" + selectedDay + "&": "";
      query += selectedTime != "all" ? "time=" + selectedTime + "&": "";
      query += selectedZone != "all" ? "zone=" + selectedZone: ""; 
    }
    fetchFilter(query);
  }, [selectedDay, selectedZone, selectedTime])

  const fetchFilter = (param) => {
    fetch(`${baseUrl}/admin/zoneFilters${param}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFilters(data.payload);
        console.log(data.payload);
      })
      .catch((error) => {
        throw new Error("No se puede filtrar la informacion");
      });
  }

  return (
    <>
      {filters && filters.zones ? (
        <div className="flex flex-col space-y-6">
          <h3 className="text-neutral-gray-two font-bold">Zonas</h3>
          <div className="text-neutral-three flex flex-col  gap-2">
            <Button
              className="text-neutral-gray-three w-max"
              onClick={() => {
                setSelectedZone("all");
              }}
              variant={selectedZone === "all" ? "primary" : "tertiary"}
            >
              Todas
            </Button>
            {filters.zones.map((zone) => {
              return (
                <Button
                  onClick={() => {
                    setSelectedZone(zone);
                  }}
                  variant={selectedZone === zone ? "primary" : "tertiary"}
                  className="text-neutral-gray-three w-max"
                >
                  {zone}
                </Button>
              );
            })}
          </div>
          <h3 className="text-neutral-gray-two font-bold">Dias</h3>
          <div className="flex flex-col gap-2">
            <Button
              className="text-neutral-gray-three w-max"
              onClick={() => {
                setSelectedDay("all");
              }}
              variant={selectedDay === "all" ? "primary" : "tertiary"}
            >
              Todos
            </Button>
            {filters.days.map((day) => {
              return (
                <Button
                  onClick={() => {
                    setSelectedDay(day);
                  }}
                  variant={selectedDay === day ? "primary" : "tertiary"}
                  className="text-neutral-gray-three w-max"
                >
                  {day}
                </Button>
              );
            })}
          </div>
          <h3 className="text-neutral-gray-two font-bold">Horas</h3>
          <div className="flex flex-col gap-2">
            <Button
              className="text-neutral-gray-three w-max"
              onClick={() => {
                setSelectedTime("all");
              }}
              variant={selectedTime === "all" ? "primary" : "tertiary"}
            >
              Todas
            </Button>
            {filters.times.map((time) => {
              return (
                <Button
                  onClick={() => {
                    setSelectedTime(time);
                  }}
                  variant={selectedTime === time ? "primary" : "tertiary"}
                  className="text-neutral-gray-three w-max"
                >
                  {time}
                </Button>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
