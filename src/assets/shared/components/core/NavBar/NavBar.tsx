import logo from "../../../../image/LogoComepre.png";
import DateTime from "./components/DateTime.tsx";

const NavBar = () => {
  return (
    <div className="flex justify-between h-16 p-16 items-center w-full bg-[#172842] rounded-b-3xl">
      <div>
        <img className="h-28" src={logo} alt="" />{" "}
      </div>
      <div>
        <DateTime />
      </div>
    </div>
  );
};

export default NavBar;
