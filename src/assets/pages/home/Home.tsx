import { useEffect } from "react";
import ServerError from "../../shared/components/core/ServerError.tsx";
import WorkerCard from "../../shared/components/WorkerCard.tsx";
import Spinner from "../../shared/components/core/Spinner.tsx";
import { EmployeeImg } from "../../../model/employeeImg.ts";
import { useEmployeesService } from "../../../services/employees/useEmployeesService.ts";
import { login } from "../../../services/auth/auth.api.ts";

const Home = () => {
  const { state, actions } = useEmployeesService();

  function handleClick(employee: EmployeeImg) {
    localStorage.setItem(
      "selectedEmployee",
      JSON.stringify({
        employee: employee,
        id: employee.id,
      })
    );
  }

  useEffect(() => {
    localStorage.clear();
    login().then(() => {
      actions.getEmployees();
    });
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
          {state.employeesWithIcon &&
            state.employeesWithIcon.map((employee: EmployeeImg) => (
              <li key={employee.id}>
                <WorkerCard
                  name={employee.complete_name}
                  img={employee.icon}
                  id={employee.id}
                  handleClick={() => handleClick(employee)}
                />
              </li>
            ))}
        </div>
      </ul>
    </>
  );
};

export default Home;
