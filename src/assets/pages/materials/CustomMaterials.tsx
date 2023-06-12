import Aside from "../../shared/components/core/Aside";

const CustomMaterials = () => {
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
          />
        </div>
        <div className=" my-10 flex flex-col justify-center ">
          <label className="pr-5 text-xl">Descrizione prodotto:</label>
          <textarea
            className="w-full h-36 resize-none border border-[#172842] p-4 rounded-2xl "
            disabled
            value="prova"
          />
        </div>
        <div className=" flex justify-between items-center">
          <label className="pr-5 text-xl">QTY:</label>
          <input
            className="border border-[#172842] py-4 rounded-2xl text-center"
            type="text"
          />
        </div>


        </form>
      </div>
    </div>
  );
};

export default CustomMaterials;
