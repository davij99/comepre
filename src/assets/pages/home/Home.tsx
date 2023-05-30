import { useEffect, useState } from "react";
import { Employee } from "../../../model/employee.ts";
import luca from "../../images/LucaCandelli.png"
import WorkerCard from "../../shared/components/WorkerCard.tsx";
import ServerError from "../../shared/components/core/ServerError.tsx";
import { get } from "../../../services/employees/employees.api.ts";

const Home = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState(false);

  function getEmployees() {
    setError(false);
    get()
      .then((res) => {
        setError(false);
        setEmployees(res.items);
      })
      .catch(() => {
        setError(true);
      });
  }

  useEffect(() => {
    getEmployees();
  }, [setEmployees]);

  return (
    <>
      {error && <ServerError />}
      <h1 className="title text-center font-bold text-3xl">
        Selezionare Dipendente
      </h1>
      <ul>
        <div className="page flex flex-row flex-wrap xl:justify-start sm:justify-around my-28 gap-36">
          {employees &&
            employees.map((employee) => {
              return (
                <li key={employee.id}>
                  <WorkerCard name={employee.complete_name} img={luca} />
                </li>
              );
            })}
        </div>
      </ul>
      <pre>{JSON.stringify(employees, null, 2)}</pre>
    </>
  );
};

export default Home;
