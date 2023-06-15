import { NavLink, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Aside from "../../shared/components/core/Aside";
import { get } from "../../../services/projects/projects.api";
import { logout } from "../../../services/auth/auth.api";
import { ProjectsByEmployees } from "../../../model/projectsByEmployees";
import ServerError from "../../shared/components/core/ServerError";
import Spinner from "../../shared/components/core/Spinner";
import Button from "../../shared/components/core/Button";

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectsByEmployees[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const getProjects = useCallback(async () => {
    setPending(true);
    setError(false);

    try {
      const selectedEmployee = JSON.parse(
        localStorage.getItem("selectedEmployee") || "{}"
      );

      const employeeId = selectedEmployee.id;

      if (employeeId) {
        const response = await get();

        const filteredProjects: any = response.items.filter(
          (project: any) => project.employee_id === employeeId
        );

        setProjects(filteredProjects);
      } else {
        setError(true);
        console.log("Employee ID not found in localStorage");
      }
    } catch (error) {
      setError(true);
      console.log("Error parsing JSON from localStorage:", error);
    } finally {
      setPending(false);
      setError(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  const goBack = () => {
    logout();
    navigate("/home");
  };

  const handleClick = (p: ProjectsByEmployees) => {
    localStorage.setItem("selectedProject", JSON.stringify(p));
  };

  return (
    <div className="flex w-full">
      {/* ... */}
      <Aside />
      <div className="w-3/4 px-12">
        <h2 className="text-2xl font-medium text-center py-7">
          Selezionare commessa
        </h2>
        {/* ... */}
        {pending && <Spinner />}
        {error && <ServerError />}
        <ul>
          <div className="grid grid-cols-2 gap-8">
            {projects.length === 0 ? (
              <ServerError message="No Projects" />
            ) : (
              projects.map((project) => (
                <li className="list-none" key={project.id}>
                  <NavLink
                    to={`/activity/${project.id}`}
                    className="btn-project"
                    onClick={() => handleClick(project)}
                  >
                    {project.project_name}{" "}
                    <i className="fa fa-arrow-circle-right"></i>
                  </NavLink>
                </li>
              ))
            )}
          </div>
        </ul>
        <div className="my-28 w-full flex justify-end">
          <Button handleClick={goBack} />
        </div>
      </div>
    </div>
  );
};

export default Project;
