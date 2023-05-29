import { getCurrentDate } from "./currentDate.tsx";
import logo from "../../../../image/LogoComepre.png";

const NavBar = () => {
  const currentDate = getCurrentDate("/");
  return (
    <div className="flex justify-between p-24 items-center w-full bg-[#172842] h-36 rounded-b-3xl">
      <div>
        <img className="h-28" src={logo} alt="" />{" "}
      </div>
      <div>
        <span className="font-bold text-3xl text-white">{currentDate}</span>
      </div>
    </div>
  );
};

export default NavBar;
