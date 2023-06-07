import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <div className=" w-1/4 min-h-[70vh] border-r-[3px] px-8 border-solid   border-[#172842]">
      <NavLink to={"/home"} className="flex items-center pl-1">  <i className="fa fa-arrow-circle-left"></i>torna indietro 
      </NavLink>
    </div>
  );
};

export default Aside;
