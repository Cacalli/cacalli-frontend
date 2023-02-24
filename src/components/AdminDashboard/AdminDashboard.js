import Button from "../Button/Button";

export default function AdminDashboard() {
  return (
    <div className="flex flex-1 mt-6 mx-4 ">
      <div className="flex flex-col pr-6">
        <Button variant="primary">Usuarios</Button>
        <Button>Zonas</Button>
        <select className="">
            <option disabled selected>Elige una opción</option>
        <option>Nombre</option>
              <option>Dirección</option>
              <option>Teléfono</option>
              <option>Email</option>
              <option>Día de recolección</option>
              <option>Tamaño</option>
              <option>Plan</option>
              <option>Extra</option>
              <option>Renovación</option>
        </select>
      </div>
      <div>
        <table class="table-fixed">
          <thead>
            <tr className="text-neutral-gray-one">
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Día de recolección</th>
              <th>Tamaño</th>
              <th>Plan</th>
              <th>Extra</th>
              <th>Renovación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
