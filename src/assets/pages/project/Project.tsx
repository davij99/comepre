import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { get } from "../../../services/projects/projects.api.ts";
import { ProjectI } from "../../../model/projectI.ts";
import Aside from "../../shared/components/core/Aside.tsx";

const Project = () => {
  const [projects, setProjects] = useState<ProjectI[]>([]);

  const getProjects = useCallback(() => {
    try {
      get().then((res) => {
        setProjects(res.items);
        console.log(res.items);
      });
    } catch {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className=" flex w-full">
      <Aside/>
      <div className=" w-3/4  px-12">
        <h2 className="text-2xl font-medium text-center pb-8">
          Selezionare commessa
        </h2>
        {/* ... */}
        <div className="grid grid-cols-2 gap-8">
          {projects.length === 0 ? (
            <p>Caricamento...</p>
          ) : (
            projects.map((project) => {
              return (
                <ul>
                  <li className="list-none" key={project.id}>
                    <NavLink to={"/materials"} className="btn-project">
                      {project.project_name}{" "}
                      <i className="fa fa-arrow-circle-right"></i>
                    </NavLink>
                  </li>
                </ul>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
