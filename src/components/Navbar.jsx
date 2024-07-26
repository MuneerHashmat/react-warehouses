import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Link to={"/"}>
      <div className="px-5 sm:px-10 py-5 shadow-md bg-white w-full z-10">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-[25px]" />
          <h1 className=" text-blue-500 text-xl font-semibold">StoreEasy</h1>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
