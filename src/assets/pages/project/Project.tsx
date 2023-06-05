import { useEffect, useState } from "react";
import { get } from "../../../services/projects/projects.api";
import { NavLink } from "react-router-dom";
import Aside from "../../shared/components/core/Aside";
import { ProjectI } from "../../../model/projectI";

const Project = () => {
  const [projects, setProjects] = useState<ProjectI[]>([]);

  function getProjects() {
    try {
      get().then((res) => {
        setProjects(res.items);
        console.log(projects);
      });
    } catch {
      (e: any) => {
        console.log(e);
      };
    }
  }

  useEffect(() => {
    getProjects();
  }, [setProjects]);
  return (
    <div className="flex">
      <Aside />
      <div className=" w-3/4 px-12">
        <h2 className="text-2xl font-medium text-center py-7">
          Selezionare commessa
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {projects &&
            projects.map((project) => {
              return (
                <li className="list-none" key={project.id}>
                <NavLink to={"/finalbalance"} className="btn-project">
                  {project.project_name}{" "}
                  <i className="fa fa-arrow-circle-right"></i>
                </NavLink>
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Project;
