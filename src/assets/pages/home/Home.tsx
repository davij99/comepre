import WorkerCard from "../../shared/components/WorkerCard.tsx";

const Home = () => {
  return (
    <>
      <h1 className="title text-center font-bold text-3xl">
        Selezionare dipendente
      </h1>
      <div className="page border border-blue-400">
        <WorkerCard />
      </div>
    </>
  );
};

export default Home;
