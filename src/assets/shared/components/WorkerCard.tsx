export interface WorkerCardProps {
  name: string;
  img: string;
}

const WorkerCard = (props: WorkerCardProps) => {
  return (
    <div className="max-w-xs shadow-2xl border rounded-xl">
      <img
        className="h-full w-full border rounded-t-xl"
        src={props.img}
        alt=""
      />

      <button
        type="button"
        className="btn primary w-full h-16 border rounded-b-xl"
      >
        {props.name}
        <span className="ml-5">
          <i className="fa fa-arrow-circle-right"></i>
        </span>
      </button>
    </div>
  );
};

export default WorkerCard;
