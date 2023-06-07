import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const selectEmployee = JSON.parse(
    localStorage.getItem("selectedEmployee") || "{}"
  );
  const selectProject = JSON.parse(
    localStorage.getItem("selectedProject") || "{}"
  );
  const selectActivity = JSON.parse(
    localStorage.getItem("selectedAction") || '""'
  );

  
  const selectEmployeeImg = selectEmployee.employee.icon;
  const selectEmployeeName = selectEmployee.employee.complete_name;
  const selectProjectName = selectProject.project_name;

  return (
    <div className=" w-1/4 min-h-[70vh] border-r-[3px] px-8 border-solid   border-[#172842]">
      <NavLink
        to={"/home"}
        className="flex items-center text-[#808080] hover:text-[#FF0000] "
      >
        <i className="fa fa-arrow-circle-left pr-2"></i>torna indietro
      </NavLink>
      <div className="box-info pt-12">
        <div className="box-img w-36 pb-8">
          <img
            className="rounded-2xl shadow-2xl "
            src={`/${selectEmployeeImg}`}
            alt={selectEmployeeName}
          />
        </div>
        <div className="box-info-dipendente">
          <span className="block font-medium text-[#464543]">
            Dipendente selezionato:
          </span>
          <span className="block uppercase font-semibold text-[#464543]">
            {selectEmployeeName}
          </span>
        </div>
        <div className="box-info-progetto py-5">
          <span className="block font-medium text-[#464543]">
            Progetto selezionato:
          </span>
          <span className="block font-semibold text-[#464543]">
            {selectProjectName}
          </span>
        </div>
        <div className="box-info-attivita">
          <span className="block font-medium text-[#464543]">Attività:</span>
          <span className="block font-semibold text-[#464543]">
            {selectActivity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
