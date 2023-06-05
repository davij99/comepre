import { useEffect } from "react";
import ServerError from "../../shared/components/core/ServerError.tsx";
import WorkerCard from "../../shared/components/WorkerCard.tsx";
import Spinner from "../../shared/components/core/Spinner.tsx";
import { EmployeeImg } from "../../../model/employeeImg.ts";
import { useEmployeesService } from "../../../services/employees/useEmployeesService.ts";

const Home = () => {
  const { state, actions } = useEmployeesService();

  useEffect(() => {
    actions.getEmployees();
  }, []);

  useEffect(() => {
    actions.getEmployeesWithIcon();
  }, [state.employees]);

  return (
    <>
      <h1 className="title text-center font-bold text-3xl">
        Selezionare Dipendente
      </h1>
      {state.pending && <Spinner />}
      {state.error && <ServerError />}
      <ul>
        <div className="grid grid-cols-4 my-28 gap-36">
          {state.employeesWithIcon.map((employee: EmployeeImg) => (
            <li key={employee.id}>
              <WorkerCard
                name={employee.complete_name}
                img={employee.icon}
                id={employee.id}
              />
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default Home;
