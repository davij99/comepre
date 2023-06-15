import { useNavigate } from "react-router-dom";
import Aside from "../../shared/components/core/Aside";
import Button from "../../shared/components/core/Button";
import { getMaterial } from "../../../services/materials/materials.api";
import { ChangeEvent, FormEvent, useState } from "react";

const CustomMaterials = () => {
  const [productId, setProductId] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [qty, setQty] = useState<number | "">("");
  const navigate = useNavigate();
  function handleProductIdChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setProductId(value);

    if (value === "") {
      // Se il campo del codice prodotto è vuoto, resetta la descrizione del prodotto
      setProductDescription("");
    } else {
      // Chiamata API quando l'utente ha finito di scrivere nell'input
      getMaterial(value)
        .then((res) => {
          const nameMaterial = res.material_name;
          const categoryMaterial = res.categories;
          const um = res.um;
          const description = `${nameMaterial}\n${categoryMaterial}\n${um}`;
          console.log(res);
          setProductDescription(description); // Imposta la descrizione del prodotto
        })
        .catch((error) => {
          console.log(error);
          setProductDescription("Codice prodotto errato");
        });
    }
  }

  function sendData(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("ID inserito:", productId);
    console.log("Qty:", qty);
    // const selectedProject = JSON.parse(
    //   localStorage.getItem("selectedProject") || "{}"
    // );
    // const projectId = selectedProject.id;
    setProductId("");
    setProductDescription("");
    setQty("");
  }

  function goBack() {
    const selectedProject = JSON.parse(
      localStorage.getItem("selectedProject") || "{}"
    );
    const projectId = selectedProject.id;
    localStorage.removeItem("selectedAction");
    navigate(`/activity/${projectId}`);
  }

  return (
    <div className="flex w-full">
      <Aside />
      <div className="w-3/4">
        <h2 className="text-2xl font-medium text-center py-7">
          Scarico Materiali :
        </h2>
        <form className="w-2/4  m-auto" action="">
          <div className=" flex items-center justify-between">
            <label className="pr-5 text-xl">Inserisci codice prodotto:</label>
            <input
              className="border border-[#172842] py-4 rounded-2xl text-center"
              type="text"
              value={productId}
              onChange={handleProductIdChange}
            />
          </div>
          <div className=" my-10 flex flex-col justify-center ">
            <label className="pr-5 text-xl">Descrizione prodotto:</label>
            <textarea
              className="w-full h-36 resize-none border border-[#172842] p-4 rounded-2xl "
              disabled
              value={productDescription}
            />
          </div>
          <div className=" flex justify-between items-center">
            <label className="pr-5 text-xl">QTY:</label>
            <input
              className="border border-[#172842] py-4 rounded-2xl text-center"
              type="number"
              value={qty === "" ? "" : String(qty)}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>
        </form>
        <div className="flex justify-around mt-9">
          <Button handleClick={() => goBack()} />
          <button
            className="bg-red-500 px-24 py-6 text-white rounded-xl shadow-2xl "
            type="submit"
            onClick={sendData}
          >
            Scarica Materiali
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomMaterials;
