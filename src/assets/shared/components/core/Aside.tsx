import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const [icon, setIcon] = useState("");
  const selectEmployee = JSON.parse(
    localStorage.getItem("selectedEmployee") || "{}"
  );
  console.log(selectEmployee);
  const selectEmployeeImg = selectEmployee.employee.icon;
  const selectEmployeeName = selectEmployee.employee.complete_name;

  console.log(selectEmployeeImg);

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
          <span className="block font-semibold text-[#464543]">canto</span>
        </div>
        <div className="box-info-attivita">
          <span className="block font-medium text-[#464543]">Attività:</span>
          <span className="block font-semibold text-[#464543]">
            Consuntivazione ore
          </span>
        </div>
        <pre>{JSON.stringify(selectEmployee, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Aside;
