import { Link } from "react-router-dom";

export interface WorkerCardProps {
  name: string;
  img: string;
  id: string;
}

const WorkerCard = (props: WorkerCardProps) => {
  return (
    <Link to={`/project/${props.id}`} className="max-w-xs shadow-2xl ">
      <img className=" rounded-t-xl" src={props.img} alt="" />

      <button type="button" className="btn primary  w-full p-16 rounded-b-xl">
        {props.name}
        <span className="ml-2">
          <i className="fa fa-arrow-circle-right"></i>
        </span>
      </button>
    </Link>
  );
};

export default WorkerCard;
