import { Link } from "react-router-dom";
import { EmployeeImg } from "../../../model/employeeImg.ts";

export interface WorkerCardProps {
  name: string;
  img: string;
  id: string;
  handleClick: (id: string, employee: Partial<EmployeeImg>) => void;
}

const WorkerCard = (props: WorkerCardProps) => {
  const handleClick = () => {
    props.handleClick(props.id, {
      complete_name: props.name,
      icon: props.img,
      id: props.id,
    });
  };

  return (
    <Link to={`/project/${props.id}`} className="max-w-xs shadow-2xl">
      <img className="rounded-t-xl" src={props.img} alt="" />

      <button
        type="button"
        className="btn primary w-full p-16 rounded-b-xl"
        onClick={handleClick}
      >
        {props.name}
        <span className="ml-2">
          <i className="fa fa-arrow-circle-right"></i>
        </span>
      </button>
    </Link>
  );
};

export default WorkerCard;
