import Aside from "../../shared/components/core/Aside.tsx";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/core/Button.tsx";
import { ChangeEvent, FormEvent, useState } from "react";
import { update } from "../../../services/projects/projects.api.ts";

const FinalBalance = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  function goBack() {
    const selectedProject = JSON.parse(
      localStorage.getItem("selectedProject") || "{}"
    );
    const projectId = selectedProject.id;
    localStorage.removeItem("selectedAction");
    navigate(`/activity/${projectId}`);
  }

  const sendHours = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numericValue = parseInt(formData, 10);
    const selectedProject = JSON.parse(
      localStorage.getItem("selectedProject") || "{}"
    );
    const projectId = selectedProject.id;
    update(numericValue, projectId).then((res) => {
      console.log(res);
    });
    console.log("Valore delle ore di lavoro:", numericValue);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  return (
    <div className="flex w-full">
      <Aside />
      <div className=" w-3/4 flex flex-col justify-around px-12">
        <h2 className="text-2xl font-medium text-center py-7">
          Consuntivazione:
        </h2>
        <div className="w-full flex flex-col justify-between ">
          <form className="font-bold" onSubmit={sendHours}>
            <div className="w-full flex items-center justify-center my-56">
              <label className="text-2xl mr-2" htmlFor="hours">
                Tempo di lavoro:{" "}
              </label>
              <input
                name="hours"
                id="hours"
                type="number"
                placeholder="ore di lavoro"
                className="border border-[#172842] py-4 rounded-2xl text-center"
                value={formData}
                onChange={changeHandler}
                min="0"
              />
            </div>
            <div className=" w-full flex justify-between items-end">
              <button
                className="bg-red-500 px-24 py-6 text-white rounded-xl shadow-2xl "
                type="submit"
              >
                Consuntiva
              </button>
              <Button handleClick={() => goBack()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinalBalance;
