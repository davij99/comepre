import { useEffect, useState } from "react";
import { Employee } from "../../../model/employee.ts";
import ServerError from "../../shared/components/core/ServerError.tsx";
import { get } from "../../../services/employees/employees.api.ts";
import WorkerCard from "../../shared/components/WorkerCard.tsx";
import IMAGES from "../../../images.ts";
import { EmployeeImg } from "../../../model/employeeImg.ts";
import Spinner from "../../shared/components/core/Spinner.tsx";

const Home = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeesWithIcon, setEmployeesWithIcon] = useState<EmployeeImg[]>([]);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  function getEmployees() {
    setPending(true);
    setError(false);
    get()
      .then((res) => {
        setPending(false);
        setError(false);
        setEmployees(res.items);
      })
      .catch(() => {
        setPending(false);
        setError(true);
      });
  }

  useEffect(() => {
    getEmployees();
  }, [setEmployees, setEmployeesWithIcon, setError, setPending]);

  useEffect(() => {
    const newEmployees: EmployeeImg[] = [];

    employees.map((employee) => {
      const employeeWithIcon: EmployeeImg = {
        collectionId: "",
        collectionName: "",
        complete_name: "",
        created: "",
        description: "",
        icon: "",
        id: "",
        role: "",
        updated: "",
      };
      IMAGES.filter((image) => {
        if (employee.id === image.id) {
          employeeWithIcon["collectionId"] = employee.collectionId;
          employeeWithIcon["collectionName"] = employee.collectionName;
          employeeWithIcon["complete_name"] = employee.complete_name;
          employeeWithIcon["created"] = employee.created;
          employeeWithIcon["description"] = employee.description;
          employeeWithIcon["id"] = employee.id;
          employeeWithIcon["role"] = employee.role;
          employeeWithIcon["updated"] = employee.updated;
          employeeWithIcon["icon"] = image.icon;
        }
      });
      newEmployees.push(employeeWithIcon);
    });
    setEmployeesWithIcon(newEmployees);
  }, [setEmployeesWithIcon, setEmployees, employees]);
  return (
    <>
      <h1 className="title text-center font-bold text-3xl">
        Selezionare Dipendente
      </h1>
      {pending && <Spinner />}
      {error && <ServerError />}
      <ul>
        <div className="grid grid-cols-4 my-28 gap-36">
          {employeesWithIcon &&
            employeesWithIcon.map((employee) => {
              return (
                <li key={employee.id}>
                  <WorkerCard
                    name={employee.complete_name}
                    img={employee.icon}
                    id={employee.id}
                  />
                </li>
              );
            })}
        </div>
      </ul>
    </>
  );
};

export default Home;
