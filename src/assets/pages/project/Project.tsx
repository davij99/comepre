import { NavLink, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Aside from "../../shared/components/core/Aside.tsx";
import { get } from "../../../services/projects/projects.api.ts";
import { logout } from "../../../services/auth/auth.api.ts";
import { ProjectsByEmployees } from "../../../model/projectsByEmployees.ts";

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectsByEmployees[]>([]);

  const getProjects = useCallback(() => {
    try {
      const selectedEmployee = JSON.parse(
        localStorage.getItem("selectedEmployee") || "{}"
      );
      const employeeId = selectedEmployee.id;
      if (employeeId) {
        get().then((response) => {
          const filteredProjects: ProjectsByEmployees[] = [];
          response.items.forEach((project) => {
            if (project.employee_id === employeeId) {
              filteredProjects.push(project);
            }
          });
          console.log(filteredProjects); // Visualizza l'array filtrato correttamente
          setProjects(filteredProjects);
        });
      } else {
        console.log("Employee ID not found in localStorage");
      }
    } catch (error) {
      console.log("Error parsing JSON from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  function goBack() {
    logout();
    navigate("/home");
  }

  return (
    <div className="flex">
      {/* ... */}
      <Aside />
      <div className=" w-3/4 px-12">
        <h2 className="text-2xl font-medium text-center py-7">
          Selezionare commessa
        </h2>
        {/* ... */}
        <ul>
          <div className="grid grid-cols-2 gap-8">
            {projects.length === 0 ? (
              <p>Caricamento...</p>
            ) : (
              projects.map((project) => {
                return (
                  <li className="list-none" key={project.id}>
                    <NavLink to={"/materials"} className="btn-project">
                      {project.project_name}{" "}
                      <i className="fa fa-arrow-circle-right"></i>
                    </NavLink>
                  </li>
                );
              })
            )}
          </div>
        </ul>
        <div className="my-28 w-full flex justify-end">
          <button className="btn primary rounded-xl" onClick={() => goBack()}>
            Indietro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
