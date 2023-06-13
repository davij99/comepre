import Aside from "../../shared/components/core/Aside";
import { useNavigate } from "react-router-dom";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { get } from "../../../services/materials/materials.api.ts";
import { MaterialsByProject } from "../../../model/materialsByProject.ts";
import Button from "../../shared/components/core/Button.tsx";
import ServerError from "../../shared/components/core/ServerError.tsx";
import Spinner from "../../shared/components/core/Spinner.tsx";

export interface FormType {
  [materialId: string]: number;
}

const Materials = () => {
  const [materials, setMaterials] = useState<MaterialsByProject[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const initialFormData: FormType = materials.reduce((acc, material) => {
    return {
      ...acc,
      [material.material_id]: 0,
    };
  }, {});
  const [formData, setFormData] = useState<FormType>(initialFormData);

  function handleChange(e: ChangeEvent<HTMLInputElement>, materialId: string) {
    const { value } = e.currentTarget;

    const numericValue = parseInt(value, 10); // Converti il valore in un numero

    setFormData((prevState) => ({
      ...prevState,
      [materialId]: numericValue,
    }));
  }

  function sendData(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    // const selectedProject = JSON.parse(
    //   localStorage.getItem("selectedProject") || "{}"
    // );
    // const projectId = selectedProject.id;

    for (const materialId in formData) {
      const numericValue = parseInt(String(formData[materialId]), 10);
      console.log(materialId, numericValue);
      localStorage.clear();
      navigate("/home");
      //  inserire in futuro per ogni materiale, in quel progetto la quantità data, al momento non dispongo di un db cosi efficente
    }
  }

  function goBack() {
    const selectedProject = JSON.parse(
      localStorage.getItem("selectedProject") || "{}"
    );

    const projectId = selectedProject.id;

    localStorage.removeItem("selectedAction");

    navigate(`/activity/${projectId}`);
  }

  const getMaterials = useCallback(() => {
    setPending(true);

    setError(false);

    try {
      setPending(false);
      setError(false);

      const selectedProject = JSON.parse(
        localStorage.getItem("selectedProject") || "{}"
      );

      const projectId = selectedProject.id;

      if (projectId) {
        get().then((response) => {
          const filteredMaterials: MaterialsByProject[] = [];

          response.items.forEach((project) => {
            if (project.id === projectId) {
              filteredMaterials.push(project);
            }
          });

          setMaterials(filteredMaterials);
          console.log(filteredMaterials);
        });
      }
    } catch (e) {
      console.log(e);
      setPending(false);
      setError(true);
    }
  }, [materials, setMaterials]);

  useEffect(() => {
    getMaterials();
  }, []);

  return (
    <div className="flex w-full">
      <Aside />

      <div className=" w-3/4 flex flex-col justify-around px-12">
        <h2 className="text-2xl font-medium text-center py-7">
          Scarico Materiali :
        </h2>

        {error && <ServerError />}

        {pending && <Spinner />}

        <table className="border-collapse table-auto w-full my-12">
          <thead>
            <tr>
              <th className="text-left">NOME PRODOTTO</th>

              <th className="text-left">CATEGORIA</th>

              <th className="text-center">QTY</th>
            </tr>
          </thead>

          <tbody>
            {materials.map((material) => {
              return (
                <tr className="h-24" key={material.material_id}>
                  <td>
                    <div className="text-xl">{material.material_name}</div>
                  </td>

                  <td>
                    <div className="text-xl">{material.categories}</div>
                  </td>

                  <td className="text-center">
                    <form id="hoursForm">
                      <input
                        className="border border-[#172842] py-4 rounded-2xl text-center"
                        min="0"
                        type="number"
                        id="qty"
                        name={`qty-${material.material_id}`}
                        onChange={(e) => handleChange(e, material.material_id)}
                        value={formData[material.material_id] || ""}
                      />
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className=" w-full flex justify-between items-end">
          <Button handleClick={() => goBack()} />
          <button
            className="bg-red-500 px-24 py-6 text-white rounded-xl shadow-2xl "
            type="submit"
            form="hoursForm"
            onClick={sendData}
          >
            Scarica Materiali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Materials;
