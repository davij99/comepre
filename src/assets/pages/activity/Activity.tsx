import { NavLink, useNavigate } from "react-router-dom";
import Aside from "../../shared/components/core/Aside.tsx";
import Button from "../../shared/components/core/Button.tsx";

const Activity = () => {
  const navigate = useNavigate();

  function goBack() {
    const selectedEmployee = JSON.parse(
      localStorage.getItem("selectedEmployee") || "{}"
    );
    const employeeId = selectedEmployee.id;
    localStorage.removeItem("selectedProject");
    navigate(`/project/${employeeId}`);
  }

  function handleClick(action: string) {
    localStorage.setItem("selectedAction", JSON.stringify(action));
  }

  return (
    <div className="flex w-full">
      <Aside />
      <div className=" w-3/4 px-12">
        <h2 className="text-2xl font-medium text-center py-7">
          Selezionare attività:
        </h2>
        <div className="w-full flex p-32 justify-between">
          <NavLink
            className="btn-project w-2/5"
            to="/finalBalance"
            onClick={() => handleClick("Consuntivazione ore")}
          >
            Consuntiva ore
            <i className="fa fa-arrow-circle-right"></i>
          </NavLink>
          <NavLink
            className="btn-project w-2/5"
            to="/materials"
            onClick={() => handleClick("Scaricamento materiali")}
          >
            Scarico materiali
            <i className="fa fa-arrow-circle-right"></i>
          </NavLink>
        </div>
        <div className="my-28 w-full flex justify-end">
          <Button handleClick={() => goBack()} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
